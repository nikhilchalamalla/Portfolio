export interface Project {
  id: string;
  title: string;
  period: string;
  category: "fullstack" | "backend" | "datascience";
  problem: string;
  solution: string;
  tech: string[];
  metrics: string[];
  architecture?: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeColor?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: { name: string; level: number; highlight?: boolean }[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    roleTitle: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    leetcode: string;
    bio: string;
    highlights: { count: string; label: string; sub: string }[];
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: string[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Chalamalla Nikhil",
    roleTitle: "Software Engineer | Full-Stack & Cloud Developer",
    tagline: "Building scalable Java Spring Boot backends, high-performance React applications, and cloud architecture.",
    email: "nikhilchalamalla4@gmail.com",
    phone: "+91 8790353618",
    location: "Phagwara, Punjab / Telangana, India",
    linkedin: "https://linkedin.com/in/chalamalla-nikhil",
    github: "https://github.com/nikhilchalamalla",
    leetcode: "https://leetcode.com/u/nikhilchalamalla/",
    bio: "Software Engineering student pursuing B.Tech in Computer Science with hands-on experience in Java, Python, Spring Boot, React.js, SQL, and RESTful API development. Strong foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms (370+ LeetCode solved), Database Management, and Cloud Systems (AWS Certified Solutions Architect Associate). Passionate about building enterprise-grade applications, emerging tech like Salesforce & ServiceNow, and scalable software solutions.",
    highlights: [
      { count: "370+", label: "DSA Problems", sub: "Solved on LeetCode" },
      { count: "10K+", label: "Records Processed", sub: "Banking Data Analytics" },
      { count: "100+", label: "Stream Uploads", sub: "Supported in Analytics Platform" },
      { count: "AWS", label: "Certified Architect", sub: "Solutions Architect Associate" },
    ],
  },
  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "Java", level: 90, highlight: true },
        { name: "Python", level: 85, highlight: true },
        { name: "JavaScript (ES6+)", level: 88, highlight: true },
        { name: "SQL", level: 85, highlight: true },
      ],
    },
    {
      category: "Backend Development",
      icon: "server",
      items: [
        { name: "Spring Boot", level: 90, highlight: true },
        { name: "Spring MVC", level: 85 },
        { name: "Spring Security & JWT", level: 85, highlight: true },
        { name: "Spring Data JPA (Hibernate)", level: 88 },
        { name: "RESTful APIs", level: 92, highlight: true },
        { name: "Node.js & Express.js", level: 84 },
        { name: "WebSockets", level: 82 },
      ],
    },
    {
      category: "Frontend Development",
      icon: "layout",
      items: [
        { name: "React.js", level: 88, highlight: true },
        { name: "HTML5 & CSS3", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "Thymeleaf", level: 80 },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: "database",
      items: [
        { name: "MySQL", level: 88, highlight: true },
        { name: "MongoDB", level: 82 },
        { name: "AWS (Solutions Architect)", level: 85, highlight: true },
      ],
    },
    {
      category: "Developer Tools & Testing",
      icon: "wrench",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Postman", level: 88 },
        { name: "IntelliJ IDEA & Eclipse", level: 85 },
        { name: "Apache Tomcat & Maven", level: 82 },
      ],
    },
    {
      category: "CS Fundamentals & Emerging Tech",
      icon: "cpu",
      items: [
        { name: "Data Structures & Algorithms", level: 92, highlight: true },
        { name: "Object-Oriented Programming (OOP)", level: 90 },
        { name: "DBMS & SQL", level: 88 },
        { name: "Operating Systems & Networks", level: 82 },
        { name: "Salesforce & ServiceNow", level: 75 },
      ],
    },
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "InternElite Edutech Pvt Ltd",
      location: "Remote",
      period: "Oct 2023 – Dec 2023",
      points: [
        "Processed, cleaned, and standardized 10,000+ banking records using Python, Pandas, and NumPy, reducing manual effort by ~30%.",
        "Conducted Exploratory Data Analysis (EDA) to identify trends and generate actionable business insights for decision-making.",
        "Automated data preprocessing workflows, improving operational pipeline execution efficiency by ~20%.",
        "Collaborated closely with team members to solve analytical problems and optimize data processing pipelines.",
        "Ensured rigorous data quality, schema integrity, and consistency across structured financial datasets.",
      ],
      tech: ["Python", "Pandas", "NumPy", "Exploratory Data Analysis", "Data Cleaning", "Automation"],
    },
  ],
  projects: [
    {
      id: "real-time-chat",
      title: "Real Time Chat Application",
      period: "Jan 2026 – Mar 2026",
      category: "backend",
      problem: "Traditional HTTP REST architectures lack support for bi-directional instant messaging with low latency and granular role-based authentication.",
      solution: "Engineered a production-grade real-time messaging system leveraging Java, Spring Boot, and WebSockets for low-latency bi-directional messaging. Secured end-to-end communication using Spring Security and JWT, while managing data persistence with Spring Data JPA and MySQL.",
      tech: ["Java", "Spring Boot", "WebSockets", "MySQL", "Spring Security", "JWT", "Spring Data JPA", "Thymeleaf", "Git"],
      metrics: [
        "Bi-directional WebSocket streaming with sub-100ms message delivery.",
        "Stateless JWT authentication & Spring Security access control.",
        "Scalable RESTful endpoints with indexed MySQL querying via Hibernate JPA.",
        "Version-controlled codebase with strict modular architecture.",
      ],
      architecture: [
        "Client (Thymeleaf/JS) <-> WebSocket / STOMP Broker",
        "Spring Security JWT Authenticator Layer",
        "Spring Boot Core Service & Controller Layer",
        "Spring Data JPA / Hibernate Layer <-> MySQL DB Instance",
      ],
      github: "https://github.com/nikhilchalamalla/Real-Time-Chat-Application",
    },
    {
      id: "ai-video-analytics",
      title: "AI Powered Video Analytics Platform",
      period: "Sept 2025 – Dec 2025",
      category: "fullstack",
      problem: "High visualization latency and backend retrieval bottlenecks in handling concurrent high-volume video uploads and analytics telemetry.",
      solution: "Developed a scalable full-stack application supporting 100+ video uploads and analytics workflows. Architected RESTful APIs using Node.js & Express handling 1,000+ requests/day, alongside responsive React.js dashboards that reduced UI latency by 30% and indexed MongoDB storage.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JavaScript", "CSS3"],
      metrics: [
        "Supports 100+ video upload workflows concurrently.",
        "Handles 1,000+ REST API requests per day smoothly.",
        "Reduced dashboard rendering visualization latency by 30%.",
        "Boosted MongoDB data retrieval efficiency by 25% through indexing.",
        "20% optimization in overall backend service response time.",
      ],
      architecture: [
        "React Dashboard (Custom Charts & Video Player)",
        "Express REST Gateway & Controller Routes",
        "Video Processing & Telemetry Micro-service",
        "MongoDB Cluster for Indexed Metadata Analytics",
      ],
      github: "https://github.com/nikhilchalamalla/ai-ml-video-analysis-interpretation",
    },
    {
      id: "banking-analytics",
      title: "Data Science Banking Analytics Pipeline",
      period: "Oct 2023 – Dec 2023",
      category: "datascience",
      problem: "Raw financial data contains anomalies, inconsistent formatting, and duplicate records, creating manual overhead for data analysis.",
      solution: "Created an automated end-to-end Python data pipeline utilizing Pandas and NumPy to standardize financial records and run Exploratory Data Analysis.",
      tech: ["Python", "Pandas", "NumPy", "Exploratory Data Analysis", "Jupyter Notebook"],
      metrics: [
        "Cleaned and standardized 10,000+ banking customer records.",
        "Reduced manual processing effort by ~30%.",
        "Improved preprocessing pipeline runtime speed by ~20%.",
      ],
      architecture: [
        "Raw Banking Ingestion Layer",
        "Pandas Data Cleaner & Vectorized Normalizer",
        "EDA Statistical Engine",
        "Business Insight Dashboard Output",
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      credentialUrl: "https://aws.amazon.com/verification",
      badgeColor: "#ff9900",
    },
    {
      name: "SQL for Data Science",
      issuer: "Simplilearn",
      date: "Apr 2026",
      badgeColor: "#0ea5e9",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Nov 2023",
      badgeColor: "#22c55e",
    },
  ],
  achievements: [
    "Solved 370+ Data Structures & Algorithms (DSA) problems across LeetCode and competitive programming platforms, demonstrating deep understanding of optimization, time complexity, and data structures.",
    "Strong proficiency in Java, Spring Boot, and REST API development with cloud deployment fundamentals on AWS.",
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      score: "CGPA: 7.14",
      period: "2023 – 2027",
    },
    {
      institution: "Chaitanya Junior College",
      location: "Mahabubabad, Telangana",
      degree: "Intermediate / 12th Senior Secondary",
      score: "Percentage: 84.5%",
      period: "2020 – 2022",
    },
  ],
};
