export const personalInfo = {
  name: "Bandna Paikaray",
  title: "Frontend Developer",
  description: "Passionate developer creating amazing web experiences with modern technologies",
  email: "bandnapaikaray@gmail.com",
  phone: "+91 12345 67890",
  location: "India",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Figma", "Postman", "VS Code"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    image: "/images/project2.jpg", 
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/yourusername/taskmanager",
    live: "https://your-taskmanager.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts and interactive charts.",
    image: "/images/project3.jpg",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    github: "https://github.com/yourusername/weather",
    live: "https://your-weather.vercel.app",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    company: "Tech Company",
    position: "Frontend Developer",
    duration: "2023 - Present",
    description: "Developing modern web applications using React and Next.js, collaborating with cross-functional teams."
  },
  {
    id: 2,
    company: "Startup Inc",
    position: "Full Stack Developer Intern",
    duration: "2022 - 2023", 
    description: "Built responsive web applications and RESTful APIs, gained experience in agile development practices."
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "Your University",
    year: "2020 - 2024",
    grade: "8.5 CGPA"
  }
];
