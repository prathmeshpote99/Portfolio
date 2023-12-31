import {
  frontend,
  backend,
  ux,
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
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Education/Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
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
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
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
    title: 'SSC',
    // company_name: 'Diploma',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2013 - Mar 2014',
  },
  {
    title: 'HSC',
    // company_name: 'Diploma',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2015 - Feb 2016',
  },
  {
    title: 'Information Technology',
    company_name: 'Diploma',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2016 - Feb 2018',
  },
  {
    title: 'Information Technology',
    company_name: 'Bachelor of Engineering',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2019 - May 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Sumago Infotech Pvt Ltd',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Oct 2022 - July 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Spikedace Infotech Pvt Ltd',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'S.P.Travels',
    description: `S.P.Travels -It is a Airport transfers ticket booking admin panel using React.js`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/prathmeshpote99/S.P.Travels-Admin-Dashboard-Frontend/tree/main',
    demo: 'https://sptravels-admin.vercel.app',
  },
  {
    id: 'project-2',
    name: 'ERP System',
    description: 'Employee Management System using React.js',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/prathmeshpote99/ERP_System-Frontend.git',
    demo: 'https://erp-system-sable.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Vaibhav Laxmi Lawns',
    description:
      'Wedding Lawns website using React.js',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/prathmeshpote99/vaibhav_laxmi_lawns-Frontend.git',
    demo: 'https://vaibhav-laxmi-lawns.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Cafephille Clone',
    description: 'This is a Cafephille clone website using HTML, CSS and Bootstrap',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/prathmeshpote99/cafephille_clone.git',
    demo: 'https://coruscating-naiad-e128d5.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
