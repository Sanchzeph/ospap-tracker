const IELTS_WEEKS = [
  { range: "1-2", title: "Diagnostic", detail: "Sit one full IELTS Academic practice test under real timed conditions (2h 40m plus speaking). Score honestly against official band descriptors. This determines which skill gets the most time in the weeks that follow." },
  { range: "3-6", title: "Listening foundations", detail: "Accent exposure (UK, Australian, North American), note-taking shorthand, prediction from question stems, distinguishing similar-sounding distractors. Daily section-4 practice, the hardest section." },
  { range: "7-10", title: "Reading foundations", detail: "Skimming vs scanning technique, True/False/Not Given precision, matching headings, time management across 3 passages in 60 minutes. Academic vocabulary in context." },
  { range: "11-15", title: "Writing Task 1 and 2", detail: "Task 1: describing graphs, charts, processes, maps in formal register. Task 2: essay structure, thesis clarity, paragraph development, cohesive devices. This is most candidates' weakest skill globally, weight time here generously." },
  { range: "16-19", title: "Speaking", detail: "Part 1 fluency under light pressure, Part 2 two-minute long turn structuring, Part 3 abstract discussion and idea extension. Record yourself and review against the fluency and lexical resource criteria." },
  { range: "20", title: "Cross-skill integration", detail: "Mixed daily practice combining all four skills in proportion to remaining weak areas identified from weeks 1-19." },
  { range: "21-22", title: "Full mock test 1", detail: "Complete test under real timed conditions, including a recorded speaking simulation. Review every section against official band descriptors, not just right or wrong." },
  { range: "23", title: "Targeted gap repair", detail: "Spend the week exclusively on whichever band scored lowest in the mock. This is where the no-band-below-7 rule bites hardest, a single weak skill caps your overall score." },
  { range: "24", title: "Full mock test 2, light review", detail: "Final full mock. Light review only, no new content. Rest before the real test." }
];

const IELTS_RESOURCES_CORE = [
  { label: "IELTS.org official practice materials", url: "https://ielts.org/take-a-test/preparation", note: "Free sample tests for all four skills, straight from the test owner." },
  { label: "IELTS Writing band descriptors (public)", url: "https://ielts.org/news-and-insights/ielts-writing-band-descriptors-and-key-assessment-criteria", note: "The actual rubric examiners use, essential for self-marking accurately." },
  { label: "IELTS Speaking band descriptors (public)", url: "https://takeielts.britishcouncil.org/sites/default/files/ielts_speaking_band_descriptors.pdf", note: "The actual rubric examiners use for speaking." },
  { label: "British Council free practice tests", url: "https://takeielts.britishcouncil.org/", note: "Official practice tests and preparation guidance." },
  { label: "IELTS Liz", url: "https://ieltsliz.com/", note: "Free strategy guides and practice across all four skills." }
];

const IELTS_RESOURCES_REG = [
  { label: "GPhC: Non-EEA / OSPAP route", url: "https://www.pharmacyregulation.org/pharmacists/registering-pharmacist/non-eea-qualified-international-pharmacists", note: "Confirms current English language evidence accepted, including IELTS Academic 7.0." }
];
