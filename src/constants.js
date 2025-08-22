// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import Monad from './assets/education_logo/monad.jpeg';
import cipet from './assets/education_logo/cipet.png';
import ldps from './assets/education_logo/ldps.jpg';

// Project Section Logo's
import Wanderlust from './assets/work_logo/wanderlust.png';
import WeatherApp from './assets/work_logo/weatherapp.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Monad,
    school: "Monad University, Hapur",
    date: "Aug 2021 - July 2025",
    grade: "70%",
    desc: "I have completed my Bachuler's degree (Btech) in Computer Science from Monad University, Hapur. During my time at Monad, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Database Management Systems, Web Development, and Software Engineering. My experience at Monad University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech.",
  },
  {
    id: 1,
    img: cipet,
    school: "CIPET, Murthal",
    date: "Sept 2018 - Aug 2021",
    grade: "71%",
    desc: "I completed my Diploma in Plastic and Mould Technology from CIPET College, Murthal.",
    degree: "CIPET  - DPMT ( Diploma in Plastics Mould Technology)",
  },
  {
    id: 2,
    img: ldps,
    school: "Lokdeep Public School Ballabgrah, Faridabad",
    date: "Apr 2017 - March 2018",
    grade: "55%",
    desc: "I completed my class 12 education from Lokdeep Public School, Ballabgarh, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: ldps,
    school: "Lokdeep Public School Ballabgarh, Faridabad",
    date: "Apr 2015 - March 2016",
    grade: "7 CGPA",
    desc: "I completed my class 10 education from Lokdeep Public School, Ballabgarh, under the CBSE board.",
    degree: "CBSE(X),",
  },
];

export const projects = [
  {
    id: 0,
    title: "WanderLust",
    description:
      "Wanderlust is a full-stack travel application built using (MongoDB, Express.js, Node.js). It allows users to explore, add, review, and manage travel destinations around the world. Designed for adventure seekers and travel bloggers, the app offers a sleek and interactive platform to discover and share beautiful locations.",
    image: Wanderlust,
    tags: ["HTML", "CSS", "JavaScript", "Mongodb", "Nodejs", "API"],
    github: "https://github.com/SauRabhVaishnav/Major-Projects",
    webapp: "https://major-project-1y54.onrender.com",
  },
  {
    id: 1,
    title: "Weather app",
    description:
      "A responsive weather forecasting app built with React JS, HTML, and CSS. It provides real-time weather updates using API integration and displays key data like temperature, humidity, and wind speed",
    image: WeatherApp,
    tags: ["React JS", "HTML", "CSS"],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },

];  