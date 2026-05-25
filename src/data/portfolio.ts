export const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSectionId = (typeof navLinks)[number]["id"];

export const skills = [
  { name: "HTML", level: "Intermediate", progress: 70, icon: "html" as const },
  { name: "CSS", level: "Intermediate", progress: 70, icon: "css" as const },
  { name: "PHP", level: "Beginner", progress: 40, icon: "php" as const },
  { name: "Canva", level: "Beginner", progress: 45, icon: "canva" as const },
  { name: "Figma", level: "Intermediate", progress: 75, icon: "figma" as const },
] as const;

export const projects = [
  {
    title: "Sudoku + Bloom",
    imageKey: "sudoku-bloom",
    description:
      "An engaging Sudoku game that combines classic gameplay with a modern UI, making puzzle-solving both fun and visually appealing.",
    technologies: ["Figma"],
  },
  {
    title: "ASF MapTrack (Clone Prototype)",
    imageKey: "asf-maptrack",
    description:
      "A GIS-based surveillance system designed to monitor and track African Swine Fever outbreaks, enabling timely reporting, mapping, and data-driven decision-making.",
    technologies: ["Figma"],
  },
  {
    title: "Pacific Northwest X-Ray E-Commerce",
    imageKey: "pacific-northwest-xray",
    description:
      "A UI redesign of an e-commerce platform for medical, scientific, and protective equipment focused on improved usability and layout.",
    technologies: ["Figma"],
  },
  {
    title: "Convenience POS System",
    imageKey: "convenience-pos",
    description:
      "A user-friendly POS system designed to streamline sales, manage inventory, and simplify daily transactions for convenience stores.",
    technologies: ["PHP", "HTML", "CSS"],
  },
  {
    title: "HushSpace (On-going)",
    imageKey: "hushspace",
    description:
      "A safe and soothing platform that helps users manage stress, express emotions, and find moments of quiet.",
    technologies: ["Figma"],
  },
  {
    title: "Mobile Flutter Design",
    imageKey: "mobile-flutter",
    description:
      "A Flutter-based mobile UI design featuring a modern portfolio and cybersecurity-themed interface with authentication and encryption tools.",
    technologies: ["Figma"],
  },
  {
    title: "Medicine IMS",
    imageKey: "medicine-ims",
    description:
      "A mobile UI design for a Medicine Inventory Management System that helps manage medicine records and monitor inventory.",
    technologies: ["Figma"],
  },
] as const;

export const education = {
  school: "Davao del Norte State College",
  course: "Bachelor of Science in Information Technology",
  year: "4th Year",
} as const;

export const certificates = [
  {
    title: "CISCO Introduction to Packet Tracer",
    imageKey: "cisco-packet-tracer",
  },
  {
    title: "Social and Professional Issues I",
    imageKey: "social-professional-issues",
  },
  {
    title: "Final Pitching Competition Level App 2.0",
    imageKey: "final-pitching",
  },
  {
    title: "Advance Seminar – PT Interpretation",
    imageKey: "advance-seminar-pt",
  },
  {
    title: "Advance Seminar Series Day 1",
    imageKey: "advance-seminar-day1",
  },
  {
    title: "Advance Seminar Series Day 2",
    imageKey: "advance-seminar-day2",
  },
  {
    title: "Tree Planting Certificate",
    imageKey: "tree-planting",
  },
  {
    title: "Dean's Lister, 2nd Year – Second Honors",
    imageKey: "deans-lister-2nd",
    badgeOnly: true,
  },
  {
    title: "Dean's Lister, 3rd Year – Second Honors",
    imageKey: "deans-lister-3rd",
    badgeOnly: true,
  },
  {
    title: "Dean's Lister, 4th Year – 1st Honors",
    imageKey: "deans-lister-4th",
    badgeOnly: true,
  },
] as const;

export const experiences = [
  {
    position: "Cash for Work",
    organization: "Davao del Norte State College – Registrar's Office",
    responsibilities: "Data Encoder",
    duration: "2023–2024",
  },
  {
    position: "Intern",
    organization: "Davao del Norte State College – Guidance Office",
    responsibilities: "Data Encoder",
    duration: "2026",
  },
] as const;

export const highlights = [
  {
    quote:
      "Consistently recognized for academic excellence as Dean's Lister with Second and First Honors across multiple years.",
    name: "Academic Achievement",
    role: "Dean's Lister — DNSC",
    rating: 5,
    avatar: "cat" as const,
  },
  {
    quote:
      "Reliable and detail-oriented in data encoding roles, supporting registrar and guidance office operations with accuracy.",
    name: "Professional Experience",
    role: "Data Encoder — DNSC",
    rating: 5,
    avatar: "dog" as const,
  },
  {
    quote:
      "Passionate about creating designs that are visually appealing, intuitive, and user-friendly for real-world impact.",
    name: "Design Philosophy",
    role: "UI/UX Designer",
    rating: 5,
    avatar: "flower" as const,
  },
] as const;

export const contact = {
  name: "Irish Suello",
  email: "irishsuello@gmail.com",
  phone: "+639-326-9653",
  address: "Prk 4B San Francisco, Panabo City",
  location: "Panabo City, Davao del Norte",
  social: {
    facebook: "https://www.facebook.com/irish.zldyck",
    instagram:
      "https://www.instagram.com/_irshzl?igsh=d3dyZGJrYWdhMXhq",
  },
} as const;

export const aboutContent = {
  greeting: "Hi, I'm Ishi!",
  name: "Irish Suello",
  title: "UI/UX Designer · IT Student",
  bio: "Hello! I'm an IT student who enjoys designing creative and user-friendly websites and applications. I love exploring new ideas, learning more about technology, and improving my skills through hands-on projects. I'm always excited to grow, be creative, and create designs that can make a positive impact.",
} as const;
