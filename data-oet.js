const OET_WEEKS = [
  { range: "1-2", title: "Diagnostic", detail: "Take one official OET Pharmacy sample test under timed conditions across all four sub-tests. OET scores independently, 0-500 per skill, no averaging, so this tells you exactly which skill needs the most work, not a blended overall." },
  { range: "3-6", title: "Listening", detail: "Part A: two recorded consultations, note-taking under time pressure. Part B: workplace monologue, identifying main points. Part C: discussion between healthcare professionals, inference and global meaning. Shared format across all OET professions." },
  { range: "7-10", title: "Reading", detail: "Part A: short healthcare texts, quick scanning for facts. Part B: six workplace texts, identifying main point and purpose. Part C: two longer texts, global meaning and inference under real time pressure." },
  { range: "11-16", title: "Writing: the pharmacy clinical letter", detail: "Profession-specific task: typically a referral or discharge-style letter built from case notes. Assessors weight purpose, audience, and clinical relevance heavily, not just grammar. This sub-test mirrors real UK pharmacy documentation style, which is valuable prep regardless of the test." },
  { range: "17-21", title: "Speaking: pharmacist-patient role-plays", detail: "Two role-plays, around 5 minutes each, you play the pharmacist, the interlocutor plays a patient or carer. Graded on linguistic criteria (fluency, grammar, intelligibility) and clinical communication criteria (relationship building, understanding patient concerns, giving structure to your explanation)." },
  { range: "22", title: "Cross-skill integration", detail: "Mixed practice combining all four sub-tests, weighted toward whichever scored lowest in your diagnostic." },
  { range: "23", title: "Full mock test 1", detail: "Complete OET Pharmacy mock under timed conditions. Review against the actual sub-test criteria, since each skill is graded independently with no compensation between them." },
  { range: "24", title: "Full mock test 2, light review", detail: "Final mock. Light review only, no new content. Every sub-test needs to independently clear Grade B, so don't neglect a skill that already feels comfortable." }
];

const OET_RESOURCES_CORE = [
  { label: "OET official sample tests", url: "https://oet.com/ready/sample-tests", note: "Free official practice across all four sub-tests, built for the actual computer test interface." },
  { label: "OET Pharmacy paper-based sample tests", url: "https://oet.com/ready/sample-tests/oet-test-on-paper/pharmacy", note: "Free, profession-specific practice materials for Pharmacy specifically." },
  { label: "OET Pulse", url: "https://oet.com/ready", note: "30-minute free level check, useful as a lighter alternative to a full diagnostic if you want a quick first read before committing the time." }
];

const OET_RESOURCES_REG = [
  { label: "GPhC: Non-EEA / OSPAP route", url: "https://www.pharmacyregulation.org/pharmacists/registering-pharmacist/non-eea-qualified-international-pharmacists", note: "Confirms current English language evidence accepted, including OET Grade B." },
  { label: "OET official website", url: "https://www.occupationalenglishtest.org/", note: "Test booking, score validity, and the official Who Recognises OET list." }
];
