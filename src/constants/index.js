import {
  frontend,
  backend,
  ux,
  mobile,
  database,
  aws,
  bootstraptech,
  amazonwebservice,
  circleci,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  mongodb,
  lmsghana,
  threesquares,
  vms,
  eCom,
  crm,
  mithalite,
  pawanputra,
  salado,
  school,
  collage,
  diploma,
  degree,
  sumago,
  spikedace,
  sarda,
  chandrayan,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "tech", title: "Toolbox" },
  { id: "projects", title: "Projects" },
  { id: "work", title: "Education/Experience" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Frontend Developer", icon: frontend },
  { title: "Backend Developer", icon: backend },
  { title: "React Native Developer", icon: mobile },
  { title: "Database & Management", icon: database },
  { title: "Amazon Web Services", icon: aws },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Bootstrap", icon: bootstraptech },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Git", icon: git },
  { name: "AWS", icon: amazonwebservice },
  { name: "CircleCI", icon: circleci },
];

const experiences = [
  {
    title: "SSC",
    icon: school,
    iconBg: "#333333",
    date: "Aug 2013 - Mar 2014",
  },
  {
    title: "HSC",
    icon: collage,
    iconBg: "#333333",
    date: "Aug 2015 - Feb 2016",
  },
  {
    title: "Information Technology",
    company_name: "Diploma",
    icon: diploma,
    iconBg: "#333333",
    date: "Aug 2016 - Feb 2018",
  },
  {
    title: "Information Technology",
    company_name: "Bachelor of Engineering",
    icon: degree,
    iconBg: "#333333",
    date: "Mar 2019 - May 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Sumago Infotech Pvt Ltd",
    icon: sumago,
    iconBg: "#333333",
    date: "Oct 2022 - July 2023",
  },
  {
    title: "Full Stack Developer",
    company_name: "Spikedace Infotech Pvt Ltd",
    icon: spikedace,
    iconBg: "#333333",
    date: "July 2023 - February 2026",
  },
  {
    title: "Software Developer",
    company_name: "Sarda Group",
    icon: sarda,
    iconBg: "#333333",
    date: "March 2026 - Present",
  },
];

const companyProjects = [
  {
    id: "company-1",
    name: "VMS",
    description:
      "Visitor Management System with a web-based Admin Panel and Role-Based Access Control (RBAC) for Company Admins (HR), Department Heads, and Officers. Streamlines visitor check-in and security workflows.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: vms,
    demo: "https://karibuni.cloud",
  },
  {
    id: "company-2",
    name: "3Squares",
    description:
      "Web and mobile meal-ordering platform for staff and students. Staff use contribution payments; students pay directly. Simplifies meal ordering, account management, and payment handling at scale.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: threesquares,
    demo: "https://3squares.vercel.app",
  },
  {
    id: "company-3",
    name: "eCom Health Ghana",
    description:
      "Healthcare management platform for patients to search doctors by city and book appointments. Supports both doctor and patient logins for streamlined scheduling and improved access to medical care.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: eCom,
    demo: "https://www.ecomhealthdev.click",
  },
  {
    id: "company-4",
    name: "LMS Ghana",
    description:
      "International Learning Management System for teachers and students. Teachers upload PDFs, EPUBs, and videos; students access and learn from them. Includes training modules and certification features.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: lmsghana,
    demo: "https://www.lmsgh.net",
  },
];

const freelanceProjects = [
  {
    id: "freelance-1",
    name: "CRM",
    description:
      "Customer Relationship Management system built for a business client. Manages client data, tracks sales leads, handles customer interactions, and streamlines workflows. Built with Next.js and Supabase — secure auth, real-time data.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: crm,
    demo: "https://crm.newpawanputradevelopers.com",
  },
  {
    id: "freelance-2",
    name: "Mithalite",
    description:
      "Online sweets delivery platform with festival special offers. Supports Cash on Delivery and online payments via Razorpay. Clean, responsive UI for a smooth ordering experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "razorpay", color: "pink-text-gradient" },
    ],
    image: mithalite,
    demo: "https://www.mithalite.com",
  },
  {
    id: "freelance-3",
    name: "Pawanputra Developer",
    description:
      "Real estate and construction portfolio website showcasing ongoing and completed projects. Highlights property details, images, and specifications to help clients explore developments.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: pawanputra,
    demo: "https://newpawanputradevelopers.com",
  },
  {
    id: "freelance-4",
    name: "SaladO Cafe",
    description:
      "Food delivery platform with login, menu browsing, cart, and secure online payments. Built for a restaurant client with a clean, responsive interface for smooth ordering.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: salado,
    demo: "https://www.saladocafe.com",
  },
];

const personalProjects = [
  {
    id: "personal-1",
    name: "S.P.Travels",
    description:
      "Airport transfers ticket booking admin panel built with React.js. Manages bookings, passengers, and trip details with a clean dashboard UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "admin-panel", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: movie,
    repo: "https://github.com/prathmeshpote99/S.P.Travels-Admin-Dashboard-Frontend/tree/main",
    demo: "https://sptravels-admin.vercel.app",
  },
  {
    id: "personal-2",
    name: "ERP System",
    description:
      "Employee Management System with departments, attendance, and HR workflows. Built with React.js for a clean and functional enterprise UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: komikult,
    repo: "https://github.com/prathmeshpote99/ERP_System-Frontend.git",
    demo: "https://erp-system-sable.vercel.app/",
  },
  {
    id: "personal-3",
    name: "Vaibhav Laxmi Lawns",
    description:
      "Wedding venue website built with React.js and SCSS. Showcases the lawn, gallery, and booking inquiry form with an elegant and responsive layout.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "rest-api", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: leaderboard,
    repo: "https://github.com/prathmeshpote99/vaibhav_laxmi_lawns-Frontend.git",
    demo: "https://vaibhavlaxmilawns.vercel.app/",
  },
  {
    id: "personal-4",
    name: "Cafephille Clone",
    description:
      "Pixel-perfect clone of the Cafephille website built with HTML, CSS, and Bootstrap. Great demonstration of responsive layout skills.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: math,
    repo: "https://github.com/prathmeshpote99/cafephille_clone.git",
    demo: "https://coruscating-naiad-e128d5.netlify.app/",
  },
  {
    id: "personal-5",
    name: "Chandrayaan-3",
    description:
      "Tribute website for India's Chandrayaan-3 lunar mission. Built with HTML, CSS, and Bootstrap showcasing the mission timeline and achievements.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: chandrayan,
    repo: "https://github.com/prathmeshpote99/Chandrayan-3.git",
    demo: "https://chandrayan-3.vercel.app",
  },
];

export {
  services,
  technologies,
  experiences,
  personalProjects,
  companyProjects,
  freelanceProjects,
};
