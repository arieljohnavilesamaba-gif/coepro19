import { DeveloperProfile, Project, SkillItem, TimelineItem } from '../types/portfolio';

/**
 * Centered Portfolio Configuration Data for Ariel John A. Amaba
 * Themed with Olympian & Greek Mythology Design (Zeus, Hephaestus, Prometheus, Athena)
 */

export const profileData: DeveloperProfile = {
  name: "Ariel John A. Amaba",
  handle: "arieljohnavilesamaba-gif",
  role: "Computer Engineering Student & Aspiring Software Engineer",
  status: "4th-Year Computer Engineering Student @ ICCT Colleges (Class of 2026)",
  location: "San Mateo, Rizal, Philippines",
  address: "14-1 Broadway St., Ampid 1, San Mateo, Rizal",
  phone: "09391444631",
  timezone: "GMT+8 (Philippine Standard Time)",
  avatarUrl: "assets/images/profile.jpg",
  about: {
    lead: "I am a 4th-year Computer Engineering student at ICCT Colleges Main Campus Cainta, inspired by the Promethean quest for technical knowledge and driven by a passion for programming, digital systems, and modern software engineering.",
    paragraphs: [
      "In Greek mythology, Prometheus brought the spark of divine knowledge to mortals, while Hephaestus forged the world's most intricate mechanisms. As a Computer Engineering student, I channel this exact dual spirit: mastering both the physical electrical domain and the digital realm of software architecture.",
      "Certified in TESDA NCII Electrical Installation and Management, I wield the practical electrical discipline akin to Zeus' thunderbolts—grounded in safety, high-precision diagnostics, and circuit mastery. In the software domain, I craft clean, object-oriented solutions in Java, write algorithmic scripts in Python, and construct swift, reactive web applications using React and TypeScript.",
      "With hands-on experience through On-the-Job Training as a Student Teacher, I bridge rigorous technical execution with patient mentorship, strategic communication, and collaborative leadership."
    ],
    philosophy: "Forge software with the precision of Hephaestus, illuminate solutions with the lightning of Zeus.",
    focusAreas: [
      "Core Programming & Algorithmic Logic (Java, Python)",
      "Modern Web Engineering & Reactive Architecture (React, TypeScript, Tailwind CSS)",
      "High-Voltage Systems & Digital Logic (TESDA NCII Electrical Standards)",
      "Automated CI/CD DevOps & Git Infrastructure (GitHub Actions)"
    ]
  },
  metrics: [
    {
      label: "Academic Standing",
      value: "4th Year",
      subtext: "BS Computer Engineering (ICCT Colleges)"
    },
    {
      label: "Divine Foundation",
      value: "Hardware + Code",
      subtext: "Zeus Voltage + Hephaestus Code"
    },
    {
      label: "National Credential",
      value: "TESDA NCII",
      subtext: "Electrical Installation & Management"
    },
    {
      label: "Olympian Pipeline",
      value: "CI/CD Active",
      subtext: "Zero-Downtime GitHub Actions"
    }
  ],
  socials: {
    github: "https://github.com/arieljohnavilesamaba-gif",
    linkedin: "https://linkedin.com",
    email: "arieljohnavilesamaba@gmail.com",
    phone: "+639391444631"
  },
  certifications: [
    {
      title: "TESDA NCII — Electrical Installation and Management",
      issuer: "Technical Education and Skills Development Authority (TESDA)",
      description: "National Certificate II credential verifying mastery in electrical systems installation, power distribution safety, maintenance protocols, blueprint reading, and circuit management.",
      skills: ["Electrical Wiring", "Circuit Diagnostics", "Safety Protocols", "Power Management"]
    }
  ],
  resume: {
    viewUrl: "#",
    filename: "Ariel_John_Amaba_Resume.pdf",
    summary: [
      "4th-year Computer Engineering student at ICCT Colleges Main Campus Cainta with verified academic standing.",
      "Hands-on programming capability in Java and Python, expanded with modern frontend web technologies (React, TypeScript, Tailwind CSS).",
      "Holder of TESDA NCII National Certificate in Electrical Installation and Management.",
      "Completed On the Job Training (OJT) as a Student Teacher with proven communication and mentorship skills.",
      "Active GitHub profile maintaining version-controlled software projects and automated deployment pipelines."
    ]
  }
};

/**
 * Projects List
 * Primary Featured Project: Personal GitHub Portfolio
 */
export const projectsData: Project[] = [
  {
    id: "personal-github-portfolio",
    title: "ArielAmabaPortfolio",
    tagline: "Featured Project: Production-grade engineering portfolio with automated CI/CD",
    category: "Software Development",
    description: "A professional, responsive website showcasing technical skills, academic journey at ICCT Colleges, projects, and credentials with a minimalist Greek mythology monochrome theme and automated CI/CD.",
    longDescription: "Built from scratch to demonstrate full-stack software development and deployment discipline. Features a classical minimalist Greek sculpture aesthetic, a strict monochrome black-and-white theme system, reactive component architecture in React 18 and TypeScript, and automated deployment to GitHub Pages via GitHub Actions.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Actions", "CI/CD"],
    techStack: ["React 18", "TypeScript 5", "Vite 6", "Tailwind CSS 3", "GitHub Actions"],
    githubUrl: "https://github.com/arieljohnavilesamaba-gif/personal-github-portfolio",
    liveUrl: "https://arieljohnavilesamaba-gif.github.io/personal-github-portfolio",
    featured: true,
    featuredBadge: "Primary Featured Project",
    features: [
      "Minimalist Greek mythology-inspired interface with strict monochrome black-and-white theme system",
      "Interactive resume modal reflecting verified academic and TESDA credentials",
      "Comprehensive technical skills matrix highlighting Java, Python, Web & Electrical proficiencies",
      "Education and experience timeline documenting ICCT Colleges and OJT teaching journey",
      "Direct contact integration with phone (09391444631), email, and copy-to-clipboard",
      "Automated GitHub Actions workflow for zero-downtime deployment to GitHub Pages"
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "100" },
      { label: "Type Safety", value: "Strict TS" },
      { label: "Design System", value: "Tailwind 3" },
      { label: "CI/CD Pipeline", value: "Passing" }
    ],
    date: "2026"
  },
  {
    id: "python-engineering-suite",
    title: "Python Algorithmic & Automation Suite",
    tagline: "Promethean spark: Data handling, file management, and computational script library",
    category: "Software Development",
    description: "A collection of computational and utility scripts written in Python to solve engineering logic challenges, process file batches, and automate repetitive workflows.",
    longDescription: "Demonstrates core Python capabilities: data structures, object-oriented principles, algorithmic efficiency, exception handling, and terminal user interaction.",
    tags: ["Python", "Algorithms", "Automation", "File I/O", "CLI"],
    techStack: ["Python 3.x", "Standard Library", "Git"],
    githubUrl: "https://github.com/arieljohnavilesamaba-gif/python-engineering-suite",
    featured: false,
    features: [
      "Algorithmic problem solving and data structure implementations",
      "Automated file reading, transformation, and structured output generation",
      "Modular class architecture adhering to clean programming principles"
    ],
    date: "2025"
  },
  {
    id: "java-core-system",
    title: "Java OOP Application & Management System",
    tagline: "Hephaestus' forge: Object-oriented software application with data persistence",
    category: "Software Development",
    description: "Modular desktop management application developed in Java emphasizing encapsulation, inheritance, polymorphism, and robust exception handling.",
    longDescription: "Built as part of Computer Engineering coursework and independent practice, showcasing structured software design, event handling, and data integrity validation.",
    tags: ["Java", "OOP", "Data Structures", "Clean Code"],
    techStack: ["Java 17+", "JVM", "Object-Oriented Design"],
    githubUrl: "https://github.com/arieljohnavilesamaba-gif/java-core-system",
    featured: false,
    features: [
      "Comprehensive object-oriented model with strict access controls and validation",
      "Interactive command/GUI interface for managing records and operations",
      "Structured exception handling ensuring application stability"
    ],
    date: "2025"
  },
  {
    id: "hardware-electronics-interface",
    title: "Computer Engineering Hardware & Circuit Interface",
    tagline: "Zeus' lightning: Circuit design and microcontroller logic simulation",
    category: "Hardware & Embedded",
    description: "Explores digital systems and computer engineering, combining circuit safety practices from TESDA NCII certification with digital logic principles.",
    longDescription: "Applies 4th-year Computer Engineering concepts, circuit design, power management, and hardware troubleshooting.",
    tags: ["Circuits", "TESDA NCII", "Hardware Integration", "CpE", "Digital Systems"],
    techStack: ["Circuit Design", "Electrical Standards", "Digital Logic", "Diagnostics"],
    githubUrl: "https://github.com/arieljohnavilesamaba-gif/hardware-circuit-interface",
    featured: false,
    features: [
      "Electrical installation safety and compliance adhering to TESDA NCII standards",
      "Analysis of circuit schematics and digital logic gates",
      "Hardware-to-software conceptual interfacing and system diagnostics"
    ],
    date: "2024"
  }
];

/**
 * Expanded Skills Matrix with Greek Mythology Themes & NO Percentages
 */
export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: "Python",
    level: "Advanced",
    tier: "Promethean Logic // Advanced",
    mythologySymbol: "🔥",
    mythologyTitle: "Promethean Fire",
    category: "Languages",
    description: "Scripting, algorithm design, data structures, and automated task execution.",
    highlights: ["Automation Scripts", "Algorithmic Logic", "Object-Oriented Python", "Data Processing"]
  },
  {
    name: "Java",
    level: "Advanced",
    tier: "Hephaestus' Forge // OOP Mastery",
    mythologySymbol: "⚒️",
    mythologyTitle: "Divine Architecture",
    category: "Languages",
    description: "Core Object-Oriented Programming (OOP), inheritance, encapsulation, and class architectures.",
    highlights: ["OOP Paradigms", "Data Structures", "Exception Handling", "Application Logic"]
  },
  {
    name: "JavaScript / TypeScript",
    level: "Proficient",
    tier: "Hermes' Flow // Modern Syntax",
    mythologySymbol: "🪽",
    mythologyTitle: "Swift Execution",
    category: "Languages",
    description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and static type contracts.",
    highlights: ["ES6+ Syntax", "Type Safety", "Async / Promises", "Modular Code"]
  },

  // Frontend Web Development
  {
    name: "React 18",
    level: "Proficient",
    tier: "Athena's Wisdom // Reactive UI",
    mythologySymbol: "🦉",
    mythologyTitle: "Strategic Components",
    category: "Frontend",
    description: "Building responsive single-page web applications with modular components and hooks.",
    highlights: ["Functional Components", "State & Effects Hooks", "Component Lifecycle", "SPA Architecture"]
  },
  {
    name: "HTML5 & Semantic Web",
    level: "Advanced",
    tier: "Parthenon Pillars // Semantic Foundation",
    mythologySymbol: "🏛️",
    mythologyTitle: "Structural Pillar",
    category: "Frontend",
    description: "Clean semantic markup, accessibility (a11y), responsive viewport configurations, and SEO meta tags.",
    highlights: ["Semantic Elements", "Accessibility (a11y)", "SEO Structure", "Form Validation"]
  },
  {
    name: "CSS3 & Modern Layouts",
    level: "Advanced",
    tier: "Olympian Aesthetics // Responsive Grid",
    mythologySymbol: "✨",
    mythologyTitle: "Divine Visuals",
    category: "Frontend",
    description: "Modern CSS layouts utilizing Flexbox, CSS Grid, custom properties, animations, and media queries.",
    highlights: ["Flexbox & CSS Grid", "Responsive Breakpoints", "Transitions & Keyframes", "Custom Properties"]
  },
  {
    name: "Tailwind CSS & Bootstrap",
    level: "Advanced",
    tier: "Hephaestus' Armor // Utility Design",
    mythologySymbol: "🛡️",
    mythologyTitle: "Design System",
    category: "Frontend",
    description: "Rapid, utility-first UI styling with custom design systems, dark modes, and responsive grids.",
    highlights: ["Utility-First Workflow", "Custom Design Tokens", "Glassmorphism", "Responsive Mobile-First"]
  },

  // Hardware & Systems
  {
    name: "TESDA NCII Electrical Installation & Management",
    level: "Certified Master",
    tier: "Zeus' Thunderbolt // Certified Master",
    mythologySymbol: "⚡",
    mythologyTitle: "National Credential",
    category: "Hardware & Systems",
    description: "National Certificate II in electrical installation, safety guidelines, wiring standards, and power maintenance.",
    highlights: ["Wiring & Circuit Installation", "Electrical Safety Standards", "System Troubleshooting", "Blueprint Reading"]
  },
  {
    name: "Circuit Analysis & Electrical Fundamentals",
    level: "Proficient",
    tier: "Aegis Power // System Diagnostics",
    mythologySymbol: "⚡",
    mythologyTitle: "High Voltage Logic",
    category: "Hardware & Systems",
    description: "Circuit analysis, components, digital logic principles, and power distribution fundamentals.",
    highlights: ["Circuit Diagnostics", "Component Analysis", "Power Distribution", "Schematic Interpretation"]
  },
  {
    name: "Computer Engineering & Digital Systems",
    level: "Proficient",
    tier: "Chronos Architecture // Digital Core",
    mythologySymbol: "⏳",
    mythologyTitle: "Computer Architecture",
    category: "Hardware & Systems",
    description: "Computer architecture, digital logic gates, microcontrollers, and hardware-software integration.",
    highlights: ["Digital Logic Design", "Microprocessor Concepts", "Computer Architecture", "Hardware-Software Interfacing"]
  },

  // Tools & DevOps
  {
    name: "Git & GitHub Version Control",
    level: "Advanced",
    tier: "Athena's Repository // Version Control",
    mythologySymbol: "📜",
    mythologyTitle: "Semantic Branching",
    category: "Tools & DevOps",
    description: "Branching workflows, commit conventions, remote repositories, and pull requests via GitHub (`arieljohnavilesamaba-gif`).",
    highlights: ["Branching & Merging", "Semantic Commits", "Remote Collaboration", "Repository Management"]
  },
  {
    name: "GitHub Actions & Pages CI/CD",
    level: "Proficient",
    tier: "Hermes' Pipeline // Automated Deployment",
    mythologySymbol: "🚀",
    mythologyTitle: "CI/CD Automation",
    category: "Tools & DevOps",
    description: "Authoring automated build and deployment pipelines for static and single-page web applications.",
    highlights: ["Automated Deployments", "Zero-Downtime Builds", "CI Workflow Authoring", "GitHub Pages Hosting"]
  },
  {
    name: "VS Code & Terminal Tooling",
    level: "Advanced",
    tier: "Olympian Terminal // Developer Tooling",
    mythologySymbol: "⚡",
    mythologyTitle: "CLI Mastery",
    category: "Tools & DevOps",
    description: "Efficient development environments, debugging extensions, CLI commands, and package management.",
    highlights: ["CLI Proficiency", "npm / pip Ecosystems", "Debugger Configuration", "Workspace Customization"]
  }
];

/**
 * Education, Working Experience & Milestones Timeline
 */
export const timelineData: TimelineItem[] = [
  {
    id: "timeline-cpe",
    title: "Bachelor of Science in Computer Engineering (BSCpE)",
    subtitle: "4th-Year Student (Graduating 2026)",
    organization: "ICCT Colleges — Main Campus Cainta",
    location: "Cainta, Rizal, Philippines",
    period: "2023 — 2026 (Expected)",
    type: "education",
    description: "Undergraduate degree program combining computer systems, digital logic, software development, and electrical engineering with a dedicated focus on computer systems and programming.",
    achievements: [
      "Currently in 4th year with strong focus on software engineering, programming, and hardware-software systems.",
      "Completed courses in Object-Oriented Programming, Data Structures, Digital Logic Design, and Computer Architecture.",
      "Actively applying modern programming languages (Java, Python, TypeScript) to academic and independent projects."
    ],
    technologies: ["Computer Engineering", "Java", "Python", "Digital Logic", "Computer Architecture"]
  },
  {
    id: "timeline-ojt",
    title: "Student Teacher — On the Job Training (OJT)",
    subtitle: "Instructional Support & Academic Demonstration",
    organization: "Working Experience / OJT Practicum",
    location: "Rizal, Philippines",
    period: "Practicum Experience",
    type: "experience",
    description: "Served as a Student Teacher during On-the-Job Training, assisting educators in lesson preparation, facilitating classroom technical demonstrations, and mentoring students.",
    achievements: [
      "Delivered clear, structured explanations of technical and foundational concepts to students.",
      "Assisted supervising instructors with student evaluation, classroom organization, and hands-on laboratory supervision.",
      "Honed strong interpersonal communication, patience, and leadership in an instructional setting."
    ],
    technologies: ["Instructional Delivery", "Student Mentorship", "Technical Communication", "Classroom Leadership"]
  },
  {
    id: "timeline-tesda",
    title: "TESDA NCII — Electrical Installation and Management",
    subtitle: "National Certificate II Credential",
    organization: "Technical Education and Skills Development Authority (TESDA)",
    location: "Philippines",
    period: "Certified Credential",
    type: "certification",
    description: "Earned national certification demonstrating industry-standard competency in electrical installation, residential and commercial wiring, safety regulations, and circuit maintenance.",
    achievements: [
      "Passed rigorous hands-on assessments in circuit wiring, conduit bending, power box installation, and circuit troubleshooting.",
      "Certified in occupational health and safety standards for electrical engineering environments."
    ],
    technologies: ["Electrical Installation", "Wiring Standards", "Circuit Diagnostics", "Safety Protocols"]
  },
  {
    id: "timeline-humss",
    title: "Senior High School — Humanities and Social Sciences (HUMSS)",
    subtitle: "Senior High School Diploma",
    organization: "Eastern Star Academy",
    location: "Philippines",
    period: "2021 — 2023",
    type: "education",
    description: "Completed senior high school education focusing on communication, analytical writing, social dynamics, and critical thinking.",
    achievements: [
      "Developed robust written and verbal communication skills beneficial for technical documentation and team collaboration.",
      "Participated in research presentations and group academic initiatives."
    ],
    technologies: ["Critical Thinking", "Technical Writing", "Public Speaking", "Analytical Research"]
  }
];
