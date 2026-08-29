/* ============================================================================
   YOUR SITE CONTENT — the only file you normally need to edit.
   ----------------------------------------------------------------------------
   Easiest way to change anything: open editor.html on your computer, use the
   forms, and download a fresh copy of this file.

   If you edit by hand: text goes in "double quotes", every entry ends with a
   comma. A missing comma or brace will blank the page — undo on GitHub and
   try again.
   ========================================================================== */

window.SITE = {

  /* ── Your details ── leave a link as "" to hide it on the site ── */
  email: "weithing@gmail.com",
  linkedin: "https://www.linkedin.com/in/weithingsze/",
  scholar: "https://scholar.google.com/citations?user=NYyczMIAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Wei-Thing-Sze-3",
  emailWork: "weithing.sze@iii.u-tokyo.ac.jp",
  orcid: "https://orcid.org/0000-0003-1054-6886",
  github: "",

  /* ── Optional: pull anything missing straight from your ORCID record ── */
  autoPublications: {
    enabled: true,
    orcidId: "0000-0003-1054-6886"
  },

  /* ── SPEAKER BIO KIT ── shown on bio.html ── */
  bio: {
    headshot: "headshot.jpg",
    pronunciation: "",
    long: "Wei Thing Sze is an Assistant Professor at The University of Tokyo, holding appointments in the Interfaculty Initiative in Information Studies and in the Department of Health and Behavioral Informatics &amp; Therapeutics (HABIT), Graduate School of Medicine. She leads clinical studies on digital health and lifestyle interventions for people living with type 2 diabetes, spanning diet, physical activity, and behavior change, and teaches digital health and public health informatics in the Master of Public Health programme. Her interests centre on patient-centred healthcare and user-centred design in digital health, and she works across a range of qualitative and quantitative methods. She trained as a clinical pharmacist and practised in Ministry of Health Malaysia hospitals, with experience in medication management and consultation, a pharmacist-run medication therapy adherence clinic, and Medication Awareness community events. She was a <a href=\"https://www.chevening.org/\">Chevening Scholar</a>, awarded as part of her MSc in Clinical Pharmacy, International Practice and Policy at University College London, and holds a PhD in Health Sciences with a major in health informatics from The University of Tokyo, completed as a Japanese Government (MEXT) Scholar.",
  },

  /* ── EDUCATION ── */
  education: [
    {
      degree: "PhD in Health Sciences (Health Informatics)",
      institution: "The University of Tokyo",
      place: "Japan",
    },
    {
      degree: "MSc Clinical Pharmacy, International Practice and Policy",
      institution: "University College London",
      place: "United Kingdom",
    },
    {
      degree: "Bachelor of Pharmacy (Hons)",
      institution: "International Medical University",
      place: "Malaysia",
    },
  ],

  /* ── LANGUAGES ──
     level is free text — "Fluent", "Native", "Conversational", "Reading only",
     whatever fits. Reorder by dragging lines around; the site keeps your order. */
  languages: [
    { name: "English",          level: "Fluent" },
    { name: "Mandarin Chinese", level: "Fluent" },
    { name: "Cantonese",        level: "Fluent" },
    { name: "Malay",            level: "Fluent" },
    { name: "Japanese",         level: "Conversational" },
  ],

  /* ── ADDITIONAL TRAINING ── shown under Education on the home page.
     Keep each to one line: what you did, not what the course covered. */
  training: [
    {
      title: "Design thinking",
      detail: "Completed coursework during my PhD with Prof. Miles Pennington, The University of Tokyo — worked through the full design thinking process to develop an environmentally friendly personal transport concept.",
    },
    {
      title: "Strategic foresight",
      detail: "Completed coursework during my PhD on generative AI and media; used futures methods to develop a scenario on personalized, human-like AI assistants for health providers.",
    },
    {
      title: "Qualitative analysis",
      detail: "Gathering and Analysing Qualitative Data — Institute for Social Science Research, The University of Queensland.",
    },
  ],

  /* ── PUBLICATIONS ── first: true marks a first-author paper ── */
  publications: [
    {
      title: "FiberMore: A Generative AI-Enabled Behavior Change Intervention to Improve Dietary Fiber Intake and Glycemic Management in Individuals with Type 2 Diabetes",
      authors: "Sze WT, Lane D, Nakada R, Waki K",
      journal: "Diabetes",
      year: 2026,
      detail: "75(Suppl 1):1286-OR",
      doi: "10.2337/db26-1286-OR",
      first: true,
      featured: true,
      tags: ["Conference abstract"],
    },
    {
      title: "Efficacy of FiberMore, an AI-Based mHealth Intervention to Increase Dietary Fiber Intake Among Type 2 Diabetes Patients: Protocol for a Pilot Randomized Controlled Trial",
      authors: "Sze WT, Waki K, Lane D, Hasegawa K, Nakada R, Iwata S, Ji Y, Isogawa A, Aoyama T, Miyake K, Kadowaki Y, Kawaguchi T, Matsuo Y, Miyoshi K, Ishibashi N, Toda G, Kameda S, Igarashi M, Tanaka M, Yamauchi T, Nangaku M",
      journal: "JMIR Research Protocols",
      year: 2025,
      detail: "14:e78019",
      doi: "10.2196/78019",
      first: true,
      featured: true,
      tags: ["RCT protocol"],
    },
    {
      title: "What Predicts Intention to Increase Dietary Fiber Intake among Patients with Type 2 Diabetes? A Survey Based on the Theory of Planned Behavior",
      authors: "Sze WT, Waki K, Lane D, Aoyama T, Miyake K, Kadowaki Y, Kawaguchi T, Matsuo Y, Sakai Y, Yamauchi T, Nangaku M, Ohe K",
      journal: "Diabetes",
      year: 2025,
      detail: "74(Suppl 1):689-P",
      doi: "10.2337/db25-689-P",
      first: true,
      tags: ["Conference abstract"],
    },
    {
      title: "Dietary Fiber Estimate of DialBetesPlus App Users: Secondary Analysis of Data From a Randomized Controlled Trial",
      authors: "Sze WT, Waki K, Nakada R, Yamauchi T, Nangaku M, Ohe K",
      journal: "JMIR Formative Research",
      year: 2025,
      detail: "9:e69340",
      doi: "10.2196/69340",
      first: true,
    },
    {
      title: "Effect of Step Count Measurement on Glycemic Control: Secondary Analysis of a Randomized Controlled Trial",
      authors: "Saito R, Sze WT, Waki K, Enomoto S, Yamauchi T, Nangaku M, Ohe K",
      journal: "Studies in Health Technology and Informatics",
      year: 2024,
      detail: "310:549–553",
    },
    {
      title: "StepAdd: A personalized mHealth intervention based on social cognitive theory to increase physical activity among type 2 diabetes patients",
      authors: "Sze WT, Waki K, Enomoto S, Nagata Y, Nangaku M, Yamauchi T, Ohe K",
      journal: "Journal of Biomedical Informatics",
      year: 2023,
      detail: "145:104481",
      doi: "10.1016/j.jbi.2023.104481",
      first: true,
      featured: true,
      tags: ["Award-winning"],
    },
    {
      title: "Perspectives and Needs of Malaysian Patients With Diabetes for a Mobile Health App Support on Self-Management of Diabetes: Qualitative Study",
      authors: "Sze WT, Kow SG",
      journal: "JMIR Diabetes",
      year: 2023,
      detail: "8:e40968",
      first: true,
    },
    {
      title: "Glycemic Control, Renal Progression, and Use of Telemedicine Phone Consultations Among Japanese Patients With Type 2 Diabetes Mellitus During the COVID-19 Pandemic: Retrospective Cohort Study",
      authors: "Sankoda A, Nagae Y, Waki K, Sze WT, Oba K, Mieno M, Nangaku M, Yamauchi T, Ohe K",
      journal: "JMIR Diabetes",
      year: 2023,
      detail: "8:e42607",
      doi: "10.2196/42607",
    },
    {
      title: "A literature review on the impact of COVID-19 pandemic towards patients living with chronic diseases",
      authors: "Sze WT, Huong SY, Oon SY, Zaharudie I, Sundaresen V",
      journal: "International Journal of Public Health Science",
      year: 2022,
      detail: "11(3):1018–1028",
      first: true,
    },
    {
      title: "Perception and attitude of telepharmacy implementation by Malaysian Community Pharmacists",
      authors: "Ng WL, Sze WT",
      journal: "Malaysian Journal of Medicine and Health Sciences",
      year: 2022,
      detail: "18(5)",
    },
    {
      title: "Barriers limiting access to healthcare among refugees or asylum seekers in Asia in the recent years: a scoping review",
      authors: "Liew ZY, Lim SY, Sha KH, Sze WT",
      journal: "Journal of Public Health and Development",
      year: 2022,
      detail: "20(1):218–231",
    },
    {
      title: "Knowledge, Attitude and Practice of Malaysian Private Hospital Pharmacists on Medication Review",
      authors: "Wong SL, Sze WT",
      journal: "Malaysian Journal of Pharmacy",
      year: 2021,
      detail: "7(2)",
    },
    {
      title: "Public's preferences in managing minor illness: a cross sectional survey in Malaysia",
      authors: "Tang JEH, Sze WT",
      journal: "Malaysian Journal of Public Health Medicine",
      year: 2021,
      detail: "21(3):60–70",
    },
    {
      title: "Association of air pollution and hospital admissions due to exacerbation of chronic obstructive pulmonary disease in Asia: A scoping review",
      authors: "Loong SM, Lim KW, Lim PX, Sze WT",
      journal: "Asia Pacific Journal of Health Sciences and Research",
      year: 2020,
      detail: "Vol. 2",
    },
    {
      title: "Patients' perception towards medicines-use review service in community pharmacy",
      authors: "Sze WT, Lim YF",
      journal: "Pharmacy Education",
      year: 2020,
      detail: "20(3):127",
      first: true,
    },
    {
      title: "Inpatients' Satisfaction Towards Information Received about Medicine",
      authors: "Sze WT, Pudney R, Wei L",
      journal: "European Journal of Hospital Pharmacy",
      year: 2018,
      detail: "published online 22 December 2018",
      first: true,
    },
    {
      title: "Impact of printed antimicrobial stewardship recommendations on early intravenous to oral antibiotics switch practice in district hospitals",
      authors: "Sze WT, Kong MC",
      journal: "Pharmacy Practice",
      year: 2018,
      detail: "16(2):855",
      first: true,
    },
    {
      title: "Self-Measured Bed-Time, Arising and Day Blood Pressure of Normotensive Young Male and Female Adults",
      authors: "Wai N, Sze WT, Ngiik L",
      journal: "International e-Journal of Science, Medicine and Education",
      year: 2010,
      detail: "5(1):31–33",
    },
  ],

  /* ── TEACHING: courses you convene ── */
  courses: [
    {
      name: "Public Health Informatics",
      programme: "Master of Public Health (MPH)",
      institution: "School of Public Health, Graduate School of Medicine, The University of Tokyo",
      years: "2026–present",
      summary: "Alongside lectures, I mentor students in practicals and workshops on digital health innovation.",
    },
  ],

  /* ── TEACHING: individual lectures delivered ── */
  lectures: [
    {
      title: "The Big Picture of Digital Health and Its Impact on Public Health",
      course: "Digital Health, MPH",
      year: 2026,
    },
    {
      title: "Medicine, Wearables, Life-Log Data, and UI/UX Design",
      course: "Digital Health, MPH",
      year: 2026,
    },
    {
      title: "Foundations of Behavior Change Theory in Digital Health Intervention",
      course: "Digital Health, MPH",
      year: 2026,
    },
    {
      title: "Evaluation, Evidence Generation, and Exercise Orientation",
      course: "Digital Health, MPH",
      year: 2026,
    },
  ],

  /* ── TALKS ── kind: conference | invited | seminar ── */
  talks: [
    {
      title: "A candidate baseline responder profile for a generative-AI-enabled dietary fiber intervention in type 2 diabetes",
      event: "Diabetes Technology Meeting (DTM) 2026",
      city: "Washington, DC, USA",
      month: "Oct",
      year: 2026,
      kind: "conference",
      intl: true,
      upcoming: true,
    },
    {
      title: "Digital Health Interventions for Type 2 Diabetes: Evidence from the FiberMore and StepAdd Randomized Controlled Trials",
      event: "Seminar, 22nd Century Medical & Research Center, The University of Tokyo Hospital",
      city: "Tokyo, Japan",
      month: "Jul",
      year: 2026,
      kind: "invited",
    },
    {
      title: "Digital Health Interventions for Type 2 Diabetes: Evidence from the FiberMore and StepAdd Randomized Controlled Trials",
      event: "DTx (Digital Therapeutics) Seminar, The University of Tokyo",
      city: "Tokyo, Japan",
      month: "Jul",
      year: 2026,
      kind: "invited",
    },
    {
      title: "FiberMore: A Generative AI–Enabled Behavior Change Intervention to Improve Dietary Fiber Intake and Glycemic Management in Individuals with Type 2 Diabetes",
      event: "86th Scientific Sessions, American Diabetes Association",
      city: "New Orleans, LA, USA",
      month: "Jun",
      year: 2026,
      kind: "conference",
      intl: true,
      format: "Oral presentation",
    },
    {
      title: "AI-based dietary support in type 2 diabetes",
      event: "Research seminar, Seoul National University",
      city: "Seoul, South Korea",
      month: "Feb",
      year: 2026,
      kind: "invited",
      intl: true,
      desc: "Seminar on my doctoral research, given as a visiting student.",
    },
    {
      title: "Advancing Cardiovascular Care: The Role of the Community Pharmacist",
      event: "National Conference, STIKES Notokusumo Yogyakarta",
      city: "Yogyakarta, Indonesia",
      month: "Feb",
      year: 2025,
      kind: "keynote",
      intl: true,
      format: "Keynote",
      desc: "Conference theme: Optimizing Cardiovascular Outcomes — Innovative Strategies for Control and Prevention.",
    },
    {
      title: "Preliminary Efficacy of a Generative AI–Enabled mHealth Intervention to Increase Dietary Fiber Intake in Individuals with Type 2 Diabetes",
      event: "26th Annual Diabetes Technology Meeting",
      city: "San Francisco, CA, USA",
      month: "Oct",
      year: 2025,
      kind: "conference",
      intl: true,
      format: "Poster presentation",
    },
    {
      title: "What Predicts Intention to Increase Dietary Fiber Intake among Patients with Type 2 Diabetes? A Survey Based on the Theory of Planned Behavior",
      event: "85th Scientific Sessions, American Diabetes Association",
      city: "Chicago, IL, USA",
      month: "Jun",
      year: 2025,
      kind: "conference",
      intl: true,
      format: "Poster presentation",
    },
    {
      title: "A pharmacist-assisted personalized mobile health intervention to promote physical activity among type 2 diabetes patients",
      event: "MEDINFO 2023 — 19th World Congress on Medical and Health Informatics",
      city: "Sydney, Australia",
      month: "Jul",
      year: 2023,
      kind: "conference",
      intl: true,
      format: "Oral presentation",
    },
  ],

  /* ── AWARDS & HONOURS ── */
  awards: [
    {
      name: "KAKENHI Grant-in-Aid for Research Activity Start-up — Principal Investigator",
      body_org: "Japan Society for the Promotion of Science (JSPS)",
      year: 2026,
      place: "Japan",
      blurb: "Competitive research funding supporting work on identifying individuals at risk of suboptimal response to AI-based dietary support interventions, and developing a personalized framework to guide intervention adaptation.",
      tags: ["Research funding"],
    },
    {
      name: "Academic Paper Award",
      body_org: "Japan Association of Medical Informatics (JAMI)",
      year: 2024,
      place: "Japan",
      paper: "StepAdd: A personalized mHealth intervention based on social cognitive theory to increase physical activity among type 2 diabetes patients",
      paperVenue: "Journal of Biomedical Informatics, 2023",
      paperDoi: "10.1016/j.jbi.2023.104481",
      tags: ["Research", "National"],
    },
    {
      name: "MEXT Scholarship",
      body_org: "Japanese Government (Monbukagakusho)",
      year: 2022,
      place: "Japan",
      tags: ["Doctoral funding"],
    },
    {
      name: "Outstanding Poster Award",
      body_org: "Malaysian Pharmacists Society, National Pharmacists Convention",
      year: 2021,
      place: "Malaysia",
      paper: "Knowledge, attitude, and practice among Malaysian Private Hospital Pharmacists towards Medication Review",
      tags: ["National"],
    },
    {
      name: "Institutional Level Research Grant",
      body_org: "SEGi University",
      year: 2019,
      place: "Malaysia",
      paper: "Investigating the Feasibility of Medicines Use Review Service in Private Health Institutions",
      tags: ["Principal investigator"],
    },
    {
      name: "Chevening Scholarship",
      body_org: "UK Foreign, Commonwealth and Development Office",
      year: 2016,
      place: "United Kingdom",
      tags: ["International"],
    },
    {
      name: "Pharmacy Innovation and Creativity Award (Third Place)",
      body_org: "Malaysia Pharmacy Innovation and Creativity Convention",
      year: 2016,
      place: "Malaysia",
      paper: "Administration and Dilution Quick Referral Tag for Intravenous Medications",
    },
  ],

  /* ── COMMUNITY & SERVICE ── */
  communityIntro: "I value community as much as I value my professional life, and I enjoy connecting people. Feel free to reach out if you are interested in getting connected through any of these community events while you are in Tokyo.",

  community: [
    {
      name: "ICA Tokyo",
      role: "Guest Experience Team · Reach Café",
      location: "Bunkyo-ku, Tokyo",
      blurb: "I volunteer on the Guest Experience Team and at Reach Café.",
      link: "https://icatokyo.com/",
      tags: ["Tokyo", "International community"],
    },
    {
      name: "Chi Alpha Japan",
      location: "Nakano, Tokyo",
      link: "https://www.chialphajapan.net/",
      tags: ["Tokyo"],
    },
    {
      name: "Tokyo Marunouchi Partnership Running Club",
      location: "Marunouchi, Tokyo",
      tags: ["Tokyo", "Running"],
    },
  ],

  /* ── CITIES ── negative lat = south, negative lng = west ──
     Add one by clicking the map in editor.html. */
  cities: [
    /* ── Asia ── */
    { name: "Tokyo",            country: "Japan",       region: "Asia", lat: 35.68, lng: 139.69, note: "Home since 2022" },
    { name: "Seoul",            country: "South Korea", region: "Asia", lat: 37.57, lng: 126.98, note: "Research seminar at Seoul National University" },
    { name: "Busan",            country: "South Korea", region: "Asia", lat: 35.18, lng: 129.08 },
    { name: "Jeju",             country: "South Korea", region: "Asia", lat: 33.50, lng: 126.53 },
    { name: "Beijing",          country: "China",       region: "Asia", lat: 39.90, lng: 116.41 },
    { name: "Shanghai",         country: "China",       region: "Asia", lat: 31.23, lng: 121.47 },
    { name: "Suzhou",           country: "China",       region: "Asia", lat: 31.30, lng: 120.59 },
    { name: "Nanjing",          country: "China",       region: "Asia", lat: 32.06, lng: 118.80 },
    { name: "Guangzhou",        country: "China",       region: "Asia", lat: 23.13, lng: 113.26 },
    { name: "Wuhan",            country: "China",       region: "Asia", lat: 30.59, lng: 114.30 },
    { name: "Yunnan",           country: "China",       region: "Asia", lat: 25.04, lng: 102.71 },
    { name: "Hong Kong",        country: "Hong Kong",   region: "Asia", lat: 22.32, lng: 114.17 },
    { name: "Macau",            country: "Macau",       region: "Asia", lat: 22.20, lng: 113.54 },
    { name: "Kuala Lumpur",     country: "Malaysia",    region: "Asia", lat: 3.14,  lng: 101.69, note: "Where I'm from" },
    { name: "Mukah",            country: "Malaysia",    region: "Asia", lat: 2.90,  lng: 112.09, note: "Led the hospital pharmacy department" },
    { name: "Chiang Mai",       country: "Thailand",    region: "Asia", lat: 18.79, lng: 98.99 },
    { name: "Chiang Rai",       country: "Thailand",    region: "Asia", lat: 19.91, lng: 99.84 },
    { name: "Bali",             country: "Indonesia",   region: "Asia", lat: -8.65, lng: 115.22 },
    { name: "Bandung",          country: "Indonesia",   region: "Asia", lat: -6.92, lng: 107.61 },
    { name: "Hanoi",            country: "Vietnam",     region: "Asia", lat: 21.03, lng: 105.85 },
    { name: "Ho Chi Minh City", country: "Vietnam",     region: "Asia", lat: 10.82, lng: 106.63 },
    { name: "Delhi",            country: "India",       region: "Asia", lat: 28.61, lng: 77.21 },
    { name: "Jaipur",           country: "India",       region: "Asia", lat: 26.92, lng: 75.79 },
    { name: "Jodhpur",          country: "India",       region: "Asia", lat: 26.24, lng: 73.02 },
    { name: "Kathmandu",        country: "Nepal",       region: "Asia", lat: 27.72, lng: 85.32 },
    { name: "Pokhara",          country: "Nepal",       region: "Asia", lat: 28.21, lng: 83.99 },
    { name: "Colombo",          country: "Sri Lanka",   region: "Asia", lat: 6.93,  lng: 79.86 },
    { name: "Sigiriya",         country: "Sri Lanka",   region: "Asia", lat: 7.96,  lng: 80.76 },
    { name: "Dubai",            country: "UAE",         region: "Asia", lat: 25.20, lng: 55.27 },
    { name: "Taipei",              country: "Taiwan",    region: "Asia", lat: 25.03, lng: 121.57 },
    { name: "Siem Reap",           country: "Cambodia",  region: "Asia", lat: 13.36, lng: 103.86 },
    { name: "Singapore",           country: "Singapore", region: "Asia", lat: 1.35,  lng: 103.82 },
    { name: "Bangkok",             country: "Thailand",  region: "Asia", lat: 13.76, lng: 100.50 },
    { name: "Jakarta",             country: "Indonesia", region: "Asia", lat: -6.21, lng: 106.85 },
    { name: "Vientiane",           country: "Laos",      region: "Asia", lat: 17.97, lng: 102.63 },
    { name: "Bandar Seri Begawan", country: "Brunei",    region: "Asia", lat: 4.89,  lng: 114.94 },

    /* ── Europe ── */
    { name: "London",     country: "UK", region: "Europe", lat: 51.51, lng: -0.13, note: "MSc at University College London" },
    { name: "Nottingham", country: "UK", region: "Europe", lat: 52.95, lng: -1.15, note: "Cultural exchange working holiday" },
    { name: "Edinburgh",  country: "UK", region: "Europe", lat: 55.95, lng: -3.19 },
    { name: "Newcastle",  country: "UK", region: "Europe", lat: 54.98, lng: -1.61 },
    { name: "York",       country: "UK", region: "Europe", lat: 53.96, lng: -1.08 },
    { name: "Paris",   country: "France", region: "Europe", lat: 48.86, lng: 2.35 },
    { name: "Gers",    country: "France", region: "Europe", lat: 43.65, lng: 0.59,  note: "Gascony countryside", note: "Cultural exchange working holiday" },
    { name: "Rome",    country: "Italy",  region: "Europe", lat: 41.90, lng: 12.50 },
    { name: "Umbria",  country: "Italy",  region: "Europe", lat: 43.11, lng: 12.39, note: "Cultural exchange working holiday" },
    { name: "Barcelona", country: "Spain", region: "Europe", lat: 41.39, lng: 2.17 },
    { name: "Amsterdam", country: "Netherlands", region: "Europe", lat: 52.37, lng: 4.90 },
    { name: "Brussels",  country: "Belgium",     region: "Europe", lat: 50.85, lng: 4.35 },
    { name: "Dublin",    country: "Ireland",     region: "Europe", lat: 53.35, lng: -6.26 },
    { name: "Bugøynes", country: "Norway",     region: "Europe", lat: 69.97, lng: 29.64, note: "Cultural exchange working holiday, Arctic Norway" },
    { name: "Luxembourg", country: "Luxembourg", region: "Europe", lat: 49.61, lng: 6.13 },

    /* ── Americas ── */
    { name: "New Orleans",   country: "USA", region: "Americas", lat: 29.95, lng: -90.07,  note: "ADA Scientific Sessions 2026", note: "ADA Scientific Sessions 2026" },
    { name: "San Francisco", country: "USA", region: "Americas", lat: 37.77, lng: -122.42, note: "Diabetes Technology Meeting 2025" },
    { name: "Chicago",       country: "USA", region: "Americas", lat: 41.88, lng: -87.63,  note: "ADA Scientific Sessions 2025", note: "ADA Scientific Sessions 2025" },
    { name: "Seattle",       country: "USA", region: "Americas", lat: 47.61, lng: -122.33 },

    /* ── Oceania ── */
    { name: "Sydney",       country: "Australia",   region: "Oceania", lat: -33.87, lng: 151.21, note: "MEDINFO 2023" },
    { name: "Melbourne",    country: "Australia",   region: "Oceania", lat: -37.81, lng: 144.96 },
    { name: "Christchurch", country: "New Zealand", region: "Oceania", lat: -43.53, lng: 172.64 },
    { name: "Dunedin",      country: "New Zealand", region: "Oceania", lat: -45.87, lng: 170.50 },
  ],

  /* ── BOOKS ── the Books page is removed for now.
     Add entries here (or via editor.html) whenever you're ready, then ask
     for books.html back and it will show them. Nothing is lost by leaving
     this empty. */
  readingNow: { title: "", author: "" },
  books: [],

};
