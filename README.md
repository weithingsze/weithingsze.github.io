# Your website — how it works and how to update it

## The short version

**All your content lives in `data.js`.** Talks, teaching, publications, books,
cities, your email address — all of it. To update the site, you edit that one
file. You never touch the HTML.

---

## Files in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `data.js` | **All your content** | **Yes — this is the one** |
| `style.css` | Colours and fonts | Only for design changes |
| `render.js` | Turns data into pages | No |
| `index.html` | Home page | Rarely |
| `publications.html`, `talks.html`, `teaching.html`, `awards.html`, `community.html`, `cities.html`, `bio.html` | Page shells | Rarely |
| `editor.html` | Visual editor — works locally or hosted | Use it, don't edit it |
| `preview.png` | Image shown when your link is shared | Regenerate if your title changes |
| `headshot.jpg` | Your portrait — used on the home and bio pages | Replace to update |

---

## Two ways to update your site

### 1. Ask in chat
Say what you want changed and you'll get updated files back. Best for anything
structural — new pages, layout, wording you want a second opinion on.

### 2. Use the editor yourself
`editor.html` gives you forms instead of JavaScript. It works two ways:

**On your computer** — keep `editor.html` next to `data.js` and double-click it.

**From your live site** — upload `editor.html` with everything else, then visit
`weithingsze.github.io/editor.html` from any device, including your phone.

Either way the flow is the same:

1. Pick a tab: Books, Cities, Community, Talks, Lectures, Awards, Publications,
   Courses, Education, Languages, Bio kit, or Contact & links
2. Fill in the form, click Add
3. Click **Download data.js**
4. Upload that file to your GitHub repository — your site updates in a minute

**Pinning cities is the best bit** — open the Cities tab and *click the map*
where the city is. Coordinates fill in automatically, and existing cities show
as faded dots. No lookup needed.

You can reorder entries with ↑ and delete them with Remove. The box at the
bottom shows the exact file you're about to download.

**A note on hosting the editor:** it can't change your live site by itself — it
only produces a file you then upload. So putting it online is safe. It isn't
linked from any page, but treat the address as unlisted rather than secret.

---

## Adding content — the manual way

You can still edit `data.js` by hand if you prefer. Open it on GitHub, click the
pencil icon, and add a block to the right list:

```js
{
  title: "Personalising dietary interventions with generative AI",
  event: "Japan Association for Medical Informatics Annual Conference",
  city: "Osaka, Japan",
  month: "Nov",
  year: 2026,
  kind: "conference",   // or "invited" or "seminar"
},
```

Then commit. Watch for missing commas — that's the one thing that breaks a page.
If a page goes blank after an edit, undo the commit on GitHub and try again.

**Same pattern for everything else:** `lectures:` for teaching,
`publications:` for papers, `cities:` for travel, `awards:` for honours.

---

## Can it update automatically?

Partly — and it's worth being clear about which parts.

**Publications: yes, optionally.** Nothing else on the internet knows about your
talks or lectures, but your publications *are* indexed in public databases. In
`data.js` you'll find:

```js
autoPublications: {
  enabled: false,
  orcidId: "0000-0000-0000-0000"
},
```

**This is already switched on** for ORCID 0000-0003-1054-6886. When the page
loads it reads your ORCID record, finds anything not already in your manual
list, and fills in the author details from Crossref.

What this means in practice: **whatever is in your ORCID record appears on your
site.** If publications are missing from the page, add them to ORCID and they
show up — no editing needed here. That is the closest thing to automatic
updating this site has.

Two caveats worth knowing. Auto-added entries can't be marked as first-author,
because ORCID doesn't record that. And Crossref author lists occasionally need
tidying. If an auto-added paper matters to you, copy it into the
`publications` list in `data.js` and it will be formatted exactly like the
others. Your manual list always shows regardless — the check only *adds*.

**Talks, teaching, books, cities: no.** There's no public database of talks
you've given. This is exactly why `data.js` exists — if it can't be automatic,
it should at least be a 30-second edit.

---

## Publishing (first time)

1. Create a GitHub account with the username **weithingsze**.
2. Create a repository named exactly `weithingsze.github.io`, set to **Public**
3. Upload every file in this folder (including `editor.html` if you want to edit from your phone)
4. Wait 1–2 minutes, then visit `https://weithingsze.github.io`

To keep it offline while you work, make the repository **Private** — GitHub
Pages won't publish it on a free account. Switch to Public when you're ready.

## Previewing before you publish

Open `index.html` in your browser by double-clicking it. Everything works
locally exactly as it will live, because there's no build step.

---

## One-time setup: social preview cards

When someone shares your site on LinkedIn, Slack, or WhatsApp, it shows a card
with your name, title, and a preview image instead of a bare link.

**Already done for you.** Every page points at `https://weithingsze.github.io`.
If you later move to a custom domain, search and replace `weithingsze.github.io`
across the HTML files.

To check it worked after publishing, paste your URL into
LinkedIn's Post Inspector (linkedin.com/post-inspector). If you change the
preview image later, run the inspector again — LinkedIn caches aggressively.

---

## Before you go live, replace:

- [x] ~~`email` in `data.js`~~ — done (weithing@gmail.com)
- [x] ~~LinkedIn link~~ — done
- [x] ~~ORCID and Google Scholar links~~ — done
- [ ] `github` link in `data.js` — blank, so it doesn't appear. Add it if you want it.
- [ ] `[Add talk title]` in the `talks:` list (4 of them)
- [x] ~~Add `headshot.jpg`~~ — done

**Note on your CV:** the site has no CV link by design. Don't put `cv.pdf` in the
repository either — anything in a public GitHub repo can be downloaded by anyone
who guesses the URL, linked or not.
- [ ] Review the three bios on `bio.html` — I drafted them, they should sound like you
- [x] ~~Delete the yellow banner from `talks.html`~~ — done
