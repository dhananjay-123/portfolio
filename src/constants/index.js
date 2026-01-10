import {card1, card2, card3, card4} from "../assets"
import {
    html,
    css,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    threejs,
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
        img:card1,
    },
    {
        position: "Intern",
        company: "Tech Solutions",
        duration: "Jun 2021 - Dec 2021",
        img:card2,
    },
    {
        position: "Web Development Intern",
        company: "Creative Minds",
        duration: "Jan 2021 - May 2021",
        img:card3,
    },
    {
        position: "Intern",
        company: "Innovatech",
        duration: "Jun 2020 - Dec 2020",
        img:card4,
    }
]

export const skills = [
  {
    index: 1,
    heading: "Three.js",
    title: "3D Web Experiences",
    description:
      "Build interactive 3D scenes for the web using WebGL. Useful for product showcases, portfolios, animations, and immersive UI elements."
  },
  {
    index: 2,
    heading: "Tailwind CSS",
    title: "Utility-First Styling",
    description:
      "Rapidly design responsive layouts using utility classes. Eliminates custom CSS overhead while maintaining consistency and scalability."
  },
  {
    index: 3,
    heading: "React",
    title: "Component-Driven UI",
    description:
      "Create reusable, state-driven user interfaces. Ideal for building scalable single-page applications with predictable rendering."
  },
  {
    index: 4,
    heading: "JavaScript",
    title: "Core Web Logic",
    description:
      "Handle application logic, events, asynchronous operations, and DOM interactions that power modern web applications."
  },
  {
    index: 5,
    heading: "GitHub",
    title: "Version Control & Collaboration",
    description:
      "Manage source code, track changes, collaborate with teams, and automate workflows using repositories and pull requests."
  },
  {
    index: 6,
    heading: "Java",
    title: "Object-Oriented Programming",
    description:
      "Develop robust, scalable backend systems with strong typing, memory management, and enterprise-level architecture."
  },
  {
    index: 7,
    heading: "C++",
    title: "High-Performance Systems",
    description:
      "Write low-level, performance-critical code with fine control over memory, commonly used in systems and competitive programming."
  },
  {
    index: 8,
    heading: "DSA",
    title: "Problem Solving & Algorithms",
    description:
      "Strengthen logical thinking by mastering data structures and algorithms for optimized and efficient problem solving."
  }
];

export const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

    