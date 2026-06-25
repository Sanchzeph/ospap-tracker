const OSPAP_PHASES = [
  { weeks: "1-8", title: "Foundations: law, ethics, NHS structure", detail: "Builds the frame everything else sits inside. NHS structure, how community pharmacy fits into primary care, Human Medicines Regulations, Misuse of Drugs Act, GPhC standards for pharmacy professionals." },
  { weeks: "9-28", title: "Clinical therapeutics by body system", detail: "The bulk of the work. Cardiovascular, infection, endocrine, respiratory, and mental health, in that order, each studied against NICE guidance and the BNF rather than Nigerian protocol." },
  { weeks: "29-36", title: "Calculations and exam technique", detail: "Daily timed drilling on the calculation types the exam actually uses, then full mixed mock conditions in the final two weeks." }
];

const OSPAP_WEEKS = [
  { range: "1-2", title: "Orientation", detail: "Download the GPhC CRA framework and IETP 2021 standards. Get BNF access set up (no login needed from Nigeria, see Resources). Map where Nigerian practice diverges from UK practice." },
  { range: "3-4", title: "Law: Human Medicines Regulations", detail: "Core legal framework for prescribing, dispensing, and supply of medicines in the UK." },
  { range: "5", title: "Law: Misuse of Drugs Act, CD schedules", detail: "Controlled drug classification, storage, destruction, and record-keeping requirements." },
  { range: "6", title: "Law: prescription validity, emergency supply", detail: "What makes a prescription legally valid, and the rules for emergency supply at the pharmacist's discretion." },
  { range: "7", title: "Law: Patient Group Directions", detail: "When PGDs apply, who can use them, and their limits." },
  { range: "8", title: "Law: GPhC standards, fitness to practise", detail: "The 9 standards for pharmacy professionals, and how fitness-to-practise cases are handled." },
  { range: "9-10", title: "Cardiovascular: hypertension, heart failure", detail: "NICE NG136 (hypertension) and NG185 (heart failure). Step-wise treatment, monitoring." },
  { range: "11-12", title: "Cardiovascular: AF, ACS, anticoagulation", detail: "NICE NG208 (AF), acute coronary syndrome management, anticoagulation monitoring." },
  { range: "13-14", title: "Renal: dose adjustment", detail: "CrCl-based dose adjustment using Cockcroft-Gault, practice across common drug classes." },
  { range: "15-16", title: "Infection: first-line choices, stewardship", detail: "UK first-line antibiotic choices (different from Nigerian patterns in places), antimicrobial resistance guidance." },
  { range: "17-18", title: "Infection: allergy, duration of therapy", detail: "Allergy cross-reactivity, UK duration-of-therapy norms." },
  { range: "19-20", title: "Endocrine: diabetes, thyroid", detail: "Type 1 and 2 diabetes, insulin types and storage, thyroid disease." },
  { range: "21-22", title: "Respiratory: asthma, COPD", detail: "NICE/BTS step-up and step-down approach, inhaler technique counselling." },
  { range: "23-24", title: "Mental health", detail: "Depression, anxiety, antipsychotics, withdrawal management." },
  { range: "25", title: "Pain and CD prescribing", detail: "Pain management ladder and controlled drug prescribing rules in practice." },
  { range: "26", title: "Paediatrics", detail: "Weight-based dosing, BNF for Children. Roughly 20% of CRA questions involve paediatric patients." },
  { range: "27-28", title: "Self-care and public health", detail: "Pharmacy First conditions, red-flag triage, UK OTC products, smoking cessation, travel health." },
  { range: "29-30", title: "Calculations: infusion rates, displacement", detail: "Daily timed drilling: IV infusion rates, displacement values for reconstitution." },
  { range: "31-32", title: "Calculations: paediatric dosing, concentrations", detail: "Weight-based paediatric dosing, percentage and ratio concentrations." },
  { range: "33-34", title: "Calculations: Cockcroft-Gault, integration", detail: "Mixed timed practice. Start combining law, clinical, and calculation in single sessions." },
  { range: "35", title: "Mock exam 1", detail: "Full timed mock under real conditions. Review every wrong answer for the reasoning, not just the fact." },
  { range: "36", title: "Mock exam 2, light review", detail: "Second full mock. Light review only in the final days, no new content." }
];

const OSPAP_RESOURCES_CORE = [
  { label: "BNF online (adult)", url: "https://bnf.nice.org.uk/", note: "Free, no login required. Your primary drug reference." },
  { label: "BNF for Children online", url: "https://bnfc.nice.org.uk/", note: "Free, no login required." },
  { label: "NICE Clinical Knowledge Summaries", url: "https://cks.nice.org.uk/", note: "Guideline-level detail for primary care conditions, free to view." },
  { label: "NICE Guidance", url: "https://www.nice.org.uk/guidance", note: "Full clinical guidelines, e.g. NG136 hypertension, NG185 heart failure, NG208 AF." }
];

const OSPAP_RESOURCES_REG = [
  { label: "GPhC: Common Registration Assessment", url: "https://www.pharmacyregulation.org/students-and-trainees/pharmacist-education-and-training/common-registration-assessment", note: "Download the current CRA framework and example questions." },
  { label: "GPhC: Standards for pharmacy professionals", url: "https://www.pharmacyregulation.org/standards/standards-for-pharmacy-professionals", note: "The 9 standards, foundational to all law and ethics content." },
  { label: "GPhC: Non-EEA / OSPAP route", url: "https://www.pharmacyregulation.org/pharmacists/registering-pharmacist/non-eea-qualified-international-pharmacists", note: "Official OSPAP eligibility and process info." }
];

const GUARDRAILS = [
  { title: "Anchor it to something that already happens daily", body: "Attach the hour to an existing habit, right after closing the pharmacy, or right before you sleep. A floating 'somewhere today' hour is the first thing skipped when the day gets busy." },
  { title: "Track daily, not weekly", body: "A missed single day is nothing. A missed week is where plans quietly die, and weekly tracking hides that until it's already happened." },
  { title: "Set a visible miss-streak rule", body: "If you miss 2 days in a row, shrink the task, don't skip it. A 15 minute version (just a quick lookup or a single practice set) on a chaotic day keeps the habit alive." },
  { title: "Weekly review, 10 minutes", body: "Same day each week, look at the week just gone, mark the topic done or carried over, glance at next week's focus. The single highest-leverage 10 minutes in the plan." },
  { title: "Build in slack", body: "The plan assumes roughly 90% adherence, not 100%. If a week is lost entirely, shift the schedule back rather than doubling up, that's how burnout starts." },
  { title: "Make falling off costly to ignore", body: "Tell one person what you're doing and ask them to check in every couple of weeks. Accountability outside your own head is harder to quietly abandon." },
  { title: "Don't skip the diagnostic to save time", body: "For IELTS and OET specifically: skipping straight to generic practice without knowing your actual weak skill wastes the most precious resource you have, your limited weekly hours." },
  { title: "Outside feedback beats self-marking on Writing and Speaking", body: "Self-assessment on these two skills tends to run optimistic. Budget for at least a few sessions of outside feedback before any real sitting." }
];

const TRACKS = {
  ospap: {
    id: "ospap",
    name: "OSPAP / CRA",
    shortName: "OSPAP",
    totalWeeks: 36,
    icon: "&#128218;",
    headerTitle: "OSPAP Prep Tracker",
    phases: OSPAP_PHASES,
    weeks: OSPAP_WEEKS,
    resourcesCore: OSPAP_RESOURCES_CORE,
    resourcesReg: OSPAP_RESOURCES_REG,
    resourcesCoreLabel: "Core references",
    resourcesRegLabel: "Regulatory and exam framework"
  },
  ielts: {
    id: "ielts",
    name: "IELTS Academic",
    shortName: "IELTS",
    totalWeeks: 24,
    icon: "&#127757;",
    headerTitle: "IELTS Prep Tracker",
    phases: null,
    weeks: IELTS_WEEKS,
    resourcesCore: IELTS_RESOURCES_CORE,
    resourcesReg: IELTS_RESOURCES_REG,
    resourcesCoreLabel: "Core references",
    resourcesRegLabel: "Regulatory"
  },
  oet: {
    id: "oet",
    name: "OET Pharmacy",
    shortName: "OET",
    totalWeeks: 24,
    icon: "&#127973;",
    headerTitle: "OET Prep Tracker",
    phases: null,
    weeks: OET_WEEKS,
    resourcesCore: OET_RESOURCES_CORE,
    resourcesReg: OET_RESOURCES_REG,
    resourcesCoreLabel: "Core references",
    resourcesRegLabel: "Regulatory"
  }
};

const TRACK_ORDER = ["ospap", "ielts", "oet"];
