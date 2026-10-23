export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: string;
}

export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer', company: 'Innovators Grid', location: 'Amman, Jordan', period: 'Jul 2025 - Present',
    summary: 'Building enterprise features for risk, audit, and compliance platforms with an emphasis on security, real-time behavior, and dependable data workflows.',
    highlights: [
      'Integrated SignalR for live notifications, status updates, and responsive dashboards.',
      'Implemented detailed audit logging across identities, operations, entities, IP addresses, timestamps, and before/after changes.',
      'Delivered PDF, Word, and Excel generation for auditing, compliance, and management decision-making.',
      'Built JWT authentication, two-factor authentication, registration, authorization, and password-expiration workflows.',
    ],
    stack: ['Angular', 'ASP.NET Core', 'SignalR', 'JWT', 'SQL'],
  },
  {
    role: 'Full-Stack Developer', company: 'Matelda for IT & Web Solutions', location: 'Amman, Jordan', period: 'Dec 2024 - Jul 2025',
    summary: 'Developed practical business systems that connected polished Angular interfaces with structured ASP.NET Core services.',
    highlights: [
      'Built a task management system with assignment, priority, deadlines, and status tracking.',
      'Created advanced search, filtering, sorting, pagination, reporting, and export workflows for large datasets.',
      'Integrated a third-party translation API with dynamic requests and real-time results.',
      'Kept task and financial data consistent across Angular screens and backend endpoints.',
    ],
    stack: ['Angular', 'ASP.NET Core API', 'REST APIs', 'PDF / Excel', 'SQL'],
  },
  {
    role: 'Front-End Development Intern', company: 'Tech Startup', location: 'Netherlands · Remote', period: '2024',
    summary: 'Collaborated with an international team to create responsive, user-friendly interfaces and scalable single-page application experiences.',
    highlights: [
      'Worked with component-based SPA architecture across multiple device sizes.',
      'Contributed to UI/UX improvements through agile collaboration and design handoff.',
      'Used GitHub-based version control in a distributed team workflow.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'SPA', 'GitHub'],
  },
];

export const projects: Project[] = [
  {
    number: '01', title: 'Academic Marketplace Platform', type: 'Senior project · The Hashemite University · 2024',
    description: 'A student-only marketplace for buying and selling academic goods, designed around trusted university access and safer peer-to-peer communication.',
    highlights: ['Chatbot messenger for student communication', 'AI-assisted detection of phishing, fraud, and inappropriate content', 'Recommendation engine and responsive Angular UI', 'SQL data model for users, transactions, and inventory'],
    stack: ['Angular', 'ASP.NET Core Web API', 'SQL', 'AI Integration'], accent: 'violet',
  },
  {
    number: '02', title: 'Task Management System', type: 'Professional delivery · Matelda',
    description: 'A full-stack workflow for creating, assigning, prioritizing, and tracking work with efficient handling of larger datasets.',
    highlights: ['Search, filtering, and sorting', 'Pagination and deadline tracking', 'PDF and Excel reporting', 'Consistent API-driven state'],
    stack: ['Angular', 'ASP.NET Core', 'REST', 'Excel'], accent: 'cyan',
  },
  {
    number: '03', title: 'Risk & Compliance Platform Features', type: 'Enterprise work · Innovators Grid',
    description: 'Secure, traceable workflows for live operational awareness and regulated business processes.',
    highlights: ['SignalR live updates', 'Audit trail architecture', '2FA and JWT security', 'Document generation'],
    stack: ['Angular', 'SignalR', 'JWT', 'Audit Logging'], accent: 'amber',
  },
];

export const skillGroups = [
  { title: 'Front end', skills: ['Angular', 'TypeScript / JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Responsive UI', 'SPA Architecture'] },
  { title: 'Back end', skills: ['ASP.NET Core Web API', 'PHP', 'CodeIgniter 4', 'RESTful APIs', 'SignalR', 'Authentication & Authorization'] },
  { title: 'Data & cloud', skills: ['MSSQL', 'SQL Databases', 'Azure', 'Query Optimization', 'Reporting & Export'] },
  { title: 'Workflow', skills: ['Git & GitHub', 'Agile Collaboration', 'UI/UX Handoff', 'Debugging', 'Cross-functional Delivery'] },
];
