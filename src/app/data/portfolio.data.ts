export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  projects?: {
    name: string;
    points: string[];
  }[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  period: string;
  status: 'Completed' | 'In Progress';
  achievement?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issuedYear: string;
}

export const PORTFOLIO = {
  name: 'Jenifer K',
  title: 'Backend Developer',
  tagline: 'Building scalable APIs, microservices & real-time systems',
  email: '2020jeniferk@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jenifer-k',
  location: 'India',
  profileImage: 'assets/images/profile.jpg',
  freelancingNote:
    'I am open to freelancing opportunities — backend API development, microservices, real-time systems, and Angular integrations. Available for part-time and project-based work.',
  stats: {
    experience: '3+',
    projects: '3+',
    technologies: '10+',
  },
  summary: `Results-driven Backend Developer with hands-on experience in NestJS (Node.js framework), Java, Spring Boot, and Spring Batch. Skilled in building scalable RESTful APIs, microservices, and real-time communication systems using WebSockets, Socket.IO, Redis, and AWS SQS. Strong focus on backend optimization, data validation, and workflow automation.

Experienced in Angular for frontend development, collaborating on API integrations. Previously worked on the Georgia SHINES Child Welfare Information System, enhancing case management, education stability, and compliance workflows using NestJS and Angular.`,
  skills: [
    {
      title: 'Languages',
      items: ['Java', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['NestJS (Node.js)', 'Spring Boot', 'Spring Batch', 'Angular', 'Socket.IO'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Messaging & Real-Time',
      items: ['WebSocket', 'Socket.IO', 'AWS SQS', 'Redis'],
    },
    {
      title: 'Search & Cloud',
      items: ['TypeSense', 'AWS CloudWatch', 'Log Monitoring'],
    },
    {
      title: 'Tools',
      items: ['Git', 'Bitbucket', 'STS', 'jOOQ', 'VS Code', 'Cursor AI', 'Postman'],
    },
  ] as SkillCategory[],
  experience: [
    {
      company: 'Pranion Technology Ventures Pvt Ltd',
      role: 'Software Engineer',
      period: 'Jul 2023 – Present',
      highlights: [
        'Developed and maintained backend services using Java, Spring Boot, and NestJS.',
        'Implemented and optimized Spring Batch processes for efficient job execution.',
      ],
      projects: [
        {
          name: 'Georgia SHINES – Child Welfare Information System',
          points: [
            'Designed and developed scalable backend APIs using NestJS for case management, educational history, contact standards, and person management.',
            'Implemented data validations, auto-populated rules, and automated workflows for compliance with child welfare regulations.',
            'Enhanced PDF generation (Puppeteer) for compliance documents.',
            'Collaborated on Angular frontend modules, integrating backend APIs and improving user workflows.',
          ],
        },
        {
          name: 'Kalyan Matrimony Project',
          points: [
            'Developed family login features and improved search filtering.',
            'Built real-time messaging and notification systems using Redis and AWS SQS.',
            'Enhanced backend stability by fixing major production issues.',
            'Monitored and troubleshooted system performance using AWS CloudWatch, improving reliability.',
          ],
        },
        {
          name: 'CaterWorld Project',
          points: [
            'Implemented real-time communication features using WebSocket and Socket.IO for instant messaging.',
          ],
        },
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: 'Online Quiz System',
      description: 'Final year web-based quiz platform for admins and students.',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'phpMyAdmin'],
      features: [
        'User management for admins and students',
        'Student participation and quiz sessions',
        'Performance tracking and reporting',
      ],
    },
  ] as ProjectItem[],
  education: [
    {
      degree: 'Master of Science in Information Technology',
      institution: 'Alagappa University',
      university: 'Distance Education Mode',
      period: 'Present',
      status: 'In Progress',
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'VHNSN College, Virudhunagar',
      university: 'Madurai Kamaraj University',
      period: '2023',
      status: 'Completed',
      achievement: 'Rank holder in UG',
    },
  ] as EducationItem[],
  certifications: [
    {
      name: 'Cloud Practitioner Essentials',
      issuer: 'Aspire For Her (AWS Collaboration)',
      issuedYear: '2023',
    },
  ] as CertificationItem[],
};
