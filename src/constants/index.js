import {
  links,
  ihsanify,
  goingSomewhere,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaMedium,
  FaUpwork,
  GiTeacher,
  SiLeetcode,
  oldbailey_ai,
  aws,
  lululemon,
  rogers,
  evertz,
  bruha
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LinkedIn",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bilal-ishtiaque/",
  },
  {
    title: "Github",
    Icon: FaGithub,
    link: "https://github.com/BilalIshtiaque",
  },
  {
    title: "Upwork",
    Icon: FaUpwork,
    link: "",
  },
  {
    title: "Medium",
    Icon: FaMedium,
    link: "",
  },
  {
    title: "ADPList",
    Icon: GiTeacher,
    link: "",
  },
  {
    title: "Stackoverflow",
    Icon: FaStackOverflow,
    link: "https://stackoverflow.com/users/4986912/bilal-ishtiaque",
  },
  {
    title: "Leetcode",
    Icon: SiLeetcode,
    link: "",
  }
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Amazon (AWS)",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Lead initiatives within AWS for revolutionizing customer support in the advent of GenAI. This included development and integration of AI agents with Amazon Q.",
      "Designed and developed software solutions as part of the Performance Platform team to address challenges in developer experience and optimize performance within a distributed architecture."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Lululemon",
    icon: lululemon,
    iconBg: "#E6DEDD",
    date: "June 2021 - Oct 2022",
    points: [
      "Developed multiple event-driven asynchronous microservices within a distributed cloud-native architecture, powering a multi-million-dollar application handling high-volume traffic.",
      "Successfully led the creation of end-to-end backend solutions, which involved: System design, development, testing, deployment, monitoring and alerting."    
    ],
  },
  {
    title: "Full-Stack Software Developer",
    company_name: "Rogers Communications",
    icon: rogers,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - April 2021",
    points: [
      "Successful migrated existing on-premises monolithic backend to a distributed cloud-native microservices architecture, optimizing scalability, performance and reducing cost by over 50%."
    ],
  },
  {
    title: "Project Engineer (Intern)",
    company_name: "Evertz Microsystems",
    icon: evertz,
    iconBg: "#E6DEDD",
    date: "Oct 2017 - May 2018",
    points: [
      "Led technical execution of cloud-based Media Asset Management projects on AWS, managing end-to-end deployment, DevOps automation, and client collaboration for scalable broadcasting solutions."
    ],
  },
  {
    title: "Software Developer (Co-op)",
    company_name: "Bruha",
    icon: bruha,
    iconBg: "#E6DEDD",
    date: "May 2015 - Sept 2015",
    points: [
      "Developed and launched full-featured Android applications from scratch, including architecture design, offline storage, third-party API integrations, and Play Store deployment."
    ],
  }
];

const projects = [
  {
    name: "OldBailey AI",
    description:
      "Developed an AI to assist researchers and historians by providing insights into historical trends, facilitating data analysis, and offering an immersive experience through role-play.",
    tags: [
      {
        name: "Next.js",
        color: "violet-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: oldbailey_ai,
    source_code_link: "https://github.com/BilalIshtiaque/OldBailey-AI",
    demo_link: "https://oldbaileyai.vercel.app/",
  },
  {
    name: "Ihsanify",
    description:
      "Created a mobile application for islamic self-improvement and worship (On Apple AppStore and Google PlayStore).",
    tags: [
      {
        name: "TS/JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "violet-text-gradient",
      },
      {
        name: "Ionic",
        color: "pink-text-gradient",
      },
      {
        name: "Amazon Web Services (AWS)",
        color: "green-text-gradient",
      },
    ],
    image: ihsanify,
    source_code_link: "https://github.com/BOT-R/Ihsanify",
    demo_link: "https://github.com/BOT-R/Ihsanify"
  },
  {
    name: "GO-ing Somewhere",
    description:
      "Collaborated with GO Transit to create their first real-time transportation services mobile app (Android Application) for University capstone project (Received A+).",
    tags: [
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite/SQL",
        color: "violet-text-gradient",
      },
      {
        name: "AndroidStudio/AndroidSDK",
        color: "pink-text-gradient",
      }
    ],
    image: goingSomewhere,
    source_code_link: "https://github.com/BilalIshtiaque/GO-ing-Somewhere",
    demo_link: "https://github.com/BilalIshtiaque/GO-ing-Somewhere"
  },
];

export { services, experiences, projects };
