export const conditionPages = [
  {
    name: "Varicose Veins (EVLA)",
    slug: "varicose-veins-evla",
    category: "LASER Surgery",
    definition:
      "Varicose veins are enlarged, twisted veins that commonly appear in the legs. EVLA stands for endovenous laser ablation, a term for using laser energy inside a vein.",
  },
  {
    name: "Piles (Hemorrhoids)",
    slug: "piles-hemorrhoids",
    category: "LASER Surgery",
    definition:
      "Piles, also called hemorrhoids, are swollen blood vessels in or around the anus and lower rectum. They may be internal or external depending on where they form.",
  },
  {
    name: "Fissure",
    slug: "fissure",
    category: "LASER Surgery",
    definition:
      "An anal fissure is a small tear in the skin lining the anal opening. It is commonly associated with pain during bowel movements and sometimes bleeding.",
  },
  {
    name: "Fistula",
    slug: "fistula",
    category: "LASER Surgery",
    definition:
      "An anal fistula is an abnormal tunnel that can form between the anal canal and the skin near the anus. It often develops after infection in a nearby anal gland.",
  },
  {
    name: "Pilonidal Sinus",
    slug: "pilonidal-sinus",
    category: "LASER Surgery",
    definition:
      "A pilonidal sinus is a small tunnel or cavity in the skin, usually near the cleft between the buttocks. It may contain hair and skin debris.",
  },
  {
    name: "Gallbladder Stones",
    slug: "gallbladder-stones",
    category: "Laparoscopic Surgery",
    definition:
      "Gallbladder stones, also called gallstones, are hardened deposits that form inside the gallbladder. The gallbladder is a small organ that stores bile, a fluid used in digestion.",
  },
  {
    name: "Appendix",
    slug: "appendix",
    category: "Laparoscopic Surgery",
    definition:
      "The appendix is a small pouch attached to the first part of the large intestine. Appendix-related problems commonly refer to inflammation of this organ, known as appendicitis.",
  },
  {
    name: "Hernia",
    slug: "hernia",
    category: "Laparoscopic Surgery",
    definition:
      "A hernia is a bulge that forms when tissue or an organ pushes through a weak area in the surrounding muscle or wall. Hernias commonly occur in the abdomen or groin.",
  },
  {
    name: "Hernia Surgery",
    slug: "hernia-surgery",
    category: "General Surgery",
    definition:
      "Hernia surgery is a procedure that repairs the weak area where a hernia has formed. The term describes the operation used to close or reinforce that weakness.",
  },
  {
    name: "Breast Surgery",
    slug: "breast-surgery",
    category: "General Surgery",
    definition:
      "Breast surgery refers to surgical procedures involving breast tissue. The term may relate to breast lumps, infections, wounds, or other breast conditions.",
  },
  {
    name: "Thyroid Surgery",
    slug: "thyroid-surgery",
    category: "General Surgery",
    definition:
      "Thyroid surgery refers to surgical procedures involving the thyroid gland. The thyroid is a gland in the front of the neck that helps regulate body metabolism.",
  },
  {
    name: "Circumcision",
    slug: "circumcision",
    category: "General Surgery",
    definition:
      "Circumcision is a procedure that removes the foreskin from the tip of the penis. The term refers to the removal of this fold of skin.",
  },
  {
    name: "Diabetic Foot & Ulcer Care",
    slug: "diabetic-foot-ulcer-care",
    category: "General Surgery",
    definition:
      "A diabetic foot ulcer is an open sore or wound that can occur on the foot in people with diabetes. These wounds are linked to changes in sensation, circulation, and skin healing.",
  },
  {
    name: "Minor Surgical Procedures",
    slug: "minor-surgical-procedures",
    category: "General Surgery",
    definition:
      "Minor surgical procedures are smaller operations usually performed for limited or local problems. The term describes the size and scope of the procedure, not a single condition.",
  },
  {
    name: "Emergency Surgery",
    slug: "emergency-surgery",
    category: "General Surgery",
    definition:
      "Emergency surgery refers to an operation performed for a condition that needs urgent medical attention. The term describes the urgency and timing of care, not one specific operation.",
  },
  {
    name: "Varicose Veins",
    slug: "varicose-veins",
    category: "Varicose Veins",
    definition:
      "Varicose veins are enlarged, twisted veins that commonly appear in the legs. They develop when valves inside the veins do not allow blood to flow efficiently back toward the heart.",
  },
] as const;

export type ConditionPage = (typeof conditionPages)[number];

export function getConditionBySlug(slug: string) {
  return conditionPages.find((condition) => condition.slug === slug) ?? null;
}

export function getConditionByName(name: string) {
  return conditionPages.find((condition) => condition.name === name) ?? null;
}
