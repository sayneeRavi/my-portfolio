export type Project = {
  slug: string;
  title: string;
  oneLineImpact: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'mitesp-rma',
    title: 'MITESP RMA Web Application',
    oneLineImpact:
      'Streamlined hardware-return workflows for an enterprise IT services firm.',
    description:
      'A Return Merchandise Authorization system used by MillenniumIT ESP to track hardware replacements with vendors like Oracle, Cisco, and Huawei. I built the authentication and role-based access control, the inventory CRUD flows, and the UI — turning an email-driven process into a single tracked pipeline.',
    tech: ['React', 'Spring Boot', 'JWT', 'RBAC', 'SMTP'],
    image: '/mit-login.jpg',
    github: 'https://github.com/rma-organization',
    featured: true,
  },
  {
    slug: 'neurosync-facecues',
    title: 'NeuroSync — FaceCues',
    oneLineImpact:
      'Gave autism therapists real-time reads on how children respond during sessions.',
    description:
      'FaceCues captures webcam frames during therapy sessions, processes them with OpenCV, and streams facial-expression analysis to therapists. I built the capture-and-processing pipeline that turns raw video into structured emotional-response data.',
    tech: ['Python', 'OpenCV', 'Real-time Processing', 'Facial Recognition'],
    image: '/NeuroSync.jpg',
    github: 'https://github.com/Abinaya-Subramaniam/neurosync_WBC',
    featured: true,
  },
  {
    slug: 'stroke-dashboard',
    title: 'Stroke Dashboard',
    oneLineImpact:
      'Turned raw stroke-patient records into visual insights clinicians can scan in seconds.',
    description:
      'An interactive dashboard that visualizes stroke-patient data for healthcare professionals — trends, risk factors, and patient cohorts surfaced through charts instead of spreadsheets.',
    tech: ['React', 'Chart.js', 'Data Visualization'],
    image: '/stroke-dashboard.png',
    github: 'https://github.com/sayneeRavi/stroke-dashboard',
    featured: true,
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    oneLineImpact:
      'A hand-built site that treats the scroll as a story — no template, no UI kit.',
    description:
      'Designed and built from scratch with a single-accent design system, live GitHub and Medium data, and Lighthouse-grade performance. The site you are reading right now.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/my-portfolio.png',
    github: 'https://github.com/sayneeRavi/my-portfolio',
    demo: 'https://athmisayneedev.vercel.app/',
    featured: false,
  },
  {
    slug: 'green-care-assist',
    title: 'Green Care Assist',
    oneLineImpact:
      'Kept rare ornamental plants alive with zero daily effort from their owners.',
    description:
      'A first-year hardware project at University of Moratuwa: an automated plant-care enclosure that monitors temperature, humidity, and soil moisture, then self-corrects using Peltier cooling and adaptive lighting.',
    tech: ['IoT Sensors', 'Peltier Control', 'Hardware Design'],
    image: '/green-care-assist.jpg',
    featured: false,
  },
  {
    slug: 'trek-platform',
    title: 'TREK Adventure Platform',
    oneLineImpact:
      'Designed the interface that connects outdoor enthusiasts to their next trek.',
    description:
      'A trekking platform with interactive maps, bookings, and community features. I owned the UI/UX side — wireframes, design system, and high-fidelity prototypes in Figma.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems'],
    image: '/TREK.jpg',
    featured: false,
  },
];
