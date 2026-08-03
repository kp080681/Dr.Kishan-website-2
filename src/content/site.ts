export const doctor = {
  name: "Dr. Kishan Rao",
  credentials: "MBBS (BMC), MS (Gold Medalist), FMAS, DMAS",
  primaryRole: "General, Laparoscopic & LASER Surgeon",
  secondaryRoles: ["Career Counsellor and Motivational Mentor"] as const,
  phoneDisplay: "+91 81052 32787",
  phoneTel: "+918105232787",
  email: "surgeonkishan@gmail.com",
  whatsappUrl: "https://wa.me/918105232787",
  social: {
    instagram: "https://instagram.com/surgeonkishan",
    facebook: "https://www.facebook.com/Surgeon-Kishan-107937735579172/",
    handle: "Surgeon Kishan",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Consultation", href: "/#consultation" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blogs", href: "/blogs" },
] as const;

export type LocationStatus = "scheduled" | "visiting";

export const locations = [
  {
    id: "aj-hospital",
    name: "AJ Hospital",
    place: "Mangalore",
    schedule: "Monday to Friday, 9:00 AM to 10:00 AM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "bhats",
    name: "Bhat’s Nursing Home",
    place: "Mangalore",
    schedule: "Monday to Friday, 10:00 AM to 1:00 PM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "namma",
    name: "Namma Arogyadhama",
    place: "Ayyanakatte",
    schedule: "Sunday, 9:00 AM to 5:00 PM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "adarsha",
    name: "Adarsha Hospital",
    place: "Puttur",
    schedule: "Saturday at 10:00 AM and Sunday at 7:00 PM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "scs",
    name: "SCS Hospital",
    place: "Mangalore region",
    schedule: "Visiting consultation — confirm availability",
    status: "visiting" as LocationStatus,
  },
  {
    id: "colaco",
    name: "Colaco Hospital",
    place: "Mangalore region",
    schedule: "Visiting consultation — confirm availability",
    status: "visiting" as LocationStatus,
  },
  {
    id: "yenepoya",
    name: "Yenepoya Speciality Hospital",
    place: "Mangalore",
    schedule: "Visiting consultation — confirm availability",
    status: "visiting" as LocationStatus,
  },
] as const;

export const services = [
  {
    id: "general",
    title: "General Surgery",
    description:
      "Thoughtful assessment and surgical care for common and complex conditions of the abdomen, thyroid, breast, hernia and soft tissues.",
    procedures: [
      "Hernia repair",
      "Gallbladder and appendix care",
      "Thyroid and breast surgery",
      "Abdominal and soft-tissue procedures",
    ],
  },
  {
    id: "laparoscopic",
    title: "Laparoscopic Surgery",
    description:
      "Minimally invasive keyhole procedures that may support quicker recovery when clinically suitable for the patient.",
    procedures: [
      "Diagnostic laparoscopy",
      "Laparoscopic cholecystectomy",
      "Laparoscopic appendicectomy",
      "Selected hernia repairs",
    ],
  },
  {
    id: "laser",
    title: "LASER Surgery",
    description:
      "Selected LASER procedures offered after careful evaluation, with clear discussion of suitability, benefits and limitations.",
    procedures: [
      "Proctology-related LASER care",
      "Selected anorectal procedures",
      "Patient-specific suitability review",
      "Post-procedure follow-up planning",
    ],
  },
  {
    id: "vascular",
    title: "Vascular Surgery",
    description:
      "Evaluation and care for selected vascular concerns, including varicose veins and related circulatory conditions.",
    procedures: [
      "Varicose vein assessment",
      "Selected venous procedures",
      "Diabetic ulcer support",
      "Ongoing wound-care guidance",
    ],
  },
] as const;

export const aboutMilestones = [
  {
    title: "MBBS, Bangalore Medical College",
    detail: "Best Outgoing Student Award",
  },
  {
    title: "MS General Surgery",
    detail: "University topper and Gold Medalist",
  },
  {
    title: "Cardiovascular surgery training",
    detail: "AIIMS, New Delhi",
  },
  {
    title: "Paediatric cardiac surgery training",
    detail: "Sree Chitra Tirunal Institute, Thiruvananthapuram",
  },
  {
    title: "Laparoscopy, endoscopy and robotic surgery",
    detail:
      "World Laparoscopic Hospital — Course Topper Scholarship, World Association of Laparoscopic Surgeons",
  },
  {
    title: "Advanced LASER surgery training",
    detail: "IMMAST, Mumbai",
  },
  {
    title: "Life-support certification",
    detail: "Basic Life Support and Advanced Cardiac Life Support provider",
  },
] as const;

export const philosophyPoints = [
  {
    title: "Clear diagnosis",
    detail:
      "Care begins with careful listening and clinical assessment, so treatment decisions rest on a clear understanding of the problem.",
  },
  {
    title: "Appropriate treatment selection",
    detail:
      "Surgery is recommended when it is clinically indicated. Non-operative options are discussed when they may be suitable.",
  },
  {
    title: "Patient-friendly explanation",
    detail:
      "Findings, options and next steps are explained in plain language, so patients and families can decide with confidence.",
  },
  {
    title: "Responsible recovery and follow-up",
    detail:
      "Recovery guidance and follow-up remain part of care after the procedure, not an afterthought.",
  },
  {
    title: "Empathy and ethical care",
    detail:
      "Respect, honesty and ethical judgement guide every consultation and surgical decision.",
  },
] as const;

export const books = [
  {
    title: "Language of Healthcare",
    note: "Written and published by Dr. Kishan Rao",
    coverImage: "/images/education/formal-suit.jpg",
    coverAlt: "Dr. Kishan Rao in formal attire",
    objectPosition: "center 12%",
  },
  {
    title: "Surgery Simplified for Students",
    note: "A practical learning companion for medical students",
    coverImage: "/images/clinical/surgical-portrait.jpg",
    coverAlt: "Dr. Kishan Rao in surgical attire",
    objectPosition: "center 8%",
  },
  {
    title: "All in 1 Case Proformas",
    note: "Structured case documentation for clinical training",
    coverImage: "/images/about/blue-portrait.jpg",
    coverAlt: "Dr. Kishan Rao professional portrait",
    objectPosition: "center 10%",
  },
] as const;

export const socialInitiatives = [
  {
    name: "Empath Society",
    description: "An initiative created to empower humanity through shared values and community action.",
  },
  {
    name: "Hope India",
    description: "A social-service initiative focused on meaningful community support.",
  },
] as const;

/** Verified reviews previously published on surgeonkishan.com */
export const testimonials = [
  {
    quote:
      "Good doctor. He is very simple and gentle in his behavior. He will give sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor.",
    name: "Mr. Kishore Shetty",
    source: "Previously published on surgeonkishan.com",
  },
  {
    quote:
      "Very good doctor and kind at heart. Gives maximum time to hear patient views. His clinical diagnosis is very sharp. Thank you.",
    name: "Amina",
    source: "Previously published on surgeonkishan.com",
  },
  {
    quote:
      "He is very caring and soft spoken. He is a dedicated Doctor. Listens to you very patiently & gives you sufficient time to say your problems.",
    name: "Nikhil D’Souza",
    source: "Previously published on surgeonkishan.com",
  },
] as const;

export const galleryItems = [
  {
    src: "/images/gallery/surgical-portrait.jpg",
    alt: "Dr. Kishan Rao in surgical attire",
    label: "Surgical practice",
  },
  {
    src: "/images/gallery/outdoor-portrait.jpg",
    alt: "Dr. Kishan Rao outdoors in a white coat",
    label: "Clinical presence",
  },
  {
    src: "/images/gallery/operation-theatre.jpg",
    alt: "Dr. Kishan Rao in the operation theatre",
    label: "Operation theatre",
  },
  {
    src: "/images/gallery/formal-portrait.jpg",
    alt: "Dr. Kishan Rao in formal attire",
    label: "Professional portrait",
  },
] as const;

export const blogPreviews = [] as const;

export const images = {
  hero: {
    src: "/images/hero/outdoor-white-coat.jpg",
    alt: "Dr. Kishan Rao in a white coat, outdoor portrait",
  },
  about: {
    src: "/images/about/blue-portrait.jpg",
    alt: "Dr. Kishan Rao studio portrait against a blue background",
  },
  quote: {
    src: "/images/about/compassion-quote.jpg",
    alt: "Quote graphic: Surgery taught me precision, but life taught me compassion",
  },
  education: {
    src: "/images/education/formal-suit.jpg",
    alt: "Dr. Kishan Rao in formal attire",
  },
  clinical: {
    src: "/images/clinical/surgical-portrait.jpg",
    alt: "Dr. Kishan Rao surgical close portrait",
  },
  theatre: {
    src: "/images/clinical/operation-theatre.jpg",
    alt: "Dr. Kishan Rao in the operation theatre",
  },
  logo: {
    src: "/images/brand/surgeon-kishan-logo-transparent.png",
    alt: "Surgeon Kishan logo",
    width: 1452,
    height: 1444,
  },
  favicon: {
    src: "/images/brand/surgeon-kishan-favicon.png",
  },
  appleIcon: {
    src: "/images/brand/surgeon-kishan-apple-touch.png",
  },
  appIcon: {
    src: "/images/brand/surgeon-kishan-icon-192.png",
  },
  /** Held back until consent is confirmed for all identifiable people */
  patientConsultation: {
    src: "/images/clinical/patient-consultation-pending-consent.jpg",
    alt: "Patient consultation image — pending consent confirmation",
    consentRequired: true as const,
  },
} as const;
