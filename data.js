const CASE = {
  "hospital": "Meridian Children's Hospital",
  "tagline": "Think clearly. Communicate effectively. Care safely.",
  "patient": {
    "name": "Mason Carter",
    "age": "3 y.o.",
    "sex": "Male",
    "mrn": "203948",
    "dob": "04/14/2023",
    "pcp": "Riverbend Pediatrics",
    "allergy": "NKDA",
    "code": "Full Code",
    "attending": "Barnes, MD",
    "bed": "Bed 1",
    "access": "PIV L AC",
    "diet": "Regular",
    "mother": "Samantha Carter",
    "father": "David Carter"
  },
  "inactivePatients": [
    {
      "name": "Emma Johnson",
      "detail": "Bronchiolitis \u00b7 Stable"
    },
    {
      "name": "Ava Rodriguez",
      "detail": "DKA \u00b7 PICU"
    },
    {
      "name": "Noah Wilson",
      "detail": "Fever \u00b7 Observation"
    }
  ],
  "phases": [
    {
      "id": "1",
      "label": "Phase 1",
      "title": "ED admission",
      "time": "07/03/2026 17:20",
      "location": "ED \u2192 PHM",
      "room": "ED-12",
      "team": "Hospital Medicine",
      "severity": "Watcher",
      "weight": "31 kg",
      "weightDetail": "68 lb 5 oz",
      "hospitalDay": "ED",
      "status": "same",
      "learnerPrompt": "You are the admitting team. Review the ED chart and identify anything that needs attention before accepting admission orders.",
      "vitals": {
        "Temp": "39.2 \u00b0C",
        "HR": "166",
        "RR": "30",
        "SpO\u2082": "99% RA",
        "Pain": "7/10",
        "Updated": "07/03 17:20"
      },
      "summary": {
        "assessment": [
          "3 y.o. male presenting with fever, left hip pain, and refusal to bear weight.",
          "Concern for transient synovitis vs early osteomyelitis/septic arthritis."
        ],
        "problems": [
          "Fever",
          "Left hip pain",
          "Refusal to bear weight",
          "Tachycardia"
        ],
        "events": [
          "ED evaluation completed",
          "Blood culture collected",
          "Hip x-ray completed",
          "Admission requested"
        ],
        "plan": [
          "Review ED evaluation and labs",
          "Verify weight and medication dosing",
          "Follow up blood culture",
          "Continue cefazolin",
          "Consider MRI if no improvement"
        ],
        "pending": [
          "Blood culture collected 07/03 16:18",
          "Left hip x-ray completed 07/03 15:40"
        ],
        "todo": [
          "Verify weight with parent/growth history",
          "Recalculate medication dosing",
          "Review allergy documentation",
          "Perform admission exam"
        ],
        "meds": [
          "Cefazolin 775 mg IV q8h",
          "Ibuprofen 65 mg PO once"
        ]
      },
      "timeline": [
        [
          "14:32",
          "ED arrival"
        ],
        [
          "14:38",
          "Triage complete"
        ],
        [
          "14:52",
          "Ibuprofen administered"
        ],
        [
          "16:18",
          "Blood culture collected"
        ],
        [
          "16:25",
          "Cefazolin ordered"
        ]
      ],
      "notes": [
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight. Tachycardic, febrile...",
          "Previously healthy 3-year-old male with one day of fever and left leg pain/refusal to bear weight. No trauma.\n\nExam: uncomfortable, cries with passive left hip range of motion, no swelling or erythema. Tachycardic, capillary refill less than 2 seconds.\n\nAssessment: transient synovitis vs early osteomyelitis vs septic arthritis.\n\nPlan: admit to PHM for observation, labs, blood culture, hip radiograph, empiric cefazolin, pain control."
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "Ibuprofen given. PIV placed. Labs and blood culture drawn. Cefazolin ordered.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week."
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Triage weight documented: 31 kg."
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising."
        ]
      ],
      "orders": [
        [
          "Cefazolin 775 mg IV q8h",
          "Ordered 16:25",
          "Active",
          "Medication"
        ],
        [
          "Ibuprofen 65 mg PO once",
          "Given 14:52",
          "Completed",
          "Medication"
        ],
        [
          "Blood Culture (Peripheral)",
          "Collected 16:18",
          "In process",
          "Lab"
        ],
        [
          "Left Hip X-Ray",
          "Completed 15:40",
          "Completed",
          "Imaging"
        ]
      ],
      "mar": [
        [
          "14:52",
          "Ibuprofen",
          "65 mg PO",
          "Given",
          "Pain improved minimally"
        ],
        [
          "16:25",
          "Cefazolin",
          "775 mg IV q8h",
          "Ordered",
          "Not yet administered"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "13.8 K/uL",
            "High"
          ],
          [
            "Hgb",
            "11.5 g/dL",
            ""
          ],
          [
            "Platelets",
            "355 K/uL",
            ""
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "8.6 mg/dL",
            "High"
          ],
          [
            "ESR",
            "42 mm/hr",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "BMP",
            "Within normal limits",
            ""
          ]
        ],
        "Microbiology": [
          [
            "Blood culture",
            "Pending",
            "Pending"
          ]
        ]
      },
      "imaging": [
        [
          "Left hip radiograph",
          "No acute fracture or dislocation. No osseous abnormality. Early osteomyelitis cannot be excluded radiographically."
        ]
      ],
      "growth": [
        [
          "18 mo",
          "11.6 kg"
        ],
        [
          "24 mo",
          "12.4 kg"
        ],
        [
          "30 mo",
          "12.9 kg"
        ],
        [
          "2 weeks ago",
          "13.1 kg"
        ],
        [
          "Today ED",
          "31 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "14:32",
          "14:52",
          "16:20",
          "17:20"
        ],
        "rows": [
          [
            "Heart Rate",
            "152",
            "158",
            "164",
            "166"
          ],
          [
            "Respiratory Rate",
            "26",
            "28",
            "30",
            "30"
          ],
          [
            "Temperature",
            "39.1",
            "39.3",
            "39.0",
            "39.2"
          ],
          [
            "SpO\u2082",
            "99",
            "99",
            "98",
            "99"
          ],
          [
            "Pain",
            "8",
            "7",
            "7",
            "7"
          ],
          [
            "Cap refill",
            "<2 sec",
            "<2 sec",
            "<2 sec",
            "<2 sec"
          ],
          [
            "Mental status",
            "Alert",
            "Alert",
            "Fussy",
            "Fussy"
          ],
          [
            "Urine output",
            "\u2014",
            "\u2014",
            "1 wet diaper",
            "\u2014"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "16:20",
          "He is still crying with diaper changes. Pain did not improve much after ibuprofen.",
          "AR"
        ],
        [
          "Pharmacy",
          "16:31",
          "Can you verify the patient's weight before we prepare cefazolin? The documented weight seems high for age.",
          "PH"
        ]
      ],
      "facilitator": [
        "Medication safety clue: ED weight is 31 kg, parent says 29 lb, growth chart shows 13.1 kg, MAR shows cefazolin dosed using wrong weight and ibuprofen only 5 mg/kg."
      ]
    },
    {
      "id": "2",
      "label": "Phase 2",
      "title": "Hospital day 1",
      "time": "07/04/2026 08:30",
      "location": "6A-12",
      "room": "6A-12",
      "team": "Hospital Medicine",
      "severity": "Watcher",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "1",
      "status": "worse",
      "learnerPrompt": "Review overnight events and determine whether the working diagnosis still fits the patient.",
      "vitals": {
        "Temp": "39.4 \u00b0C",
        "HR": "172",
        "RR": "34",
        "SpO\u2082": "97% RA",
        "Pain": "9/10",
        "Updated": "07/04 08:00"
      },
      "summary": {
        "assessment": [
          "Persistent fever and refusal to bear weight despite observation.",
          "Clinical course is not consistent with simple improvement from transient synovitis."
        ],
        "problems": [
          "Fever",
          "Left hip pain",
          "Refusal to bear weight",
          "Rising CRP"
        ],
        "events": [
          "Fever continued overnight",
          "Nursing documented worsening pain",
          "Parent reports he is worse today",
          "CRP increased from 8.6 to 16.4"
        ],
        "plan": [
          "Repeat focused history and physical",
          "Broaden differential",
          "Order MRI",
          "Consult orthopedics"
        ],
        "pending": [
          "Blood culture preliminary",
          "MRI not yet ordered"
        ],
        "todo": [
          "Repeat focused exam",
          "Order MRI",
          "Consult orthopedics",
          "Update family"
        ],
        "meds": [
          "Cefazolin 325 mg IV q8h",
          "Acetaminophen 195 mg PO q6h PRN"
        ]
      },
      "timeline": [
        [
          "20:00",
          "Admitted to floor"
        ],
        [
          "23:30",
          "Temp 39.5, HR 164"
        ],
        [
          "04:15",
          "Worse pain with hip movement"
        ],
        [
          "07:45",
          "CRP resulted higher"
        ],
        [
          "08:10",
          "Parent reports child is worse"
        ]
      ],
      "notes": [
        [
          "Overnight PHM Update",
          "M. Lee, MD",
          "07/04 04:45",
          "Continues febrile. Refusing to stand.",
          "Continues febrile. Refusing to stand. Treated as likely transient synovitis with viral symptoms. Blood culture pending."
        ],
        [
          "Nursing Note",
          "Ashley RN",
          "07/04 07:55",
          "Cries with any movement of left leg.",
          "Patient cries with any movement of left leg. Refuses to sit upright. Mother worried he is sleepier and worse than yesterday."
        ]
      ],
      "orders": [
        [
          "Acetaminophen 195 mg PO q6h PRN",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Cefazolin 325 mg IV q8h",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Repeat CRP",
          "Completed",
          "Completed",
          "Lab"
        ],
        [
          "MRI left hip/femur",
          "Not ordered",
          "Missing",
          "Imaging"
        ]
      ],
      "mar": [
        [
          "06:05",
          "Acetaminophen",
          "195 mg PO",
          "Given",
          "Temp 39.1 \u2192 38.6"
        ],
        [
          "07:00",
          "Cefazolin",
          "325 mg IV",
          "Given",
          ""
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "15.6 K/uL",
            "High"
          ],
          [
            "Platelets",
            "352 K/uL",
            ""
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "16.4 mg/dL",
            "High"
          ],
          [
            "ESR",
            "58 mm/hr",
            "High"
          ]
        ],
        "Microbiology": [
          [
            "Blood culture",
            "No growth to date",
            "Prelim"
          ]
        ]
      },
      "imaging": [
        [
          "Prior radiograph",
          "No osseous abnormality. MRI recommended if concern persists."
        ]
      ],
      "growth": [
        [
          "2 weeks ago",
          "13.1 kg"
        ],
        [
          "Today verified",
          "13.0 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "20:00",
          "23:30",
          "04:15",
          "08:00"
        ],
        "rows": [
          [
            "Heart Rate",
            "152",
            "164",
            "168",
            "172"
          ],
          [
            "Respiratory Rate",
            "28",
            "30",
            "32",
            "34"
          ],
          [
            "Temperature",
            "39.3",
            "39.5",
            "39.1",
            "39.4"
          ],
          [
            "SpO\u2082",
            "99",
            "98",
            "98",
            "97"
          ],
          [
            "Pain",
            "7",
            "8",
            "9",
            "9"
          ],
          [
            "Cap refill",
            "<2 sec",
            "<2 sec",
            "3 sec",
            "3 sec"
          ],
          [
            "Mental status",
            "Alert",
            "Fussy",
            "Sleeping",
            "Sleepier"
          ],
          [
            "Urine output",
            "Adequate",
            "Adequate",
            "Low",
            "Low"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "08:05",
          "I am concerned. He screams when I move his left hip and will not put any weight on the leg.",
          "AR"
        ]
      ],
      "facilitator": [
        "Expected actions: bedside reassessment, recognize red flags, avoid anchoring on transient synovitis, order MRI, consult orthopedics."
      ]
    },
    {
      "id": "3",
      "label": "Phase 3",
      "title": "Pathway decisions",
      "time": "07/04/2026 15:45",
      "location": "6A-12",
      "room": "6A-12",
      "team": "PHM + Ortho",
      "severity": "Watcher",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "1",
      "status": "worse",
      "learnerPrompt": "New results are available. Use the pathway and chart data to decide what needs to happen next.",
      "vitals": {
        "Temp": "39.6 \u00b0C",
        "HR": "176",
        "RR": "35",
        "SpO\u2082": "97% RA",
        "Pain": "8/10",
        "Updated": "07/04 15:30"
      },
      "summary": {
        "assessment": [
          "MRI confirms acute osteomyelitis with small subperiosteal abscess.",
          "Blood culture now positive with gram-positive cocci in clusters."
        ],
        "problems": [
          "Acute hematogenous osteomyelitis",
          "Subperiosteal abscess",
          "Positive blood culture",
          "Persistent tachycardia"
        ],
        "events": [
          "MRI completed",
          "Orthopedic surgery consulted",
          "Microbiology reported critical result"
        ],
        "plan": [
          "Use osteomyelitis pathway",
          "Repeat blood cultures until negative",
          "Trend CRP/CBC/BMP",
          "Keep NPO at midnight per Ortho"
        ],
        "pending": [
          "Speciation/susceptibilities",
          "Repeat blood culture order"
        ],
        "todo": [
          "Repeat blood culture",
          "Trend CRP/CBC/BMP",
          "Review antibiotic pathway/antibiogram",
          "NPO at midnight per Ortho"
        ],
        "meds": [
          "Cefazolin 325 mg IV q8h",
          "Acetaminophen PRN",
          "Ibuprofen PRN"
        ]
      },
      "timeline": [
        [
          "11:30",
          "MRI ordered"
        ],
        [
          "13:50",
          "MRI completed"
        ],
        [
          "14:20",
          "Blood culture positive"
        ],
        [
          "15:10",
          "Ortho consulted"
        ],
        [
          "15:35",
          "Osteomyelitis pathway opened"
        ]
      ],
      "notes": [
        [
          "MRI Result",
          "Radiology",
          "07/04 14:05",
          "Acute osteomyelitis of left proximal femur.",
          "Acute osteomyelitis of the left proximal femur with small adjacent subperiosteal abscess. No hip joint effusion."
        ],
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 15:25",
          "Recommend IV antibiotics and serial exams.",
          "Recommend continued IV antibiotics, serial exams, trend CRP, and NPO at midnight in case operative source control is needed if clinical status worsens or abscess enlarges."
        ],
        [
          "Meridian Osteomyelitis Pathway",
          "Clinical Pathway",
          "07/04 15:35",
          "Obtain cultures, trend CRP, use local antibiotic guidance.",
          "Obtain blood cultures. Trend CRP every 24-48 hours. Tailor empiric antibiotics to local susceptibility and MRSA risk. Consult orthopedics for abscess, septic arthritis concern, or failure to improve."
        ]
      ],
      "orders": [
        [
          "Cefazolin 325 mg IV q8h",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Repeat blood culture",
          "Needs order",
          "Missing",
          "Lab"
        ],
        [
          "CRP daily",
          "Needs order",
          "Missing",
          "Lab"
        ],
        [
          "NPO at midnight",
          "Recommended",
          "Missing",
          "Diet"
        ]
      ],
      "mar": [
        [
          "15:00",
          "Cefazolin",
          "325 mg IV",
          "Given",
          "After dose correction"
        ]
      ],
      "results": {
        "Microbiology": [
          [
            "Blood culture",
            "Gram-positive cocci in clusters",
            "Critical"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "16.4 mg/dL",
            "High"
          ]
        ],
        "CBC": [
          [
            "WBC",
            "15.6 K/uL",
            "High"
          ]
        ]
      },
      "imaging": [
        [
          "MRI left hip/femur",
          "Left proximal femur osteomyelitis with small subperiosteal abscess. No septic arthritis."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.0 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "08:00",
          "12:00",
          "14:00",
          "15:30"
        ],
        "rows": [
          [
            "Heart Rate",
            "164",
            "168",
            "172",
            "176"
          ],
          [
            "Respiratory Rate",
            "30",
            "32",
            "34",
            "35"
          ],
          [
            "Temperature",
            "39.1",
            "39.4",
            "39.2",
            "39.6"
          ],
          [
            "SpO\u2082",
            "98",
            "98",
            "97",
            "97"
          ],
          [
            "Pain",
            "8",
            "9",
            "9",
            "8"
          ],
          [
            "Cap refill",
            "<2 sec",
            "3 sec",
            "3 sec",
            "3 sec"
          ],
          [
            "Mental status",
            "Fussy",
            "Sleepy",
            "Sleepy",
            "Sleepy"
          ],
          [
            "Urine output",
            "Adequate",
            "Adequate",
            "Low",
            "Low"
          ]
        ]
      },
      "messages": [
        [
          "Microbiology",
          "14:20",
          "Critical result: blood culture positive for gram-positive cocci in clusters.",
          "MICRO"
        ],
        [
          "Ortho Resident",
          "15:32",
          "Please keep NPO at midnight and call if tachycardia worsens, perfusion changes, or pain increases.",
          "ORT"
        ]
      ],
      "facilitator": [
        "Expected actions: repeat culture, trend labs, use pathway/antibiogram, clarify MRSA risk, communicate with Ortho/ID."
      ]
    },
    {
      "id": "4a",
      "label": "Phase 4A",
      "title": "Poor handoff",
      "time": "07/04/2026 21:15",
      "location": "6A-12",
      "room": "6A-12",
      "team": "Night PHM",
      "severity": "Unclear",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "1",
      "status": "worse",
      "learnerPrompt": "You are the night team. Review the handoff and documentation. Decide whether you have enough information to safely care for this patient.",
      "vitals": {
        "Temp": "40.0 \u00b0C",
        "HR": "182",
        "RR": "38",
        "SpO\u2082": "96% RA",
        "Pain": "8/10",
        "Updated": "07/04 21:00"
      },
      "summary": {
        "assessment": [
          "Known bacteremic osteomyelitis with abscess, but documentation does not clearly reflect current illness severity.",
          "Nursing concerns suggest clinical worsening."
        ],
        "problems": [
          "Bacteremic osteomyelitis",
          "Subperiosteal abscess",
          "Persistent tachycardia",
          "Poor documentation/handoff"
        ],
        "events": [
          "Day note predates MRI/culture results",
          "Handoff omits bacteremia and contingencies",
          "RN reports worsening perfusion/urine output"
        ],
        "plan": [
          "Review chart for missing data",
          "Evaluate patient now",
          "Clarify action list and contingency planning"
        ],
        "pending": [
          "Repeat blood culture not ordered",
          "NPO order not placed",
          "Trend labs not ordered"
        ],
        "todo": [
          "Identify missing IPASS elements",
          "Review MRI/culture/Ortho note",
          "Evaluate patient now",
          "Create clear plan and documentation"
        ],
        "meds": [
          "Cefazolin 325 mg IV q8h",
          "Antipyretics PRN"
        ]
      },
      "timeline": [
        [
          "17:45",
          "Persistent tachycardia"
        ],
        [
          "18:30",
          "Urine output decreased"
        ],
        [
          "19:00",
          "Day team signs out"
        ],
        [
          "20:40",
          "RN reports patient looks worse"
        ],
        [
          "21:15",
          "Night team reviews chart"
        ]
      ],
      "notes": [
        [
          "Outdated PHM Progress Note",
          "M. Lee, MD",
          "07/04 09:10",
          "Likely transient synovitis. Blood culture pending.",
          "Assessment: likely transient synovitis. Continue observation and pain control. Blood culture pending. Consider further imaging if not improving.\n\nNote: This documentation was written before MRI and positive blood culture resulted."
        ],
        [
          "Verbal/Written Handoff",
          "Day Team",
          "07/04 19:00",
          "Probably osteo. Nothing major overnight.",
          "3yo admitted with leg pain, probably osteo. MRI done. On cefazolin. Ortho aware. Nothing major overnight."
        ]
      ],
      "orders": [
        [
          "Cefazolin 325 mg IV q8h",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Repeat blood culture",
          "Not ordered",
          "Missing",
          "Lab"
        ],
        [
          "CRP trend",
          "Not ordered",
          "Missing",
          "Lab"
        ],
        [
          "NPO at midnight",
          "Not ordered",
          "Missing",
          "Diet"
        ]
      ],
      "mar": [
        [
          "15:00",
          "Cefazolin",
          "325 mg IV",
          "Given",
          ""
        ],
        [
          "23:00",
          "Cefazolin",
          "325 mg IV",
          "Due",
          ""
        ]
      ],
      "results": {
        "Microbiology": [
          [
            "Blood culture",
            "Gram-positive cocci in clusters",
            "Critical"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "16.4 mg/dL",
            "High"
          ]
        ]
      },
      "imaging": [
        [
          "MRI",
          "Positive for proximal femur osteomyelitis with subperiosteal abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.0 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "17:45",
          "18:30",
          "20:00",
          "21:00"
        ],
        "rows": [
          [
            "Heart Rate",
            "168",
            "174",
            "178",
            "182"
          ],
          [
            "Respiratory Rate",
            "32",
            "34",
            "36",
            "38"
          ],
          [
            "Temperature",
            "39.2",
            "39.6",
            "39.8",
            "40.0"
          ],
          [
            "SpO\u2082",
            "98",
            "97",
            "96",
            "96"
          ],
          [
            "Urine output",
            "Adequate",
            "Low",
            "Low",
            "Minimal"
          ],
          [
            "Cap refill",
            "3 sec",
            "3 sec",
            "4 sec",
            "4 sec"
          ],
          [
            "Pulses",
            "2+",
            "2+",
            "1+",
            "1+"
          ],
          [
            "Skin",
            "Warm",
            "Warm",
            "Cool",
            "Cool"
          ],
          [
            "Mental status",
            "Fussy",
            "Sleepy",
            "Irritable",
            "Sleepy"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "20:40",
          "He does not look right. HR is still 178, cap refill is closer to 4 seconds, and he has barely peed. Can someone come see him?",
          "AR"
        ]
      ],
      "reveal": true,
      "facilitator": [
        "Learners should identify inadequate illness severity, missing action list, missing contingency planning, outdated physician note, and missing orders. Reveal 4B with code IPASS after debrief."
      ]
    },
    {
      "id": "4b",
      "label": "Phase 4B",
      "title": "Corrected IPASS",
      "time": "07/04/2026 21:35",
      "location": "6A-12",
      "room": "6A-12",
      "team": "Night PHM",
      "severity": "Watcher / high risk",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "1",
      "status": "worse",
      "learnerPrompt": "Review the updated handoff and physician event note. Compare what is different now.",
      "vitals": {
        "Temp": "40.0 \u00b0C",
        "HR": "182",
        "RR": "38",
        "SpO\u2082": "96% RA",
        "Pain": "8/10",
        "Updated": "07/04 21:35"
      },
      "summary": {
        "assessment": [
          "Bacteremic osteomyelitis with abscess and early perfusion concerns.",
          "Illness severity and contingency planning now explicitly documented."
        ],
        "problems": [
          "Bacteremic osteomyelitis",
          "Subperiosteal abscess",
          "Early perfusion concerns",
          "High risk for septic shock"
        ],
        "events": [
          "Night team evaluated patient",
          "Updated IPASS documented",
          "Physician event note filed",
          "Repeat labs/culture ordered"
        ],
        "plan": [
          "Follow lactate and labs",
          "Ensure cefazolin given on time",
          "NPO at midnight",
          "Escalate if perfusion worsens"
        ],
        "pending": [
          "Lactate",
          "Repeat CBC/BMP/CRP",
          "Repeat blood culture"
        ],
        "todo": [
          "Follow lactate/labs",
          "Ensure antibiotics on time",
          "NPO at midnight",
          "Escalate if perfusion worsens"
        ],
        "meds": [
          "Cefazolin 325 mg IV q8h",
          "Antipyretics PRN"
        ]
      },
      "timeline": [
        [
          "21:20",
          "Night resident evaluates patient"
        ],
        [
          "21:28",
          "Updated IPASS documented"
        ],
        [
          "21:35",
          "Physician event note filed"
        ],
        [
          "21:40",
          "Repeat labs and culture ordered"
        ]
      ],
      "notes": [
        [
          "Updated IPASS Handoff",
          "Day + Night Team",
          "07/04 21:28",
          "Watcher. Bacteremic osteomyelitis. Action list and contingencies included.",
          "I \u2014 Illness severity: WATCHER. 3yo with acute hematogenous osteomyelitis of left proximal femur, bacteremia, and small subperiosteal abscess.\n\nP \u2014 Patient summary: Initially admitted for fever/refusal to bear weight. ED weight error corrected. MRI confirms osteomyelitis. Blood culture positive for gram-positive cocci in clusters. On cefazolin. Ortho following.\n\nA \u2014 Action list: Repeat blood culture now and daily until negative. CRP/CBC/BMP tonight. NPO at midnight. Reassess perfusion and urine output. Confirm antibiotic timing.\n\nS \u2014 Situation awareness/contingency: If persistent tachycardia, hypotension, altered mental status, delayed cap refill, rising lactate, or worsening pain, activate sepsis pathway, call Ortho/PICU, broaden antibiotics per pathway.\n\nS \u2014 Synthesis by receiver: Night team repeats back bacteremia, abscess, NPO plan, repeat culture/labs, and sepsis escalation triggers."
        ],
        [
          "Physician Event Note",
          "R. Nguyen, MD",
          "07/04 21:35",
          "Evaluated for tachycardia and nursing concern. Repeat labs/culture ordered.",
          "Called to bedside for persistent tachycardia and nursing concern. Patient febrile, uncomfortable, cap refill 3-4 seconds, HR 176, BP 88/52, urine output decreased. Reviewed chart and noted MRI-confirmed left proximal femur osteomyelitis with small subperiosteal abscess and positive blood culture.\n\nPlan: repeat blood culture, CBC, BMP, CRP, lactate; continue cefazolin; NPO at midnight; notify Ortho of clinical concern; close reassessment within 1 hour; activate sepsis pathway if perfusion worsens."
        ]
      ],
      "orders": [
        [
          "Repeat blood culture",
          "Ordered",
          "Active",
          "Lab"
        ],
        [
          "CBC/BMP/CRP/lactate",
          "STAT ordered",
          "Active",
          "Lab"
        ],
        [
          "NPO at midnight",
          "Ordered",
          "Active",
          "Diet"
        ],
        [
          "Ortho update",
          "Completed",
          "Completed",
          "Page"
        ]
      ],
      "mar": [
        [
          "23:00",
          "Cefazolin",
          "325 mg IV",
          "Due",
          "Ensure on time"
        ]
      ],
      "results": {
        "Labs ordered": [
          [
            "Lactate",
            "Pending",
            ""
          ],
          [
            "CBC/BMP/CRP",
            "Pending",
            ""
          ]
        ]
      },
      "imaging": [
        [
          "MRI",
          "Left proximal femur osteomyelitis with small subperiosteal abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.0 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "17:45",
          "18:30",
          "20:00",
          "21:00"
        ],
        "rows": [
          [
            "Heart Rate",
            "168",
            "174",
            "178",
            "182"
          ],
          [
            "Respiratory Rate",
            "32",
            "34",
            "36",
            "38"
          ],
          [
            "Temperature",
            "39.2",
            "39.6",
            "39.8",
            "40.0"
          ],
          [
            "SpO\u2082",
            "98",
            "97",
            "96",
            "96"
          ],
          [
            "Urine output",
            "Adequate",
            "Low",
            "Low",
            "Minimal"
          ],
          [
            "Cap refill",
            "3 sec",
            "3 sec",
            "4 sec",
            "4 sec"
          ],
          [
            "Pulses",
            "2+",
            "2+",
            "1+",
            "1+"
          ],
          [
            "Skin",
            "Warm",
            "Warm",
            "Cool",
            "Cool"
          ],
          [
            "Mental status",
            "Fussy",
            "Sleepy",
            "Irritable",
            "Sleepy"
          ]
        ]
      },
      "messages": [
        [
          "Ortho Resident",
          "21:42",
          "Agree with NPO and repeat labs. Call immediately for hypotension, worsening perfusion, or increased pain.",
          "ORT"
        ]
      ],
      "facilitator": [
        "Use this after the handoff debrief to model complete IPASS and appropriate event documentation."
      ]
    },
    {
      "id": "5",
      "label": "Phase 5",
      "title": "MET call",
      "time": "07/05/2026 02:10",
      "location": "6A-12 \u2192 PICU",
      "room": "6A-12",
      "team": "PHM + PICU + Ortho",
      "severity": "Critical",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "2",
      "status": "worse",
      "learnerPrompt": "The patient is deteriorating. Review the chart quickly and lead the next steps.",
      "vitals": {
        "Temp": "40.2 \u00b0C",
        "HR": "190",
        "RR": "48",
        "SpO\u2082": "92% RA",
        "Pain": "\u2014",
        "Updated": "07/05 02:00"
      },
      "summary": {
        "assessment": [
          "Septic shock with end-organ dysfunction in patient with bacteremic osteomyelitis.",
          "Requires immediate escalation and source-control reassessment."
        ],
        "problems": [
          "Septic shock",
          "Bacteremic osteomyelitis",
          "End-organ dysfunction",
          "Need for source control"
        ],
        "events": [
          "Hypotension and lethargy",
          "Lactate 5.1",
          "VBG metabolic acidosis",
          "PICU accepts transfer"
        ],
        "plan": [
          "Activate/lead MET response",
          "Fluid resuscitation",
          "Repeat cultures and broaden antibiotics",
          "PICU transfer and urgent Ortho reassessment"
        ],
        "pending": [
          "Repeat blood culture",
          "Response to fluid bolus",
          "Source control plan"
        ],
        "todo": [
          "Lead MET using closed-loop communication",
          "Fluid resuscitation",
          "Repeat cultures + broaden antibiotics",
          "Call PICU and Ortho urgently"
        ],
        "meds": [
          "NS bolus 20 mL/kg",
          "Vancomycin 15 mg/kg IV",
          "Cefepime 50 mg/kg IV"
        ]
      },
      "timeline": [
        [
          "00:20",
          "Fever 40.2, HR 186"
        ],
        [
          "01:15",
          "Minimal urine output"
        ],
        [
          "01:50",
          "BP 72/38, cap refill 5 sec"
        ],
        [
          "02:00",
          "MET activated"
        ],
        [
          "02:10",
          "PICU accepts transfer"
        ]
      ],
      "notes": [
        [
          "Rapid Response Note",
          "MET Team",
          "07/05 02:05",
          "Septic shock with end-organ dysfunction.",
          "Called for hypotension and altered mental status in 3yo with bacteremic osteomyelitis. On arrival: lethargic, HR 190, RR 48, BP 72/38, SpO2 92% RA, cap refill 5 seconds, weak pulses, mottled extremities. Impression: septic shock with end-organ dysfunction."
        ],
        [
          "PICU Acceptance Note",
          "S. Allen, MD",
          "07/05 02:15",
          "Accept to PICU for septic shock.",
          "Accept to PICU for septic shock. Initiate sepsis bundle, fluid resuscitation, vasoactive support if inadequate response, broaden antibiotics per sepsis pathway, urgent Ortho reassessment for source control."
        ]
      ],
      "orders": [
        [
          "Sepsis pathway",
          "Activated",
          "Completed",
          ""
        ],
        [
          "Normal saline bolus",
          "20 mL/kg IV",
          "Ordered",
          ""
        ],
        [
          "Repeat blood culture",
          "STAT",
          "Ordered",
          ""
        ],
        [
          "Cefepime + Vancomycin",
          "Per sepsis pathway",
          "Ordered",
          ""
        ],
        [
          "PICU transfer",
          "Immediate",
          "Accepted",
          ""
        ]
      ],
      "mar": [
        [
          "02:03",
          "Normal saline",
          "260 mL IV bolus",
          "Infusing",
          "20 mL/kg"
        ],
        [
          "02:08",
          "Vancomycin",
          "15 mg/kg IV",
          "Ordered",
          ""
        ],
        [
          "02:08",
          "Cefepime",
          "50 mg/kg IV",
          "Ordered",
          ""
        ]
      ],
      "results": {
        "Blood gas": [
          [
            "VBG pH",
            "7.24",
            "Critical"
          ],
          [
            "pCO\u2082",
            "31 mmHg",
            ""
          ],
          [
            "HCO\u2083",
            "13 mEq/L",
            "Low"
          ],
          [
            "Base deficit",
            "-13",
            "Critical"
          ]
        ],
        "Perfusion / organ function": [
          [
            "Lactate",
            "5.1 mmol/L",
            "Critical"
          ],
          [
            "Creatinine",
            "0.72 mg/dL",
            "High"
          ],
          [
            "Platelets",
            "118 K/uL",
            "Low"
          ]
        ]
      },
      "imaging": [
        [
          "MRI",
          "Known osteomyelitis with subperiosteal abscess; Ortho reassessment requested for source control."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.0 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "00:20",
          "01:15",
          "01:50",
          "02:00"
        ],
        "rows": [
          [
            "Heart Rate",
            "176",
            "182",
            "186",
            "190"
          ],
          [
            "Respiratory Rate",
            "38",
            "42",
            "46",
            "48"
          ],
          [
            "Blood Pressure",
            "88/52",
            "82/46",
            "72/38",
            "74/40"
          ],
          [
            "Temperature",
            "39.8",
            "40.0",
            "40.2",
            "40.2"
          ],
          [
            "SpO\u2082",
            "96",
            "94",
            "93",
            "92"
          ],
          [
            "Urine output",
            "Low",
            "Minimal",
            "None",
            "None"
          ],
          [
            "Cap refill",
            "4 sec",
            "4 sec",
            "5 sec",
            "5 sec"
          ],
          [
            "Pulses",
            "1+",
            "Weak",
            "Weak",
            "Weak"
          ],
          [
            "Skin",
            "Cool",
            "Cool",
            "Mottled",
            "Mottled"
          ],
          [
            "Mental status",
            "Sleepy",
            "Lethargic",
            "Difficult to arouse",
            "Lethargic"
          ]
        ]
      },
      "messages": [
        [
          "PICU Fellow",
          "02:12",
          "We are coming now. Please continue fluid resuscitation and have antibiotics ready at bedside.",
          "PICU"
        ],
        [
          "Ortho Resident",
          "02:14",
          "On our way for urgent reassessment. Keep NPO.",
          "ORT"
        ]
      ],
      "facilitator": [
        "Expected actions: recognize septic shock, activate sepsis pathway/MET, fluids, cultures, broad antibiotics, PICU transfer, Ortho/source control communication."
      ]
    }
  ]
};
const PATIENT_PHOTO = "patient_photo.png";