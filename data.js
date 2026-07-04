
const CASE = {
  patient: {
    name: "Mason Carter",
    age: "3 years",
    sex: "Male",
    mrn: "MCH-203948",
    dob: "04/14/2023",
    allergy: "NKDA",
    code: "Full Code",
    location: "ED → Pediatric Floor",
    chief: "Fever, refusal to bear weight",
    pcp: "Riverbend Pediatrics"
  },
  phases: [
    {
      id:"1", label:"Phase 1 ED admission",
      status:"ED admission: medication safety review",
      time:"07/03/2026 17:20",
      storyboard:{weight:"31 kg", actual:"13.1 kg in growth history", team:"PHM admitting", acuity:"Watcher"},
      alerts:["Medication safety concern: ED weight and growth history do not match."],
      timeline:[
        ["14:32","Arrived to ED with fever and refusal to walk"],
        ["14:38","Triage weight entered as 31 kg"],
        ["14:52","Ibuprofen 65 mg PO administered"],
        ["15:26","CBC, BMP, ESR, CRP ordered"],
        ["16:25","Cefazolin 775 mg IV q8h ordered"],
        ["17:01","Admission requested"]
      ],
      tabs:{
        notes:[
          ["ED Triage Note","Ashley Reed, RN · 14:38",`Chief complaint: Fever and won't walk.\nMother reports fever since yesterday and refusal to bear weight today. No known trauma. Mother states, "He was about 29 pounds at his pediatrician appointment last week."\nTriage weight documented: 31 kg.`],
          ["ED Provider Note","N. Patel, MD · 16:45",`Previously healthy 3-year-old with 1 day of fever and left leg pain/refusal to bear weight.\nExam: uncomfortable, cries with passive left hip range of motion, no swelling or erythema.\nAssessment: transient synovitis vs early osteomyelitis vs septic arthritis.\nPlan: admit to PHM for observation, labs, blood culture, hip radiograph, empiric cefazolin, pain control.`]
        ],
        orders:[
          ["Cefazolin","775 mg IV q8h","Active","Dose calculated using 31 kg"],
          ["Ibuprofen","65 mg PO once","Given","Equivalent to 5 mg/kg using 13 kg"],
          ["Blood culture","Peripheral x1","Collected","Pending"],
          ["Left hip radiograph","2 views","Completed","See imaging"]
        ],
        mar:[
          ["14:52","Ibuprofen","65 mg PO","Given","Pain improved minimally"],
          ["16:25","Cefazolin","775 mg IV q8h","Ordered","Not yet administered"]
        ],
        labs:[
          ["WBC","13.8 K/uL","High"],
          ["Hgb","11.5 g/dL",""],
          ["Platelets","355 K/uL",""],
          ["CRP","8.6 mg/dL","High"],
          ["ESR","42 mm/hr","High"],
          ["BMP","Within normal limits",""]
        ],
        imaging:[["Left hip radiograph","No fracture or dislocation. No osseous abnormality. Early osteomyelitis cannot be excluded radiographically."]],
        growth:[
          ["18 mo","11.6 kg"],["24 mo","12.4 kg"],["30 mo","12.9 kg"],["2 weeks ago","13.1 kg"],["Today ED","31 kg"]
        ],
        messages:[
          ["Ashley RN","16:20","He is still crying with diaper changes. Pain did not improve much after ibuprofen."]
        ]
      },
      facilitator:["Correct weight is 13 kg. Cefazolin 775 mg reflects 25 mg/kg using wrong 31 kg weight; correct 25 mg/kg dose would be ~325 mg. Ibuprofen 65 mg is 5 mg/kg; typical antipyretic/analgesic dose is 10 mg/kg = 130 mg."]
    },
    {
      id:"2", label:"Phase 2 delayed diagnosis",
      status:"Hospital day 1: persistent fever and refusal to bear weight",
      time:"07/04/2026 08:30",
      storyboard:{weight:"13 kg corrected", actual:"Verified by parent + growth chart", team:"PHM", acuity:"Watcher"},
      alerts:["Persistent fever, rising CRP, and refusal to bear weight require diagnostic reassessment."],
      timeline:[
        ["20:00","Admitted to floor"],
        ["23:30","Temp 39.5, HR 164"],
        ["04:15","Nursing documents worse pain with hip movement"],
        ["07:45","CRP resulted higher"],
        ["08:10","Parent reports child is 'worse than yesterday'"]
      ],
      tabs:{
        notes:[
          ["PHM Overnight Update","M. Lee, MD · 04:45",`Continues febrile. Refusing to stand. Treated as likely transient synovitis with viral symptoms. Blood culture pending.`],
          ["Nursing Note","Ashley Reed, RN · 07:55",`Patient cries with any movement of left leg. Refuses to sit upright. Mother worried he is sleepier and worse than yesterday.`]
        ],
        orders:[
          ["Acetaminophen","15 mg/kg PO q6h PRN","Active","Corrected weight 13 kg"],
          ["Cefazolin","325 mg IV q8h","Active","Dose corrected"],
          ["Repeat CRP","Morning draw","Completed","See labs"]
        ],
        mar:[["06:05","Acetaminophen","195 mg PO","Given","Temp 39.1 → 38.6"]],
        labs:[
          ["WBC","15.6 K/uL","High"],
          ["CRP","16.4 mg/dL","High"],
          ["ESR","58 mm/hr","High"],
          ["Blood culture","No growth to date","Prelim"]
        ],
        imaging:[["Prior radiograph","No osseous abnormality. MRI recommended if concern persists."]],
        growth:[["2 weeks ago","13.1 kg"],["Today verified","13.0 kg"]],
        messages:[["Ashley RN","08:05","I am concerned. He screams when I move his left hip and will not put any weight on the leg."]]
      },
      facilitator:["Expected actions: reassess at bedside, broaden differential, recognize red flags for osteomyelitis/septic arthritis, order MRI, consult orthopedics."]
    },
    {
      id:"3", label:"Phase 3 pathway decisions",
      status:"MRI positive: use pathway to guide decisions",
      time:"07/04/2026 15:45",
      storyboard:{weight:"13 kg", actual:"Verified", team:"PHM + Ortho", acuity:"Watcher"},
      alerts:["New MRI result and positive blood culture require pathway-guided management."],
      timeline:[
        ["11:30","MRI ordered"],
        ["13:50","MRI completed with sedation"],
        ["14:20","Blood culture positive: gram-positive cocci in clusters"],
        ["15:10","Ortho consulted"],
        ["15:35","Osteomyelitis pathway opened"]
      ],
      tabs:{
        notes:[
          ["MRI Result","Radiology · 14:05",`Acute osteomyelitis of the left proximal femur with small adjacent subperiosteal abscess. No hip joint effusion.`],
          ["Orthopedic Surgery Consult","J. Kim, MD · 15:25",`Recommend continued IV antibiotics, serial exams, trend CRP, NPO at midnight in case operative source control is needed if clinical status worsens or abscess enlarges.`],
          ["Clinical Pathway Summary","Meridian Children's Pathway · 15:35",`Acute hematogenous osteomyelitis: obtain blood cultures, trend CRP every 24-48 hours, tailor empiric antibiotics to local susceptibility and MRSA risk, consult orthopedics for abscess, septic arthritis concern, or failure to improve.`]
        ],
        orders:[
          ["Cefazolin","325 mg IV q8h","Active","MSSA coverage"],
          ["Repeat blood culture","Daily until negative","Needs order","Bacteremia"],
          ["CRP","Daily","Needs order","Trend response"],
          ["NPO at midnight","Diet order","Recommended","Ortho contingency"]
        ],
        mar:[["15:00","Cefazolin","325 mg IV","Given","After dose correction"]],
        labs:[
          ["Blood culture","Gram-positive cocci in clusters","Critical"],
          ["CRP","16.4 mg/dL","High"],
          ["WBC","15.6 K/uL","High"]
        ],
        imaging:[["MRI left hip/femur","Left proximal femur osteomyelitis with small subperiosteal abscess. No septic arthritis."]],
        growth:[["Today verified","13.0 kg"]],
        messages:[
          ["Microbiology","14:20","Critical result: blood culture positive for gram-positive cocci in clusters."],
          ["Ortho Resident","15:32","Please keep NPO at midnight and call if tachycardia worsens, perfusion changes, or pain increases."]
        ]
      },
      facilitator:["Expected actions: use pathway, repeat blood culture, trend CRP, continue appropriate empiric antibiotics, clarify MRSA risk/antibiogram, communicate with Ortho and ID as needed."]
    },
    {
      id:"4a", label:"Phase 4A poor handoff",
      status:"Night shift: incomplete handoff + outdated documentation",
      time:"07/04/2026 21:15",
      storyboard:{weight:"13 kg", actual:"Verified", team:"Night PHM", acuity:"Unclear"},
      alerts:["The available sign-out and physician note are incomplete and outdated."],
      timeline:[
        ["17:45","Persistent tachycardia"],
        ["18:30","Urine output decreased"],
        ["19:00","Day team signs out"],
        ["20:40","RN reports patient looks worse"],
        ["21:15","Night team reviews chart"]
      ],
      tabs:{
        notes:[
          ["Outdated PHM Progress Note","M. Lee, MD · 09:10",`Assessment: likely transient synovitis. Continue observation and pain control. Blood culture pending. Consider further imaging if not improving.\n\nNote: This documentation was written before MRI and positive blood culture resulted.`],
          ["Verbal/Written Handoff","Day Team · 19:00",`3yo admitted with leg pain, probably osteo. MRI done. On cefazolin. Ortho aware. Nothing major overnight.`]
        ],
        orders:[
          ["Cefazolin","325 mg IV q8h","Active",""],
          ["Repeat blood culture","Not ordered","Missing",""],
          ["CRP trend","Not ordered","Missing",""],
          ["NPO at midnight","Not ordered","Missing despite Ortho recommendation"]
        ],
        mar:[["15:00","Cefazolin","325 mg IV","Given",""],["23:00","Cefazolin","325 mg IV","Due",""]],
        labs:[
          ["Blood culture","Gram-positive cocci in clusters","Critical"],
          ["CRP","16.4 mg/dL","High"]
        ],
        imaging:[["MRI","Positive for proximal femur osteomyelitis with subperiosteal abscess."]],
        growth:[["Today verified","13.0 kg"]],
        messages:[["Ashley RN","20:40","He does not look right. HR is still 178, cap refill is closer to 4 seconds, and he has barely peed. Can someone come see him?"]]
      },
      reveal:true,
      facilitator:["Learners should identify inadequate illness severity, missing action list, missing contingency planning, outdated note, and missing orders. Reveal 4B with code IPASS after debrief."]
    },
    {
      id:"4b", label:"Phase 4B corrected IPASS",
      status:"Updated IPASS handoff + physician event note",
      time:"07/04/2026 21:35",
      storyboard:{weight:"13 kg", actual:"Verified", team:"Night PHM", acuity:"Watcher / high risk"},
      alerts:["Corrected handoff clarifies illness severity, action items, and contingency plans."],
      timeline:[
        ["21:20","Night resident evaluates patient"],
        ["21:28","Updated IPASS documented"],
        ["21:35","Physician event note filed"],
        ["21:40","Repeat labs and culture ordered"]
      ],
      tabs:{
        notes:[
          ["Updated IPASS Handoff","Day + Night Team · 21:28",`I — Illness severity: WATCHER. 3yo with acute hematogenous osteomyelitis of left proximal femur, bacteremia, and small subperiosteal abscess.\n\nP — Patient summary: Initially admitted for fever/refusal to bear weight. ED weight error corrected. MRI confirms osteomyelitis. Blood culture positive for gram-positive cocci in clusters. On cefazolin. Ortho following.\n\nA — Action list: Repeat blood culture now and daily until negative. CRP/CBC/BMP tonight. NPO at midnight. Reassess perfusion and urine output. Confirm antibiotic timing.\n\nS — Situation awareness/contingency: If persistent tachycardia, hypotension, altered mental status, delayed cap refill, rising lactate, or worsening pain, activate sepsis pathway, call Ortho/PICU, broaden antibiotics per pathway.\n\nS — Synthesis by receiver: Night team repeats back bacteremia, abscess, NPO plan, repeat culture/labs, and sepsis escalation triggers.`],
          ["Physician Event Note","R. Nguyen, MD · 21:35",`Called to bedside for persistent tachycardia and nursing concern. Patient febrile, uncomfortable, cap refill 3-4 seconds, HR 176, BP 88/52, urine output decreased. Reviewed chart and noted MRI-confirmed left proximal femur osteomyelitis with small subperiosteal abscess and positive blood culture.\n\nPlan: repeat blood culture, CBC, BMP, CRP, lactate; continue cefazolin; NPO at midnight; notify Ortho of clinical concern; close reassessment within 1 hour; activate sepsis pathway if perfusion worsens.`]
        ],
        orders:[
          ["Repeat blood culture","Peripheral x1","Ordered",""],
          ["CBC/BMP/CRP/lactate","STAT","Ordered",""],
          ["NPO at midnight","Diet","Ordered",""],
          ["Ortho update","Page consult","Completed",""]
        ],
        mar:[["23:00","Cefazolin","325 mg IV","Due","Ensure on time"]],
        labs:[["Lactate","Pending",""],["CBC/BMP/CRP","Pending",""]],
        imaging:[["MRI","Left proximal femur osteomyelitis with small subperiosteal abscess."]],
        growth:[["Today verified","13.0 kg"]],
        messages:[["Ortho Resident","21:42","Agree with NPO and repeat labs. Call immediately for hypotension, worsening perfusion, or increased pain."]]
      },
      facilitator:["Use this after the handoff debrief to model complete IPASS and appropriate event documentation."]
    },
    {
      id:"5", label:"Phase 5 deterioration",
      status:"MET/RRT: septic shock requiring escalation",
      time:"07/05/2026 02:10",
      storyboard:{weight:"13 kg", actual:"Verified", team:"PHM + PICU + Ortho", acuity:"Critical"},
      alerts:["Clinical deterioration: hypotension, poor perfusion, altered mental status, oliguria."],
      timeline:[
        ["00:20","Fever 40.2, HR 186"],
        ["01:15","Minimal urine output"],
        ["01:50","BP 72/38, cap refill 5 sec"],
        ["02:00","MET activated"],
        ["02:10","PICU accepts transfer"]
      ],
      tabs:{
        notes:[
          ["Rapid Response Note","MET Team · 02:05",`Called for hypotension and altered mental status in 3yo with bacteremic osteomyelitis. On arrival: lethargic, HR 190, RR 48, BP 72/38, SpO2 92% RA, cap refill 5 seconds, weak pulses, mottled extremities. Impression: septic shock with end-organ dysfunction.`],
          ["PICU Acceptance Note","S. Allen, MD · 02:15",`Accept to PICU for septic shock. Initiate sepsis bundle, fluid resuscitation, vasoactive support if inadequate response, broaden antibiotics per sepsis pathway, urgent Ortho reassessment for source control.`]
        ],
        orders:[
          ["Sepsis pathway","Activate","Completed",""],
          ["Normal saline bolus","20 mL/kg IV","Ordered",""],
          ["Repeat blood culture","STAT","Ordered",""],
          ["Cefepime + Vancomycin","Per sepsis pathway","Ordered","Pending adjustment after cultures"],
          ["PICU transfer","Immediate","Accepted",""]
        ],
        mar:[["02:03","Normal saline","260 mL IV bolus","Infusing","20 mL/kg"],["02:08","Vancomycin","15 mg/kg IV","Ordered",""],["02:08","Cefepime","50 mg/kg IV","Ordered",""]],
        labs:[
          ["VBG pH","7.24","Critical"],
          ["pCO2","31 mmHg",""],
          ["HCO3","13 mEq/L","Low"],
          ["Base deficit","-13","Critical"],
          ["Lactate","5.1 mmol/L","Critical"],
          ["Creatinine","0.72 mg/dL","High"],
          ["Platelets","118 K/uL","Low"]
        ],
        imaging:[["MRI","Known osteomyelitis with subperiosteal abscess; Ortho reassessment requested for source control."]],
        growth:[["Today verified","13.0 kg"]],
        messages:[["PICU Fellow","02:12","We are coming now. Please continue fluid resuscitation and have antibiotics ready at bedside."],["Ortho Resident","02:14","On our way for urgent reassessment. Keep NPO."]]
      },
      facilitator:["Expected actions: recognize septic shock, activate sepsis pathway/MET, fluids, cultures, broad antibiotics, PICU transfer, Ortho/source control communication."]
    }
  ]
};
