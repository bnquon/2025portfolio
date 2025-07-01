export const DATA = {
  nav: [
    { name: "Home", url: "/#" },
    { name: "About", url: "/#about" },
    { name: "Projects", url: "/#projects" },
    { name: "Reach Out", url: "/#reach-out" },
  ],
  homeIntro: `Third-year CS student at Simon Fraser 
    University interning as a software engineer at Trulioo. 
    Always looking for opportunities to learn and grow.`,
  socials: [
    { url: "https://www.linkedin.com/in/brandon-quon/", icon: "faLinkedin" },
    { url: "https://github.com/bnquon", icon: "faGithub" },
    { url: "mailto:bqa7@sfu.ca", icon: "faEnvelope" },
  ],
  aboutMe: `Studying CS wasn't actually my original plan, I was set on kinesiology until something just felt off. 
    Following my gut led me to computer science, and it's been the right choice ever since.
    Alternate universe me is complaining about memorizing anatomy, 
    but you wouldn't know since he wouldn't know how to make a website.`,
  work: [
    {
      company: "Trulioo",
      date: "May - Dec. 2025",
      role: "Junior Software Engineer Co-op",
      logoUrl: "/trulioo.jpg",
      description: [
        "Typical first month stuff (as of writing, June 3rd 2025)",
        "Emptying the fridge and snack bar",
      ],
    },
    {
      company: "Formations Corp",
      date: "Sept. 2024 - April 2025",
      role: "Software Developer Co-op",
      logoUrl: "/formations.jpg",
      description: [
        "Projected to facilitate $10,000+ in transactions annually by developing a full-stack user flow in React.js, TypeScript, and Go for administering Squarespace domains to 900+ businesses.",
        "Overhauled the tax return process, saving 200+ hours across 1500+ returns annually by implementing a new front-end UI, creating and updating APIs to improve data workflows, and integrating HubSpot ticketing.",
        "Built a new front-end management dashboard to track vendors and related documents for 200+ businesses, managing a total of 1,200+ vendor relationships.",
      ],
    },
  ],
  outsideOfWork: [
    {
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam sed justo vehicula euismod. Nam ultricies purus et orci accumsan lobortis.",
      imageUrl:
        "https://images.unsplash.com/photo-1748228876112-c5f37b99f77e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam sed justo vehicula euismod. Nam ultricies purus et orci accumsan lobortis.",
      imageUrl:
        "https://images.unsplash.com/photo-1714421829816-fd17afd61960?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget diam sed justo vehicula euismod. Nam ultricies purus et orci accumsan lobortis.",
      imageUrl:
        "https://images.unsplash.com/photo-1743921341544-e228f84a117c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  projects: [
    {
      projectNumber: "(01)",
      title: "Job Auto Tracker",
      dateFinished: "June 2025",
      techStack:
        "TypeScript, Python, React.js, FastAPI, AWS (EC2 & RDS), Docker, Google Gemini",
      summary:
        "Full-stack job tracking dashboard that extracts job posting data from screenshots using OCR powered by Google Gemini. This project was built to ease the tedious process of manual job tracking during application seasons.",
      previewUrl: "/ssautojobimage.webp",
      link: "https://github.com/bnquon/job-auto-tracker",
      fullDescription: `Developed a full-stack job application management tool that leverages OCR with Google Gemini to parse job details from screenshots. 
        Backend is built with FastAPI featuring REST APIs, bcrypt password hashing, JWT authentication, and PostgreSQL storage on AWS RDS.
        The backend is containerized with Docker and deployed on AWS EC2, with a frontend reverse proxy to handle HTTP/HTTPS issues during deployment.
        I just hated filling out Notion forms every time I wanted to track a job application.`,
      type: "Personal",
      mockUpMedia: [
        { type: "video", src: "/ssautojobvideo.mp4" },
        { type: "image", src: "/ssautojobdemoimage.webp" },
      ],
    },
    {
      projectNumber: "(02)",
      title: "SFU Esports & Gaming Club Website",
      dateFinished: "August 2024",
      techStack: "TypeScript, Next.js, React.js, TailwindCSS",
      summary:
        "Designed, implemented, and handed off the website for the SFU Esports & Gaming Club, helping them establish a stronger online presence for their community.",
      previewUrl: "/sfueapreview.webp",
      link: "https://github.com/bnquon/SFUEA",
      fullDescription: `Reached out to the SFU Esports & Gaming Club to offer web development services, 
        having been part of the gaming community myself (spent too many hours on TFT). 
        Built a fully mobile-responsive React website for event listings, news, and member engagement. 
        Collaborated with club leadership throughout development and delivered complete project documentation.`,
      type: "Client",
      mockUpMedia: [
        { type: "image", src: "/sfueamock1.webp" },
        { type: "image", src: "/sfueamock2.webp" },
      ],
    },
    {
      projectNumber: "(03)",
      title: "MindSpace",
      dateFinished: "September 2024",
      techStack:
        "TypeScript, Java, Next.js, React.js, Spring Boot, Tailwind CSS, AWS RDS, Meta Llama 3.1",
      summary:
        "Full-stack web application to mimic the functionality of Notion with a built in contextually aware AI chatbot. My productivity levels remain unchanged, but my development skills did not.",
      previewUrl: "/MindSpaceShrug.webp",
      link: "https://github.com/bnquon/notion-clone",
      fullDescription: `Full-stack Notion clone featuring an AI chatbot powered by Meta Llama 3.1. It was my first deep dive into AWS and its legendarily confusing maze of services. 
        Built with TypeScript, Next.js, Spring Boot, and MySQL AWS RDS. Implemented REST APIs, rich text editing, document saving, and real-time context sensitive AI chat. 
        My organizational skills haven't improved, but now I get a monthly AWS invoice email.`,
      type: "Personal",
      mockUpMedia: [{ type: "image", src: "/MindSpaceShrug.webp" }],
    },
    {
      projectNumber: "(04)",
      title: "NBA Fantasy Web Scraper",
      dateFinished: "October 2024",
      techStack:
        "Golang, TypeScript, React.js, MongoDB, Google Cloud Platform (GCP)",
      summary:
        "Web scraper that scrapes the top 10 daily player performances and emails subscribers via GCP. I started the season 14-0 and would have won the league if not for playoff injuries.",
      previewUrl: "/WebScrapeShrug.webp",
      link: "https://github.com/bnquon/fantasyNBAScraper",
      fullDescription: `Developed an automated NBA data scraper using Golang and MongoDB that emails daily top player performances through GCP cloud functions. 
        Built a really simple React frontend for users to sign up for the emails. The real insight: seeing daily why I'm not an NBA general manager.`,
      type: "Personal",
      mockUpMedia: [{ type: "image", src: "/WebScrapeShrug.webp" }],
    },
  ],
  contact: [
    {
      questionNumber: "(01)",
      question: "What is your name?*",
      placeholder: "John Doe",
      short: true,
      name: "name",
    },
    {
      questionNumber: "(02)",
      question: "What is your email?*",
      placeholder: "johndoe@example.com",
      short: true,
      name: "email",
    },
    {
      questionNumber: "(03)",
      question: "What is your message?*",
      placeholder: "Hi Brandon, I want to hire you immediately!",
      short: false,
      name: "message",
    },
  ],
};
