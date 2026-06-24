import { Project, Skill, Service, Stat, Experience, Testimonial } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI SaaS Dashboard',
    description: 'A full-stack AI-powered analytics dashboard with real-time data visualization, multi-model support, and enterprise-grade auth.',
    problem: 'Client needed a way to visualize complex AI model performance metrics in real-time, with support for multiple models and secure team collaboration.',
    solution: 'Built a Next.js dashboard with OpenAI integration, real-time WebSocket updates, PostgreSQL for data persistence, and enterprise-grade authentication with role-based access control.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma', 'PostgreSQL'],
    image: '/projects/ai-dashboard.jpg',
    demo: 'https://github.com/KushagraHarit-cell',
    github: 'https://github.com/KushagraHarit-cell',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern E-Commerce Store',
    description: 'High-performance e-commerce platform with seamless checkout, inventory management, and Stripe payment integration.',
    problem: 'Existing e-commerce solution was slow, had poor mobile experience, and lacked real-time inventory tracking, leading to lost sales.',
    solution: 'Developed a headless e-commerce platform with Next.js for performance, Sanity CMS for content management, Stripe for payments, and real-time inventory sync.',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Tailwind', 'Framer Motion'],
    image: '/projects/ecommerce.jpg',
    demo: 'https://github.com/KushagraHarit-cell',
    github: 'https://github.com/KushagraHarit-cell',
  },
  {
    id: 3,
    title: 'Agency Landing Page',
    description: 'Award-worthy creative agency website with micro-interactions, scroll-driven animations, and pixel-perfect design.',
    problem: 'Agency needed a website that would stand out in a crowded market and showcase their creative work with memorable interactions.',
    solution: 'Created an immersive landing page with GSAP scroll animations, Three.js 3D elements, custom micro-interactions, and optimized performance for instant loading.',
    tags: ['React', 'GSAP', 'Three.js', 'Tailwind', 'Vercel'],
    image: '/projects/agency.jpg',
    demo: 'https://github.com/KushagraHarit-cell',
    github: 'https://github.com/KushagraHarit-cell',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Premium personal portfolio with smooth scroll, custom cursor, and cinematic page transitions that leave an impression.',
    problem: 'Needed a portfolio that would showcase technical skills and design sensibility while demonstrating advanced animation capabilities.',
    solution: 'Built a portfolio with Lenis smooth scroll, custom cursor with hover states, Framer Motion animations, and premium glassmorphism design system.',
    tags: ['Next.js', 'Framer Motion', 'Lenis', 'TypeScript', 'Tailwind'],
    image: '/projects/portfolio.jpg',
    demo: 'https://kushagra-portfolio-zeta.vercel.app',
    github: 'https://github.com/KushagraHarit-cell',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 92 },
  { name: 'TypeScript', category: 'frontend', level: 88 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'Express', category: 'backend', level: 82 },
  { name: 'MongoDB', category: 'backend', level: 78 },
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'GitHub', category: 'tools', level: 90 },
  { name: 'Figma', category: 'tools', level: 80 },
  { name: 'Vercel', category: 'tools', level: 88 },
];

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'End-to-end web applications built with modern stacks. From architecture to deployment, pixel-perfect and performant.',
    icon: 'Code2',
    features: ['Full-stack Next.js apps', 'API design & integration', 'Database architecture', 'CI/CD pipelines'],
  },
  {
    title: 'Landing Pages',
    description: 'Conversion-optimized landing pages that stop the scroll. High-impact design engineered to turn visitors into customers.',
    icon: 'Layout',
    features: ['Scroll animations', 'Mobile-first design', 'A/B test ready', 'Blazing fast load times'],
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces that feel as good as they look. Design systems, prototypes, and user flows grounded in real user behavior.',
    icon: 'Pen',
    features: ['Design systems', 'Figma prototypes', 'User flow mapping', 'Component libraries'],
  },
  {
    title: 'Website Optimization',
    description: 'Turn your existing site into a speed demon. Audit, optimize, and ship — with Lighthouse scores that make devs jealous.',
    icon: 'Zap',
    features: ['Core Web Vitals', 'SEO optimization', 'Image optimization', 'Performance audits'],
  },
];

export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Happy Clients' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const timeline = [
  {
    year: '2022',
    title: 'Started the journey',
    description: 'Fell headfirst into web development. Built my first React app, broke everything twice, fixed it three times.',
  },
  {
    year: '2023',
    title: 'Going full-stack',
    description: 'Expanded into Node.js, databases, and API design. Took on first freelance clients and shipped production projects.',
  },
  {
    year: '2024',
    title: 'Design meets engineering',
    description: 'Discovered the intersection of beautiful design and clean code. Started building premium digital experiences.',
  },
  {
    year: '2025',
    title: 'Scaling up',
    description: 'Now crafting high-impact products for clients worldwide. Specializing in performance, animation, and conversion.',
  },
];

export const experiences: Experience[] = [
  {
    year: '2026',
    title: 'Freelance Web Developer',
    description: 'Building premium websites and digital experiences for clients worldwide. Specializing in Next.js, React, and modern web technologies.',
  },
  {
    year: '2025',
    title: 'Modern Web Projects',
    description: 'Developed multiple high-performance web applications with focus on UX, animation, and conversion optimization.',
  },
  {
    year: '2024',
    title: 'React & Next.js Journey',
    description: 'Mastered React ecosystem and Next.js framework. Built complex applications with server-side rendering and API routes.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Founder',
    company: 'TechStart Inc.',
    content: 'Kushagra delivered an exceptional website that exceeded our expectations. The attention to detail and performance optimization was outstanding.',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'DigitalFlow',
    content: 'Working with Kushagra was a pleasure. He understood our vision perfectly and delivered a premium product on time.',
  },
  {
    name: 'Michael Brown',
    role: 'CEO',
    company: 'GrowthLabs',
    content: 'The portfolio website Kushagra built for us has significantly improved our conversion rates. Highly recommended!',
  },
];
