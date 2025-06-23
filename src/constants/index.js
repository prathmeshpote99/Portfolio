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
  chandrayan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "toolbox",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Education/Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Database & Management",
    icon: database,
  },
  {
    title: "Amazon Web Services",
    icon: aws,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Bootstrap",
    icon: bootstraptech,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: amazonwebservice,
  },
  {
    name: "CircleCi",
    icon: circleci,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "SSC",
    // company_name: 'Diploma',
    icon: school,
    iconBg: "#333333",
    date: "Aug 2013 - Mar 2014",
  },
  {
    title: "HSC",
    // company_name: 'Diploma',
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
    date: "July 2023 - Present",
  },
];

const companyProjects = [
  {
    id: "project-1",
    name: "LMS GHANA",
    description: `LMS GHANA is an international Learning Management System platform for teachers and students. Teachers can upload educational content like PDFs, EPUBs, and videos, while students can access and learn from them. The platform also includes training modules and certification features for teachers.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lmsghana,
    // repo: "",
    demo: "https://www.lmsgh.net",
  },
  {
    id: "project-2",
    name: "eCom Health Ghana",
    description:
      "eCom Health Ghana is a healthcare management platform that allows patients to search for doctors by city and book appointments. The system supports both doctor and patient logins, enabling streamlined scheduling and improved access to medical care.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eCom,
    // repo: "",
    demo: "https://www.ecomhealthghana.com",
  },
];

const freelanceProjects = [
  {
    id: "project-1",
    name: "CRM",
    description:
      "This CRM (Customer Relationship Management) system is designed to help businesses manage client data, track sales leads, handle customer interactions, and streamline workflows. Built with Next.js and Supabase, it provides secure authentication, real-time data operations, and an intuitive user interface.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    // repo: "",
    demo: "https://crm.newpawanputradevelopers.com",
  },
  {
    id: "project-2",
    name: "Mithalite",
    description:
      "Mithalite is a domestic online sweets delivery platform developed as a freelance project. It allows users to browse and order sweets, especially during festivals with special offers. The platform supports both Cash on Delivery and online payments via Razorpay, providing a smooth and secure checkout experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mithalite,
    // repo: "",
    demo: "https://www.mithalite.com",
  },
  {
    id: "project-3",
    name: "Pawanputra Developer",
    description:
      "Pawanputra Developer is a real estate and construction portfolio website that showcases ongoing and completed building projects. The platform highlights property details, images, and specifications to help clients explore various construction sites and developments with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pawanputra,
    // repo: "",
    demo: "https://newpawanputradevelopers.com",
  },
  {
    id: "project-4",
    name: "SaladO Cafe",
    description:
      "SaladO Cafe is a food delivery platform offering a wide range of vegetarian and non-vegetarian dishes. Users can log in, browse the menu, add items to their cart, and make secure payments. The platform is designed for a smooth ordering experience with a clean and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: salado,
    // repo: "",
    demo: "https://www.saladocafe.com",
  },
];

const personalProjects = [
  {
    id: "project-2",
    name: "S.P.Travels",
    description: `S.P.Travels - It is a Airport transfers ticket booking admin panel using React.js`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/prathmeshpote99/S.P.Travels-Admin-Dashboard-Frontend/tree/main",
    demo: "https://sptravels-admin.vercel.app",
  },
  {
    id: "project-1",
    name: "ERP System",
    description: "Employee Management System using React.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/prathmeshpote99/ERP_System-Frontend.git",
    demo: "https://erp-system-sable.vercel.app/",
  },
  {
    id: "project-3",
    name: "Vaibhav Laxmi Lawns",
    description: "Wedding Lawns website using React.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/prathmeshpote99/vaibhav_laxmi_lawns-Frontend.git",
    demo: "https://vaibhavlaxmilawns.vercel.app/",
  },
  {
    id: "project-4",
    name: "Cafephille Clone",
    description:
      "This is a Cafephille clone website using HTML, CSS and Bootstrap",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/prathmeshpote99/cafephille_clone.git",
    demo: "https://coruscating-naiad-e128d5.netlify.app/",
  },
  {
    id: "project-5",
    name: "Chandrayaan-3",
    description:
      "A tribute website for Chandrayaan-3, showcasing India's lunar mission, built using HTML, CSS, and Bootstrap for a clean and responsive UI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
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
