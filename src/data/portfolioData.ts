import type { Project, SkillGroup, ValueCard, StrengthCard, FAQItem, EducationItem } from '../types/portfolio';

export const CANDIDATE_INFO = {
  name: "Siddharth Goyal",
  title: "BCA Student | Customer Communication | Problem Solving | Technology",
  alternativeHeadline: "Technology-Oriented BCA Student with Strong Communication & Problem-Solving Skills",
  supportingStatement: "Building practical technology solutions while developing strong communication, analytical thinking, and problem-solving skills.",
  location: "New Delhi, India",
  email: "Siddharth85069@gmail.com",
  phone: "+91 85069 66267",
  linkedin: "https://linkedin.com/in/siddharth-goyal-548001372",
  linkedinDisplay: "linkedin.com/in/siddharth-goyal-548001372",
  github: "https://github.com/sid43-stack",
  githubDisplay: "github.com/sid43-stack",
  resumePath: "/resume/Siddharth_Goyal_Wipro.pdf",
  graduationYear: "2027",
  institute: "Institute of Information Technology and Management, Janakpuri",
  university: "GGSIPU",
  gpa: "8.4",
};

export const HERO_INTRO = 
  "I'm a BCA student at GGSIPU with hands-on experience building AI and technology projects. I enjoy understanding problems, breaking them into practical solutions, communicating ideas clearly, and working with people and technology.";

export const ABOUT_TEXT = [
  "I'm a Bachelor of Computer Applications student graduating in 2027 from the Institute of Information Technology and Management, GGSIPU.",
  "My background is primarily in technology and practical project development, where I have worked on AI, web applications, computer vision, security monitoring, and edge-AI concepts.",
  "Through these projects, I have developed strong problem-solving, analytical thinking, teamwork, documentation, and communication skills.",
  "I am comfortable learning new systems, understanding user or business requirements, troubleshooting problems, and explaining technical information in a clear and structured way.",
  "I am particularly interested in opportunities where I can combine communication, technology, customer interaction, and problem solving in a professional business environment."
];

export const VALUE_CARDS: ValueCard[] = [
  {
    id: "communication",
    title: "Clear Communication",
    description: "I focus on understanding information first and communicating it clearly, simply, and professionally.",
    iconName: "MessageSquareCheck"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "I approach problems systematically, identify the root issue, and work toward practical solutions.",
    iconName: "Compass"
  },
  {
    id: "tech-comfort",
    title: "Technology Comfort",
    description: "My technical background allows me to work comfortably with digital systems, applications, data, and new tools.",
    iconName: "Cpu"
  },
  {
    id: "fast-learner",
    title: "Fast Learner",
    description: "I am comfortable learning new processes, tools, domains, and workflows when required.",
    iconName: "Zap"
  },
  {
    id: "team-collab",
    title: "Team Collaboration",
    description: "My projects have required coordination, responsibility, troubleshooting, and working toward shared outcomes.",
    iconName: "Users"
  },
  {
    id: "attention-detail",
    title: "Attention to Detail",
    description: "I value accurate information, proper documentation, structured workflows, and reliable execution.",
    iconName: "FileCheck"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Communication",
    description: "Verbal, written, and active listening skills for business and cross-functional clarity.",
    iconName: "MessagesSquare",
    skills: [
      "Written Communication",
      "Verbal Communication",
      "Active Listening",
      "Clear Explanation",
      "Professional Communication"
    ]
  },
  {
    category: "Customer & Business",
    description: "Issue comprehension, structured follow-up, and service-oriented teamwork.",
    iconName: "Briefcase",
    skills: [
      "Customer-focused Problem Solving",
      "Issue Understanding",
      "Resolution Mindset",
      "Documentation",
      "Follow-up",
      "Team Collaboration"
    ]
  },
  {
    category: "Analytical",
    description: "Systematic investigation, log and data inspection, and methodical troubleshooting.",
    iconName: "LineChart",
    skills: [
      "Analytical Thinking",
      "Troubleshooting",
      "Data Analysis",
      "Structured Problem Solving",
      "Attention to Detail"
    ]
  },
  {
    category: "Technology",
    description: "Core programming languages, web frameworks, databases, and version control tools.",
    iconName: "Code2",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "GitHub"
    ]
  },
  {
    category: "AI / Technology",
    description: "Practical implementation of vision, speech, and language model workflows.",
    iconName: "BrainCircuit",
    skills: [
      "LLM APIs",
      "NLP",
      "Computer Vision",
      "YOLOv11",
      "ByteTrack",
      "Speech AI",
      "AI-assisted workflows"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "echo",
    title: "ECHO — AI Emotional Companion",
    tagline: "Voice-first conversational AI application designed for natural, real-time interaction.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Web Speech API", "LLM/TTS APIs"],
    description: "Built a voice-first conversational AI application designed for natural, real-time interaction.",
    keyPoints: [
      "Developed structured conversation workflows for natural interaction.",
      "Implemented features including memory, journaling, mood tracking, conversation streaks, and user-state management.",
      "Worked across frontend, backend, APIs, and AI-assisted workflows.",
      "Focused on making complex AI functionality understandable and useful from a user's perspective."
    ],
    hrTakeaway: "Shows user-focused thinking, communication, adaptability, and technical problem solving.",
    problem: "Users frequently find conversational technology rigid, difficult to engage with, and lacking contextual continuity over time.",
    approach: "Designed an empathetic, voice-first architecture emphasizing conversational flow, low-latency audio capture, and stateful memory retention.",
    whatIBuilt: [
      "Voice input and output pipeline leveraging Web Speech and speech synthesis APIs.",
      "Conversation workflow logic with mood categorization and interactive journaling.",
      "State persistence and conversation streak engine in PostgreSQL and Node.js.",
      "User-friendly interface focusing on intuitive, human-centered interaction."
    ],
    challenges: "Managing real-time audio latency, handling unpredictable speech recognition inputs, and structuring conversation state cleanly across asynchronous API calls.",
    outcomePurpose: "Designed and implemented the core workflow to make complex conversational AI accessible and seamless from an end-user's viewpoint.",
    whatILearned: "The critical importance of active listening in communication design, user-centered feedback loops, and handling edge cases in user input gracefully.",
    pipelineSteps: [
      "User Voice Audio Capture (Web Speech API)",
      "State & Mood Tracking Engine (Node.js & PostgreSQL)",
      "Context-Aware Prompt Processing Pipeline",
      "Empathetic Voice Response Synthesis (Web Speech Synthesis)"
    ]
  },
  {
    id: "cybercctv",
    title: "CYBERCCTV — Security Monitoring & Incident Analysis",
    tagline: "Security monitoring platform converting raw telemetry into understandable incident reports.",
    technologies: ["Python", "FastAPI", "React", "Log/CSV Analysis"],
    description: "Built a security monitoring platform that converts raw security data into understandable incidents, alerts, dashboards, and reports.",
    keyPoints: [
      "Processed logs, text, and CSV security information.",
      "Implemented rule-based detection for SSH brute force, SQL injection, directory traversal, and port scans.",
      "Generated severity-based incidents and alerts.",
      "Designed the system to make technical security information easier to understand and act upon."
    ],
    hrTakeaway: "Shows analytical thinking, attention to detail, documentation, and structured problem solving.",
    problem: "Raw system logs and security event streams are often overwhelmingly dense, making it difficult for operators to quickly identify, understand, and triage real incidents.",
    approach: "Implemented a structured parser and rule-evaluation pipeline that ingests heterogeneous logs, classifies threats by severity, and presents action-oriented incident summaries.",
    whatIBuilt: [
      "Log and CSV ingestion parser supporting multiple system log formats.",
      "Rule-based detection logic for common intrusion vectors including SSH brute force, SQL injection, and directory traversal.",
      "Categorized incident dashboard with priority-ranked alerts and timestamped event sequences.",
      "Structured incident report export feature facilitating clear team handovers."
    ],
    challenges: "Filtering out high volumes of benign system noise while accurately isolating anomalous patterns and organizing incident timelines.",
    outcomePurpose: "Designed and implemented the core workflow to transform dense technical log streams into structured, human-readable operational alerts.",
    whatILearned: "The value of clear documentation, rigorous attention to detail, and creating reporting workflows that help decision-makers act quickly.",
    pipelineSteps: [
      "Raw Multi-Format Log Stream Ingestion (Auth, Web, SSH)",
      "Rule-Based Signature & Anomaly Parser",
      "Severity Scoring & Incident Stratification",
      "Operator Dashboard & Structured Handoff Report"
    ]
  },
  {
    id: "secureassure",
    title: "SECUREASSURE — AI-Powered CCTV Surveillance",
    tagline: "Real-time automated surveillance system for detection, tracking, and threat verification.",
    technologies: ["Python", "YOLOv11", "ByteTrack", "ArcFace", "FastAPI", "OpenCV"],
    description: "Developed an AI-powered surveillance system for real-time detection, tracking, and monitoring.",
    keyPoints: [
      "Implemented real-time object detection and tracking.",
      "Worked with detection of security threats and abnormal activity.",
      "Integrated face-recognition capabilities.",
      "Structured event-based monitoring workflows.",
      "Troubleshot multiple technical components to build a reliable system."
    ],
    hrTakeaway: "Shows technical adaptability, troubleshooting, persistence, and ability to work with complex systems.",
    problem: "Standard surveillance feeds require constant manual monitoring, which leads to fatigue, missed events, and delayed response times.",
    approach: "Combined computer vision models with multi-object tracking and verification algorithms to automate event logging and anomaly alerts in video feeds.",
    whatIBuilt: [
      "Real-time detection pipeline using YOLOv11 for objects and personnel.",
      "Persistent tracking across camera frames using ByteTrack.",
      "Verification and feature-matching module using ArcFace embeddings.",
      "Event logging system with timestamped alerts and fast API endpoints in FastAPI."
    ],
    challenges: "Balancing processing throughput with detection accuracy, handling frame drops, and resolving conflicting library dependencies during integration.",
    outcomePurpose: "Designed and implemented the core workflow for reliable real-time video stream analysis and event notifications.",
    whatILearned: "Systematic troubleshooting, persistence when debugging multi-dependency software pipelines, and the necessity of dependable execution.",
    pipelineSteps: [
      "RTSP Real-Time Camera Stream Acquisition",
      "YOLOv11 Multi-Object & Perimeter Detection",
      "ByteTrack Frame-to-Frame Temporal Association",
      "ArcFace Identity Verification & Alert Telemetry"
    ]
  },
  {
    id: "edgesage",
    title: "EDGESAGE — Offline Edge-AI Disaster Intelligence",
    tagline: "Resilient offline information retrieval assistant for disaster and network-denied environments.",
    technologies: ["ESP32", "Vector Embeddings", "Offline Retrieval", "Mesh Networking"],
    description: "Designed an offline AI assistant for accessing emergency information when internet connectivity is unavailable.",
    keyPoints: [
      "Designed an offline information-retrieval workflow.",
      "Worked with knowledge chunking and vector embeddings.",
      "Explored constrained hardware and offline AI workflows.",
      "Focused on reliability and clear information delivery during network failures."
    ],
    hrTakeaway: "Shows innovation, structured thinking, reliability, and ability to work under constraints.",
    problem: "During critical emergencies or network outages, first responders and affected individuals are cut off from online databases, manuals, and emergency guidelines.",
    approach: "Engineered a localized knowledge-retrieval pipeline capable of running on low-power hardware without external internet access.",
    whatIBuilt: [
      "Chunked knowledge base of first-aid, evacuation, and emergency protocols.",
      "Offline embedding index optimized for fast keyword and vector matching on local storage.",
      "Microcontroller-compatible interface for querying critical instructions.",
      "Resilient query-response architecture prioritizing clarity and brevity."
    ],
    challenges: "Extremely tight memory and storage constraints, requiring careful data compression and strict prioritization of query speed over exhaustive text generation.",
    outcomePurpose: "Designed and implemented the core workflow for zero-connectivity knowledge delivery under disaster scenarios.",
    whatILearned: "How to operate effectively under severe resource constraints, the importance of fail-safe system design, and communicating high-stakes instructions clearly and concisely.",
    pipelineSteps: [
      "Emergency Protocol Knowledge Extraction & Chunking",
      "Compact Local Vector Embedding Index",
      "Constrained Hardware Storage Optimization (ESP32)",
      "Zero-Network Resilient Emergency Response Delivery"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    period: "2024–2027",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Institute of Information Technology and Management, Janakpuri",
    boardOrUniversity: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    gpaOrStream: "GPA: 8.4",
    description: "Focusing on computer applications, software design, database management systems, data structures, and computer networking while developing practical analytical and problem-solving skills.",
    highlights: [
      "Current Cumulative GPA: 8.4 / 10",
      "Active participant in technical projects and problem-solving workshops",
      "Hands-on project work combining software design with practical user requirements"
    ]
  },
  {
    period: "Completed",
    degree: "Senior Secondary (Class XII)",
    institution: "Deepanshu Public School, New Delhi",
    boardOrUniversity: "Central Board of Secondary Education (CBSE)",
    gpaOrStream: "Stream: Science",
    description: "Solid foundation in analytical thinking, scientific methodologies, mathematics, and logical reasoning.",
    highlights: [
      "Stream: Science (Physics, Chemistry, Mathematics)",
      "Developed strong quantitative and logical aptitude"
    ]
  }
];

export const PROFESSIONAL_STRENGTHS: StrengthCard[] = [
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "Systematic root-cause identification and practical resolution.",
    iconName: "SearchCheck"
  },
  {
    id: "analytical-thinking",
    title: "Analytical Thinking",
    description: "Evaluating complex inputs, data, and workflows objectively.",
    iconName: "Brain"
  },
  {
    id: "communication",
    title: "Communication",
    description: "Clear, structured, and professional verbal and written expression.",
    iconName: "MessageSquare"
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description: "Accountability, coordination, and shared outcome focus.",
    iconName: "Users2"
  },
  {
    id: "adaptability",
    title: "Adaptability",
    description: "Responsive to shifting requirements and dynamic environments.",
    iconName: "Shuffle"
  },
  {
    id: "attention-detail",
    title: "Attention to Detail",
    description: "High rigor in documentation, data verification, and workflows.",
    iconName: "CheckCircle2"
  },
  {
    id: "learning-ability",
    title: "Learning Ability",
    description: "Rapidly mastering new tools, business processes, and standards.",
    iconName: "GraduationCap"
  },
  {
    id: "technical-understanding",
    title: "Technical Understanding",
    description: "Translating digital systems and technical concepts into everyday clarity.",
    iconName: "Layers"
  }
];

export const CAREER_DIRECTION = {
  title: "What I'm Looking For",
  content: "I'm looking for an entry-level opportunity where I can work in a professional, technology-driven environment, interact with people, understand business requirements, solve problems, and continuously develop my communication and professional skills.\n\nI am particularly interested in customer-facing, business-process, technology-support, and operations-oriented opportunities where my technical background can complement my communication and analytical abilities.",
  targetRoles: [
    "B2B Customer Support & Process Operations",
    "Technical Support & Client Service",
    "Business Process Services (BPS)",
    "Operations & Solution Communication"
  ]
};

export const QUICK_HR_INTRO = 
  "Hello, I'm Siddharth Goyal. I'm currently pursuing my BCA from the Institute of Information Technology and Management under GGSIPU, and I will graduate in 2027.\n\nMy background is in technology and practical project development, where I have worked on AI, web applications, security monitoring, and edge-AI projects.\n\nThrough these experiences, I've developed strong problem-solving, analytical thinking, teamwork, and communication skills.\n\nI'm someone who enjoys understanding problems, learning new systems, and communicating solutions clearly. I'm now looking for an opportunity where I can combine these strengths in a professional, customer-focused environment and continue growing.";

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should we hire me?",
    answer: "I bring a combination of technical understanding, communication, analytical thinking, and willingness to learn. While I am at the beginning of my professional career, I have already worked on complex practical projects that required problem solving, teamwork, documentation, and persistence."
  },
  {
    id: "faq-2",
    question: "What are your strengths?",
    answer: "My main strengths are problem solving, adaptability, communication, analytical thinking, and learning new systems quickly."
  },
  {
    id: "faq-3",
    question: "What is your technical background?",
    answer: "My technical background includes Python, JavaScript, SQL, React, Node.js, PostgreSQL, REST APIs, AI/ML concepts, computer vision, and AI-assisted applications."
  },
  {
    id: "faq-4",
    question: "Are you comfortable working with customers?",
    answer: "I understand that effective customer service starts with listening carefully, understanding the actual issue, communicating clearly, and following through until the issue is resolved or properly escalated."
  },
  {
    id: "faq-5",
    question: "Why do you want to work in a customer-facing role?",
    answer: "I enjoy understanding problems and helping convert them into clear solutions. My technical background gives me the ability to understand systems, while my communication skills help me explain information clearly. I see a customer-facing role as an opportunity to develop both professionally."
  }
];
