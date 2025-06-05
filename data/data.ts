export const DATA = {
  nav: [
    {
      name: "Home",
      url: "/#",
    },
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Reach Out",
      url: "/#reach-out",
    },
  ],
  homeIntro: `Third-year CS student at Simon Fraser 
    University interning as a software engineer at Trulioo. 
    Always looking for opportunities to learn and grow.`,
  socials: [
    {
      url: "https://www.linkedin.com/in/brandon-quon/",
      icon: "faLinkedin",
    },
    {
      url: "https://github.com/bnquon",
      icon: "faGithub",
    },
    {
      url: "mailto:bqa7@sfu.ca",
      icon: "faEnvelope",
    },
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
      title: "SFU Esports & Gaming Club Website",
      dateFinished: "August 2024",
      techStack: "TypeScript, Next.js, React.js, TailwindCSS",
      summary:
        "Designed, implemented, and handed off the website for the SFU Esports & Gaming Club, helping them establish a stronger online presence for their community.",
      previewUrl:
        "/sfueapreview.webp",
      link: "https://github.com/bnquon/SFUEA",
      fullDescription: `Reached out to the SFU Esports & Gaming Club to offer web development services, 
        having been part of the gaming community myself (spent too many hours on TFT). 
        Built a fully mobile-responsive React website for event listings, news, and member engagement. 
        Collaborated with club leadership throughout development and delivered complete project documentation.`,
      type: "Client",
      mockUpImages: ["/sfueamock1.webp", "/sfueamock2.webp"],
    },
    {
      projectNumber: "(02)",
      title: "CineVerse",
      dateFinished: "March 2024",
      techStack: "JavaScript, React.js, PostgreSQL, TheMovieDB API, Vercel",
      summary:
        "Full-stack web application for users to create a customizable profile to search and review movies. Favourite movie when building this was Inception and it still is, Blade Runner 2049 is a close second.",
      previewUrl:
        "/cineversepreview.webp",
      link: "https://github.com/bnquon/CineVerse",
      fullDescription: `Developed a full-stack movie platform with search, review, and social features for film enjoyers. 
        Used React and PostgreSQL with TheMovieDB API for comprehensive movie data. 
        Implemented user authentication, password encryption, and charts to display movie review distributions. 
        Inception still holds the #1 movie spot as mentioned, but Severance has definitely claimed the #1 TV show title.`,
      type: "Personal",
      mockUpImages: ["/cineversemock1.webp", "/cineversemock2.webp"],
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
      mockUpImages: ["/MindSpaceShrug.webp"],
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
      mockUpImages: ["/WebScrapeShrug.webp"],
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
