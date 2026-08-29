/* ============================================================================
   Page builder. You should not need to edit this file — all content lives
   in data.js. This just turns that data into the pages.
   ========================================================================== */
(function () {
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) {
    return String(t == null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  /* Bold the user's own name wherever it appears in an author string */
  function markSelf(authors) {
    return esc(authors).replace(/(Sze WT)/g, '<strong>$1</strong>');
  }

  function byYearDesc(a, b) { return (b.year || 0) - (a.year || 0); }

  /* Group a list into year headings */
  function groupByYear(items) {
    var out = {}, years = [];
    items.slice().sort(byYearDesc).forEach(function (it) {
      var y = it.year || 'Undated';
      if (!out[y]) { out[y] = []; years.push(y); }
      out[y].push(it);
    });
    return { years: years, map: out };
  }

  /* ── Shared bits: nav highlight, email, footer year ───────────────────── */
  function wireCommon() {
    var page = document.body.getAttribute('data-page');
    Array.prototype.forEach.call(document.querySelectorAll('nav a'), function (a) {
      if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-email]'), function (el) {
      if (!S.email) return;
      el.textContent = S.email;
      el.setAttribute('href', 'mailto:' + S.email);
    });
    var links = { scholar: S.scholar, orcid: S.orcid, github: S.github, linkedin: S.linkedin };
    Object.keys(links).forEach(function (k) {
      var el = document.querySelector('[data-link="' + k + '"]');
      if (!el) return;
      if (links[k]) {
        el.setAttribute('href', links[k]);
      } else {
        // No URL set — remove the link rather than leave a dead one
        var row = el.closest('li') || el;
        if (row.parentNode) row.parentNode.removeChild(row);
      }
    });
  }

  /* ── Publications ─────────────────────────────────────────────────────── */
  function pubHTML(p) {
    var title = p.doi
      ? '<a href="https://doi.org/' + esc(p.doi) + '">' + esc(p.title) + '</a>'
      : esc(p.title);
    var chips = [];
    if (p.first) chips.push('First author');
    (p.tags || []).forEach(function (t) { chips.push(t); });
    if (p.auto) chips.push('via ORCID');
    return '<div class="pub">' +
      '<p class="title">' + title + '</p>' +
      '<p class="authors">' + markSelf(p.authors) + '</p>' +
      '<p class="venue"><em>' + esc(p.journal) + '</em>' +
        (p.year ? '. ' + esc(p.year) : '') +
        (p.detail ? ';' + esc(p.detail) : '') + '.</p>' +
      (chips.length
        ? '<p class="chips">' + chips.map(function (c) {
            return '<span class="tag">' + esc(c) + '</span>'; }).join('') + '</p>'
        : '') +
      '</div>';
  }

  function renderPublications(list, target) {
    var g = groupByYear(list);
    target.innerHTML = g.years.map(function (y) {
      return '<p class="year">' + esc(y) + '</p>' +
             g.map[y].map(pubHTML).join('');
    }).join('');
  }

  /* Optional: pull anything missing straight from the ORCID record.
     Reads ORCID first (you control what's in it), then asks Crossref for the
     author list of each new DOI. Fails silently — your manual list always shows. */
  function tryAutoPublications(list, target) {
    var cfg = S.autoPublications || {};
    if (!cfg.enabled || !cfg.orcidId || cfg.orcidId.indexOf('0000-0000') === 0) return;

    var status = $('pub-status');
    var say = function (t) { if (status) status.textContent = t || ''; };
    say('Checking ORCID for newer publications\u2026');

    var have = {};
    list.forEach(function (p) { if (p.doi) have[p.doi.toLowerCase().trim()] = true; });

    var norm = function (t) {
      return String(t || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);
    };
    var haveTitles = {};
    list.forEach(function (p) { haveTitles[norm(p.title)] = true; });

    var initials = function (given) {
      return String(given || '').split(/[\s\-]+/).filter(Boolean)
        .map(function (n) { return n.charAt(0).toUpperCase(); }).join('');
    };

    /* Ask Crossref for full metadata on one DOI */
    function enrich(doi, fallback) {
      return fetch('https://api.crossref.org/works/' + encodeURIComponent(doi))
        .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
        .then(function (j) {
          var m = j.message || {};
          return {
            title: (m.title && m.title[0]) || fallback.title,
            authors: (m.author || []).map(function (a) {
              return (a.family || a.name || '') + ' ' + initials(a.given);
            }).join(', '),
            journal: (m['container-title'] && m['container-title'][0]) || fallback.journal,
            year: (m.issued && m.issued['date-parts'] && m.issued['date-parts'][0])
                  ? m.issued['date-parts'][0][0] : fallback.year,
            doi: doi,
            auto: true
          };
        })
        .catch(function () { return Object.assign({ doi: doi, auto: true }, fallback); });
    }

    fetch('https://pub.orcid.org/v3.0/' + encodeURIComponent(cfg.orcidId) + '/works',
          { headers: { Accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (j) {
        var groups = (j.group || []);
        var candidates = [];

        groups.forEach(function (g) {
          var w = (g['work-summary'] || [])[0];
          if (!w) return;
          var doi = null;
          var ids = (w['external-ids'] && w['external-ids']['external-id']) || [];
          ids.forEach(function (id) {
            if (String(id['external-id-type']).toLowerCase() === 'doi') {
              doi = String(id['external-id-value']).replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
            }
          });
          var title = (w.title && w.title.title && w.title.title.value) || '';
          var journal = (w['journal-title'] && w['journal-title'].value) || '';
          var year = (w['publication-date'] && w['publication-date'].year &&
                      w['publication-date'].year.value) || null;

          if (!title) return;
          if (doi && have[doi.toLowerCase().trim()]) return;   // already listed
          if (haveTitles[norm(title)]) return;                 // already listed, no DOI
          candidates.push({ doi: doi, title: title, journal: journal, year: year ? Number(year) : null });
        });

        if (!candidates.length) { say(''); return; }
        say('Found ' + candidates.length + ' more on ORCID \u2014 loading details\u2026');

        return Promise.all(candidates.slice(0, 40).map(function (c) {
          return c.doi
            ? enrich(c.doi, c)
            : Promise.resolve({ title: c.title, journal: c.journal, year: c.year, auto: true });
        })).then(function (found) {
          renderPublications(list.concat(found), target);
          say(found.length + ' additional publication' + (found.length === 1 ? '' : 's') +
              ' loaded from ORCID. Author lists come from Crossref and may need tidying \u2014 ' +
              'move any you want to keep into data.js.');
        });
      })
      .catch(function () { say(''); });
  }

  /* ── Talks ────────────────────────────────────────────────────────────── */
  var KIND_LABEL = {
    keynote: 'Keynote',
    invited: 'Invited seminar',
    conference: 'Conference presentation',
    seminar: 'Seminar',
  };

  function talkHTML(t) {
    var chips = '<span class="chip' + (t.kind === 'keynote' ? ' keynote' : t.kind === 'invited' ? ' invited' : '') + '">' +
                esc(t.format || KIND_LABEL[t.kind] || 'Presentation') + '</span>' +
                (t.intl ? '<span class="chip intl">International</span>' : '');
    return '<div class="entry' + (t.upcoming ? ' is-upcoming' : '') + '">' +
      '<div class="when"><span class="mo">' + esc(t.month || '') + '</span>' + esc(t.year || '') + '</div>' +
      '<div>' +
        '<h3>' + esc(t.title) + '</h3>' +
        '<p class="venue">' + esc(t.event) +
          (t.city ? ' · <span class="where">' + esc(t.city) + '</span>' : '') + '</p>' +
        (t.desc ? '<p class="desc">' + esc(t.desc) + '</p>' : '') +
        '<p class="chips">' + chips + '</p>' +
      '</div></div>';
  }

  /* Upcoming first in its own block, then everything delivered, by year. */
  function renderTalks(list, target) {
    var MON = { Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11 };
    var soonest = function (a, b) {
      if ((a.year || 0) !== (b.year || 0)) return (a.year || 0) - (b.year || 0);
      return (MON[a.month] || 0) - (MON[b.month] || 0);
    };

    var upcoming = list.filter(function (t) { return t.upcoming; }).sort(soonest);
    var past = list.filter(function (t) { return !t.upcoming; })
                   .sort(function (a, b) { return -soonest(a, b); });

    var html = '';
    if (upcoming.length) {
      html += '<p class="year year-upcoming">Upcoming</p>' + upcoming.map(talkHTML).join('');
    }
    var g = groupByYear(past);
    html += g.years.map(function (y) {
      return '<p class="year">' + esc(y) + '</p>' + g.map[y].map(talkHTML).join('');
    }).join('');
    target.innerHTML = html;
  }

  /* ── Teaching ─────────────────────────────────────────────────────────── */
  function renderCourses(list, target) {
    target.innerHTML = list.map(function (c) {
      return '<article class="listing">' +
        '<h3>' + esc(c.name) + '</h3>' +
        '<p class="listing-meta">' + esc(c.programme) +
          (c.years ? ' · ' + esc(c.years) : '') + '<br>' + esc(c.institution) + '</p>' +
        (c.summary ? '<p class="listing-body">' + esc(c.summary) + '</p>' : '') +
        '</article>';
    }).join('');
  }

  function renderLectures(list, target) {
    var g = groupByYear(list);
    target.innerHTML = g.years.map(function (y) {
      return '<p class="year">' + esc(y) + '</p>' + g.map[y].map(function (l) {
        var topics = (l.topics || []).map(function (t) {
          return '<span class="chip">' + esc(t) + '</span>'; }).join('');
        return '<div class="entry">' +
          '<div class="when"><span class="mo">' + esc(l.term || '') + '</span>' + esc(l.year || '') + '</div>' +
          '<div>' +
            '<h3>' + esc(l.title) + '</h3>' +
            (l.course ? '<p class="venue">' + esc(l.course) + '</p>' : '') +
            (l.note ? '<p class="desc">' + esc(l.note) + '</p>' : '') +
            (topics ? '<p class="chips">' + topics + '</p>' : '') +
          '</div></div>';
      }).join('');
    }).join('');
  }

  /* ── Awards ───────────────────────────────────────────────────────────── */
  function renderAwards(list, target) {
    target.innerHTML = list.slice().sort(byYearDesc).map(function (a) {
      var tags = (a.tags || []).map(function (t) {
        return '<span class="chip">' + esc(t) + '</span>'; }).join('');
      return '<article class="honour">' +
        '<div class="honour-body">' +
          '<h3>' + esc(a.name) + '</h3>' +
          '<p class="honour-org">' + esc(a.body_org || '') +
            (a.place ? ' · <span class="where">' + esc(a.place) + '</span>' : '') + '</p>' +
          (a.blurb ? '<p class="honour-blurb">' + esc(a.blurb) + '</p>' : '') +
          (a.paper
            ? '<div class="awarded-for"><span class="awarded-lbl">Awarded for</span>' +
              '<p class="awarded-title">' +
                (a.paperDoi
                  ? '<a href="https://doi.org/' + esc(a.paperDoi) + '">' + esc(a.paper) + '</a>'
                  : esc(a.paper)) + '</p>' +
              (a.paperVenue ? '<p class="awarded-venue"><em>' + esc(a.paperVenue) + '</em></p>' : '') +
              '</div>'
            : '') +
          (tags ? '<p class="chips">' + tags + '</p>' : '') +
        '</div></article>';
    }).join('');
  }

  /* ── Community ────────────────────────────────────────────────────────── */
  function renderCommunity(list, target) {
    target.innerHTML = list.map(function (c) {
      var tags = (c.tags || []).map(function (t) {
        return '<span class="chip">' + esc(t) + '</span>'; }).join('');
      var name = c.link
        ? '<a href="' + esc(c.link) + '">' + esc(c.name) + '</a>'
        : esc(c.name);
      var meta = [c.role, c.period, c.location].filter(Boolean).map(esc).join(' · ');
      return '<article class="listing">' +
        '<h3>' + name + '</h3>' +
        (meta ? '<p class="listing-meta">' + meta + '</p>' : '') +
        (c.blurb ? '<p class="listing-body">' + esc(c.blurb) + '</p>' : '') +
        (tags ? '<p class="chips">' + tags + '</p>' : '') +
        '</article>';
    }).join('');
  }

  /* ── Education ────────────────────────────────────────────────────────── */
  function renderEducation(list, target) {
    target.innerHTML = list.map(function (e) {
      return '<li class="edu-item">' +
        '<strong>' + esc(e.degree) + '</strong>' +
        '<span class="edu-inst">' + esc(e.institution) +
          (e.place ? ' · ' + esc(e.place) : '') +
          (e.years ? ' <span class="edu-years">' + esc(e.years) + '</span>' : '') +
        '</span>' +
        '</li>';
    }).join('');
  }

  /* ── Languages ────────────────────────────────────────────────────────── */
  function renderLanguages(list, target) {
    target.innerHTML = list.map(function (l) {
      return '<li class="lang-item">' +
        '<span class="lang-name">' + esc(l.name) + '</span>' +
        '<span class="lang-level">' + esc(l.level || '') + '</span>' +
        '</li>';
    }).join('');
  }

  /* ── Convening & supervision ──────────────────────────────────────────── */
  function renderService(list, target) {
    target.innerHTML = list.map(function (i) {
      return '<li class="svc-item">' +
        '<span class="svc-title">' + esc(i.title) + '</span>' +
        '<span class="svc-detail">' + esc(i.detail || '') + '</span>' +
        '</li>';
    }).join('');
  }

  /* ── Boot: run whatever this page needs ───────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    wireCommon();

    var pubs = $('pub-list');
    if (pubs && S.publications) {
      renderPublications(S.publications, pubs);
      tryAutoPublications(S.publications, pubs);
    }

    var recent = $('pub-recent');
    if (recent && S.publications) {
      recent.innerHTML = S.publications.slice()
        .sort(byYearDesc).filter(function (p) { return p.first; })
        .slice(0, 3).map(pubHTML).join('');
    }

    var talks = $('talk-list');
    if (talks && S.talks) {
      renderTalks(S.talks, talks);
      var delivered = S.talks.filter(function (t) { return !t.upcoming; });
      var soon = S.talks.filter(function (t) { return t.upcoming; });
      if ($('n-talks')) $('n-talks').textContent = delivered.length;
      if ($('n-talk-countries')) {
        $('n-talk-countries').textContent = new Set(S.talks.map(function (t) {
          return (t.city || '').split(',').pop().trim(); }).filter(Boolean)).size;
      }
      var up = $('n-upcoming');
      if (up) {
        if (soon.length) { up.textContent = soon.length; }
        else { var box = up.closest('.counter'); if (box && box.parentNode) box.parentNode.removeChild(box); }
      }
    }

    if ($('edu-list') && S.education) renderEducation(S.education, $('edu-list'));
    if ($('training-list') && S.training) renderService(S.training, $('training-list'));
    if ($('lang-list') && S.languages) renderLanguages(S.languages, $('lang-list'));

    if ($('award-list') && S.awards) {
      renderAwards(S.awards, $('award-list'));
      if ($('n-awards')) $('n-awards').textContent = S.awards.length;
    }
    if ($('community-intro') && S.communityIntro) $('community-intro').textContent = S.communityIntro;
    if ($('community-list') && S.community) renderCommunity(S.community, $('community-list'));

    if ($('course-list') && S.courses) renderCourses(S.courses, $('course-list'));
    if ($('service-list') && S.service) renderService(S.service, $('service-list'));

    if ($('lecture-list') && S.lectures) {
      renderLectures(S.lectures, $('lecture-list'));
      if ($('n-lectures')) $('n-lectures').textContent = S.lectures.length;
    }
  });

  window.SiteRender = { esc: esc, groupByYear: groupByYear, byYearDesc: byYearDesc };
})();
