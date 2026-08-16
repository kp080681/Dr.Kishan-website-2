import { originalGalleryItems } from "./gallery-originals";

export const doctor = {
  name: "Dr. Kishan Rao",
  brandName: "Dr. Kishan Rao Balila",
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
    place: "Mangaluru",
    address: "NH-66, Kuntikana, Mangaluru, Karnataka 575004",
    schedule: "Monday to Friday, 9:00 AM to 10:00 AM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "bhats",
    name: "Bhat's Nursing Home",
    place: "Mangaluru",
    address: "7th Cross, Gandhinagar, Mangaluru, Karnataka 575003",
    schedule: "Monday to Friday, 10:00 AM to 1:00 PM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "namma",
    name: "Namma Arogyadhama Multi-speciality Medical Center",
    place: "Ayyanakatte near Bellare, Sullia Taluk",
    address: "Ground Floor, Gokula Complex, Ayyanakatte, near Bellare, Sullia, Karnataka 574212",
    schedule: "Sunday, 9:00 AM to 5:00 PM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "adarsha",
    name: "Adarsha Hospital",
    place: "Puttur",
    address: "APMC Road, Bolwar, Puttur, Karnataka 574201",
    schedule: "Saturday, 11:00 AM",
    status: "scheduled" as LocationStatus,
  },
  {
    id: "scs",
    name: "SCS Hospital",
    place: "Mangaluru",
    address: "Upper Bendoor, Mangaluru, Karnataka 575002",
    schedule: "Confirm availability before visiting.",
    status: "visiting" as LocationStatus,
  },
  {
    id: "colaco",
    name: "Colaco Hospital",
    place: "Mangaluru",
    address: "Bendoorwell Main Road, Bendoor, Mangaluru, Karnataka 575002",
    schedule: "Confirm availability before visiting.",
    status: "visiting" as LocationStatus,
  },
  {
    id: "yenepoya",
    name: "Yenepoya Specialty Hospital",
    place: "Mangalore",
    address: "Kodialbail, Mangaluru, Karnataka 575003",
    schedule: "Confirm availability before visiting.",
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
    image: "/images/services/laser-ot-editorial.png",
    imageAlt: "Operating theatre view for LASER surgical care",
    imagePosition: "50% 36%",
    imageWidth: 1024,
    imageHeight: 1536,
    href: "/#services",
  },
  {
    id: "laparoscopic",
    title: "LAPAROSCOPIC SURGERY",
    procedures: ["Gallbladder Stones", "Appendix", "Hernia"],
    image: "/images/services/laparoscopic-surgery-client.jpeg",
    imageAlt: "Laparoscopic operation theatre view with Dr. Kishan Rao",
    imagePosition: "50% 44%",
    imageWidth: 1200,
    imageHeight: 1600,
    href: "/#services",
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
    image: "/images/gallery/originals/2026-02-23-scrubs-colleague.jpg",
    imageAlt: "Dr. Kishan Rao in surgical attire with a colleague",
    imagePosition: "50% 0%",
    imageWidth: 864,
    imageHeight: 1280,
    href: "/#services",
  },
  {
    id: "varicose",
    title: "VARICOSE VEINS",
    procedures: ["Varicose Veins"],
    image: "/images/gallery/outdoor-portrait.jpg",
    imageAlt: "Dr. Kishan Rao in a white coat portrait",
    imagePosition: "50% 0%",
    imageWidth: 1181,
    imageHeight: 1536,
    href: "/conditions/varicose-veins",
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
    pdfHref: "/documents/language-of-healthcare-english-kannada.pdf",
    details: [
      "Language of Healthcare is an English-Kannada phrase book from The White Army Publication.",
      "The book is titled Articulate to Treat and supports clearer healthcare communication across languages.",
    ],
  },
  {
    title: "Surgery Simplified for Students",
    note: "Author of Surgery Simplified for Students book.",
    actionLabel: "Know more",
    coverImage: "/images/books/surgery-simplified-for-students-cover.webp",
    coverAlt: "Surgery Simplified for Students book cover",
    objectPosition: "center 8%",
    details: [
      "Surgery Simplified for Students is authored by Dr. Kishan Rao for medical learners.",
      "The publication presents surgical learning material in a student-friendly format.",
    ],
  },
  {
    title: "All in 1 Case Proformas",
    note: "Structured case documentation for clinical training",
    actionLabel: "View book",
    coverImage: "/images/books/all-in-1-clinical-case-proformas-cover.webp",
    coverAlt: "All in 1 Clinical Case Proformas book cover",
    objectPosition: "center center",
    pdfHref: "/documents/all-in-1-clinical-case-proformas.pdf",
    details: [] as const,
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

export const googleReviews = [
  {
    name: "Shruthi gs",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "Dear Doctor....., I am writing to express my sincere gratitude for the care you provided to my child during his surgery.\nYou explain everything in calm way.Your skill, patience and kindness created fearless environment.\nBecause of your expertise and compassion, my child is recovering well and we are so relieved. Thank you for treating our child with such care as if he is your own. I share this to help improve care for other children and families. Thank you once again......",
  },
  {
    name: "Deepak Anchan",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "\"Incredibly grateful to Dr. Kishan Rao ! He patiently waited 30 minutes when I was running late, gave me a very thorough diagnosis, and clearly explained my reports. His down-to-earth nature and willingness to be accessible over WhatsApp for any follow-ups make him stand out. Truly exceptional care!\"",
  },
  {
    name: "pratham",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "Dr. Kishan Rao is one of the best and most approachable doctor. I underwent fistula treatment under his care and he explained each aspect of the condition and treatment clearly. He was always available to address my doubts, especially after surgery and provided excellent support throughout my recovery. I highly recommend him for his expertise, professionalism and compassionate care.",
  },
  {
    name: "Sadik bareppadi",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "Dr. Kishan Bai is an exceptional General and Laparoscopic Surgeon whose surgical expertise, calm approach, and dedication to patient well-being inspire great confidence.\n\nHe takes the time to listen carefully, explains the diagnosis and treatment plan in a clear and thorough manner, and patiently answers every question, ensuring that patients feel informed and comfortable throughout the process.\n\nThe entire experience was smooth and reassuring, and I truly appreciated the high standard of care and professionalism providing by Dr. Kishan Bai and his team.\n\nI highly recommend Dr. Kishan Bai to anyone seeking an experienced, skilled, compassionate, and trustworthy General and Laparoscopic Surgeon.\n\nSADIK BAREPPADI\nPersonal Secy, Govt Chief whip (GOK)",
  },
  {
    name: "Narayan Putran",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "I had undergone a surgery for Abscesses in the posterior perianal region, done by Dr.Kishan Rao Sir, at Bhats Nursing home, Mangaluru, one week ago.\nIt was excellent experience with Dr.Kishan Rao Sir, he is very compassionate and took times to explain the diagnosis, why the procedure was needed & what to expect. The procedure was done skillfully with minimal discomfort. Healing was faster than I expected, because of the excellent post-op care & clear instructions, also reassurance throughout. I highly recommend to seek Dr. Kishan Rao's services who need such surgery without any fear.",
  },
  {
    name: "shivu pal",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "I recently got successful hemorrhoids (piles) surgery.Dr kishan rao (Bhat nursing homes)is best and experienced surgeon,he is kind and explained clearly about surgery.thank you Dr. Nurse and staff's also good caring their patient.",
  },
  {
    name: "PP Venu",
    source: "Google Review",
    ratingLabel: "5-star Google review",
    quote:
      "My friend Mr. Gopinath, 73 years old, was suffering from severe varicose veins with deep vein thrombosis and a venous ulcer in his leg. His condition had become very troublesome with severe swelling, pain, itching, blackish discoloration of the skin, difficulty in walking, and a non-healing wound. It was affecting his daily life badly.\n\nWe consulted Dr. Kishan Rao, and extremely thankful for his treatment and guidance. Instead of unnecessary procedures, he treated me with simple medicines, proper dressings, and very effective lifestyle changes. He patiently explained everything and motivated him to follow the treatment sincerely.\n\nWithin a short period, his swelling reduced significantly, the pain and itching improved, and the wound healed very well. Now he is able to walk comfortably and live much better without the previous discomfort.\n\nDr. Kishan Rao is not only highly knowledgeable and skilled, but also very compassionate and caring towards his patients. I strongly recommend him to anyone suffering from varicose veins, venous ulcers or vascular problems.\n\nThank you, doctor, for your excellent care and support.",
  },
] as const;

export const treatmentFaqs = [
  {
    question: "What is LASER surgery?",
    answer:
      "LASER surgery uses focused light energy as part of selected surgical procedures. Its suitability depends on the exact condition, clinical findings and the surgeon's assessment.",
  },
  {
    question: "What are piles or hemorrhoids?",
    answer:
      "Piles, also called hemorrhoids, are swollen blood vessels in or around the anus and lower rectum. They may be internal or external depending on where they form.",
  },
  {
    question: "What is an anal fissure?",
    answer:
      "An anal fissure is a small tear in the skin lining the anal opening. It is commonly associated with pain during bowel movements and sometimes bleeding.",
  },
  {
    question: "What is an anal fistula?",
    answer:
      "An anal fistula is an abnormal tunnel that can form between the anal canal and the skin near the anus. It often develops after infection in a nearby anal gland.",
  },
  {
    question: "What is a pilonidal sinus?",
    answer:
      "A pilonidal sinus is a small tunnel or cavity in the skin, usually near the cleft between the buttocks. It may contain hair and skin debris.",
  },
  {
    question: "What are gallbladder stones?",
    answer:
      "Gallbladder stones, also called gallstones, are hardened deposits that form inside the gallbladder. The gallbladder is a small organ that stores bile, a fluid used in digestion.",
  },
  {
    question: "What does appendix-related surgery refer to?",
    answer:
      "Appendix-related problems usually refer to inflammation of the appendix, called appendicitis. The appendix is a small pouch attached to the first part of the large intestine.",
  },
  {
    question: "What is a hernia?",
    answer:
      "A hernia is a bulge that forms when tissue or an organ pushes through a weak area in the surrounding muscle or wall. Hernias commonly occur in the abdomen or groin.",
  },
  {
    question: "What are varicose veins?",
    answer:
      "Varicose veins are enlarged, twisted veins that commonly appear in the legs. They develop when valves inside the veins do not allow blood to flow efficiently back toward the heart.",
  },
] as const;

export const galleryItems = originalGalleryItems;

export const blogPreviews = [] as const;

export const images = {
  hero: {
    src: "/images/clinical/surgical-portrait.jpg",
    alt: "Dr. Kishan Rao in surgical attire",
  },
  about: {
    src: "/images/about/blue-portrait.jpg",
    alt: "Dr. Kishan Rao studio portrait against a blue background",
  },
  quote: {
    src: "/images/about/compassion-quote.jpg",
    alt: "Quote graphic: Surgery taught me precision, but life taught me compassion",
  },
  consultationOne: {
    src: "/images/gallery/originals/2025-11-03-clinic-consultation.jpg",
    alt: "Dr. Kishan Rao during a consultation",
  },
  consultationTwo: {
    src: "/images/gallery/originals/2026-07-12-clinical-consultation.jpg",
    alt: "Dr. Kishan Rao reviewing patient information in a clinical setting",
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
    src: "/images/brand/dr-kishan-rao-balila-symbol.png",
    alt: "Dr. Kishan Rao Balila logo",
    width: 1024,
    height: 1024,
  },
  logoLockup: {
    src: "/images/brand/dr-kishan-rao-balila-horizontal-lockup.png",
    alt: "Dr. Kishan Rao Balila logo lockup",
    width: 1045,
    height: 725,
  },
  favicon: {
    src: "/images/brand/dr-kishan-rao-balila-favicon.png",
  },
  appleIcon: {
    src: "/images/brand/dr-kishan-rao-balila-apple-touch.png",
  },
  appIcon: {
    src: "/images/brand/dr-kishan-rao-balila-icon-192.png",
  },
  /** Held back until consent is confirmed for all identifiable people */
  patientConsultation: {
    src: "/images/clinical/patient-consultation-pending-consent.jpg",
    alt: "Patient consultation image - pending consent confirmation",
    consentRequired: true as const,
  },
} as const;
