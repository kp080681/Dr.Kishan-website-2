export type ConditionSectionKey =
  | "Introduction"
  | "Causes"
  | "Symptoms"
  | "Investigation"
  | "Treatment";

export type ConditionSection = {
  title: ConditionSectionKey;
  body: string;
};

export type ConditionImage = {
  src: string;
  alt: string;
  objectPosition: string;
  suitability: string;
};

export type ConditionPage = {
  name: string;
  slug: string;
  category: string;
  definition: string;
  image: ConditionImage;
  sections: readonly [
    ConditionSection,
    ConditionSection,
    ConditionSection,
    ConditionSection,
    ConditionSection,
  ];
};

const sectionOrder = [
  "Introduction",
  "Causes",
  "Symptoms",
  "Investigation",
  "Treatment",
] as const;

function sections(content: Record<ConditionSectionKey, string>): ConditionPage["sections"] {
  return [
    { title: sectionOrder[0], body: content[sectionOrder[0]] },
    { title: sectionOrder[1], body: content[sectionOrder[1]] },
    { title: sectionOrder[2], body: content[sectionOrder[2]] },
    { title: sectionOrder[3], body: content[sectionOrder[3]] },
    { title: sectionOrder[4], body: content[sectionOrder[4]] },
  ];
}

export const conditionPages = [
  {
    name: "Piles (Hemorrhoids)",
    slug: "piles-hemorrhoids",
    category: "LASER Surgery",
    definition:
      "Piles, also called hemorrhoids, are swollen blood vessels in or around the anus and lower rectum. They may be internal or external depending on where they form.",
    image: {
      src: "/images/conditions/piles-dr-kishan.png",
      alt: "Dr. Kishan Rao discussing piles and hemorrhoid care in a private consultation",
      objectPosition: "60% 38%",
      suitability: "Approved Dr. Kishan condition image for a sensitive non-graphic consultation topic.",
    },
    sections: sections({
      Introduction:
        "Piles are swollen blood vessels around the anus or lower rectum. They are common and may range from mild irritation to bleeding, swelling or prolapse.",
      Causes:
        "Constipation, straining, prolonged sitting on the toilet, low-fibre diet, pregnancy, obesity and repeated bowel pressure can contribute. Some patients have recurrent symptoms despite reasonable habits.",
      Symptoms:
        "Symptoms may include bleeding during bowel movements, itching, discomfort, swelling, a lump near the anus or tissue coming out during stool passage. Bleeding should not automatically be assumed to be piles.",
      Investigation:
        "Assessment usually includes a careful history and local examination. Depending on age, symptoms and bleeding pattern, the doctor may advise proctoscopy, sigmoidoscopy, colonoscopy or other tests to rule out other causes.",
      Treatment:
        "Early treatment may include fibre, fluids, stool-softening measures and medicines. Procedures or surgery may be considered when symptoms persist, prolapse is significant or bleeding recurs. LASER or other surgical options should be chosen according to grade, anatomy and clinical judgment.",
    }),
  },
  {
    name: "Fissure",
    slug: "fissure",
    category: "LASER Surgery",
    definition:
      "An anal fissure is a small tear in the skin lining the anal opening. It is commonly associated with pain during bowel movements and sometimes bleeding.",
    image: {
      src: "/images/conditions/fissure-dr-kishan.png",
      alt: "Dr. Kishan Rao explaining fissure care in a private non-graphic consultation",
      objectPosition: "58% 38%",
      suitability: "Approved Dr. Kishan condition image for a sensitive non-graphic consultation topic.",
    },
    sections: sections({
      Introduction:
        "An anal fissure is a small tear near the anal opening. It can be painful, especially during or after passing stool, and is often linked to hard stools or repeated irritation.",
      Causes:
        "Common contributors include constipation, hard stool, diarrhoea, straining, childbirth-related injury and tight anal sphincter pressure. Less commonly, fissure-like symptoms may be linked to other bowel conditions.",
      Symptoms:
        "Patients may feel sharp pain during stool passage, burning pain afterward, a small amount of bright red bleeding or fear of passing stool because of pain.",
      Investigation:
        "A doctor usually diagnoses fissure by history and gentle local examination. Further evaluation may be considered if the fissure is recurrent, atypical, not healing or associated with other bowel symptoms.",
      Treatment:
        "Treatment focuses on soft stools, pain relief, local medicines and reducing spasm. If a fissure becomes chronic or does not respond, a procedure or surgery may be discussed. The safest option depends on examination findings and continence considerations.",
    }),
  },
  {
    name: "Fistula",
    slug: "fistula",
    category: "LASER Surgery",
    definition:
      "An anal fistula is an abnormal tunnel that can form between the anal canal and the skin near the anus. It often develops after infection in a nearby anal gland.",
    image: {
      src: "/images/conditions/fistula-dr-kishan.png",
      alt: "Dr. Kishan Rao reviewing clinical information for fistula care with a patient",
      objectPosition: "62% 38%",
      suitability: "Approved Dr. Kishan condition image with scan detail kept secondary.",
    },
    sections: sections({
      Introduction:
        "An anal fistula is an abnormal tract between the anal canal and nearby skin. It often follows an abscess or infection around an anal gland.",
      Causes:
        "Most fistulas develop after infection and abscess formation. Recurrent abscess, Crohn's disease, previous surgery or other inflammatory conditions may be considered depending on the patient.",
      Symptoms:
        "Symptoms may include repeated swelling, pain, discharge, irritation, an opening near the anus or recurrent abscess. Symptoms alone do not define the tract pattern.",
      Investigation:
        "Evaluation includes local examination and assessment of the external opening. MRI, endoanal ultrasound or examination under anaesthesia may be considered for complex, recurrent or high fistulas.",
      Treatment:
        "Treatment aims to control infection, define the tract and protect sphincter function. Options may include drainage, seton placement, fistulotomy or sphincter-sparing procedures. LASER-based fistula treatment may be considered in selected cases after proper assessment.",
    }),
  },
  {
    name: "Pilonidal Sinus",
    slug: "pilonidal-sinus",
    category: "LASER Surgery",
    definition:
      "A pilonidal sinus is a small tunnel or cavity in the skin, usually near the cleft between the buttocks. It may contain hair and skin debris.",
    image: {
      src: "/images/conditions/pilonidal-sinus-dr-kishan.png",
      alt: "Dr. Kishan Rao discussing pilonidal sinus care in a calm clinical consultation",
      objectPosition: "40% 38%",
      suitability: "Approved Dr. Kishan condition image with consultation context kept primary.",
    },
    sections: sections({
      Introduction:
        "Pilonidal sinus is a small tunnel or cavity near the cleft between the buttocks. It can remain quiet, become painful or repeatedly discharge.",
      Causes:
        "Loose hair, friction, sweating, prolonged sitting, deep cleft anatomy and local irritation may contribute. It is not caused by poor hygiene alone.",
      Symptoms:
        "Patients may notice pain, swelling, redness, discharge, bleeding, foul smell or repeated infection near the tailbone area.",
      Investigation:
        "Diagnosis is usually clinical. A doctor examines the area to identify pits, discharge, abscess or branching disease. Imaging is not routinely needed but may be considered in complex or recurrent cases.",
      Treatment:
        "An acute abscess may need drainage. Recurrent or persistent sinus disease may need a planned procedure. Options vary from limited procedures to flap surgery or minimally invasive approaches depending on extent and recurrence risk.",
    }),
  },
  {
    name: "Gallbladder Stones",
    slug: "gallbladder-stones",
    category: "Laparoscopic Surgery",
    definition:
      "Gallbladder stones, also called gallstones, are hardened deposits that form inside the gallbladder. The gallbladder is a small organ that stores bile, a fluid used in digestion.",
    image: {
      src: "/images/conditions/gallbladder-stones-dr-kishan.png",
      alt: "Dr. Kishan Rao explaining gallbladder stone ultrasound findings with a patient",
      objectPosition: "56% 36%",
      suitability: "Approved Dr. Kishan condition image for gallbladder consultation and imaging review.",
    },
    sections: sections({
      Introduction:
        "Gallstones are hardened deposits that form inside the gallbladder. Many are silent, but some cause pain or complications when they block bile flow.",
      Causes:
        "Gallstones may form when bile contains excess cholesterol or pigment, or when the gallbladder does not empty well. Risk can be influenced by age, weight, pregnancy, rapid weight loss, family tendency and some medical conditions.",
      Symptoms:
        "Symptoms can include pain in the upper right abdomen or upper centre of the abdomen, nausea, vomiting, bloating or pain after fatty meals. Fever, jaundice or severe persistent pain needs urgent assessment.",
      Investigation:
        "Assessment may include examination, ultrasound of the abdomen and blood tests for liver function, infection or pancreatitis. Additional imaging may be advised if a bile duct stone is suspected.",
      Treatment:
        "Silent stones may not need treatment. Symptomatic or complicated gallstones are often treated by laparoscopic gallbladder removal when appropriate. The timing and approach depend on symptoms, test results and overall health.",
    }),
  },
  {
    name: "Appendix",
    slug: "appendix",
    category: "Laparoscopic Surgery",
    definition:
      "The appendix is a small pouch attached to the first part of the large intestine. Appendix-related problems commonly refer to inflammation of this organ, known as appendicitis.",
    image: {
      src: "/images/conditions/appendix-dr-kishan.png",
      alt: "Dr. Kishan Rao in a laparoscopic operating theatre setting for appendix care",
      objectPosition: "40% 34%",
      suitability: "Approved Dr. Kishan condition image with non-graphic laparoscopic context.",
    },
    sections: sections({
      Introduction:
        "Appendicitis is inflammation of the appendix. It can progress quickly, so persistent or worsening abdominal pain should be assessed promptly.",
      Causes:
        "Appendicitis can occur when the appendix becomes blocked or infected. Stool, swelling of lymph tissue or rarely other causes may contribute, but the exact trigger is not always clear.",
      Symptoms:
        "Pain may start near the navel and move to the lower right abdomen. Nausea, vomiting, fever, loss of appetite or pain on movement may occur. Similar symptoms can occur in other abdominal conditions.",
      Investigation:
        "A doctor assesses the history, abdominal examination and vital signs. Blood tests, urine tests, ultrasound or CT scan may be considered depending on age, pregnancy status, symptoms and diagnostic uncertainty.",
      Treatment:
        "Treatment commonly involves antibiotics and surgery to remove the appendix when appendicitis is likely. Laparoscopic appendicectomy may be suitable for many patients, but the approach depends on severity and surgeon assessment.",
    }),
  },
  {
    name: "Hernia",
    slug: "hernia",
    category: "Laparoscopic Surgery",
    definition:
      "A hernia is a bulge that forms when tissue or an organ pushes through a weak area in the surrounding muscle or wall. Hernias commonly occur in the abdomen or groin.",
    image: {
      src: "/images/conditions/hernia-dr-kishan.png",
      alt: "Dr. Kishan Rao explaining hernia treatment planning in consultation",
      objectPosition: "38% 38%",
      suitability: "Approved Dr. Kishan condition image for hernia consultation.",
    },
    sections: sections({
      Introduction:
        "A hernia is a bulge caused by tissue pushing through a weak area in the abdominal wall or groin. It may be painless at first or may cause discomfort with activity.",
      Causes:
        "Hernias can be linked to natural weakness, previous surgery, heavy lifting, chronic cough, constipation, pregnancy, obesity or repeated strain.",
      Symptoms:
        "Patients may notice a swelling that becomes more obvious on standing, coughing or straining. Pain, dragging discomfort or increase in size can occur. Sudden severe pain, vomiting or inability to push a hernia back needs urgent care.",
      Investigation:
        "Most hernias are assessed by history and physical examination. Ultrasound or CT scan may be considered when the diagnosis is unclear, the hernia is recurrent or anatomy needs clarification.",
      Treatment:
        "Observation may be reasonable for selected low-risk hernias, but many symptomatic hernias are repaired surgically. Open or laparoscopic repair may be discussed depending on hernia type, size, recurrence, patient factors and surgeon judgment.",
    }),
  },
  {
    name: "Breast Surgery",
    slug: "breast-surgery",
    category: "General Surgery",
    definition:
      "Breast surgery refers to surgical procedures involving breast tissue. The term may relate to breast lumps, infections, wounds, or other breast conditions.",
    image: {
      src: "/images/conditions/breast-surgery-dr-kishan.png",
      alt: "Dr. Kishan Rao discussing breast surgery assessment with a patient",
      objectPosition: "58% 38%",
      suitability: "Approved Dr. Kishan condition image with professional non-graphic mammography context.",
    },
    sections: sections({
      Introduction:
        "Breast surgery may be needed for breast lumps, infections, abscesses, wounds or other breast conditions. Evaluation should be calm, respectful and based on clinical findings.",
      Causes:
        "Reasons for surgery vary and may include benign lumps, infection, abscess, suspicious imaging findings, trauma or non-healing wounds. Not every breast symptom requires surgery.",
      Symptoms:
        "Patients may notice a lump, pain, swelling, redness, nipple discharge, wound, fever or skin changes. These symptoms need proper assessment rather than assumptions.",
      Investigation:
        "Assessment may include clinical examination and imaging such as ultrasound or mammography depending on age and findings. FNAC, core biopsy or blood tests may be advised where appropriate.",
      Treatment:
        "Treatment depends on diagnosis. It may include medicines, drainage of abscess, biopsy, excision of a lump or referral for specialist cancer care when needed. Surgical decisions should follow examination and investigation results.",
    }),
  },
  {
    name: "Thyroid Surgery",
    slug: "thyroid-surgery",
    category: "General Surgery",
    definition:
      "Thyroid surgery refers to surgical procedures involving the thyroid gland. The thyroid is a gland in the front of the neck that helps regulate body metabolism.",
    image: {
      src: "/images/conditions/thyroid-surgery-dr-kishan.png",
      alt: "Dr. Kishan Rao reviewing thyroid ultrasound imaging with a patient",
      objectPosition: "52% 38%",
      suitability: "Approved Dr. Kishan condition image for thyroid consultation and imaging review.",
    },
    sections: sections({
      Introduction:
        "The thyroid is a gland in the front of the neck. Thyroid surgery may be considered for selected nodules, enlargement, pressure symptoms, overactivity or suspected cancer.",
      Causes:
        "Thyroid problems may be related to nodules, goitre, inflammation, hormone overactivity or suspicious changes. The reason for surgery depends on the diagnosis and risk assessment.",
      Symptoms:
        "Patients may notice a neck swelling, pressure, difficulty swallowing, voice change, breathing discomfort when lying down or symptoms of thyroid hormone imbalance. Some nodules are found incidentally.",
      Investigation:
        "Evaluation may include neck examination, thyroid function blood tests, ultrasound and needle sampling when indicated. Laryngoscopy or additional imaging may be considered before planned surgery.",
      Treatment:
        "Treatment may involve monitoring, medicines, biopsy follow-up or surgery such as hemithyroidectomy or thyroidectomy. The plan should include discussion of voice, calcium, scar and lifelong medicine considerations where relevant.",
    }),
  },
  {
    name: "Circumcision",
    slug: "circumcision",
    category: "General Surgery",
    definition:
      "Circumcision is a procedure that removes the foreskin from the tip of the penis. The term refers to the removal of this fold of skin.",
    image: {
      src: "/images/conditions/circumcision-dr-kishan.png",
      alt: "Dr. Kishan Rao discussing circumcision care in a private consultation",
      objectPosition: "62% 40%",
      suitability: "Approved Dr. Kishan condition image for a sensitive non-graphic consultation topic.",
    },
    sections: sections({
      Introduction:
        "Circumcision is removal of the foreskin. It may be discussed for medical reasons such as tight foreskin, repeated infection or hygiene-related difficulty, and sometimes for personal or cultural reasons.",
      Causes:
        "Medical reasons may include phimosis, recurrent balanitis, scarring, painful retraction or repeated inflammation. Not every tight foreskin needs surgery, especially in children where development matters.",
      Symptoms:
        "Symptoms can include inability to retract the foreskin, pain, cracking, swelling, repeated infection, ballooning during urination or difficulty with hygiene.",
      Investigation:
        "A doctor usually assesses by history and local examination. Urine testing or blood sugar testing may be considered if infection is recurrent or diabetes is suspected.",
      Treatment:
        "Treatment may include hygiene advice, medicines or circumcision depending on age, severity and cause. Surgery should be discussed with clear information about wound care, bleeding risk, infection risk and healing expectations.",
    }),
  },
  {
    name: "Diabetic Foot & Ulcer Care",
    slug: "diabetic-foot-ulcer-care",
    category: "General Surgery",
    definition:
      "A diabetic foot ulcer is an open sore or wound that can occur on the foot in people with diabetes. These wounds are linked to changes in sensation, circulation, and skin healing.",
    image: {
      src: "/images/conditions/diabetic-foot-care-dr-kishan.png",
      alt: "Dr. Kishan Rao assessing diabetic foot care with a patient in a non-graphic clinical setting",
      objectPosition: "62% 42%",
      suitability: "Approved Dr. Kishan condition image for non-graphic diabetic foot care.",
    },
    sections: sections({
      Introduction:
        "Diabetic foot wounds need careful attention because diabetes can affect sensation, blood flow and healing. Early assessment can reduce the risk of infection and deeper tissue damage.",
      Causes:
        "Common contributors include reduced sensation, pressure points, footwear injury, poor circulation, high blood sugar, infection and delayed wound care.",
      Symptoms:
        "Patients may notice an open wound, swelling, redness, discharge, bad smell, pain or sometimes very little pain because of reduced sensation. Fever or spreading redness needs urgent care.",
      Investigation:
        "Assessment may include wound examination, blood sugar review, infection markers, wound culture, X-ray, vascular assessment or Doppler studies depending on severity.",
      Treatment:
        "Treatment may involve wound cleaning, dressings, pressure offloading, antibiotics when infection is present, diabetes control, vascular referral when needed and surgery for drainage or removal of dead tissue in selected cases.",
    }),
  },
  {
    name: "Minor Surgical Procedures",
    slug: "minor-surgical-procedures",
    category: "General Surgery",
    definition:
      "Minor surgical procedures are smaller operations usually performed for limited or local problems. The term describes the size and scope of the procedure, not a single condition.",
    image: {
      src: "/images/conditions/minor-surgical-procedures-dr-kishan.png",
      alt: "Dr. Kishan Rao preparing a clean minor procedure room with clinical equipment",
      objectPosition: "42% 36%",
      suitability: "Approved Dr. Kishan condition image for minor procedure readiness.",
    },
    sections: sections({
      Introduction:
        "Minor surgical procedures are smaller operations for local problems such as selected lumps, cysts, wounds, ingrown nails or abscesses. The exact procedure depends on diagnosis.",
      Causes:
        "Reasons vary by condition and may include infection, blocked glands, skin cysts, injury, chronic irritation or local swelling that needs removal or drainage.",
      Symptoms:
        "Patients may notice a lump, pain, swelling, redness, discharge, wound, recurrent infection or discomfort during daily activity.",
      Investigation:
        "A doctor examines the area and decides whether the problem can be treated locally. Ultrasound, blood tests or biopsy may be advised if the diagnosis is uncertain.",
      Treatment:
        "Treatment may include medicines, dressing care, incision and drainage, excision or biopsy. Even small procedures need proper consent, sterile technique and follow-up instructions.",
    }),
  },
  {
    name: "Emergency Surgery",
    slug: "emergency-surgery",
    category: "General Surgery",
    definition:
      "Emergency surgery refers to an operation performed for a condition that needs urgent medical attention. The term describes the urgency and timing of care, not one specific operation.",
    image: {
      src: "/images/conditions/emergency-surgery-dr-kishan.png",
      alt: "Dr. Kishan Rao in a prepared operating theatre environment for emergency surgical care",
      objectPosition: "54% 34%",
      suitability: "Approved Dr. Kishan condition image for calm emergency surgery readiness.",
    },
    sections: sections({
      Introduction:
        "Emergency surgery is surgery done for a condition that needs urgent assessment and treatment. It is not one disease; it refers to timing and clinical urgency.",
      Causes:
        "Reasons may include appendicitis, obstructed hernia, infection, abscess, injury, bowel obstruction, perforation or bleeding. The cause must be identified before planning treatment.",
      Symptoms:
        "Warning symptoms can include severe or worsening pain, vomiting, fever, swelling, abdominal distension, bleeding, inability to pass stool or gas, or a painful irreducible hernia.",
      Investigation:
        "Assessment may include examination, blood tests, urine tests, X-ray, ultrasound, CT scan or other tests depending on the suspected emergency and patient stability.",
      Treatment:
        "Treatment may involve observation, medicines, antibiotics, drainage or surgery. Emergency decisions balance urgency, anaesthesia fitness, available information and patient safety.",
    }),
  },
  {
    name: "Varicose Veins",
    slug: "varicose-veins",
    category: "Varicose Veins",
    definition:
      "Varicose veins are enlarged, twisted veins that commonly appear in the legs. They develop when valves inside the veins do not allow blood to flow efficiently back toward the heart.",
    image: {
      src: "/images/conditions/varicose-veins-dr-kishan.png",
      alt: "Dr. Kishan Rao discussing varicose vein care and scan findings with a patient",
      objectPosition: "62% 40%",
      suitability: "Approved Dr. Kishan condition image for non-graphic varicose vein consultation.",
    },
    sections: sections({
      Introduction:
        "Varicose veins are enlarged, twisted superficial veins, most often seen in the legs. They can cause heaviness, aching, swelling, itching or visible bulging veins.",
      Causes:
        "They usually develop when one-way valves in the veins become weak or leaky. Family history, age, pregnancy, prolonged standing, excess weight and previous vein problems can contribute.",
      Symptoms:
        "Symptoms may include visible veins, aching, heaviness, ankle swelling, itching, skin colour changes, cramps or discomfort that worsens after prolonged standing. A clinical assessment helps confirm whether symptoms are vein-related.",
      Investigation:
        "Assessment usually includes examination and may include venous Doppler ultrasound to map reflux, vein size and suitability for treatment such as endovenous laser ablation.",
      Treatment:
        "Treatment is based on symptoms and scan findings. Conservative measures can help some patients. When suitable, LASER treatment such as EVLA can close the diseased vein from inside, with follow-up advice tailored to the patient.",
    }),
  },
] as const satisfies readonly ConditionPage[];

export function getConditionBySlug(slug: string) {
  return conditionPages.find((condition) => condition.slug === slug) ?? null;
}

export function getConditionByName(name: string) {
  return conditionPages.find((condition) => condition.name === name) ?? null;
}
