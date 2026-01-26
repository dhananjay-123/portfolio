
import {
    
    javascript,
    herocard1,
    herocard2,
    herocard3,
    herocard4,
    reactjs,
    stack1,
    stack2,
    stack3,
    stack4,
    stack5,
    stack6,
    stack7,
    tailwind,
    nodejs,

    hor1,  hor2,
    hor3,
    hor4,
    hor5,
    hor6,
    hor7,
   
    git,
    figma,
    docker,
  } from "../assets";

export const NavLinks = [

    {
        id:"work" , title:"Work"
    },
    {
        id : "about", title:"About"

    },

    
    {
        id:"contact" , title : "Contact"
    }

]

export const Description = 
    "Web Developer , Designer , Creator . I love to create beautiful and functional websites that provide an excellent user experience. Mainly focused on frontend development using React.js and modern web technologies like Tailwind CSS, Framer Motion etc. Open to work opportunities and collaborations to solve real-world problems through innovative web solutions."


export const workExperience = [
    {
        position: "Frontend Web Developer",
        company: "Freelance",
        duration: "Jan 2022",
        
    },
    {
        position: "Intern",
        company: "Tech Solutions",
        duration: "Jun 2021 - Dec 2021",
        
    },
    {
        position: "Web Development Intern",
        company: "Creative Minds",
        duration: "Jan 2021 - May 2021",
        
    },
    {
        position: "Intern",
        company: "Innovatech",
        duration: "Jun 2020 - Dec 2020",
        
    }
]

// constants/heroCardsData.js

// constants/heroCardsData.js

export const heroCardsData = [
  {
    id: 1,
    index: "01",
    title: "Frontend Developer",
    subtitle: "React • Framer Motion • Tailwind",
    description:
      "Building modern, animated, and accessible user interfaces with a strong focus on performance and UX.",
    image:
      herocard1, // code + laptop
  },
  {
    id: 2,
    index: "02",
    title: "UI / Motion Design",
    subtitle: "Micro-interactions • Transitions",
    description:
      "Designing smooth, meaningful animations that enhance usability without overwhelming the user.",
    image:
      herocard2, // abstract UI shapes
  },
  {
    id: 3,
    index: "03",
    title: "Problem Solver",
    subtitle: "DSA • Clean Architecture",
    description:
      "Enjoy solving complex problems and writing clean, maintainable code with scalable logic.",
    image:
      herocard3, // dark abstract tech
  },
  {
    id: 4,
    index: "04",
    title: "Continuous Learner",
    subtitle: "Always Improving",
    description:
      "Constantly exploring new tools, frameworks, and patterns to stay ahead in modern web development.",
    image:
      herocard4, // workspace / growth vibe
  },
];



export const topicsData = [
  {
    index: "01",
    heading: "Three.js",
    title: "3D Graphics on the Web",
    small: "WebGL made easy",
    utility: "Create interactive 3D scenes and animations directly in the browser.",
    description:
      "Three.js is a lightweight JavaScript library that makes working with WebGL simpler. You can build immersive 3D experiences, from visualizations to games, without deep knowledge of graphics programming.",
    image:
      stack1, // abstract geometry
  },
  {
    index: "02",
    heading: "Tailwind CSS",
    title: "Utility-First Styling",
    small: "Rapid UI development",
    utility:
      "Design responsive and modern websites efficiently using utility classes.",
    description:
      "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs quickly.",
    image:
      stack2, // minimal UI / grids
  },
  {
    index: "03",
    heading: "React",
    title: "Component-Based UI",
    small: "Build interactive UIs",
    utility:
      "Create reusable components and manage state efficiently for dynamic applications.",
    description:
      "React emphasizes declarative programming and component-based architecture for scalable UI development.",
    image:
      stack3, // abstract flow / components
  },
  {
    index: "04",
    heading: "JavaScript",
    title: "Dynamic Web Programming",
    small: "Core web language",
    utility:
      "Add interactivity, control logic, and handle data on web applications.",
    description:
      "JavaScript is the foundational language of the web, enabling dynamic behavior and interactivity.",
    image:
      stack4, // dark code abstraction
  },
 
    {
    index: "05",
    heading: "Framer Motion",
    title: "Smooth Animations",
    small: "Motion made simple",
    utility:
      "Create fluid animations and micro-interactions for modern user experiences.",
    description:
      "Framer Motion provides an easy and powerful API for animations in React, helping interfaces feel alive and responsive.",
    image:
      stack5, // motion / abstract flow
  },
  {
    index: "06",
    heading: "GSAP",
    title: "High-Performance Animations",
    small: "Animation powerhouse",
    utility:
      "Build complex timelines and scroll-based animations with precision.",
    description:
      "GSAP is a robust animation library trusted for its performance, control, and smooth rendering across browsers.",
    image:
      stack6, // timelines / motion abstraction
  },
  {
    index: "07",
    heading: "UI/UX Design",
    title: "Design Thinking",
    small: "User-centered design",
    utility:
      "Craft intuitive interfaces that balance aesthetics and usability.",
    description:
      "UI/UX focuses on understanding user needs and designing experiences that feel natural, accessible, and engaging.",
    image:
      stack7, // design workspace
  },
  
 

];



export const skills = [
  {
    index: "01",
    heading: "Three.js",
    title: "3D Web Experiences",
    description:
      "Build interactive 3D scenes for the web using WebGL. Useful for product showcases, portfolios, animations, and immersive UI elements.",
    image:
      hor1, // abstract 3D
  },
  {
    index: "02",
    heading: "Tailwind CSS",
    title: "Utility-First Styling",
    description:
      "Rapidly design responsive layouts using utility classes. Eliminates custom CSS overhead while maintaining consistency and scalability.",
    image:
      hor2, // UI abstraction
  },
  {
    index: "03",
    heading: "React",
    title: "Component-Driven UI",
    description:
      "Create reusable, state-driven user interfaces. Ideal for building scalable single-page applications with predictable rendering.",
    image:
      hor3, // react / code vibe
  },
  {
    index: "04",
    heading: "JavaScript",
    title: "Core Web Logic",
    description:
      "Handle application logic, events, asynchronous operations, and DOM interactions that power modern web applications.",
    image:
      hor4, // code closeup
  },
  {
    index: "05",
    heading: "GitHub",
    title: "Version Control & Collaboration",
    description:
      "Manage source code, track changes, collaborate with teams, and automate workflows using repositories and pull requests.",
    image:
      hor5, // terminals
  },
  {
    index: "06",
    heading: "Java",
    title: "Object-Oriented Programming",
    description:
      "Develop robust, scalable backend systems with strong typing, memory management, and enterprise-level architecture.",
    image:
      hor6
  },
  {
    index: "07",
    heading: "C++",
    title: "High-Performance Systems",
    description:
      "Write low-level, performance-critical code with fine control over memory, commonly used in systems and competitive programming.",
    image:
      hor7, // hardware / low level
  },
  {
    index: "08",
    heading: "DSA",
    title: "Problem Solving & Algorithms",
    description:
      "Strengthen logical thinking by mastering data structures and algorithms for optimized and efficient problem solving.",
    image:
      hor2, // abstract logic
  },
];


export const technologies = [
  {
    image: javascript,
    link: 'https://google.com/',
    title: 'JavaScript',
    description: 'This is pretty cool, right?'
  },
  {
    image: reactjs,
    link: 'https://google.com/',
    title: 'React JS',
    description: 'This is pretty cool, right?'
  },
  {
    image: tailwind,
    link: 'https://google.com/',
    title: 'Tailwind CSS',
    description: 'This is pretty cool, right?'
  },
  {
    image: nodejs,
    link: 'https://google.com/',
    title: 'Node JS',
    description: 'This is pretty cool, right?'
  },
  {
    image: git,
    link: 'https://google.com/',
    title: 'Git',
    description: 'This is pretty cool, right?'
  },
  {
    image: figma,
    link: 'https://google.com/',
    title: 'Figma',
    description: 'This is pretty cool, right?'
  },
  {
    image: docker,
    link: 'https://google.com/',
    title: 'Docker',
    description: 'This is pretty cool, right?'
  },
];


    