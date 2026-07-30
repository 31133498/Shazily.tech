import type {
  PersonInfo,
  Project,
  SkillCategory,
  TimelineMilestone,
  Achievement,
  Experience,
  PressItem,
} from '../types';

// ─── Identity ────────────────────────────────────────────────────────────────

export const person: PersonInfo = {
  name: 'Sanni Shazily Oladipupo',
  alias: 'ShazdTechBro',
  tagline: 'The Cracked Dev.',
  role: 'AI Engineer, Software Developer & Data Scientist',
  bio: 'I build things people actually use. MockExam.ng has 175,000 students preparing for JAMB and WAEC. Recivo won Nigeria\'s most competitive student hackathon against 10,000 teams. GridPeer is in active pilot fixing energy access in Lagos neighbourhoods. I am a 200-Level Data Science student at UNILAG and co-founder of TeenovateX Labs, but the products speak first.',
  about: [
    "I'm Shazily. I co-founded GridPeer, built MockExam.ng from scratch to 175,000 students, and won 7 national hackathons before finishing my second year. I happen to be studying Data Science at the University of Lagos at the same time.",
    "Since then I have won 7 hackathons and 10 innovation competitions across Nigeria, competed against postgraduate students as a 200 level student, and earned a Tech Talent internship at GTCO. I build things that work, I ship fast, and I do not wait for permission to start.",
    "Outside the code I run TeenovateX Labs, a teenager-led tech NGO reaching over 1,000 young people across Lagos with mentorship, technical training and data stipends. I know exactly what it feels like to almost miss the room that changes everything. That is why I keep going back to build it for others.",
  ],
  location: 'Lagos, Nigeria',
  email: 'sannishazily@gmail.com',
  university: 'University of Lagos',
  degree: 'B.Sc. Data Science',
  level: '200 Level',
  profileImage: '/assets/profile-null-background.png',
  resumeUrl: '/assets/resume.pdf',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/31133498',
      handle: '@31133498',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanni-shazily-bba942266/',
      handle: 'Sanni Shazily',
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@ShazdTechbro',
      handle: '@ShazdTechbro',
    },
    {
      label: 'Email',
      url: 'mailto:sannishazily@gmail.com',
    },
  ],
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'GridPeer',
    projectType: 'startup',
    description:
      'GridPeer is the company I co-founded to fix Nigeria\'s energy access problem at the neighbourhood level. We built the full metering, financing, and registration infrastructure: a hardware hub with built-in GSM that measures every kilowatt-hour per line, prepaid wallets on WhatsApp or USSD, and automatic supply pause when a balance hits zero. NERC registered, Electricity Act 2023 compliant, and currently in Lagos pilot phase.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://www.gridpeer.com.ng&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'FastAPI', 'Python'],
    link: 'https://www.gridpeer.com.ng/',
  },
  {
    id: '2',
    number: '02',
    title: 'PlugdSpace',
    projectType: 'contract',
    description:
      'I was brought in to build the full platform for PlugdSpace, a premium service marketplace connecting verified professionals across 12 categories. I handled everything from provider onboarding and vetting flows to secure booking and payment infrastructure. The platform has processed over 100,000 bookings across 10,000 verified providers.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://www.plugdspace.com&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'Firebase', 'Paystack'],
    link: 'https://www.plugdspace.com/',
  },
  {
    id: '3',
    number: '03',
    title: 'Pholar Natural',
    projectType: 'contract',
    description:
      'I built the full e-commerce and booking platform for Pholar Natural, a premium organic African haircare brand shipping worldwide. The site handles product sales, professional salon appointment bookings, and serves over 10,000 clients across multiple countries. The client wanted tradition and science in one seamless experience and that is what I delivered.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://pholarnatural.com&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'Vercel'],
    link: 'https://pholarnatural.com/',
  },
  {
    id: '4',
    number: '04',
    title: 'MockExam.ng',
    projectType: 'startup',
    description:
      'MockExam.ng is the exam-prep platform I founded to fix how Nigerian students prepare for JAMB, WAEC, NECO, and Post-UTME. We have 175,000 students on the platform, an AI system that targets each student\'s weak topics, a CBT interface that mirrors the real exam, and it works offline. It is live, it generates revenue, and it is growing.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://mockexam.ng&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'Firebase', 'Paystack', 'Vercel'],
    link: 'https://mockexam.ng/',
  },
  {
    id: '5',
    number: '05',
    title: 'Recivo',
    projectType: 'hackathon',
    description:
      'Built for the GTCO SquadCo hackathon, Recivo is a credentialing system for Nigeria\'s 41 million informal workers. A voice-and-simulation diagnostic interview in Pidgin, Yoruba, Igbo, Hausa, or English generates a verifiable Ise Score, with Squad escrow rails protecting payment on every job. Field-validated with 24 workers and 6 employers across Computer Village, Ladipo, Tejuosho, and Aba.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://recivo.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'FastAPI', 'Python'],
    link: 'https://recivo.vercel.app',
    hackathonWin: 'GTCO SquadCo Hackathon Winner',
  },
  {
    id: '6',
    number: '06',
    title: 'Shazily.tech',
    projectType: 'startup',
    description:
      'My personal developer hub — the site you are on right now. Built from scratch with React, TypeScript, Vite, and Tailwind CSS v4. Fully responsive, animated with Framer Motion, and deployed on Vercel.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://shazily.tech&screenshot=true&embed=screenshot.url',
    technologies: ['React', 'TypeScript', 'Vite'],
    link: 'https://shazily.tech',
  },
  {
    id: '7',
    number: '07',
    title: 'Veritas AI',
    projectType: 'hackathon',
    description:
      'Built for the AWS Hackathon and the Insurance Innovation Challenge, Veritas AI detects insurance fraud using geomapping and EXIF analysis, cutting investigation time from weeks to minutes. It took first place at AWS West Africa, then won the Insurance Innovation Challenge with the same system.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://veritas-ai-dcfw.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['AI', 'Geomapping', 'FastAPI'],
    link: 'https://veritas-ai-dcfw.vercel.app/',
    hackathonWin: 'AWS Hackathon 1st Place · Insurance Innovation Challenge',
  },
  {
    id: '8',
    number: '08',
    title: 'MamaSafe',
    projectType: 'hackathon',
    description:
      'Built for the AHEAD Africa Healthtech Conference, MamaSafe protects pregnant mothers from dangerous drug interactions using Bio-LLMs and Pharmacovigilance APIs that track drug quality in real time. It won the healthcare innovation category and was built specifically around the Drugstoc infrastructure.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://mamasafe.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['AI/ML', 'EMR API', 'Bio-LLMs'],
    link: 'https://mamasafe.vercel.app/',
    hackathonWin: 'AHEAD Africa Healthtech Conference Winner',
  },
  {
    id: '9',
    number: '09',
    title: 'DermaScan AI',
    projectType: 'hackathon',
    description:
      'Built as an AI diagnostic tool that detects and classifies multiple types of skin cancer, recommends treatment options in any language, and connects patients directly to dermatologists. The model was trained on a multi-class skin cancer dataset and deployed with a React frontend built for low-bandwidth environments.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://derma-scan-ai.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['Python', 'TensorFlow', 'React'],
    link: 'https://derma-scan-ai.vercel.app/',
  },
  {
    id: '10',
    number: '10',
    title: 'Optic-Gov',
    projectType: 'hackathon',
    description:
      'Built as an AI and blockchain auditor for Nigerian infrastructure projects, Optic-Gov removes the human from the corruption loop entirely. Funds are only released when computer vision confirms road quality meets spec. No bureaucrat, no bribe, no override.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://optic-gov.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['AI', 'Blockchain', 'Computer Vision'],
    link: 'https://optic-gov.vercel.app/',
  },
  {
    id: '11',
    number: '11',
    title: 'Trust-Grid',
    projectType: 'hackathon',
    description:
      'Built as a privacy-first SDK engine, Trust-Grid gives organisations API access only to the exact data fields they need, nothing more. It was designed to cut NDPR compliance costs for Nigerian businesses without requiring them to rebuild their entire data architecture from scratch.',
    image: '',
    previewUrl: 'https://api.microlink.io?url=https://trust-grid-eight.vercel.app&screenshot=true&embed=screenshot.url',
    technologies: ['SDK', 'Privacy Tech', 'REST API'],
    link: 'https://trust-grid-eight.vercel.app/',
  },
  {
    id: '12',
    number: '12',
    title: 'Undisclosed Client',
    projectType: 'undisclosed',
    description: '',
    image: '',
    technologies: [],
  },
  {
    id: '13',
    number: '13',
    title: 'Undisclosed Client',
    projectType: 'undisclosed',
    description: '',
    image: '',
    technologies: [],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
// Source: CV — Computer Skills section

export const skills: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: ['Python', 'TensorFlow', 'LangChain', 'N8N', 'FastAPI'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'JavaScript', 'Django', 'Firebase', 'Git'],
  },
  {
    title: 'Data Engineering',
    skills: ['SQL', 'R', 'GCP'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Vercel', 'Paystack', 'Figma'],
  },
];

// ─── Timeline / Story ─────────────────────────────────────────────────────────

export const timeline: TimelineMilestone[] = [
  {
    phase: 'PHASE 1: THE SPARK',
    title: 'A broken phone and a big question',
    description:
      'Limited resources. No PC. A smartphone that barely worked. Instead of waiting for better conditions, I used what I had to learn how computers think.',
  },
  {
    phase: 'PHASE 2: THE BUILD',
    title: 'Shipping real things under pressure',
    description:
      'Secondary school hackathons. Borrowed laptops. Winning competitions in a school uniform. Best Graduating Student in school history and Best Secondary School Student in Yaba, Lagos.',
  },
  {
    phase: 'PHASE 3: THE RECOGNITION',
    title: '7 national wins and counting',
    description:
      'SquadCo. AWS. AHEAD Africa. Insurance Innovation. MYSF. Hack Club. Seven national hackathon wins across healthcare, fintech, education, and entrepreneurship. Each one a stress test of ideas against real deadlines.',
  },
  {
    phase: 'PHASE 4: THE COMMUNITY',
    title: 'Building what we wished existed',
    description:
      'Co-founded TeenovateX Labs. Now 1,000+ teenagers strong across Lagos secondary schools, backed by Hack Club USA with fiscal sponsorship.',
  },
  {
    phase: 'PHASE 5: NOW',
    title: 'Compounding fast',
    description:
      'Building MockExam.ng (5,000+ active students, live revenue). Incoming GTCO Tech Talent, selected from winning SquadCo. University of Lagos.',
    isActive: true,
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
// Source: CV — 7x National Hackathon Winner section

export const achievements: Achievement[] = [
  {
    title: 'SquadCo Hackathon',
    event: "Nigeria's Most Competitive Student Hackathon",
    description:
      'Won SquadCo, Nigeria\'s most competitive student hackathon with 10,000+ participants. Led directly to selection for the GTCO Tech Talent internship programme.',
    image: 'https://api.microlink.io?url=https://unilag.edu.ng/unilag-team-setld-emerges-2nd-place-at-gtco-squad-hackathon-3-0/&screenshot=true&embed=screenshot.url',
  },
  {
    title: 'AWS Hackathon',
    event: '1st Place, AWS West Africa',
    description:
      'Won 1st Place at the AWS Hackathon with Veritas AI, an insurance fraud-detection system using geomapping and EXIF data.',
    image: '/assets/aws.jpg',
  },
  {
    title: 'MamaSafe',
    event: 'AHEAD Africa Healthtech Conference, Drugstoc',
    description:
      'Won the healthcare innovation category with MamaSafe, protecting pregnant mothers from dangerous drug interactions using Bio-LLMs and EMR APIs.',
    image: '/assets/ahead.jpg',
  },
  {
    title: 'Insurance Innovation Challenge',
    event: 'Veritas AI, Fraud Detection',
    description:
      'Won the Insurance Innovation Challenge with Veritas AI, an AI auditor that detects insurance fraud in minutes rather than weeks.',
    image: '/assets/aws.jpg',
  },
  {
    title: 'MYSF Youthpreneur',
    event: 'Muslim Youth Support Foundation',
    description:
      'Won the Youthpreneur Pitch Challenge hosted by the Muslim Youth Support Foundation, pitching a tech-driven solution to youth entrepreneurship.',
    image: '/assets/ahead.jpg',
  },
  {
    title: 'Hack Club, Daydream',
    event: 'Hack Club at NFHS',
    description:
      'Won the Daydream Hackathon hosted by Hack Club at NFHS, building an educational tool that solved a real secondary school learning problem.',
    image: '/assets/234.jpg',
  },
  {
    title: '234 Project Foundation',
    event: 'AI for Social Impact',
    description:
      'Won AI for Social Impact with Lumina, an adaptive AI learning platform that personalises each student\'s experience based on how they learn.',
    image: '/assets/234.jpg',
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
// Source: CV — Work Experience + Leadership sections

export const experience: Experience[] = [
  {
    role: 'Tech Talent Intern',
    organisation: 'GTCO — Selected from 10,000+ via SquadCo Win',
    period: '2026',
    type: 'internship',
    description:
      'Selected for GTCO\'s competitive Tech Talent programme as a direct result of winning the SquadCo Hackathon. Will be embedded in the technology division working on fintech systems and digital banking infrastructure.',
    highlights: [
      'Selected from a pool of 10,000+ SquadCo participants',
      'Working on fintech systems and digital banking infrastructure',
    ],
  },
  {
    role: 'Frontend Developer',
    organisation: 'Avzdax Technologies',
    period: 'Jun 2025 – 2026',
    type: 'internship',
    description:
      'Built responsive web interfaces using React and Tailwind CSS serving real users. Integrated third-party APIs to automate workflows and contributed to code reviews and design sprints in an agile team environment.',
    highlights: [
      'Built production React interfaces with Tailwind CSS serving real users',
      'Integrated third-party APIs to automate workflows',
      'Code reviews and agile design sprints',
    ],
  },
  {
    role: 'AI Automation Specialist',
    organisation: 'Zaicon Technologies',
    period: '2024 – 2025',
    type: 'startup',
    description:
      'Built AI-powered automation campaigns across LinkedIn and X. Developed N8N workflows for lead sorting, prioritisation, and product distribution. Created AI video storytelling pipelines and a WhatsApp QA bot.',
    highlights: [
      'N8N workflows for lead sorting, prioritisation and product distribution',
      'AI video storytelling pipelines',
      'WhatsApp QA bot cutting content production time by 60%+',
    ],
  },
  {
    role: 'Youth Ambassador',
    organisation: 'Action Health Incorporated',
    period: 'Jan 2025 – Apr 2025',
    type: 'community',
    description:
      'Led school outreaches reaching hundreds of adolescents across Lagos. Authored program evaluation reports and health advocacy campaigns.',
    highlights: [
      'School outreaches reaching hundreds of Lagos adolescents',
      'Authored program evaluation reports and health advocacy campaigns',
    ],
  },
  {
    role: 'Co-Founder & Program Lead',
    organisation: 'TeenovateX Labs',
    period: 'Dec 2025 – Present',
    type: 'ngo',
    description:
      'Co-founded tech NGO equipping 1,000+ Lagos teenagers with coding, robotics and AI. Fiscally sponsored by Hack Club USA. Directing curriculum design and community partnerships.',
    highlights: [
      '1,000+ Lagos teenagers reached across secondary schools',
      'Fiscally sponsored by Hack Club USA',
      'Curriculum design and community partnerships',
    ],
  },
  {
    role: 'Automation & Systems Volunteer',
    organisation: 'MSSN Lagos',
    period: '2024 – Present',
    type: 'community',
    description:
      'Building WhatsApp automation systems to streamline member communication and event coordination at scale for the Muslim Students\' Society of Nigeria, Lagos State.',
    highlights: [
      'WhatsApp automation for member communication',
      'Event coordination systems at scale',
    ],
  },
];

// ─── Press ────────────────────────────────────────────────────────────────────
// Only confirmed publications that name Sanni Shazily. Fetch each URL before
// editing to verify the excerpt is still live on the page.

export const press: PressItem[] = [
  {
    publication: 'University of Lagos (Official)',
    headline: 'UNILAG Team Setld Emerges 2nd Place at GTCO Squad Hackathon 3.0',
    excerpt:
      '"The brilliant minds behind Recivo include: ... Sanni Shazily (200 Level, Department of Statistics), carting home a ₦3,000,000 cash prize, GTCO Internship opportunity and scholarship opportunity."',
    date: 'May 26, 2026',
    url: 'https://unilag.edu.ng/unilag-team-setld-emerges-2nd-place-at-gtco-squad-hackathon-3-0/',
    previewUrl: 'https://api.microlink.io?url=https://unilag.edu.ng/unilag-team-setld-emerges-2nd-place-at-gtco-squad-hackathon-3-0/&screenshot=true&embed=screenshot.url',
  },
  {
    publication: 'Daily Akokite (UnilagNews)',
    headline: 'UNILAG Students Clinch Second Place at GTCO SQUAD Hackathon 3.0 with AI Platform "Recivo"',
    excerpt:
      '"In Sani Shazily\'s words, he said this hackathon was the toughest and fiercest hackathon he has ever participated in."',
    date: 'May 26, 2026',
    url: 'https://unilagnews.com/unilag-students-clinch-second-place-at-gtco-squad-hackathon-3-0-with-ai-platform-recivo/',
    previewUrl: 'https://api.microlink.io?url=https://unilagnews.com/unilag-students-clinch-second-place-at-gtco-squad-hackathon-3-0-with-ai-platform-recivo/&screenshot=true&embed=screenshot.url',
  },
  {
    publication: 'Action Health Incorporated',
    headline: 'The Pivot Year: How Action Health Incorporated Opened a Path I Am Still Walking',
    excerpt:
      '"I entered hackathons, won innovation pitches, and started showing up in rooms I had no real business being in as a first-year student. Since 2023, I have won over ten innovation competitions."',
    date: 'May 2026',
    url: 'https://www.actionhealthinc.org/the-pivot-year-how-action-health-incorporated-opened-a-path-i-am-still-walking/',
    previewUrl: 'https://api.microlink.io?url=https://www.actionhealthinc.org/the-pivot-year-how-action-health-incorporated-opened-a-path-i-am-still-walking/&screenshot=true&embed=screenshot.url',
  },
];
