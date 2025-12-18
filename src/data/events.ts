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
  day?: string;
  timeLimit?: string;
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
    slug: "project-expo",
    day: "Day 1"
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
    slug: "maze-finder-mouse",
    day: "Day 1"
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
    slug: "hackathon",
    day: "Day 1"
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
    slug: "gamethon",
    day: "Day 2"
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
    slug: "drone-workshop",
    day: "Day 1"
  },
  // CULTURAL EVENTS
  {
    id: "cul01",
    title: "SOLO DANCE (INDIAN)",
    code: "CUL01",
    category: "Cultural",
    shortDescription: "Showcase your talent in Indian dance forms.",
    fullDescription: "A solo dance competition dedicated to Indian dance forms.",
    location: "Auditorium",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹299",
    prizes: ["1st Prize: ₹1,500", "2nd Prize: ₹1,000"],
    guidelines: [
      "Only Indian dance forms allowed",
      "Vulgar choreography is strictly prohibited",
      "No fire, water, powder, or unsafe props",
      "Music to be submitted prior to the event",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "solo-dance-indian",
    day: "Day 2",
    timeLimit: "2 + 1 minutes"
  },
  {
    id: "cul02",
    title: "SOLO DANCE (WESTERN)",
    code: "CUL02",
    category: "Cultural",
    shortDescription: "Showcase your talent in Western dance styles.",
    fullDescription: "A solo dance competition dedicated to Western dance styles.",
    location: "Auditorium",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹299",
    prizes: ["1st Prize: ₹1,500", "2nd Prize: ₹1,000"],
    guidelines: [
      "Any western dance style allowed",
      "Vulgar songs or choreography not permitted",
      "No dangerous props",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "solo-dance-western",
    day: "Day 2",
    timeLimit: "2 + 1 minutes"
  },
  {
    id: "cul03",
    title: "SPOT CHOREOGRAPHY",
    code: "CUL03",
    category: "Cultural",
    shortDescription: "Improvise a dance routine on the spot.",
    fullDescription: "A dance challenge where participants must choreograph on the spot to provided music.",
    location: "Auditorium",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹249",
    prizes: ["1st Prize: ₹1,500", "2nd Prize: ₹1,000"],
    guidelines: [
      "Dance style will be given on the spot",
      "Only music provided by organizers will be used",
      "Vulgarity will lead to disqualification",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "spot-choreography",
    day: "Day 2",
    timeLimit: "90 seconds"
  },
  {
    id: "cul04",
    title: "DUET DANCE",
    code: "CUL04",
    category: "Cultural",
    shortDescription: "Perform a duet dance routine.",
    fullDescription: "A dance competition for pairs to showcase their coordination and talent.",
    location: "Auditorium",
    teamSize: "2",
    eligibility: "Open to all",
    registrationFee: "₹399",
    prizes: ["1st Prize: ₹3,000", "2nd Prize: ₹1,500"],
    guidelines: [
      "Any dance style allowed",
      "Vulgar or inappropriate choreography not allowed",
      "No fire, water, or unsafe props",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "duet-dance",
    day: "Day 2",
    timeLimit: "3 + 1 minutes"
  },
  {
    id: "cul05",
    title: "GROUP DANCE (INDIAN)",
    code: "CUL05",
    category: "Cultural",
    shortDescription: "Group performance of Indian dance forms.",
    fullDescription: "A group dance competition focusing on Indian classical and folk forms.",
    location: "Auditorium",
    teamSize: "4–6 members",
    eligibility: "Open to all",
    registrationFee: "₹599",
    prizes: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000"],
    guidelines: [
      "Only Indian classical dance forms",
      "Traditional costumes preferred",
      "Vulgarity leads to disqualification",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "group-dance-indian",
    day: "Day 2",
    timeLimit: "6 + 2 minutes"
  },
  {
    id: "cul06",
    title: "GROUP DANCE (WESTERN)",
    code: "CUL06",
    category: "Cultural",
    shortDescription: "Group performance of Western dance styles.",
    fullDescription: "A group dance competition focusing on Western dance styles.",
    location: "Auditorium",
    teamSize: "8–14 members",
    eligibility: "Open to all",
    registrationFee: "₹899",
    prizes: ["1st Prize: ₹6,000", "2nd Prize: ₹4,000"],
    guidelines: [
      "Only western dance styles allowed",
      "Appropriate costumes mandatory",
      "Vulgar choreography not allowed",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "group-dance-western",
    day: "Day 2",
    timeLimit: "6 + 2 minutes"
  },
  {
    id: "cul07",
    title: "SOLO SINGING",
    code: "CUL07",
    category: "Cultural",
    shortDescription: "Showcase your vocal talent.",
    fullDescription: "A solo singing competition open to all languages.",
    location: "SB Auditorium",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,500", "2nd Prize: ₹1,000"],
    guidelines: [
      "Songs of any language allowed",
      "Vulgar lyrics prohibited",
      "Karaoke permitted",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "solo-singing",
    day: "Day 1",
    timeLimit: "3 + 1 minutes"
  },
  {
    id: "cul08",
    title: "BATTLE OF BANDS",
    code: "CUL08",
    category: "Cultural",
    shortDescription: "Live band performance competition.",
    fullDescription: "A competition for bands to perform live music.",
    location: "SB Auditorium",
    teamSize: "4–8 members",
    eligibility: "Open to all",
    registrationFee: "₹599",
    prizes: ["1st Prize: ₹6,000", "2nd Prize: ₹3,000"],
    guidelines: [
      "All music genres allowed",
      "Vulgar content strictly prohibited",
      "Teams must bring their own instruments",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "battle-of-bands",
    day: "Day 1",
    timeLimit: "8 + 2 minutes"
  },
  {
    id: "cul09",
    title: "FASHION SHOW",
    code: "CUL09",
    category: "Cultural",
    shortDescription: "Theme-based fashion showcase.",
    fullDescription: "A fashion show competition where teams present theme-based collections.",
    location: "Main Stage",
    teamSize: "10–12 members",
    eligibility: "Open to all",
    registrationFee: "₹899",
    prizes: ["1st Prize: ₹7,000", "2nd Prize: ₹4,000"],
    guidelines: [
      "Theme-based fashion show",
      "Proper coordination and presentation required",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "fashion-show",
    day: "Day 1",
    timeLimit: "6 + 2 minutes"
  },
  {
    id: "cul10",
    title: "DRAMA COMPETITION",
    code: "CUL10",
    category: "Cultural",
    shortDescription: "Theatrical performance competition.",
    fullDescription: "A drama competition for teams to perform theme-based plays.",
    location: "SB Seminar Hall",
    teamSize: "8–10 members",
    eligibility: "Open to all",
    registrationFee: "₹699",
    prizes: ["1st Prize: ₹5,000", "2nd Prize: ₹3,000"],
    guidelines: [
      "Theme-based performance",
      "Offensive content not allowed",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "drama-competition",
    day: "Day 1",
    timeLimit: "10–15 minutes"
  },
  {
    id: "cul11",
    title: "MONO ACTING",
    code: "CUL11",
    category: "Cultural",
    shortDescription: "Solo acting performance.",
    fullDescription: "A solo acting competition to showcase dramatic skills.",
    location: "Auditorium",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹149",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "Solo stage performance",
      "Vulgar content prohibited",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "mono-acting",
    day: "Day 1",
    timeLimit: "3 + 1 minutes"
  },
  {
    id: "cul12",
    title: "STORY TELLING",
    code: "CUL12",
    category: "Cultural",
    shortDescription: "Narrate an original story.",
    fullDescription: "A storytelling competition where participants narrate original stories.",
    location: "VB Classroom",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "No reading from paper or phone",
      "Original narration only",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "story-telling",
    day: "Day 1",
    timeLimit: "6 + 2 minutes"
  },
  {
    id: "cul13",
    title: "SHORT FILM MAKING",
    code: "CUL13",
    category: "Cultural",
    shortDescription: "Create a short film.",
    fullDescription: "A competition for aspiring filmmakers to showcase their short films.",
    location: "L1 Classroom",
    teamSize: "1–4 members",
    eligibility: "Open to all",
    registrationFee: "₹249",
    prizes: ["1st Prize: ₹2,000", "2nd Prize: ₹1,000"],
    guidelines: [
      "No theme",
      "Only original content allowed",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "short-film-making",
    day: "Day 1",
    timeLimit: "Max. 15 minutes"
  },
  {
    id: "cul14",
    title: "REEL CONTEST",
    code: "CUL14",
    category: "Cultural",
    shortDescription: "Create a creative reel.",
    fullDescription: "A competition to create engaging short-form video content.",
    location: "L1 Classroom",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "Original content only",
      "Plagiarism leads to disqualification",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "reel-contest",
    day: "Day 1",
    timeLimit: "Max 60 seconds"
  },
  {
    id: "cul15",
    title: "SKETCHING",
    code: "CUL15",
    category: "Cultural",
    shortDescription: "Hand-drawn sketching competition.",
    fullDescription: "A sketching competition where participants draw based on a theme.",
    location: "VB Classroom",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "Individual participation only",
      "Sketch must be hand-drawn",
      "Tracing or digital tools are not allowed",
      "Theme will be given on the spot",
      "Participants must bring their own materials",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "sketching",
    day: "Day 1",
    timeLimit: "50 minutes"
  },
  {
    id: "cul16",
    title: "PHOTOGRAPHY CONTEST",
    code: "CUL16",
    category: "Cultural",
    shortDescription: "Theme-based photography contest.",
    fullDescription: "A photography competition to capture the best moments.",
    location: "Campus",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "One photo per participant",
      "Theme-based photography",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "photography-contest",
    day: "Day 1"
  },
  {
    id: "cul17",
    title: "SCRIPT WRITING",
    code: "CUL17",
    category: "Cultural",
    shortDescription: "Write an original script.",
    fullDescription: "A creative writing competition for scripts.",
    location: "VB Classroom",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "Individual participation",
      "Topic will be given on the spot",
      "Script must be original",
      "Maximum length as specified during the event",
      "Use of mobile phones or internet is not allowed",
      "Plagiarism will lead to disqualification",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "script-writing",
    day: "Day 2",
    timeLimit: "1 hour 45 minutes"
  },
  {
    id: "cul18",
    title: "POSTER MAKING",
    code: "CUL18",
    category: "Cultural",
    shortDescription: "Digital poster design competition.",
    fullDescription: "A competition to design creative digital posters.",
    location: "VB Classroom",
    teamSize: "1",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,000", "2nd Prize: ₹500"],
    guidelines: [
      "Individual participation",
      "Poster must be digitally designed",
      "Participants must bring their own laptops",
      "Internet usage is not allowed during the competition",
      "Theme will be given on the spot",
      "Use of pre-made templates is not allowed",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "poster-making",
    day: "Day 2",
    timeLimit: "90 minutes"
  },
  {
    id: "cul19",
    title: "GENSPEAK STUDIO",
    code: "CUL19",
    category: "Cultural",
    shortDescription: "Creative presentation and speaking.",
    fullDescription: "A competition for creative presentation and public speaking.",
    location: "VB Classroom",
    teamSize: "1–3 members",
    eligibility: "Open to all",
    registrationFee: "₹199",
    prizes: ["1st Prize: ₹1,500", "2nd Prize: ₹1,000"],
    guidelines: [
      "Only original and theme-relevant content is allowed",
      "Participants must present clearly and confidently",
      "The presentation must be well-structured and creative",
      "Participants must answer the judges' questions on the spot",
      "Strict adherence to time limits and discipline is mandatory",
      "Judges' decision will be final"
    ],
    judgingCriteria: [],
    disqualificationRules: [],
    requiresPayment: true,
    active: true,
    slug: "genspeak-studio",
    day: "Day 2",
    timeLimit: "2–3 minutes"
  }
];