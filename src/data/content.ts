import type { AboutTabs, PortfolioItem, Skill } from '../types/models';

export const intro = {
  lead: 'I build responsive web and mobile products with a bias for clarity, accessibility, and teams that enjoy shipping.',
  paragraphs: [
    'Full-stack developer in New York with 25+ years in design and engineering—from early graphic design to enterprise platforms for streaming, travel, finance, and nonprofit organizations.',
  ] as const,
};

export const credentialTabs: AboutTabs[] = [
  {
    id: 3,
    title: 'Work',
    detail: [
      {
        title: 'Lead Software Engineer',
        subtitle: 'The Walt Disney Company · New York, NY',
        text: 'Feb 2025 – Present. Lead a development team maintaining and enhancing live streaming metadata services for ESPN, Hulu, and Disney+ live events.',
      },
      {
        title: 'Senior Application Developer',
        subtitle: 'IBM Consulting (iX) · New York, NY',
        text: 'Jul 2016 – Jan 2025. Delivered large-scale web and mobile programs for airlines, automotive, energy, nonprofit, and financial clients—architecture, React/React Native/Angular development, and design-system governance.',
      },
      {
        title: 'Presentation Layer Engineer',
        subtitle: 'Razorfish · Austin, TX',
        text: 'Feb 2012 – Jun 2016. Front-end engineering for AT&T, BlackBerry, Citi, and other enterprise clients; lead developer on AT&T Small Business (2014 launch).',
      },
      {
        title: 'Freelance design & development',
        subtitle: 'Sean Loyless Designs',
        text: '1999 – 2016. Independent web design, development, branding, and multimedia work for agencies, small businesses, and creatives across Texas.',
      },
    ],
  },
  {
    id: 4,
    title: 'Education',
    detail: [
      {
        title: 'Bachelor of Applied Science, Multimedia',
        subtitle: 'The Art Institute of Houston',
        text: '1999 – 2001. Coursework spanning web design and development, graphic design, video editing, and sound production.',
      },
      {
        title: 'Full Stack Web Development Certification',
        subtitle: 'freeCodeCamp',
        text: '2016. Intensive program reinforcing modern JavaScript, responsive design, APIs, and full-stack fundamentals.',
      },
      {
        title: 'Magnolia High School',
        subtitle: 'Magnolia, TX',
        text: '1996.',
      },
    ],
  },
  {
    id: 5,
    title: 'Certifications',
    detail: [
      {
        title: 'JavaScript (Basic)',
        subtitle: 'HackerRank · Dec 2024',
        text: 'Verified JavaScript fundamentals credential.',
      },
      {
        title: 'IBM Microsoft Copilot Summit',
        subtitle: 'Credly · Oct 2024',
        text: 'Microsoft Global Partner Solutions achievement.',
      },
      {
        title: 'IBM Accessibility Advocate',
        subtitle: 'Credly · Mar 2022',
        text: 'Formal training in inclusive design and accessibility advocacy within enterprise delivery.',
      },
      {
        title: 'IBM Design Thinking Practitioner',
        subtitle: 'IBM · Oct 2016',
        text: 'Human-centered problem solving for product and delivery teams.',
      },
      {
        title: 'IBM Carbon Design System — React',
        subtitle: 'IBM · Apr 2020',
        text: 'Developer essentials for IBM’s Carbon React component system.',
      },
    ],
  },
  {
    id: 2,
    title: 'Awards',
    detail: [
      {
        title: 'IBM Hackathon Challenge — 1st place',
        subtitle: '48in48 · June 2020',
        text: 'Built a charity web experience for 2LIVE Daily during an IBM-focused 48in48 hackathon; the project won first place, including charitable donations for the organization.',
      },
      {
        title: 'Financial Innovation Awards',
        subtitle: 'bba/ifs · Digital Evolution program',
        text: 'Recognized as part of the team behind Citi Retail Services’ Digital Evolution program—advancing personalized credit marketing across the digital shopping journey.',
      },
    ],
  },
];

export const skills: Skill[] = [
  {
    title: 'Web & application development',
    icon: 'code',
    text: 'Production experience with React, Next.js, TypeScript, Node.js, Angular, and RESTful APIs— from marketing sites to complex enterprise applications for clients including Google, United Airlines, AT&T, and Citibank.',
  },
  {
    title: 'Visual & UX collaboration',
    icon: 'images',
    text: 'Graphic design foundation (2001–2005) informs how I partner with designers on layout, typography, and brand—translating comps into accessible, responsive implementations.',
  },
  {
    title: 'Mobile development',
    icon: 'mobile',
    text: 'Cross-platform apps with React Native, including large-scale transformation programs that unify web and mobile experiences under a shared codebase.',
  },
  {
    title: 'Architecture & design systems',
    icon: 'server',
    text: 'Technical discovery, information architecture, and design-system creation using Tailwind CSS, Material Design, Bootstrap, and IBM Carbon to keep multi-team programs aligned.',
  },
  {
    title: 'Accessibility first',
    icon: 'eye',
    text: 'WCAG-aware development backed by IBM Accessibility Advocate certification—practical testing, semantic markup, and patterns that support screen readers and keyboard users.',
  },
  {
    title: 'Analytics & optimization',
    icon: 'chart',
    text: 'SEO, analytics, and reporting integrations that help stakeholders measure performance and refine digital experiences over time.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 202010,
    date: '2020',
    title: 'United Cargo',
    client: 'IBM iX',
    image: '/assets/portfolio/unitedcargo.jpg',
  },
  {
    id: 202003,
    date: '2020',
    title: 'Kichler Lighting',
    client: 'IBM iX',
    image: '/assets/portfolio/kichler.jpg',
  },
  {
    id: 201807,
    date: '2018',
    title: 'P-TECH Academy',
    client: 'IBM iX',
    image: '/assets/portfolio/ptech.jpg',
  },
  {
    id: 201803,
    date: '2018',
    title: 'Childrens Defense Fund',
    client: 'IBM iX',
    image: '/assets/portfolio/cdf.jpg',
  },
  {
    id: 201707,
    date: '2017',
    title: 'United Airlines',
    client: 'IBM iX',
    image: '/assets/portfolio/united.jpg',
  },
  {
    id: 201504,
    date: '2015',
    title: 'AT&T Small Business',
    client: 'Razorfish',
    image: '/assets/portfolio/attcircle.jpg',
  },
  {
    id: 201404,
    date: '2013',
    title: 'Blackberry',
    client: 'Razorfish',
    image: '/assets/portfolio/blackberry.jpg',
  },
];
