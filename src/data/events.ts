export interface Event {
  id: string;
  title: string;
  code: string;
  category: "Technical" | "Cultural" | "Wellness";
  shortDescription: string;
  fullDescription: string;
  location: string;
  teamSize: string;
  eligibility: string;
  registrationFee: string;
  prizes: string[];
  guidelines: string[];
  judgingCriteria: string[];
  disqualificationRules: string[];
  requiresPayment: boolean;
  active: boolean;
  slug: string;
}

export const events: Event[] = [
  {
    id: "tech01",
    title: "PROJECT EXPO",
    code: "TECH01",
    category: "Technical",
    shortDescription: "A multi-domain technical exhibition showcasing innovative projects.",
    fullDescription: "A multi-domain technical exhibition where students present hardware prototypes, software solutions, and research-driven innovations showcasing creativity and engineering impact.",
    location: "Open Ground / Central Area",
    teamSize: "1–4 members",
    eligibility: "Open to all departments",
    registrationFee: "0",
    prizes: ["1st Prize: ₹8,000", "2nd Prize: ₹5,000"],
    guidelines: [
      "Working models preferred",
      "Declare power/equipment needs",
      "Setup must be completed 30 minutes before judging",
      "No hazardous materials",
      "All equipment must be safe",
      "Explain Problem Statement",
      "Methodology",
      "Innovation",
      "Results / expected impact"
    ],
    judgingCriteria: [
      "Objectives & Methodology",
      "Innovation",
      "Demo Quality",
      "Applicability"
    ],
    disqualificationRules: [
      "Late setup",
      "Unsafe equipment",
      "Plagiarised or purchased models"
    ],
    requiresPayment: false,
    active: true,
    slug: "project-expo"
  },
  {
    id: "tech04",
    title: "MAZE FINDER MOUSE",
    code: "TECH04",
    category: "Technical",
    shortDescription: "Autonomous bots race to solve a maze using sensors and logic.",
    fullDescription: "Autonomous bots race to solve a maze using sensors, navigation logic, and pathfinding algorithms.",
    location: "Open Ground / Adjacent Corridor",
    teamSize: "1–3 members",
    eligibility: "Autonomous bots only",
    registrationFee: "₹99",
    prizes: ["Goodies"],
    guidelines: [
      "Bot size: TBA",
      "Bot must navigate independently (no remote control)",
      "Touching walls = penalty (TBA)",
      "If stuck for more than 10 seconds, reset allowed"
    ],
    judgingCriteria: [
      "Fastest accurate completion",
      "Smooth navigation",
      "Error handling efficiency"
    ],
    disqualificationRules: [
      "Manual intervention",
      "External assistance",
      "Unsafe bot design"
    ],
    requiresPayment: true,
    active: true,
    slug: "maze-finder-mouse"
  },
  {
    id: "tech06",
    title: "HACKATHON (8-HOUR SPRINT)",
    code: "TECH06",
    category: "Technical",
    shortDescription: "Build a working prototype in 8 hours.",
    fullDescription: "A fast-paced hackathon where teams build a working prototype in 8 hours. Theme revealed on the spot.",
    location: "L1 Classrooms / VB Block",
    teamSize: "2–4 members",
    eligibility: "Open to all departments",
    registrationFee: "0",
    prizes: ["1st Prize: ₹10,000", "2nd Prize: ₹8,000", "3rd Prize: ₹6,000"],
    guidelines: [
      "Theme/problem statement revealed at start",
      "No pre-built code or projects",
      "Internet allowed for reference only",
      "Mandatory submission: Working Prototype, Code (GitHub / ZIP), 3–5 minute pitch presentation",
      "Mandatory mentor check-ins"
    ],
    judgingCriteria: [
      "Innovation – 25%",
      "Technical implementation – 30%",
      "Functionality – 25%",
      "Presentation – 20%"
    ],
    disqualificationRules: [
      "Pre-made projects",
      "Plagiarism",
      "Missed checkpoints"
    ],
    requiresPayment: false,
    active: true,
    slug: "hackathon"
  },
  {
    id: "tech07",
    title: "GAMETHON (GAME DEVELOPMENT CHALLENGE)",
    code: "TECH07",
    category: "Technical",
    shortDescription: "Design and build a playable game on a surprise theme.",
    fullDescription: "Participants design and build a playable game based on a theme revealed during the event.",
    location: "L1 Classrooms / Labs",
    teamSize: "1–3 members",
    eligibility: "Open to all",
    registrationFee: "₹249",
    prizes: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000", "Additional Awards: Best Game Award, Best Creativity Award, Audience Choice Award"],
    guidelines: [
      "Theme revealed at event start",
      "Only self-created or royalty-free assets allowed",
      "Submission must include: Game build, Screenshots, Concept explanation",
      "Must include at least one playable level"
    ],
    judgingCriteria: [
      "Creativity & originality",
      "Gameplay & mechanics",
      "Visual & UI design",
      "Overall playability"
    ],
    disqualificationRules: [
      "Copyrighted assets",
      "Offensive content",
      "Broken or unplayable submission"
    ],
    requiresPayment: true,
    active: true,
    slug: "gamethon"
  },
  {
    id: "tech10",
    title: "DRONE WORKSHOP (DGCA CERTIFIED)",
    code: "TECH10",
    category: "Technical",
    shortDescription: "Certified workshop on UAV mechanics and safe drone operation.",
    fullDescription: "A certified workshop covering UAV mechanics, safe drone operation, and flight training.",
    location: "VDC",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹349 per head",
    prizes: ["Certificate of Participation"],
    guidelines: [
      "Follow trainer instructions",
      "Fly only in designated zones",
      "Do not touch propellers when active",
      "Damage due to negligence will attract penalty"
    ],
    judgingCriteria: [],
    disqualificationRules: [
      "Unsafe behavior",
      "Violation of safety instructions"
    ],
    requiresPayment: true,
    active: true,
    slug: "drone-workshop"
  }
];
