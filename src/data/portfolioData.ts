export interface Project {
  id: string;
  title: string;
  period: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics: string[];
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
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    roleTitle: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    leetcode: string;
    bio: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: string[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Chalamalla Nikhil",
    roleTitle: "Full-Stack Developer",
    email: "nikhilchalamalla4@gmail.com",
    phone: "+91-8790353618",
    linkedin: "https://www.linkedin.com/in/chalamalla-nikhil/",
    github: "https://github.com/nikhilchalamalla",
    leetcode: "https://leetcode.com/u/nikhilchalamalla/", // derived from achievements
    bio: "Passionate Full-Stack Developer with a strong algorithmic foundation and experience building highly scalable, secure, and performant web applications. Proven track record in developing real-time communication tools, distributed video streaming platforms, and optimized data workflows.",
  },
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python", "SQL"]
    },
    {
      category: "Frameworks & Libs",
      items: ["Spring Boot", "Node.js", "Express.js", "React.js", "WebSockets"]
    },
    {
      category: "Databases & Storage",
      items: ["MySQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Postman", "AWS (Certified)", "IntelliJ", "VS Code"]
    },
    {
      category: "Core Subjects",
      items: ["Data Structures & Algorithms", "Operating Systems", "Networking", "DBMS"]
    }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "InternsElite Edutech Pvt. Ltd",
      location: "Remote",
      period: "Oct 2023 - Dec 2023",
      points: [
        "Processed and standardized raw banking datasets using Python, Pandas, and NumPy, reducing manual workflow effort by ~30%.",
        "Conducted Exploratory Data Analysis (EDA) to identify data patterns and generated insights reports for decision-making.",
        "Optimized data preprocessing pipelines, improving pipeline runtime execution efficiency by ~20% and saving active processing time.",
        "Processed and cleaned over 10K+ customer transaction records, ensuring complete data quality and schema consistency."
      ],
      tech: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Google Colab"]
    }
  ],
  projects: [
    {
      id: "video-analytics",
      title: "AI-ML Powered Video Analytics & Interpretation",
      period: "Nov 2025",
      problem: "Traditional video monitoring systems struggle to scale, digest, and visualize heavy multi-source video feeds without causing high UI rendering latency or backend storage bottlenecks.",
      solution: "Engineered a scalable full-stack platform that concurrently ingests 100+ video streams. Designed Node.js/Express.js APIs handling 1,000+ daily requests, created a low-latency React dashboard with Chart.js, and incorporated MongoDB to handle fast, indexed logging storage.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Charts.js", "REST APIs"],
      metrics: [
        "Supports 100+ concurrent video streams (uploads, URLs, live webcams).",
        "Handles 1,000+ API requests per day for ingestion.",
        "Reduced dashboard rendering/visualization latency by ~30%.",
        "Improved logging data retrieval efficiency by ~25% using MongoDB indexing."
      ],
      github: "https://github.com/nikhilchalamalla", // Placeholder github link for project
      live: "https://github.com/nikhilchalamalla"
    },
    {
      id: "chat-app",
      title: "Real-Time Chat Application",
      period: "Dec 2025",
      problem: "Delivering real-time one-to-one communication with guaranteed security, robust session management, and minimal latency under concurrent user activity.",
      solution: "Developed a production-ready messaging platform using Java and Spring Boot with WebSockets for instantaneous data transfer. Secured application endpoints using Spring Security and established optimized MySQL schemas to manage indexed message history.",
      tech: ["Java", "Spring Boot", "WebSockets", "Thymeleaf", "Spring Security", "MySQL"],
      metrics: [
        "Achieved low bi-directional messaging latency of <100ms.",
        "Secured chat rooms using robust session management.",
        "Asynchronous message handling ensures high scalability under concurrent user loads."
      ],
      github: "https://github.com/nikhilchalamalla"
    },
    {
      id: "data-science-banking",
      title: "Data Science Banking Analytics Pipeline",
      period: "Oct 2023",
      problem: "Banking datasets are often highly raw, unstandardized, and noisy, which slows down business analysis and critical reporting.",
      solution: "Created automated Python preprocessing workflows to clean, validate, and parse raw customer banking databases. Performed correlation and statistical analyses to detect anomalies.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter", "Google Colab"],
      metrics: [
        "Successfully cleaned and structured 10,000+ customer records.",
        "Automated manual data processing, saving ~30% in processing effort.",
        "Improved script runtimes by ~20% through vectorization in NumPy/Pandas."
      ]
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026"
    },
    {
      name: "SQL for Data Science",
      issuer: "SimpliLearn",
      date: "Apr 2026"
    },
    {
      name: "Unraveling Basic Python towards ML/AI",
      issuer: "CSE Pathsala",
      date: "Mar 2024"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Nov 2023"
    }
  ],
  achievements: [
    "Solved 325+ Data Structures & Algorithms (DSA) problems on LeetCode, showing strong logic and algorithmic optimization skills.",
    "Secured 5th Rank among all participants in the Trabilizers Tech Solutions Club Technical Quiz."
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 8.50",
      period: "Aug 2023 - Present"
    },
    {
      institution: "Chaitanya Junior College",
      location: "Mahabubabad, Telangana",
      degree: "Intermediate Education (MPC)",
      score: "Percentage: 84%",
      period: "Jul 2020 - Mar 2022"
    },
    {
      institution: "Zilla Praja Parishad Secondary School",
      location: "Thorrur, Telangana",
      degree: "Matriculation (SSC)",
      score: "Percentage: 98%",
      period: "Apr 2019 - Mar 2020"
    }
  ]
};
