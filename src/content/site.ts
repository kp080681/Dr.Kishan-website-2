import { originalGalleryItems } from "./gallery-originals";

export const doctor = {
  name: "Dr. Kishan Rao",
  credentials: "MBBS (BMC), MS (Gold Medalist), FMAS, DMAS",
  primaryRole: "General, Laparoscopic and LASER Surgeon",
  secondaryRoles: ["Career Counsellor and Motivational Mentor"] as const,
  phoneDisplay: "+91 81052 32787",
  phoneTel: "+918105232787",
  email: "surgeonkishan@gmail.com",
  whatsappUrl: "https://wa.me/918105232787",
  social: {
    instagram: "https://instagram.com/surgeonkishan",
    facebook: "https://www.facebook.com/Surgeon-Kishan-107937735579172/",
    youtube: "https://www.youtube.com/@THEWHITEARMY",
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
  { label: "Blogs", href: "/#blogs" },
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
    name: "Bhat's Nursing Home",
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
    schedule: "Visiting consultation - confirm availability",
    status: "visiting" as LocationStatus,
  },
  {
    id: "colaco",
    name: "Colaco Hospital",
    place: "Mangalore region",
    schedule: "Visiting consultation - confirm availability",
    status: "visiting" as LocationStatus,
  },
  {
    id: "yenepoya",
    name: "Yenepoya Speciality Hospital",
    place: "Mangalore",
    schedule: "Visiting consultation - confirm availability",
    status: "visiting" as LocationStatus,
  },
] as const;

export const services = [
  {
    id: "laser",
    title: "LASER SURGERY",
    procedures: [
      "Varicose Veins (EVLA)",
      "Piles (Hemorrhoids)",
      "Fissure",
      "Fistula",
      "Pilonidal Sinus",
    ],
    previewCount: 3,
    image: "/images/gallery/originals/2026-07-12-surgical-portrait.jpg",
    imageAlt: "Dr. Kishan Rao in surgical scrubs",
    imagePosition: "50% 0%",
  },
  {
    id: "laparoscopic",
    title: "LAPAROSCOPIC SURGERY",
    procedures: ["Gallbladder Stones", "Appendix", "Hernia", "Diagnostic Laparoscopy"],
    previewCount: 3,
    image: "/images/gallery/originals/2026-02-23-scrubs-colleague.jpg",
    imageAlt: "Dr. Kishan Rao in surgical attire with a colleague",
    imagePosition: "50% 0%",
  },
  {
    id: "general",
    title: "GENERAL SURGERY",
    procedures: [
      "Hernia Surgery",
      "Breast Surgery",
      "Thyroid Surgery",
      "Circumcision",
      "Diabetic Foot & Ulcer Care",
      "Minor Surgical Procedures",
      "Emergency Surgery",
    ],
    previewCount: 4,
    image: "/images/gallery/originals/2026-02-23-operation-theatre-team.jpg",
    imageAlt: "Dr. Kishan Rao in an operation theatre setting",
    imagePosition: "50% 12%",
  },
  {
    id: "vascular",
    title: "VASCULAR SURGERY",
    procedures: [
      "Varicose Veins",
      "Venous Ulcers",
      "Sclerotherapy",
      "Peripheral Arterial Disease (PAD)",
    ],
    previewCount: 3,
    image: "/images/gallery/originals/2026-06-24-surgical-conference.jpg",
    imageAlt: "Dr. Kishan Rao at a surgical conference",
    imagePosition: "50% 0%",
  },
] as const;

export const aboutMilestones = [
  {
    title: "MBBS",
    detail: "Bangalore Medical College and Research Institute, Bengaluru.",
  },
  {
    title: "MS General Surgery",
    detail: "Agartala Government Medical College, Agartala.",
  },
  {
    title: "Overall University Topper",
    detail: "Gold Medalist among all the branches of MD/MS examination.",
  },
  {
    title: "Senior Residency",
    detail: "AIIMS New Delhi and Sri Chitra Tirunal Institute.",
  },
  {
    title: "Fellowship in Minimal Access Surgery",
    detail: "World Laparoscopy Hospital, Gurugram.",
  },
  {
    title: "Advanced training",
    detail: "Trained in Laparoscopy, Robotic surgery and Endoscopy.",
  },
] as const;

export const fullProfileSections = [
  {
    title: "Education",
    items: [
      "MBBS - Bangalore Medical College and Research Institute, Bengaluru.",
      "MS General Surgery - Agartala Government Medical College, Agartala.",
      "Senior Residency in Cardiovascular and Thoracic Surgery - AIIMS New Delhi.",
      "Senior Residency in Pediatric Cardiac Surgery - Sri Chitra Tirunal Institute for Medical Sciences and Technology, Thiruvananthapuram.",
      "Fellowship in Minimal Access Surgery & Diploma in Minimal Access Surgery - World Laparoscopy Hospital, Gurugram.",
      "Trained in Laparoscopy, Robotic surgery and Endoscopy.",
    ],
  },
  {
    title: "Academic Achievements",
    items: [
      "Best Outgoing student of Jnana Ganga Public School, Bellare.",
      "Best Outgoing Student of Bangalore Medical College and Research Institute, Bengaluru.",
      "Overall University Topper among all the branches of MD/MS examination and a Gold Medalist.",
      "MCh Entrance Exam: 1st Rank in Sri Chitra Tirunal Institute for Medical Sciences and Technology, Thiruvananthapuram.",
      "MCh Entrance Exam: 2nd Rank in AIIMS, New Delhi.",
      "World Association of Laparoscopic Surgeons Scholarship.",
      "Basic Life Support and Advanced Cardiac Life Support Provider Certification by NHCPS, USA.",
      "Torrent Young Scholar Award in Surgery - Zonal winner.",
      "More than 10 Research paper publications in reputed International and national journals.",
      "Winner of several research paper and poster presentation competitions in various state and national conferences.",
      "Honorary B C Roy Award for the service in Medical and Social field.",
    ],
  },
  {
    title: "Work Experience",
    items: [
      "ICU duty doctor in Shankara Cancer Hospital, Bangalore.",
      "Senior Resident at Sri Sathya Sai Sanjeevani International centre for Pediatric Heart Care, Palwal, Haryana.",
      "Senior Resident at AIIMS, New Delhi, in the department of CTVS.",
      "Senior Resident at KVGMC Hospital, Sullia in the department of General Surgery.",
      "Senior Resident at SCTIMST, Thiruvananthapuram in the department of CTVS.",
      "Fellow in Minimal Access Surgery at World Laparoscopy Hospital, Gurugram.",
      "Assistant Professor at AJIMS, Mangalore in the department of Surgery.",
    ],
  },
  {
    title: "Beyond Surgery",
    items: [
      "Founder and Chief of The White Army - Free Online Medical Education platform for more than 3 Lakh members all over the country and abroad.",
      "Author of Surgery Simplified for Students book.",
      "Chief Editor and Publisher of Language of Healthcare books in Kannada, Tulu, Bengali, Kokborok, Malayalam, Tamil, Telugu, Hindi, Marathi, Gujarathi, Assamese, Odiya languages; Publisher of Exam Oriented Clinical Neurology book.",
      "Founder of The Empath Society - to Empower Humanity, an initiative for social service.",
      "Musician - Carnatic classical vocalist and can play 8 musical instruments proficiently.",
      "Bangalore Medical College Badminton team Captain and has won more than 30 Inter-college tournaments all over the country. 3 time RGUHS Champions.",
      "Voluntary blood donation for more than 40 times in last 15 years.",
      "Public speaker and writer.",
      "Resource person, mentor and judge for numerous national and international conferences, competitions and events.",
      "Master of Ceremony for several high profile functions.",
      "Organizer of multiple National Level Quizzes and competitions, including all time first completely online Medical Quiz.",
    ],
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
    note: "Chief Editor and Publisher of Language of Healthcare books.",
    actionLabel: "View book",
    coverImage: "/images/books/language-of-healthcare-cover.webp",
    coverAlt: "Language of Healthcare English-Kannada Phrase Book cover",
    objectPosition: "center 12%",
  },
  {
    title: "Surgery Simplified for Students",
    note: "Author of Surgery Simplified for Students book.",
    actionLabel: "Know more",
    coverImage: "/images/books/surgery-simplified-for-students-cover.webp",
    coverAlt: "Surgery Simplified for Students book cover",
    objectPosition: "center 8%",
  },
  {
    title: "All in 1 Case Proformas",
    note: "Structured case documentation for clinical training",
    actionLabel: "Know more",
    coverImage: "/images/about/blue-portrait.jpg",
    coverAlt: "Dr. Kishan Rao professional portrait",
    objectPosition: "center 10%",
    coverPending: true,
  },
] as const;

export const publicationDetails = [
  "Language of Healthcare books in Kannada, Tulu, Bengali, Kokborok, Malayalam, Tamil, Telugu, Hindi, Marathi, Gujarathi, Assamese, Odiya languages.",
  "Publisher of Exam Oriented Clinical Neurology book.",
] as const;

export const socialInitiatives = [
  {
    name: "Empath Society",
    description: "to Empower Humanity",
    details: [
      "Organizing free medical camps in Orphanages, Old age homes, Army camps.",
      "Health awareness sessions in various places.",
      "Free online consultation for non-COVID patients during the COVID lockdown.",
    ],
  },
  {
    name: "Hope India",
    description:
      "Initiative for serving leftover food in various medical college hostels to the destitute to prevent wastage of food and resources.",
    details: [],
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
    name: "Nikhil D'Souza",
    source: "Previously published on surgeonkishan.com",
  },
] as const;

export const galleryItems = originalGalleryItems;

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
  whiteArmy: {
    src: "/images/organizations/white-army-logo-clean.webp",
    alt: "The White Army logo by Dr. Kishan Rao",
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
    alt: "Patient consultation image - pending consent confirmation",
    consentRequired: true as const,
  },
} as const;
