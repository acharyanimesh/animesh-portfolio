export const profile = {
  name: 'Animesh Acharya',
  role: 'Front-End Developer & Data Visualization Specialist',
  tagline:
    'I turn complex datasets into clear, actionable insights and build fast, responsive web experiences.',
  location: 'Kathmandu, Nepal',
  email: 'acharyanim3sh@gmail.com',
  phone: '+977 9851341626',
  about: [
    "I'm an Information Technology undergraduate at Nepal College of Information Technology (Pokhara University) with around a year of professional experience as a Data Visualization Specialist and Front-End Developer.",
    "I'm skilled at turning complex datasets into clear, accurate insights — and at verifying, comparing, and evaluating information for relevance and accuracy. I work comfortably to detailed guidelines and hold myself to a consistent, quality-focused standard.",
    "I enjoy building fast, responsive web experiences with modern frameworks and utility-first styling. I have a working understanding of UI/UX principles and a strong sense of what makes interfaces intuitive, clear, and easy to use.",
  ],
}

export const experience = [
  {
    role: 'Data Visualization Specialist & Front-End Developer',
    company: 'Sayathari Tech',
    url: 'https://www.sayathari.com/',
    location: 'Kathmandu',
    period: 'Apr 2025 — May 2026',
    points: [
      'Designed and built interactive, multidimensional dashboards and charts, translating complex business datasets into clear, actionable, and visually compelling insights for stakeholders.',
      'Partnered with cross-functional teams and business stakeholders in an Agile environment to gather functional requirements and translate them into clean technical specifications.',
      'Optimized front-end data rendering, data models, and queries to ensure high performance, rapid load times, and seamless user experiences.',
    ],
  },
]

export const projects = [
  {
    title: 'Fullstack-IMS',
    subtitle: 'Inventory Management System · Full-stack',
    github: 'https://github.com/acharyanimesh/Fullstack-IMS',
    description:
      'A full-stack inventory management system with a Spring Boot (Java) backend and JavaScript frontend. Relational database schema ensures data integrity and efficient querying, with validation across all CRUD operations.',
    tech: ['Spring Boot', 'Java', 'React', 'REST APIs', 'SQL'],
    highlights: [
      'Low-stock alerts, transaction logs, and search/filter functionality',
      'Resolved data-quality issues (e.g., null product responses), improving accuracy and reliability',
      'Built following REST and modular-design principles',
    ],
  },
  {
    title: 'EDA-Model-Comparison',
    subtitle: 'Exploratory Data Analysis & ML model comparison',
    github: 'https://github.com/acharyanimesh/EDA-Model-Comparison',
    description:
      'A collection of data analysis projects in Python and Jupyter Notebooks — exploratory data analysis and machine-learning model comparisons across real-world datasets.',
    tech: ['Python', 'Jupyter', 'Pandas', 'Machine Learning'],
    highlights: [
      'Bank fraud detection — identifying fraudulent transactions',
      'Netflix content analysis — exploring trends in the catalog',
      'Chess dataset analysis — patterns and outcomes from game data',
    ],
  },
  {
    title: 'TrekNepal',
    subtitle: 'Web-based Trek Information Platform',
    description:
      'A responsive web platform mapping trekking routes across Nepal. Researched, verified, and organized routes, preparation tips, and safety information across regions — prioritizing geographic accuracy and clear, well-structured content.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Geographic Research'],
    highlights: [
      'Verified and organized trekking routes and safety info across regions of Nepal',
      'Responsive site focused on accurate, reliable information delivery',
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    blurb:
      'The core languages I write every day — from structuring and styling the web to scripting, data work, and systems-level programming.',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'C/C++'],
  },
  {
    group: 'Frontend',
    blurb:
      'Building fast, responsive, component-driven interfaces with modern frameworks and utility-first styling.',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    group: 'Backend',
    blurb:
      'Designing clean, secure server-side logic — REST APIs, authentication flows, and well-structured Django applications.',
    items: ['Django', 'Django REST Framework', 'API Development', 'Authentication'],
  },
  {
    group: 'Database',
    blurb:
      'Modeling relational schemas that keep data consistent, validated, and fast to query.',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    group: 'Data & Visualization',
    blurb:
      'Turning raw, messy datasets into clear dashboards and reliable insights — with a sharp eye for data quality. Currently deepening this stack with an advanced Business Data Analytics with AI course.',
    items: [
      'Power BI',
      'SQL',
      'Advanced Excel',
      'Data Analysis',
      'Google Analytics',
      'AI-Assisted Analytics',
      'Data Quality & Validation',
    ],
  },
  {
    group: 'Tools',
    blurb:
      'The everyday toolkit that keeps my workflow versioned, tested, designed, and deployed.',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Cloudflare'],
  },
  {
    group: 'Other',
    blurb:
      'The extras that ship a project properly — search visibility, smooth deployments, API integration, and design sense.',
    items: ['SEO', 'Deployment', 'REST API Integration', 'UI/UX Understanding'],
  },
]

export const skillDescriptions = {
  HTML: 'The markup language of the web — it defines the structure and content of every page you see in a browser.',
  CSS: 'The styling language that controls how web pages look: layout, colors, typography, spacing, and animations.',
  JavaScript: 'The programming language of the browser — it makes web pages interactive, from button clicks to full applications.',
  TypeScript: 'JavaScript with static types. It catches bugs before the code runs and makes large codebases easier to maintain.',
  Python: 'A versatile, readable programming language — my go-to for data handling, scripting, and backend work with Django.',
  'C/C++': 'Low-level systems languages that teach how computers really work: memory, pointers, and performance.',
  'Next.js': 'A React framework that adds routing, server-side rendering, and static generation — great for fast, SEO-friendly sites.',
  'React.js': 'A JavaScript library for building user interfaces out of reusable components that update efficiently as data changes.',
  'Tailwind CSS': 'A utility-first CSS framework — styling happens right in the markup with small composable classes, keeping designs consistent.',
  Bootstrap: 'A classic CSS framework with ready-made, responsive components for building clean interfaces quickly.',
  'Responsive Design': 'Building layouts that adapt gracefully to any screen — phone, tablet, or widescreen desktop.',
  Django: 'A "batteries-included" Python web framework — ORM, admin panel, auth, and security built in for rapid, robust backends.',
  'Django REST Framework': 'The standard toolkit for building clean REST APIs on top of Django, with serializers, viewsets, and permissions.',
  'API Development': 'Designing the endpoints that let frontends and services talk to each other — predictable, documented, and secure.',
  Authentication: 'Verifying who a user is and what they can do: login flows, sessions, tokens, and permissions.',
  PostgreSQL: 'A powerful open-source relational database known for reliability, strictness, and advanced features.',
  MySQL: 'One of the most widely used relational databases — fast, dependable, and everywhere in web hosting.',
  SQLite: 'A tiny, serverless SQL database stored in a single file — perfect for development, prototypes, and embedded apps.',
  'Power BI': "Microsoft's business-intelligence tool — I use it to build interactive dashboards that turn raw data into decisions.",
  SQL: 'The language of data — joins, window functions, and CTEs to query and reshape relational databases with precision.',
  'Advanced Excel': 'Beyond the basics: pivot tables, data modeling, and advanced functions for fast, reliable business analysis.',
  'Google Analytics': 'Measuring how users actually behave — traffic, campaigns, and conversion insights for data-driven decisions.',
  'AI-Assisted Analytics': 'Using ChatGPT, Copilot, and Gemini to accelerate query writing, dashboard building, and analysis workflows.',
  'Data Analysis': 'Exploring datasets to find patterns, answer questions, and back decisions with evidence instead of guesses.',
  'Data Quality & Validation': 'Verifying and comparing data, spotting inconsistencies, and keeping datasets accurate and trustworthy.',
  Git: 'The version-control system that tracks every change in a codebase and makes collaboration safe.',
  GitHub: 'The platform where my code lives — repositories, pull requests, issues, and collaboration.',
  'VS Code': 'My editor of choice — fast, extensible, and equipped for every language I work in.',
  Postman: 'A tool for building, testing, and documenting API requests before a single line of frontend touches them.',
  Figma: 'A collaborative design tool — I use it to read, refine, and translate UI designs into working code.',
  Cloudflare: 'DNS, CDN, and security services that make sites faster and safer worldwide.',
  SEO: 'Search-engine optimization — structuring sites and content so they rank well and get found organically.',
  Deployment: 'Taking a project from "works on my machine" to live on the internet — builds, hosting, domains, and CI.',
  'REST API Integration': 'Connecting frontends to third-party or in-house APIs: fetching, transforming, and rendering external data reliably.',
  'UI/UX Understanding': 'A working sense of what makes interfaces intuitive — hierarchy, feedback, spacing, and flow.',
}

export const education = [
  {
    degree: 'B.E. in Information Technology',
    school: 'Nepal College of Information Technology (Pokhara University)',
    period: '2022 — 2026 (Ongoing)',
    location: 'Kathmandu',
  },
  {
    degree: '10+2 (Higher Secondary)',
    school: 'Liverpool International Secondary School/College',
    period: '2013 — 2015',
    location: 'Naya Baneshwar, Kathmandu',
  },
  {
    degree: 'SLC (School Leaving Certificate)',
    school: 'Meridian International School',
    period: 'SLC 2069 BS',
    location: 'Baluwatar, Kathmandu',
  },
]

export const references = [
  {
    name: 'Mahesh Neupane',
    title: 'Professor & Head of Department (IT), NCIT',
    phone: '+977 9851176077',
    email: 'hod.it@ncit.edu.np',
  },
  {
    name: 'Atul Ballav Kharel',
    title: 'Project Manager, Sayathari Tech',
    phone: '+977 9865441411',
    email: 'atul@rocketeers.com.au',
  },
]

export const training = [
  {
    title: 'Business Data Analytics with AI',
    org: 'Skill Shikshya · Ongoing (2026)',
    detail:
      '2.5-month advanced course — advanced Excel, SQL (joins, window functions, CTEs), Power BI, Python (Pandas, NumPy), PostgreSQL, Google Analytics, and AI-assisted analytics with Copilot, ChatGPT & Gemini.',
  },
  {
    title: '3-Month MERN Stack Training',
    org: 'Sipalaya',
    detail: 'Full-stack development — MongoDB, Express, React, Node, REST APIs, authentication, CRUD.',
  },
  {
    title: '3-Day IoT Workshop',
    org: 'NCIT · June 2025',
    detail: 'Sensors, microcontrollers, and IoT data communication.',
  },
  {
    title: '2-Day Flutter Workshop',
    org: 'Nepal Tek Community · Feb 2025',
    detail: 'Cross-platform app development with Flutter and Dart.',
  },
]

export const socials = [
  { label: 'GitHub', url: 'https://github.com/acharyanimesh', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:acharyanim3sh@gmail.com', icon: 'mail' },
]
