const PATIENT_PHOTO = "patient_photo.png";
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
      "detail": "Bronchiolitis · Stable"
    },
    {
      "name": "Ava Rodriguez",
      "detail": "DKA · PICU"
    },
    {
      "name": "Noah Wilson",
      "detail": "Fever · Observation"
    }
  ],
  "phases": [
    {
      "id": "1",
      "label": "Phase 1",
      "title": "Admission reconciliation",
      "time": "07/03/2026 17:20",
      "location": "ED → PHM",
      "room": "ED-12",
      "team": "Hospital Medicine",
      "severity": "Stable",
      "weight": "31 kg",
      "weightDetail": "68 lb 5 oz",
      "hospitalDay": "ED",
      "status": "better",
      "learnerPrompt": "You are reviewing a new admission from the Emergency Department.",
      "vitals": {
        "Temp": "38.1 °C",
        "HR": "116",
        "RR": "24",
        "BP": "92/56",
        "SpO₂": "99% RA",
        "Pain": "5/10",
        "Updated": "07/03 17:20"
      },
      "summary": {
        "assessment": [
          "3 y.o. male presenting with fever, left hip pain, and refusal to bear weight.",
          "Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture."
        ],
        "problems": [
          "Fever",
          "Left hip pain",
          "Refusal to bear weight",
          "Tachycardia"
        ],
        "events": [
          "Presented to ED with fever and refusal to bear weight",
          "Fever and heart rate improved after antipyretic",
          "Blood culture collected",
          "Hip x-ray completed",
          "Admission requested for observation"
        ],
        "plan": [
          "Admit for observation and serial examinations",
          "Pain control with NSAID/acetaminophen",
          "Follow blood culture",
          "Defer empiric antibiotics while clinically stable unless patient worsens",
          "Consider MRI if symptoms persist or worsen"
        ],
        "pending": [
          "Blood culture collected 07/03 16:18",
          "Clinical response to observation and analgesia"
        ],
        "todo": [
          "Review ED note and nursing documentation",
          "Reconcile admission orders",
          "Verify patient weight",
          "Complete admission exam"
        ],
        "meds": [
          "Ibuprofen 310 mg PO given",
          "Acetaminophen PRN not yet administered"
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
          "Medication administered: ibuprofen 310 mg PO"
        ],
        [
          "16:18",
          "Blood culture collected"
        ],
        [
          "17:01",
          "PHM admission requested"
        ],
        [
          "17:20",
          "Current chart review"
        ]
      ],
      "notes": [
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight. Tachycardic, febrile...",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "Ibuprofen given. PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "Ibuprofen 310 mg PO once",
          "Given 14:52",
          "Completed",
          "Medication"
        ],
        [
          "Acetaminophen 465 mg PO q6h PRN",
          "Ordered 16:10",
          "Active",
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
        ],
        [
          "Admit to Hospital Medicine",
          "Requested 17:01",
          "Active",
          "Admission"
        ]
      ],
      "mar": [
        [
          "14:52",
          "Ibuprofen",
          "310 mg PO",
          "Given",
          "Dose based on documented weight"
        ],
        [
          "16:10",
          "Acetaminophen",
          "465 mg PO PRN",
          "Ordered",
          "Not yet administered"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "11.8 K/uL",
            ""
          ],
          [
            "RBC",
            "4.52 M/uL",
            ""
          ],
          [
            "Hemoglobin",
            "11.7 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "34.8 %",
            ""
          ],
          [
            "MCV",
            "77 fL",
            ""
          ],
          [
            "MCH",
            "25.9 pg",
            ""
          ],
          [
            "MCHC",
            "33.6 g/dL",
            ""
          ],
          [
            "RDW",
            "13.2 %",
            ""
          ],
          [
            "Platelets",
            "348 K/uL",
            ""
          ],
          [
            "MPV",
            "8.9 fL",
            ""
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "3.2 mg/L",
            "Normal"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "138 mmol/L",
            ""
          ],
          [
            "Potassium",
            "4.1 mmol/L",
            ""
          ],
          [
            "Chloride",
            "104 mmol/L",
            ""
          ],
          [
            "CO₂",
            "23 mmol/L",
            ""
          ],
          [
            "BUN",
            "10 mg/dL",
            ""
          ],
          [
            "Creatinine",
            "0.32 mg/dL",
            ""
          ],
          [
            "Glucose",
            "92 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.6 mg/dL",
            ""
          ]
        ],
        "Microbiology": [
          [
            "Blood culture",
            "Pending",
            "Pending"
          ]
        ],
        "Differential": [
          [
            "Neutrophils",
            "62 %",
            ""
          ],
          [
            "Lymphocytes",
            "28 %",
            ""
          ],
          [
            "Monocytes",
            "8 %",
            ""
          ],
          [
            "Eosinophils",
            "1 %",
            ""
          ],
          [
            "Basophils",
            "1 %",
            ""
          ],
          [
            "Absolute neutrophils",
            "7.3 K/uL",
            ""
          ],
          [
            "Absolute lymphocytes",
            "3.3 K/uL",
            ""
          ],
          [
            "Absolute monocytes",
            "0.9 K/uL",
            ""
          ],
          [
            "Absolute eosinophils",
            "0.1 K/uL",
            ""
          ],
          [
            "Absolute basophils",
            "0.1 K/uL",
            ""
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
            "Temperature",
            "39.3",
            "39.1",
            "38.4",
            "38.1"
          ],
          [
            "Heart Rate",
            "156",
            "150",
            "124",
            "116"
          ],
          [
            "Respiratory Rate",
            "28",
            "28",
            "24",
            "24"
          ],
          [
            "Blood Pressure",
            "96/58",
            "94/56",
            "92/56",
            "92/56"
          ],
          [
            "SpO₂",
            "99",
            "99",
            "99",
            "99"
          ],
          [
            "Pain",
            "8",
            "7",
            "5",
            "5"
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
            "Interactive",
            "Interactive"
          ],
          [
            "Urine output",
            "—",
            "—",
            "1 wet diaper",
            "—"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "16:20",
          "He is still uncomfortable with diaper changes, but his fever and heart rate improved after ibuprofen.",
          "AR"
        ],
        [
          "Pharmacy",
          "16:31",
          "Can you clarify today's documented weight? It differs from prior encounters.",
          "PH"
        ]
      ],
      "facilitator": [
        "Phase 1 focus: admission reconciliation. The ED plan to observe without antibiotics is defensible because the child is clinically stable and diagnosis is uncertain.",
        "Medication safety clue: ED weight is 31 kg, parent says 29 lb, growth chart shows 13.1 kg, and ibuprofen 65 mg does not match 10 mg/kg using either 31 kg or 13 kg. Learners should verbalize that the weight must be verified and medication dosing corrected before assuming care."
      ],
      "aha": "The weight does not reconcile across triage, parent report, MAR, and growth chart.",
      "authenticQuestion": "Is it safe to assume care of this patient?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ]
        ]
      },
      "activeOrders": [
        [
          "Ibuprofen 310 mg PO once",
          "Given 14:52",
          "Completed",
          "Medication"
        ],
        [
          "Acetaminophen 465 mg PO q6h PRN",
          "Ordered 16:10",
          "Active",
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
        ],
        [
          "Admit to Hospital Medicine",
          "Requested 17:01",
          "Active",
          "Admission"
        ]
      ]
    },
    {
      "id": "2",
      "label": "Phase 2",
      "title": "Clinical reassessment",
      "time": "07/04/2026 07:45",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Hospital Medicine",
      "severity": "Stable / needs reassessment",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "1",
      "status": "same",
      "learnerPrompt": "You are prerounding on Mason the morning after admission.",
      "vitals": {
        "Temp": "38.5 °C",
        "HR": "136",
        "RR": "26",
        "BP": "90/54",
        "SpO₂": "99% RA",
        "Pain": "5/10",
        "Updated": "07/04 07:45"
      },
      "summary": {
        "assessment": [
          "Admitted overnight for observation with presumed transient synovitis vs early osteoarticular infection.",
          "Weight discrepancy from ED corrected prior to floor medication dosing.",
          "Despite scheduled NSAIDs, Mason continues to refuse to bear weight and is less interactive than expected."
        ],
        "problems": [
          "Fever",
          "Left hip pain",
          "Refusal to bear weight",
          "Poor oral intake"
        ],
        "events": [
          "Transferred from ED to inpatient unit",
          "Incorrect ED weight corrected to 13.2 kg",
          "Received scheduled ibuprofen overnight",
          "Received PRN acetaminophen for fever",
          "Night nurse documents persistent pain and limited movement"
        ],
        "plan": [
          "Continue observation pending morning reassessment",
          "Perform focused bedside exam",
          "Reconsider differential if not improving as expected",
          "Consider repeat inflammatory markers and imaging after assessment"
        ],
        "pending": [
          "Blood culture: no growth to date",
          "Morning physician bedside reassessment"
        ],
        "todo": [
          "Review overnight nursing documentation",
          "Review MAR for response to scheduled NSAIDs",
          "Assess pain, mobility, hydration, and parent concern",
          "Decide whether additional workup is needed"
        ],
        "meds": [
          "Ibuprofen 130 mg PO scheduled",
          "Acetaminophen 195 mg PO PRN",
          "D5NS + 20 mEq KCl/L at 45 mL/hr"
        ]
      },
      "timeline": [
        [
          "07/03 — Admission Day",
          "__divider__"
        ],
        [
          "07/03 14:38",
          "ED triage: fever, left hip pain, refusal to walk"
        ],
        [
          "07/03 14:52",
          "Medication administered: ibuprofen 310 mg PO"
        ],
        [
          "07/03 16:18",
          "Blood culture collected"
        ],
        [
          "07/03 17:01",
          "Admitted to Hospital Medicine for observation"
        ],
        [
          "07/03 18:45",
          "Day RN shift summary documented"
        ],
        [
          "07/03 22:15",
          "Attending addendum to Admission H&P"
        ],
        [
          "07/04 — Hospital Day 1",
          "__divider__"
        ],
        [
          "07/04 02:10",
          "PRN acetaminophen given for fever"
        ],
        [
          "07/04 06:48",
          "Night RN shift summary documented"
        ],
        [
          "07/04 07:45",
          "Current chart review"
        ]
      ],
      "notes": [
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ]
      ],
      "orders": [
        [
          "Ibuprofen 130 mg PO q6h scheduled",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 195 mg PO q6h PRN fever/pain",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq KCl/L at 45 mL/hr",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Regular Pediatric Diet",
          "Diet effective now",
          "Active",
          "Diet"
        ],
        [
          "Vital signs q4h",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Strict Intake & Output",
          "Every 4 hours",
          "Active",
          "Monitoring"
        ],
        [
          "Serial musculoskeletal examinations",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Notify physician for worsening pain, persistent fever, inability to bear weight, or concern for clinical deterioration",
          "Until discontinued",
          "Active",
          "Monitoring"
        ],
        [
          "Blood Culture (Peripheral)",
          "Collected 07/03 16:18",
          "In process",
          "Lab"
        ],
        [
          "Left hip radiographs",
          "Completed 07/03 15:40",
          "Completed",
          "Imaging"
        ]
      ],
      "mar": [
        [
          "18:30",
          "Ibuprofen",
          "130 mg PO",
          "Given",
          "Scheduled NSAID after corrected weight"
        ],
        [
          "00:30",
          "Ibuprofen",
          "130 mg PO",
          "Given",
          "Scheduled"
        ],
        [
          "02:10",
          "Acetaminophen",
          "195 mg PO",
          "Given",
          "PRN for fever 39.1°C"
        ],
        [
          "06:30",
          "Ibuprofen",
          "130 mg PO",
          "Given",
          "Scheduled"
        ],
        [
          "08:00",
          "Acetaminophen",
          "195 mg PO PRN",
          "Available",
          "Not yet given this morning"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "11.8 K/uL",
            ""
          ],
          [
            "RBC",
            "4.52 M/uL",
            ""
          ],
          [
            "Hemoglobin",
            "11.7 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "34.8 %",
            ""
          ],
          [
            "MCV",
            "77 fL",
            ""
          ],
          [
            "MCH",
            "25.9 pg",
            ""
          ],
          [
            "MCHC",
            "33.6 g/dL",
            ""
          ],
          [
            "RDW",
            "13.2 %",
            ""
          ],
          [
            "Platelets",
            "348 K/uL",
            ""
          ],
          [
            "MPV",
            "8.9 fL",
            ""
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "3.2 mg/L",
            "Normal"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "138 mmol/L",
            ""
          ],
          [
            "Potassium",
            "4.1 mmol/L",
            ""
          ],
          [
            "Chloride",
            "104 mmol/L",
            ""
          ],
          [
            "CO₂",
            "23 mmol/L",
            ""
          ],
          [
            "BUN",
            "10 mg/dL",
            ""
          ],
          [
            "Creatinine",
            "0.32 mg/dL",
            ""
          ],
          [
            "Glucose",
            "92 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.6 mg/dL",
            ""
          ]
        ],
        "Microbiology": [
          [
            "Blood culture",
            "No growth to date",
            "Prelim"
          ]
        ],
        "Differential": [
          [
            "Neutrophils",
            "62 %",
            ""
          ],
          [
            "Lymphocytes",
            "28 %",
            ""
          ],
          [
            "Monocytes",
            "8 %",
            ""
          ],
          [
            "Eosinophils",
            "1 %",
            ""
          ],
          [
            "Basophils",
            "1 %",
            ""
          ],
          [
            "Absolute neutrophils",
            "7.3 K/uL",
            ""
          ],
          [
            "Absolute lymphocytes",
            "3.3 K/uL",
            ""
          ],
          [
            "Absolute monocytes",
            "0.9 K/uL",
            ""
          ],
          [
            "Absolute eosinophils",
            "0.1 K/uL",
            ""
          ],
          [
            "Absolute basophils",
            "0.1 K/uL",
            ""
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
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "18:00",
          "22:00",
          "02:00",
          "06:00",
          "07:45"
        ],
        "rows": [
          [
            "Temperature",
            "38.0",
            "38.6",
            "39.1",
            "38.5",
            "38.5"
          ],
          [
            "Heart Rate",
            "122",
            "134",
            "149",
            "136",
            "136"
          ],
          [
            "Respiratory Rate",
            "24",
            "26",
            "28",
            "26",
            "26"
          ],
          [
            "Blood Pressure",
            "94/56",
            "92/54",
            "90/54",
            "90/54",
            "88/52"
          ],
          [
            "SpO₂",
            "99",
            "99",
            "99",
            "99",
            "99"
          ],
          [
            "FLACC",
            "3",
            "4",
            "6",
            "5",
            "5"
          ],
          [
            "PO intake",
            "Small fluids",
            "Small snack",
            "Sips only",
            "Refused breakfast",
            "Sips only"
          ],
          [
            "Activity",
            "Playing quietly",
            "Resting",
            "Awake crying",
            "Lying quietly",
            "Less interactive"
          ],
          [
            "Weight bearing",
            "No",
            "No",
            "No",
            "No",
            "No"
          ],
          [
            "Cap refill",
            "<2 sec",
            "<2 sec",
            "<2 sec",
            "2 sec",
            "3 sec"
          ],
          [
            "Urine output",
            "Adequate",
            "Adequate",
            "Adequate",
            "Adequate",
            "Adequate"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "06:35",
          "Good morning. Mason had another fever overnight and still isn't wanting to move his left leg. Mom is hoping someone can come see him soon.",
          "AR"
        ]
      ],
      "facilitator": [
        "Phase 2 focus: clinical reassessment during prerounding. The ED/admission plan was reasonable; the patient is now providing new information through his trajectory.",
        "Learners should notice that the medication safety issue has been corrected and should not remain the center of the case.",
        "Key evidence lives in nursing documentation, MAR, flowsheet, and parent concern—not in a new diagnostic test.",
        "Expected actions after chart review and bedside assessment: broaden differential, consider repeat CRP/CBC, order MRI, consult orthopedics, and decide whether antibiotics are indicated based on stability and evolving concern."
      ],
      "aha": "Despite an appropriate observation plan and scheduled NSAIDs, Mason is not following the expected course for transient synovitis.",
      "authenticQuestion": "Is this patient following the expected clinical course?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ]
        ]
      },
      "activeOrders": [
        [
          "Ibuprofen 130 mg PO q6h scheduled",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 195 mg PO q6h PRN fever/pain",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq KCl/L at 45 mL/hr",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Regular Pediatric Diet",
          "Diet effective now",
          "Active",
          "Diet"
        ],
        [
          "Vital signs q4h",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Strict Intake & Output",
          "Every 4 hours",
          "Active",
          "Monitoring"
        ],
        [
          "Serial musculoskeletal examinations",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Notify physician for worsening pain, persistent fever, inability to bear weight, or concern for clinical deterioration",
          "Until discontinued",
          "Active",
          "Monitoring"
        ],
        [
          "Blood Culture (Peripheral)",
          "Collected 07/03 16:18",
          "In process",
          "Lab"
        ],
        [
          "Left hip radiographs",
          "Completed 07/03 15:40",
          "Completed",
          "Imaging"
        ]
      ]
    },
    {
      "id": "3",
      "label": "Phase 3",
      "title": "Evidence-based treatment",
      "time": "07/04/2026 14:00",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Hospital Medicine",
      "severity": "Stable / active infection",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "1",
      "status": "same",
      "learnerPrompt": "MRI, laboratory, and microbiology results are now available. Use the resources in the chart to develop Mason’s treatment plan.",
      "vitals": {
        "Temp": "38.8 °C",
        "HR": "142",
        "RR": "28",
        "BP": "91/53",
        "SpO₂": "98% RA",
        "Pain": "7/10",
        "Updated": "07/04 13:50"
      },
      "summary": {
        "assessment": [
          "MRI confirms left proximal femur osteomyelitis with a small subperiosteal fluid collection.",
          "Blood culture is positive for Staphylococcus aureus; mecA/C is not detected."
        ],
        "problems": [
          "Left proximal femur osteomyelitis",
          "Staphylococcus aureus bacteremia",
          "Persistent fever and pain",
          "Poor oral intake with mild dehydration"
        ],
        "events": [
          "MRI completed and finalized",
          "Blood culture became positive for gram-positive cocci in clusters",
          "Blood Culture ID PCR detected Staphylococcus aureus with mecA/C not detected",
          "Orthopedics recommends medical management today"
        ],
        "plan": [
          "Use institutional and national resources to select definitive therapy"
        ],
        "pending": [
          "Final blood culture identification and susceptibilities",
          "Clinical response to antibiotics, fluids, and pain control"
        ],
        "todo": [
          "Present an evidence-based treatment plan to the attending"
        ],
        "meds": [
          "Ibuprofen scheduled",
          "Acetaminophen PRN",
          "Oxycodone PRN for severe pain"
        ]
      },
      "timeline": [
        [
          "09:30",
          "PHM progress note signed"
        ],
        [
          "10:15",
          "MRI completed"
        ],
        [
          "11:05",
          "MRI finalized"
        ],
        [
          "12:47",
          "Blood culture reported positive: gram-positive cocci in clusters"
        ],
        [
          "13:32",
          "Blood Culture ID PCR resulted"
        ],
        [
          "13:40",
          "Orthopedic consult signed"
        ],
        [
          "14:00",
          "Current chart review"
        ]
      ],
      "notes": [
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 13:40",
          "MRI consistent with osteomyelitis. No operative intervention today.",
          "Three-year-old with persistent fever, refusal to bear weight, and MRI findings consistent with left proximal femur osteomyelitis with a small subperiosteal fluid collection. No septic arthritis and no drainable abscess.\n\nAssessment: Presumed acute hematogenous osteomyelitis. No operative intervention indicated today.\n\nRecommendations: Begin IV antibiotic therapy, continue serial examinations, allow regular diet today, and make NPO at midnight for Orthopedic re-evaluation in the morning. Please notify Orthopedics for increasing pain, swelling, change in neurovascular examination, or clinical deterioration.",
          "Consult"
        ],
        [
          "PHM Progress Note",
          "Barnes, MD",
          "07/04 09:30",
          "Persistent fever and worsening pain; broaden evaluation for osteoarticular infection.",
          "S — Subjective\nMother reports Mason remained febrile overnight and continues to refuse to stand or bear weight. He cries with repositioning of the left leg and has had only small sips of fluid with very little breakfast. Acetaminophen temporarily improved his fever, but his pain and activity level have not returned to baseline.\n\nO — Objective\nVital signs (07/04 07:45): T 39.1°C, HR 149, RR 30, BP 90/52, SpO₂ 98% on room air. Pain 7/10.\n\nIntake/Output: Poor oral intake overnight. Urine output remains present but is decreasing.\n\nPhysical Exam\nGeneral: Tired, uncomfortable-appearing child resting with mother; cries with movement but consoles when left leg is still.\nHEENT: Lips mildly dry; no oral lesions.\nCV: Tachycardic with regular rhythm; no murmur. Peripheral pulses 2+. Capillary refill approximately 3 seconds.\nResp: Clear to auscultation bilaterally; no retractions or increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held flexed. Marked pain with passive range of motion and with palpation over the proximal femur. No overlying erythema or visible swelling. Refuses to bear weight.\nNeuro: Awake and appropriately responsive to mother; moves all extremities except for pain-limited movement of the left leg.\nSkin: Warm; no rash or focal skin lesion.\n\nAdmission data reviewed: WBC 11.8 K/uL, CRP 3.2 mg/L, blood culture pending, left hip radiograph without acute abnormality.\n\nA — Assessment\nPreviously healthy 3-year-old admitted with fever and refusal to bear weight, initially managed as possible transient synovitis. Persistent high fever, worsening pain, continued inability to bear weight, tachycardia, and delayed capillary refill are no longer consistent with an uncomplicated course. Osteomyelitis and septic arthritis are now higher on the differential. He also has poor oral intake with early dehydration.\n\nP — Plan\n- Obtain CBC with differential, CRP, CMP, and procalcitonin.\n- Obtain MRI of the left hip/femur with contrast.\n- Consult Orthopedic Surgery.\n- Keep NPO pending imaging and operative recommendations.\n- Continue scheduled ibuprofen and PRN acetaminophen.\n- Continue maintenance IV fluids and strict intake/output monitoring.\n- Follow the admission blood culture.\n- Perform serial examinations and reassess perfusion, pain, and ability to bear weight.",
          "Physician"
        ],
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "MRI left femur/hip with contrast",
          "Completed 10:15",
          "Completed",
          "Imaging"
        ],
        [
          "Orthopedic Surgery consult",
          "Completed 13:40",
          "Completed",
          "Consult"
        ],
        [
          "CBC, CRP, CMP, Procalcitonin",
          "Resulted",
          "Completed",
          "Lab"
        ]
      ],
      "mar": [
        [
          "08:00",
          "Ibuprofen",
          "132 mg PO",
          "Given",
          "Scheduled"
        ],
        [
          "11:20",
          "Acetaminophen",
          "198 mg PO",
          "Given",
          "Fever/pain"
        ],
        [
          "13:15",
          "Oxycodone",
          "1.3 mg PO",
          "Given",
          "Severe pain; pain improved from 8/10 to 5/10"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "17.8 K/uL",
            "High"
          ],
          [
            "Hemoglobin",
            "11.2 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "33.5 %",
            ""
          ],
          [
            "Platelets",
            "372 K/uL",
            ""
          ],
          [
            "Neutrophils",
            "78 %",
            "High"
          ],
          [
            "Bands",
            "8 %",
            "High"
          ],
          [
            "Absolute neutrophils",
            "15.3 K/uL",
            "High"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "87 mg/L",
            "High"
          ],
          [
            "Procalcitonin",
            "1.4 ng/mL",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "145 mmol/L",
            "High-normal"
          ],
          [
            "Potassium",
            "4.0 mmol/L",
            ""
          ],
          [
            "Chloride",
            "111 mmol/L",
            "High"
          ],
          [
            "CO₂",
            "20 mmol/L",
            "Low"
          ],
          [
            "BUN",
            "22 mg/dL",
            "High"
          ],
          [
            "Creatinine",
            "0.34 mg/dL",
            ""
          ],
          [
            "Glucose",
            "91 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.2 mg/dL",
            ""
          ],
          [
            "Albumin",
            "3.3 g/dL",
            "Low"
          ]
        ],
        "Microbiology": [
          [
            "Blood culture — 07/03 16:18",
            "Gram-positive cocci in clusters",
            "Critical 12:47"
          ],
          [
            "Staphylococcus aureus",
            "Detected",
            "Detected 13:32"
          ],
          [
            "mecA/C",
            "Not detected",
            "13:32"
          ],
          [
            "Staphylococcus epidermidis",
            "Not detected",
            ""
          ],
          [
            "Staphylococcus lugdunensis",
            "Not detected",
            ""
          ],
          [
            "Streptococcus species",
            "Not detected",
            ""
          ],
          [
            "Streptococcus agalactiae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pneumoniae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pyogenes",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecalis",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecium",
            "Not detected",
            ""
          ],
          [
            "Listeria monocytogenes",
            "Not detected",
            ""
          ],
          [
            "Acinetobacter calcoaceticus-baumannii complex",
            "Not detected",
            ""
          ],
          [
            "Bacteroides fragilis",
            "Not detected",
            ""
          ],
          [
            "Enterobacterales",
            "Not detected",
            ""
          ],
          [
            "Enterobacter cloacae complex",
            "Not detected",
            ""
          ],
          [
            "Escherichia coli",
            "Not detected",
            ""
          ],
          [
            "Klebsiella aerogenes",
            "Not detected",
            ""
          ],
          [
            "Klebsiella oxytoca",
            "Not detected",
            ""
          ],
          [
            "Klebsiella pneumoniae group",
            "Not detected",
            ""
          ],
          [
            "Proteus species",
            "Not detected",
            ""
          ],
          [
            "Salmonella species",
            "Not detected",
            ""
          ],
          [
            "Serratia marcescens",
            "Not detected",
            ""
          ],
          [
            "Haemophilus influenzae",
            "Not detected",
            ""
          ],
          [
            "Neisseria meningitidis",
            "Not detected",
            ""
          ],
          [
            "Pseudomonas aeruginosa",
            "Not detected",
            ""
          ],
          [
            "Stenotrophomonas maltophilia",
            "Not detected",
            ""
          ],
          [
            "Candida albicans",
            "Not detected",
            ""
          ],
          [
            "Candida auris",
            "Not detected",
            ""
          ],
          [
            "Candida glabrata",
            "Not detected",
            ""
          ],
          [
            "Candida krusei",
            "Not detected",
            ""
          ],
          [
            "Candida parapsilosis",
            "Not detected",
            ""
          ],
          [
            "Candida tropicalis",
            "Not detected",
            ""
          ],
          [
            "Cryptococcus neoformans/gattii",
            "Not detected",
            ""
          ]
        ]
      },
      "imaging": [
        [
          "MRI left femur/hip with contrast",
          "Marrow edema and enhancement involving the left proximal femoral metaphysis, consistent with osteomyelitis. Small adjacent subperiosteal fluid collection. No hip joint effusion or septic arthritis. No drainable abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "08:00",
          "10:30",
          "12:00",
          "13:50"
        ],
        "rows": [
          [
            "Temperature",
            "39.1",
            "38.7",
            "39.0",
            "38.8"
          ],
          [
            "Heart Rate",
            "149",
            "138",
            "146",
            "142"
          ],
          [
            "Respiratory Rate",
            "28",
            "26",
            "28",
            "28"
          ],
          [
            "Blood Pressure",
            "92/54",
            "90/52",
            "91/53",
            "91/53"
          ],
          [
            "SpO₂",
            "99",
            "99",
            "98",
            "98"
          ],
          [
            "Pain",
            "7",
            "8",
            "8",
            "5"
          ],
          [
            "Cap refill",
            "2 sec",
            "2 sec",
            "2 sec",
            "2 sec"
          ],
          [
            "Pulses",
            "2+",
            "2+",
            "2+",
            "2+"
          ],
          [
            "PO intake",
            "Refused breakfast",
            "Sips",
            "Sips",
            "Poor"
          ],
          [
            "Urine output",
            "0.9 mL/kg/hr",
            "0.8 mL/kg/hr",
            "0.8 mL/kg/hr",
            "0.8 mL/kg/hr"
          ],
          [
            "Activity",
            "Lying quietly",
            "Cries with movement",
            "Resting",
            "More comfortable after oxycodone"
          ]
        ]
      },
      "messages": [
        [
          "Microbiology",
          "12:47",
          "Critical result: admission blood culture is positive with gram-positive cocci in clusters.",
          "MICRO"
        ],
        [
          "Microbiology",
          "13:32",
          "Blood Culture ID PCR: Staphylococcus aureus detected; mecA/C not detected.",
          "MICRO"
        ],
        [
          "Orthopedic Surgery",
          "13:42",
          "No operative intervention today. Regular diet now, NPO at midnight, and we will re-evaluate in the morning.",
          "ORT"
        ]
      ],
      "facilitator": [
        "Phase 3 focus: residents use MRI, PCR, the local antibiogram, clinical pathway, and national guidance to create a treatment plan.",
        "Expected plan: cefazolin using the verified weight, maintenance IV fluids, calling ID after presenting an informed plan and continued Ortho involvement, multimodal pain control, regular diet until NPO at midnight, and monitoring of clinical response/CRP."
      ],
      "aha": "The most reliable treatment plan comes from integrating the patient’s data with trusted institutional and national resources.",
      "authenticQuestion": "What evidence-based treatment plan should you present to the attending?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ],
          [
            "07/04 11:00",
            87
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ],
          [
            "07/04 11:00",
            17.8
          ]
        ]
      },
      "diet": "Regular diet; NPO at midnight",
      "resources": [
        {
          "title": "ACH 2025 Antibiogram",
          "description": "Local Staphylococcus aureus susceptibility data.",
          "url": "2025_ACH_Antibiogram.pdf",
          "type": "Local PDF"
        },
        {
          "title": "PIDS/IDSA Pediatric Acute Hematogenous Osteomyelitis Guideline",
          "description": "National guidance for antimicrobial selection and monitoring.",
          "url": "PIDS-IDSA_Osteomyelitis_Guideline.pdf",
          "type": "Guideline PDF"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference",
          "url": "redbook_staph_reference.html"
        },
        {
          "type": "Clinical Pathway",
          "title": "Osteomyelitis Evaluation & Management Flowchart",
          "description": "A concise learner-facing pathway synthesized for this simulation.",
          "url": "osteomyelitis_pathway.html"
        },
        {
          "type": "Antibiotic Guidance",
          "title": "Empiric and Targeted Antibiotic Decision Aid",
          "description": "Use organism data, resistance markers, local susceptibility, and illness severity to select therapy.",
          "url": "antibiotic_guidance.html"
        }
      ],
      "resultTimes": [
        "07/03 16:00",
        "07/04 09:45",
        "07/04 13:32"
      ],
      "resultHistory": {
        "07/03 16:00": {
          "CBC": {
            "WBC": "11.8 K/uL",
            "RBC": "4.52 M/uL",
            "Hemoglobin": "11.7 g/dL",
            "Hematocrit": "34.8 %",
            "MCV": "77 fL",
            "MCH": "25.9 pg",
            "MCHC": "33.6 g/dL",
            "RDW": "13.2 %",
            "Platelets": "348 K/uL",
            "MPV": "8.9 fL"
          },
          "Inflammatory markers": {
            "CRP": "3.2 mg/L"
          },
          "Chemistry": {
            "Sodium": "138 mmol/L",
            "Potassium": "4.1 mmol/L",
            "Chloride": "104 mmol/L",
            "CO₂": "23 mmol/L",
            "BUN": "10 mg/dL",
            "Creatinine": "0.32 mg/dL",
            "Glucose": "92 mg/dL",
            "Calcium": "9.6 mg/dL"
          },
          "Microbiology": {
            "Blood culture": "Pending"
          },
          "Differential": {
            "Neutrophils": "62 %",
            "Lymphocytes": "28 %",
            "Monocytes": "8 %",
            "Eosinophils": "1 %",
            "Basophils": "1 %",
            "Absolute neutrophils": "7.3 K/uL",
            "Absolute lymphocytes": "3.3 K/uL",
            "Absolute monocytes": "0.9 K/uL",
            "Absolute eosinophils": "0.1 K/uL",
            "Absolute basophils": "0.1 K/uL"
          }
        },
        "07/04 09:45": {
          "CBC": {
            "WBC": "17.8 K/uL",
            "Hemoglobin": "11.2 g/dL",
            "Hematocrit": "33.5 %",
            "Platelets": "372 K/uL",
            "Neutrophils": "78 %",
            "Bands": "8 %",
            "Absolute neutrophils": "15.3 K/uL"
          },
          "Inflammatory markers": {
            "CRP": "87 mg/L",
            "Procalcitonin": "1.4 ng/mL"
          },
          "Chemistry": {
            "Sodium": "145 mmol/L",
            "Potassium": "4.0 mmol/L",
            "Chloride": "111 mmol/L",
            "CO₂": "20 mmol/L",
            "BUN": "22 mg/dL",
            "Creatinine": "0.34 mg/dL",
            "Glucose": "91 mg/dL",
            "Calcium": "9.2 mg/dL",
            "Albumin": "3.3 g/dL"
          }
        },
        "07/04 13:32": {
          "Microbiology": {
            "Blood culture — 07/03 16:18": "Gram-positive cocci in clusters",
            "Staphylococcus aureus": "Detected",
            "mecA/C": "Not detected",
            "Staphylococcus epidermidis": "Not detected",
            "Staphylococcus lugdunensis": "Not detected",
            "Streptococcus species": "Not detected",
            "Streptococcus agalactiae": "Not detected",
            "Streptococcus pneumoniae": "Not detected",
            "Streptococcus pyogenes": "Not detected",
            "Enterococcus faecalis": "Not detected",
            "Enterococcus faecium": "Not detected",
            "Listeria monocytogenes": "Not detected",
            "Acinetobacter calcoaceticus-baumannii complex": "Not detected",
            "Bacteroides fragilis": "Not detected",
            "Enterobacterales": "Not detected",
            "Enterobacter cloacae complex": "Not detected",
            "Escherichia coli": "Not detected",
            "Klebsiella aerogenes": "Not detected",
            "Klebsiella oxytoca": "Not detected",
            "Klebsiella pneumoniae group": "Not detected",
            "Proteus species": "Not detected",
            "Salmonella species": "Not detected",
            "Serratia marcescens": "Not detected",
            "Haemophilus influenzae": "Not detected",
            "Neisseria meningitidis": "Not detected",
            "Pseudomonas aeruginosa": "Not detected",
            "Stenotrophomonas maltophilia": "Not detected",
            "Candida albicans": "Not detected",
            "Candida auris": "Not detected",
            "Candida glabrata": "Not detected",
            "Candida krusei": "Not detected",
            "Candida parapsilosis": "Not detected",
            "Candida tropicalis": "Not detected",
            "Cryptococcus neoformans/gattii": "Not detected"
          }
        }
      },
      "activeOrders": [
        [
          "Ibuprofen 130 mg PO q6h scheduled",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 195 mg PO q6h PRN fever/pain",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "Ordered 13:05",
          "Active",
          "Medication"
        ],
        [
          "Regular pediatric diet",
          "Per Orthopedics; active until midnight",
          "Active",
          "Diet"
        ],
        [
          "NPO at midnight",
          "For Orthopedic re-evaluation",
          "Active",
          "Diet"
        ],
        [
          "Vital signs q4h",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Strict Intake & Output",
          "Every 4 hours",
          "Active",
          "Monitoring"
        ],
        [
          "Serial musculoskeletal examinations",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Blood Culture (Peripheral)",
          "Collected 07/03 16:18; positive, final susceptibilities pending",
          "In process",
          "Lab"
        ],
        [
          "MRI left femur/hip with contrast",
          "Completed 10:15",
          "Completed",
          "Imaging"
        ],
        [
          "CBC, CRP, CMP, Procalcitonin",
          "Collected 09:45; resulted",
          "Completed",
          "Lab"
        ],
        [
          "Orthopedic Surgery consult",
          "Completed 13:40",
          "Completed",
          "Consult"
        ]
      ]
    },
    {
      "id": "4a",
      "label": "Phase 4A",
      "title": "Unsafe handoff",
      "time": "07/04/2026 19:00",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Night Hospital Medicine",
      "severity": "Stable",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "1",
      "status": "same",
      "learnerPrompt": "You are receiving Mason at evening handoff. Determine whether the available handoff and documentation are sufficient to safely assume responsibility overnight.",
      "vitals": {
        "Temp": "38.6 °C",
        "HR": "136",
        "RR": "26",
        "BP": "92/55",
        "SpO₂": "98% RA",
        "Pain": "4/10",
        "Updated": "07/04 18:45"
      },
      "summary": {
        "assessment": [
          "The most recent primary-team note was written at 09:30, before the major diagnostic and treatment developments of the day.",
          "The I-PASS contains only a vague one-line update and does not create a useful overnight plan."
        ],
        "problems": [
          "Outdated physician documentation",
          "Incomplete transfer of current diagnosis and treatment",
          "Medication omissions in handoff",
          "No meaningful action list or contingency plan"
        ],
        "events": [
          "MRI confirmed osteomyelitis",
          "Blood culture and rapid PCR identified Staphylococcus aureus without mecA/C",
          "Cefazolin and PRN oxycodone were started",
          "Ortho and ID completed consultations",
          "Day-team handoff remained largely unchanged from the prior night"
        ],
        "plan": [
          "Review the chart and identify what is missing from the handoff"
        ],
        "pending": [
          "Final blood culture identification and susceptibilities",
          "Overnight response to pain/fever treatment and maintenance IV fluids"
        ],
        "todo": [
          "Determine what information and overnight actions are needed before accepting responsibility"
        ],
        "meds": [
          "Ibuprofen scheduled",
          "Acetaminophen PRN"
        ]
      },
      "timeline": [
        [
          "09:30",
          "Last PHM progress note signed"
        ],
        [
          "11:05",
          "MRI finalized"
        ],
        [
          "12:47",
          "Blood culture positive"
        ],
        [
          "13:32",
          "Blood Culture ID PCR resulted"
        ],
        [
          "13:40",
          "Orthopedic consult signed"
        ],
        [
          "14:10",
          "Cefazolin started"
        ],
        [
          "19:00",
          "Evening handoff"
        ]
      ],
      "notes": [
        [
          "I-PASS Handoff",
          "Day Team",
          "07/04 18:55",
          "Stable. Patient had more workup today due to persistent fever. Ortho/ID consulted.",
          "I — Illness severity: STABLE.\n\nP — Patient summary: Three-year-old admitted with fever, left hip pain, and refusal to bear weight. Initially thought to have transient synovitis. Receiving scheduled ibuprofen and PRN acetaminophen. Blood culture pending.\n\nUpdate: Patient had more workup today due to persistent fever. Ortho/ID consulted.\n\nA — Action list: None.\n\nS — Situation awareness/contingency planning: Continue to monitor.\n\nS — Synthesis by receiver: Not documented.",
          "Handoff"
        ],
        [
          "PHM Progress Note",
          "Barnes, MD",
          "07/04 09:30",
          "Persistent fever and worsening pain; broaden evaluation for osteoarticular infection.",
          "S — Subjective\nMother reports Mason remained febrile overnight and continues to refuse to stand or bear weight. He cries with repositioning of the left leg and has had only small sips of fluid with very little breakfast. Acetaminophen temporarily improved his fever, but his pain and activity level have not returned to baseline.\n\nO — Objective\nVital signs (07/04 07:45): T 39.1°C, HR 149, RR 30, BP 90/52, SpO₂ 98% on room air. Pain 7/10.\n\nIntake/Output: Poor oral intake overnight. Urine output remains present but is decreasing.\n\nPhysical Exam\nGeneral: Tired, uncomfortable-appearing child resting with mother; cries with movement but consoles when left leg is still.\nHEENT: Lips mildly dry; no oral lesions.\nCV: Tachycardic with regular rhythm; no murmur. Peripheral pulses 2+. Capillary refill approximately 3 seconds.\nResp: Clear to auscultation bilaterally; no retractions or increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held flexed. Marked pain with passive range of motion and with palpation over the proximal femur. No overlying erythema or visible swelling. Refuses to bear weight.\nNeuro: Awake and appropriately responsive to mother; moves all extremities except for pain-limited movement of the left leg.\nSkin: Warm; no rash or focal skin lesion.\n\nAdmission data reviewed: WBC 11.8 K/uL, CRP 3.2 mg/L, blood culture pending, left hip radiograph without acute abnormality.\n\nA — Assessment\nPreviously healthy 3-year-old admitted with fever and refusal to bear weight, initially managed as possible transient synovitis. Persistent high fever, worsening pain, continued inability to bear weight, tachycardia, and delayed capillary refill are no longer consistent with an uncomplicated course. Osteomyelitis and septic arthritis are now higher on the differential. He also has poor oral intake with early dehydration.\n\nP — Plan\n- Obtain CBC with differential, CRP, CMP, and procalcitonin.\n- Obtain MRI of the left hip/femur with contrast.\n- Consult Orthopedic Surgery.\n- Keep NPO pending imaging and operative recommendations.\n- Continue scheduled ibuprofen and PRN acetaminophen.\n- Continue maintenance IV fluids and strict intake/output monitoring.\n- Follow the admission blood culture.\n- Perform serial examinations and reassess perfusion, pain, and ability to bear weight.",
          "Physician"
        ],
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 13:40",
          "No operative intervention today; regular diet, then NPO at midnight.",
          "MRI findings are consistent with left proximal femur osteomyelitis with a small subperiosteal fluid collection. No septic arthritis and no drainable abscess. No operative intervention indicated today. Allow regular diet and make NPO at midnight for Orthopedic re-evaluation tomorrow morning.",
          "Consult"
        ],
        [
          "Infectious Diseases Consult",
          "A. Patel, MD",
          "07/04 13:50",
          "Targeted beta-lactam therapy recommended.",
          "Blood Culture ID PCR detected Staphylococcus aureus with mecA/C not detected. Recommend targeted beta-lactam therapy using the verified weight. Follow final identification and susceptibilities and monitor clinical response.",
          "Consult"
        ],
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "Cefazolin 660 mg IV q8h",
          "Started 14:10",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 46 mL/hr",
          "Started 15:00",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "Ordered 13:05",
          "Active",
          "Medication"
        ],
        [
          "Regular diet",
          "Active until midnight",
          "Active",
          "Diet"
        ],
        [
          "NPO at midnight",
          "Starts 00:00",
          "Active",
          "Diet"
        ]
      ],
      "mar": [
        [
          "14:10",
          "Cefazolin",
          "660 mg IV",
          "Given",
          "First dose"
        ],
        [
          "15:00",
          "D5NS + 20 KCl",
          "46 mL/hr",
          "Started",
          "Maintenance IV fluids"
        ],
        [
          "15:20",
          "Oxycodone",
          "1.3 mg PO",
          "Given",
          "Severe pain"
        ],
        [
          "16:00",
          "Ibuprofen",
          "132 mg PO",
          "Given",
          "Scheduled"
        ],
        [
          "22:10",
          "Cefazolin",
          "660 mg IV",
          "Due",
          ""
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "17.8 K/uL",
            "High"
          ],
          [
            "Hemoglobin",
            "11.2 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "33.5 %",
            ""
          ],
          [
            "Platelets",
            "372 K/uL",
            ""
          ],
          [
            "Neutrophils",
            "78 %",
            "High"
          ],
          [
            "Bands",
            "8 %",
            "High"
          ],
          [
            "Absolute neutrophils",
            "15.3 K/uL",
            "High"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "87 mg/L",
            "High"
          ],
          [
            "Procalcitonin",
            "1.4 ng/mL",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "145 mmol/L",
            "High-normal"
          ],
          [
            "Potassium",
            "4.0 mmol/L",
            ""
          ],
          [
            "Chloride",
            "111 mmol/L",
            "High"
          ],
          [
            "CO₂",
            "20 mmol/L",
            "Low"
          ],
          [
            "BUN",
            "22 mg/dL",
            "High"
          ],
          [
            "Creatinine",
            "0.34 mg/dL",
            ""
          ],
          [
            "Glucose",
            "91 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.2 mg/dL",
            ""
          ],
          [
            "Albumin",
            "3.3 g/dL",
            "Low"
          ]
        ],
        "Microbiology": [
          [
            "Blood culture — 07/03 16:18",
            "Gram-positive cocci in clusters",
            "Critical 12:47"
          ],
          [
            "Staphylococcus aureus",
            "Detected",
            "Detected 13:32"
          ],
          [
            "mecA/C",
            "Not detected",
            "13:32"
          ],
          [
            "Staphylococcus epidermidis",
            "Not detected",
            ""
          ],
          [
            "Staphylococcus lugdunensis",
            "Not detected",
            ""
          ],
          [
            "Streptococcus species",
            "Not detected",
            ""
          ],
          [
            "Streptococcus agalactiae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pneumoniae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pyogenes",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecalis",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecium",
            "Not detected",
            ""
          ],
          [
            "Listeria monocytogenes",
            "Not detected",
            ""
          ],
          [
            "Acinetobacter calcoaceticus-baumannii complex",
            "Not detected",
            ""
          ],
          [
            "Bacteroides fragilis",
            "Not detected",
            ""
          ],
          [
            "Enterobacterales",
            "Not detected",
            ""
          ],
          [
            "Enterobacter cloacae complex",
            "Not detected",
            ""
          ],
          [
            "Escherichia coli",
            "Not detected",
            ""
          ],
          [
            "Klebsiella aerogenes",
            "Not detected",
            ""
          ],
          [
            "Klebsiella oxytoca",
            "Not detected",
            ""
          ],
          [
            "Klebsiella pneumoniae group",
            "Not detected",
            ""
          ],
          [
            "Proteus species",
            "Not detected",
            ""
          ],
          [
            "Salmonella species",
            "Not detected",
            ""
          ],
          [
            "Serratia marcescens",
            "Not detected",
            ""
          ],
          [
            "Haemophilus influenzae",
            "Not detected",
            ""
          ],
          [
            "Neisseria meningitidis",
            "Not detected",
            ""
          ],
          [
            "Pseudomonas aeruginosa",
            "Not detected",
            ""
          ],
          [
            "Stenotrophomonas maltophilia",
            "Not detected",
            ""
          ],
          [
            "Candida albicans",
            "Not detected",
            ""
          ],
          [
            "Candida auris",
            "Not detected",
            ""
          ],
          [
            "Candida glabrata",
            "Not detected",
            ""
          ],
          [
            "Candida krusei",
            "Not detected",
            ""
          ],
          [
            "Candida parapsilosis",
            "Not detected",
            ""
          ],
          [
            "Candida tropicalis",
            "Not detected",
            ""
          ],
          [
            "Cryptococcus neoformans/gattii",
            "Not detected",
            ""
          ]
        ]
      },
      "imaging": [
        [
          "MRI left femur/hip with contrast",
          "Marrow edema and enhancement involving the left proximal femoral metaphysis, consistent with osteomyelitis. Small adjacent subperiosteal fluid collection. No hip joint effusion or septic arthritis. No drainable abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "14:00",
          "15:30",
          "17:00",
          "18:45"
        ],
        "rows": [
          [
            "Temperature",
            "38.8",
            "39.0",
            "38.4",
            "38.6"
          ],
          [
            "Heart Rate",
            "142",
            "148",
            "132",
            "136"
          ],
          [
            "Respiratory Rate",
            "28",
            "28",
            "26",
            "26"
          ],
          [
            "Blood Pressure",
            "91/53",
            "90/52",
            "92/54",
            "92/55"
          ],
          [
            "SpO₂",
            "98",
            "98",
            "99",
            "98"
          ],
          [
            "Pain",
            "7",
            "7",
            "5",
            "4"
          ],
          [
            "Cap refill",
            "2 sec",
            "2 sec",
            "2 sec",
            "2 sec"
          ],
          [
            "Pulses",
            "2+",
            "2+",
            "2+",
            "2+"
          ],
          [
            "Urine output",
            "0.8 mL/kg/hr",
            "0.8 mL/kg/hr",
            "0.9 mL/kg/hr",
            "0.9 mL/kg/hr"
          ],
          [
            "IV fluids",
            "Not running",
            "Started 46 mL/hr",
            "Running",
            "Running"
          ],
          [
            "Diet",
            "Regular",
            "Regular",
            "Regular",
            "Regular"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "18:40",
          "Pain is improved after oxycodone. He is still not drinking much. MIVF are running and he has had one wet diaper since they were restarted.",
          "AR"
        ]
      ],
      "reveal": true,
      "facilitator": [
        "Learners should identify that the handoff is superficially updated but functionally unsafe: outdated 09:30 team note, vague update, missing diagnosis/results, omission of cefazolin and oxycodone, no real action list, and no if/then guidance."
      ],
      "aha": "A vague update does not transfer the information, tasks, and anticipatory guidance needed for safe overnight care.",
      "authenticQuestion": "Do you have enough information to safely assume responsibility for Mason overnight?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ],
          [
            "07/04 11:00",
            87
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ],
          [
            "07/04 11:00",
            17.8
          ]
        ]
      },
      "diet": "Regular diet; NPO at midnight",
      "resources": [
        {
          "title": "ACH 2025 Antibiogram",
          "description": "Local Staphylococcus aureus susceptibility data.",
          "url": "2025_ACH_Antibiogram.pdf",
          "type": "Local PDF"
        },
        {
          "title": "PIDS/IDSA Pediatric Acute Hematogenous Osteomyelitis Guideline",
          "description": "National guidance for antimicrobial selection and monitoring.",
          "url": "PIDS-IDSA_Osteomyelitis_Guideline.pdf",
          "type": "Guideline PDF"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference",
          "url": "redbook_staph_reference.html"
        },
        {
          "type": "Clinical Pathway",
          "title": "Osteomyelitis Evaluation & Management Flowchart",
          "description": "A concise learner-facing pathway synthesized for this simulation.",
          "url": "osteomyelitis_pathway.html"
        },
        {
          "type": "Antibiotic Guidance",
          "title": "Empiric and Targeted Antibiotic Decision Aid",
          "description": "Use organism data, resistance markers, local susceptibility, and illness severity to select therapy.",
          "url": "antibiotic_guidance.html"
        }
      ],
      "resultTimes": [
        "07/03 16:00",
        "07/04 09:45",
        "07/04 13:32"
      ],
      "resultHistory": {
        "07/03 16:00": {
          "CBC": {
            "WBC": "11.8 K/uL",
            "RBC": "4.52 M/uL",
            "Hemoglobin": "11.7 g/dL",
            "Hematocrit": "34.8 %",
            "MCV": "77 fL",
            "MCH": "25.9 pg",
            "MCHC": "33.6 g/dL",
            "RDW": "13.2 %",
            "Platelets": "348 K/uL",
            "MPV": "8.9 fL"
          },
          "Inflammatory markers": {
            "CRP": "3.2 mg/L"
          },
          "Chemistry": {
            "Sodium": "138 mmol/L",
            "Potassium": "4.1 mmol/L",
            "Chloride": "104 mmol/L",
            "CO₂": "23 mmol/L",
            "BUN": "10 mg/dL",
            "Creatinine": "0.32 mg/dL",
            "Glucose": "92 mg/dL",
            "Calcium": "9.6 mg/dL"
          },
          "Microbiology": {
            "Blood culture": "Pending"
          },
          "Differential": {
            "Neutrophils": "62 %",
            "Lymphocytes": "28 %",
            "Monocytes": "8 %",
            "Eosinophils": "1 %",
            "Basophils": "1 %",
            "Absolute neutrophils": "7.3 K/uL",
            "Absolute lymphocytes": "3.3 K/uL",
            "Absolute monocytes": "0.9 K/uL",
            "Absolute eosinophils": "0.1 K/uL",
            "Absolute basophils": "0.1 K/uL"
          }
        },
        "07/04 09:45": {
          "CBC": {
            "WBC": "17.8 K/uL",
            "Hemoglobin": "11.2 g/dL",
            "Hematocrit": "33.5 %",
            "Platelets": "372 K/uL",
            "Neutrophils": "78 %",
            "Bands": "8 %",
            "Absolute neutrophils": "15.3 K/uL"
          },
          "Inflammatory markers": {
            "CRP": "87 mg/L",
            "Procalcitonin": "1.4 ng/mL"
          },
          "Chemistry": {
            "Sodium": "145 mmol/L",
            "Potassium": "4.0 mmol/L",
            "Chloride": "111 mmol/L",
            "CO₂": "20 mmol/L",
            "BUN": "22 mg/dL",
            "Creatinine": "0.34 mg/dL",
            "Glucose": "91 mg/dL",
            "Calcium": "9.2 mg/dL",
            "Albumin": "3.3 g/dL"
          }
        },
        "07/04 13:32": {
          "Microbiology": {
            "Blood culture — 07/03 16:18": "Gram-positive cocci in clusters",
            "Staphylococcus aureus": "Detected",
            "mecA/C": "Not detected",
            "Staphylococcus epidermidis": "Not detected",
            "Staphylococcus lugdunensis": "Not detected",
            "Streptococcus species": "Not detected",
            "Streptococcus agalactiae": "Not detected",
            "Streptococcus pneumoniae": "Not detected",
            "Streptococcus pyogenes": "Not detected",
            "Enterococcus faecalis": "Not detected",
            "Enterococcus faecium": "Not detected",
            "Listeria monocytogenes": "Not detected",
            "Acinetobacter calcoaceticus-baumannii complex": "Not detected",
            "Bacteroides fragilis": "Not detected",
            "Enterobacterales": "Not detected",
            "Enterobacter cloacae complex": "Not detected",
            "Escherichia coli": "Not detected",
            "Klebsiella aerogenes": "Not detected",
            "Klebsiella oxytoca": "Not detected",
            "Klebsiella pneumoniae group": "Not detected",
            "Proteus species": "Not detected",
            "Salmonella species": "Not detected",
            "Serratia marcescens": "Not detected",
            "Haemophilus influenzae": "Not detected",
            "Neisseria meningitidis": "Not detected",
            "Pseudomonas aeruginosa": "Not detected",
            "Stenotrophomonas maltophilia": "Not detected",
            "Candida albicans": "Not detected",
            "Candida auris": "Not detected",
            "Candida glabrata": "Not detected",
            "Candida krusei": "Not detected",
            "Candida parapsilosis": "Not detected",
            "Candida tropicalis": "Not detected",
            "Cryptococcus neoformans/gattii": "Not detected"
          }
        }
      },
      "activeOrders": [
        [
          "Cefazolin 660 mg IV q8h",
          "50 mg/kg/dose using verified 13.2 kg weight",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 46 mL/hr",
          "Started 15:00",
          "Active",
          "Medication"
        ],
        [
          "Ibuprofen 130 mg PO q6h scheduled",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 195 mg PO q6h PRN fever/pain",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "Ordered 13:05",
          "Active",
          "Medication"
        ],
        [
          "Regular pediatric diet",
          "Active until midnight",
          "Active",
          "Diet"
        ],
        [
          "NPO at midnight",
          "For Orthopedic re-evaluation",
          "Active",
          "Diet"
        ],
        [
          "Vital signs q4h",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Strict Intake & Output",
          "Every 4 hours",
          "Active",
          "Monitoring"
        ],
        [
          "Serial musculoskeletal examinations",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Blood Culture (Peripheral)",
          "Final identification/susceptibilities pending",
          "In process",
          "Lab"
        ],
        [
          "Orthopedic Surgery consult",
          "Following; re-evaluate in morning",
          "Active",
          "Consult"
        ],
        [
          "Infectious Diseases consult",
          "Requested after treatment plan presented",
          "Active",
          "Consult"
        ]
      ]
    },
    {
      "id": "4b",
      "label": "Phase 4B",
      "title": "Corrected I-PASS",
      "time": "07/04/2026 19:10",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Night Hospital Medicine",
      "severity": "Watcher",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "1",
      "status": "same",
      "learnerPrompt": "Compare the corrected I-PASS and updated physician documentation with the original handoff.",
      "vitals": {
        "Temp": "38.6 °C",
        "HR": "136",
        "RR": "26",
        "BP": "92/55",
        "SpO₂": "98% RA",
        "Pain": "4/10",
        "Updated": "07/04 18:45"
      },
      "summary": {
        "assessment": [
          "MSSA bacteremia with MRI-confirmed left proximal femur osteomyelitis and a small nonoperative subperiosteal fluid collection.",
          "The corrected handoff identifies concrete overnight actions and an explicit if/then plan."
        ],
        "problems": [
          "Osteomyelitis",
          "Staphylococcus aureus bacteremia",
          "Persistent fever and pain",
          "Poor oral intake with mild oliguria"
        ],
        "events": [
          "Corrected I-PASS documented",
          "Updated physician event note filed",
          "Medication list reconciled",
          "Regular diet confirmed with NPO at midnight"
        ],
        "plan": [
          "Follow vital signs and urine output after treatment and several hours of maintenance IV fluids",
          "NPO at midnight for Orthopedic re-evaluation",
          "Use explicit contingency guidance if Mason worsens"
        ],
        "pending": [
          "Final blood culture identification and susceptibilities",
          "Response of vital signs and urine output"
        ],
        "todo": [
          "Follow up vital signs and urine output after treating pain/fever and several hours on MIVF",
          "Make NPO at midnight"
        ],
        "meds": [
          "Cefazolin 660 mg IV q8h",
          "Ibuprofen scheduled",
          "Acetaminophen PRN",
          "Oxycodone PRN",
          "D5NS + 20 KCl at 46 mL/hr"
        ]
      },
      "timeline": [
        [
          "09:30",
          "Last PHM progress note signed"
        ],
        [
          "11:05",
          "MRI finalized"
        ],
        [
          "12:47",
          "Blood culture positive"
        ],
        [
          "13:32",
          "Blood Culture ID PCR resulted"
        ],
        [
          "13:40",
          "Orthopedic consult signed"
        ],
        [
          "14:10",
          "Cefazolin started"
        ],
        [
          "19:00",
          "Evening handoff"
        ],
        [
          "19:05",
          "Corrected I-PASS documented"
        ],
        [
          "19:10",
          "Physician event note filed"
        ]
      ],
      "notes": [
        [
          "Corrected I-PASS Handoff",
          "Day Team",
          "07/04 19:05",
          "Watcher. MSSA bacteremia with MRI-confirmed osteomyelitis; concrete overnight actions and contingencies included.",
          "I — Illness severity: WATCHER.\n\nP — Patient summary: Previously healthy three-year-old with left proximal femur osteomyelitis and a small subperiosteal fluid collection without an operative indication today. Admission blood culture became positive for gram-positive cocci in clusters; rapid PCR detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started this afternoon. Orthopedics and ID are following. Pain improved after oxycodone, but he remains intermittently febrile with poor oral intake. Maintenance IV fluids are running. Regular diet this evening; NPO at midnight for Orthopedic re-evaluation.\n\nA — Action list: Follow up vital signs and urine output after treating pain/fever and after several hours on maintenance IV fluids. Make NPO at midnight.\n\nS — Situation awareness/contingency planning: If fever persists with worsening tachycardia, delayed capillary refill, decreased urine output, increasing pain, or other signs of deterioration, reassess Mason at the bedside, notify the senior resident and attending, and discuss repeat evaluation with Orthopedics and Infectious Diseases.\n\nS — Synthesis by receiver: Mason has S. aureus bacteremia with proximal femur osteomyelitis. He is receiving cefazolin, maintenance fluids, scheduled ibuprofen, and PRN acetaminophen/oxycodone. I will reassess vital signs and urine output, make him NPO at midnight, and escalate for worsening perfusion or other deterioration.",
          "Handoff"
        ],
        [
          "Physician Event Note",
          "Barnes, MD",
          "07/04 19:10",
          "Chart updated after MRI, culture PCR, and consultant recommendations.",
          "MRI today demonstrated left proximal femur osteomyelitis with a small subperiosteal fluid collection, no septic arthritis, and no drainable abscess. Admission blood culture is positive; rapid identification detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started using the verified 13.2 kg weight. Orthopedics recommends no operative intervention today, regular diet this evening, and NPO at midnight for morning re-evaluation. Infectious Diseases agrees with targeted beta-lactam therapy.\n\nMason remains intermittently febrile with poor oral intake and mild oliguria. Pain improved after PRN oxycodone. Maintenance IV fluids are running.\n\nOvernight plan: follow vital signs and urine output after fever/pain treatment and several hours of IV fluids. If worsening tachycardia, perfusion, urine output, pain, mental status, or other signs of deterioration occur, evaluate immediately and notify the senior resident/attending with Orthopedic and ID re-evaluation as indicated.",
          "Event"
        ],
        [
          "PHM Progress Note",
          "Barnes, MD",
          "07/04 09:30",
          "Persistent fever and worsening pain; broaden evaluation for osteoarticular infection.",
          "S — Subjective\nMother reports Mason remained febrile overnight and continues to refuse to stand or bear weight. He cries with repositioning of the left leg and has had only small sips of fluid with very little breakfast. Acetaminophen temporarily improved his fever, but his pain and activity level have not returned to baseline.\n\nO — Objective\nVital signs (07/04 07:45): T 39.1°C, HR 149, RR 30, BP 90/52, SpO₂ 98% on room air. Pain 7/10.\n\nIntake/Output: Poor oral intake overnight. Urine output remains present but is decreasing.\n\nPhysical Exam\nGeneral: Tired, uncomfortable-appearing child resting with mother; cries with movement but consoles when left leg is still.\nHEENT: Lips mildly dry; no oral lesions.\nCV: Tachycardic with regular rhythm; no murmur. Peripheral pulses 2+. Capillary refill approximately 3 seconds.\nResp: Clear to auscultation bilaterally; no retractions or increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held flexed. Marked pain with passive range of motion and with palpation over the proximal femur. No overlying erythema or visible swelling. Refuses to bear weight.\nNeuro: Awake and appropriately responsive to mother; moves all extremities except for pain-limited movement of the left leg.\nSkin: Warm; no rash or focal skin lesion.\n\nAdmission data reviewed: WBC 11.8 K/uL, CRP 3.2 mg/L, blood culture pending, left hip radiograph without acute abnormality.\n\nA — Assessment\nPreviously healthy 3-year-old admitted with fever and refusal to bear weight, initially managed as possible transient synovitis. Persistent high fever, worsening pain, continued inability to bear weight, tachycardia, and delayed capillary refill are no longer consistent with an uncomplicated course. Osteomyelitis and septic arthritis are now higher on the differential. He also has poor oral intake with early dehydration.\n\nP — Plan\n- Obtain CBC with differential, CRP, CMP, and procalcitonin.\n- Obtain MRI of the left hip/femur with contrast.\n- Consult Orthopedic Surgery.\n- Keep NPO pending imaging and operative recommendations.\n- Continue scheduled ibuprofen and PRN acetaminophen.\n- Continue maintenance IV fluids and strict intake/output monitoring.\n- Follow the admission blood culture.\n- Perform serial examinations and reassess perfusion, pain, and ability to bear weight.",
          "Physician"
        ],
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 13:40",
          "No operative intervention today; regular diet, then NPO at midnight.",
          "MRI findings are consistent with left proximal femur osteomyelitis with a small subperiosteal fluid collection. No septic arthritis and no drainable abscess. No operative intervention indicated today. Allow regular diet and make NPO at midnight for Orthopedic re-evaluation tomorrow morning.",
          "Consult"
        ],
        [
          "Infectious Diseases Consult",
          "A. Patel, MD",
          "07/04 13:50",
          "Targeted beta-lactam therapy recommended.",
          "Blood Culture ID PCR detected Staphylococcus aureus with mecA/C not detected. Recommend targeted beta-lactam therapy using the verified weight. Follow final identification and susceptibilities and monitor clinical response.",
          "Consult"
        ],
        [
          "I-PASS Handoff",
          "Day Team",
          "07/04 18:55",
          "Stable. Patient had more workup today due to persistent fever. Ortho/ID consulted.",
          "I — Illness severity: STABLE.\n\nP — Patient summary: Three-year-old admitted with fever, left hip pain, and refusal to bear weight. Initially thought to have transient synovitis. Receiving scheduled ibuprofen and PRN acetaminophen. Blood culture pending.\n\nUpdate: Patient had more workup today due to persistent fever. Ortho/ID consulted.\n\nA — Action list: None.\n\nS — Situation awareness/contingency planning: Continue to monitor.\n\nS — Synthesis by receiver: Not documented.",
          "Handoff"
        ],
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "Cefazolin 660 mg IV q8h",
          "Started 14:10",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 46 mL/hr",
          "Started 15:00",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "Ordered 13:05",
          "Active",
          "Medication"
        ],
        [
          "Regular diet",
          "Active until midnight",
          "Active",
          "Diet"
        ],
        [
          "NPO at midnight",
          "Starts 00:00",
          "Active",
          "Diet"
        ]
      ],
      "mar": [
        [
          "14:10",
          "Cefazolin",
          "660 mg IV",
          "Given",
          "First dose"
        ],
        [
          "15:00",
          "D5NS + 20 KCl",
          "46 mL/hr",
          "Started",
          "Maintenance IV fluids"
        ],
        [
          "15:20",
          "Oxycodone",
          "1.3 mg PO",
          "Given",
          "Severe pain"
        ],
        [
          "16:00",
          "Ibuprofen",
          "132 mg PO",
          "Given",
          "Scheduled"
        ],
        [
          "22:10",
          "Cefazolin",
          "660 mg IV",
          "Due",
          ""
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "17.8 K/uL",
            "High"
          ],
          [
            "Hemoglobin",
            "11.2 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "33.5 %",
            ""
          ],
          [
            "Platelets",
            "372 K/uL",
            ""
          ],
          [
            "Neutrophils",
            "78 %",
            "High"
          ],
          [
            "Bands",
            "8 %",
            "High"
          ],
          [
            "Absolute neutrophils",
            "15.3 K/uL",
            "High"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "87 mg/L",
            "High"
          ],
          [
            "Procalcitonin",
            "1.4 ng/mL",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "145 mmol/L",
            "High-normal"
          ],
          [
            "Potassium",
            "4.0 mmol/L",
            ""
          ],
          [
            "Chloride",
            "111 mmol/L",
            "High"
          ],
          [
            "CO₂",
            "20 mmol/L",
            "Low"
          ],
          [
            "BUN",
            "22 mg/dL",
            "High"
          ],
          [
            "Creatinine",
            "0.34 mg/dL",
            ""
          ],
          [
            "Glucose",
            "91 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.2 mg/dL",
            ""
          ],
          [
            "Albumin",
            "3.3 g/dL",
            "Low"
          ]
        ],
        "Microbiology": [
          [
            "Blood culture — 07/03 16:18",
            "Gram-positive cocci in clusters",
            "Critical 12:47"
          ],
          [
            "Staphylococcus aureus",
            "Detected",
            "Detected 13:32"
          ],
          [
            "mecA/C",
            "Not detected",
            "13:32"
          ],
          [
            "Staphylococcus epidermidis",
            "Not detected",
            ""
          ],
          [
            "Staphylococcus lugdunensis",
            "Not detected",
            ""
          ],
          [
            "Streptococcus species",
            "Not detected",
            ""
          ],
          [
            "Streptococcus agalactiae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pneumoniae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pyogenes",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecalis",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecium",
            "Not detected",
            ""
          ],
          [
            "Listeria monocytogenes",
            "Not detected",
            ""
          ],
          [
            "Acinetobacter calcoaceticus-baumannii complex",
            "Not detected",
            ""
          ],
          [
            "Bacteroides fragilis",
            "Not detected",
            ""
          ],
          [
            "Enterobacterales",
            "Not detected",
            ""
          ],
          [
            "Enterobacter cloacae complex",
            "Not detected",
            ""
          ],
          [
            "Escherichia coli",
            "Not detected",
            ""
          ],
          [
            "Klebsiella aerogenes",
            "Not detected",
            ""
          ],
          [
            "Klebsiella oxytoca",
            "Not detected",
            ""
          ],
          [
            "Klebsiella pneumoniae group",
            "Not detected",
            ""
          ],
          [
            "Proteus species",
            "Not detected",
            ""
          ],
          [
            "Salmonella species",
            "Not detected",
            ""
          ],
          [
            "Serratia marcescens",
            "Not detected",
            ""
          ],
          [
            "Haemophilus influenzae",
            "Not detected",
            ""
          ],
          [
            "Neisseria meningitidis",
            "Not detected",
            ""
          ],
          [
            "Pseudomonas aeruginosa",
            "Not detected",
            ""
          ],
          [
            "Stenotrophomonas maltophilia",
            "Not detected",
            ""
          ],
          [
            "Candida albicans",
            "Not detected",
            ""
          ],
          [
            "Candida auris",
            "Not detected",
            ""
          ],
          [
            "Candida glabrata",
            "Not detected",
            ""
          ],
          [
            "Candida krusei",
            "Not detected",
            ""
          ],
          [
            "Candida parapsilosis",
            "Not detected",
            ""
          ],
          [
            "Candida tropicalis",
            "Not detected",
            ""
          ],
          [
            "Cryptococcus neoformans/gattii",
            "Not detected",
            ""
          ]
        ]
      },
      "imaging": [
        [
          "MRI left femur/hip with contrast",
          "Marrow edema and enhancement involving the left proximal femoral metaphysis, consistent with osteomyelitis. Small adjacent subperiosteal fluid collection. No hip joint effusion or septic arthritis. No drainable abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "14:00",
          "15:30",
          "17:00",
          "18:45"
        ],
        "rows": [
          [
            "Temperature",
            "38.8",
            "39.0",
            "38.4",
            "38.6"
          ],
          [
            "Heart Rate",
            "142",
            "148",
            "132",
            "136"
          ],
          [
            "Respiratory Rate",
            "28",
            "28",
            "26",
            "26"
          ],
          [
            "Blood Pressure",
            "91/53",
            "90/52",
            "92/54",
            "92/55"
          ],
          [
            "SpO₂",
            "98",
            "98",
            "99",
            "98"
          ],
          [
            "Pain",
            "7",
            "7",
            "5",
            "4"
          ],
          [
            "Cap refill",
            "2 sec",
            "2 sec",
            "2 sec",
            "2 sec"
          ],
          [
            "Pulses",
            "2+",
            "2+",
            "2+",
            "2+"
          ],
          [
            "Urine output",
            "0.8 mL/kg/hr",
            "0.8 mL/kg/hr",
            "0.9 mL/kg/hr",
            "0.9 mL/kg/hr"
          ],
          [
            "IV fluids",
            "Not running",
            "Started 46 mL/hr",
            "Running",
            "Running"
          ],
          [
            "Diet",
            "Regular",
            "Regular",
            "Regular",
            "Regular"
          ]
        ]
      },
      "messages": [
        [
          "Ashley RN",
          "19:08",
          "Thanks — I will repeat vitals after the next fever/pain treatment and update you on urine output after a few more hours of fluids.",
          "AR"
        ]
      ],
      "facilitator": [
        "Use this reveal after learners identify the deficiencies in Phase 4A. Emphasize a concise action list made of actual overnight tasks, followed by explicit if/then guidance."
      ],
      "aha": "A safe handoff transfers a shared mental model, concrete ownership, and clear triggers for reassessment and escalation.",
      "authenticQuestion": "What makes this handoff safer and more useful to the receiving team?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ],
          [
            "07/04 11:00",
            87
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ],
          [
            "07/04 11:00",
            17.8
          ]
        ]
      },
      "diet": "Regular diet; NPO at midnight",
      "resources": [
        {
          "title": "ACH 2025 Antibiogram",
          "description": "Local Staphylococcus aureus susceptibility data.",
          "url": "2025_ACH_Antibiogram.pdf",
          "type": "Local PDF"
        },
        {
          "title": "PIDS/IDSA Pediatric Acute Hematogenous Osteomyelitis Guideline",
          "description": "National guidance for antimicrobial selection and monitoring.",
          "url": "PIDS-IDSA_Osteomyelitis_Guideline.pdf",
          "type": "Guideline PDF"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference",
          "url": "redbook_staph_reference.html"
        },
        {
          "type": "Clinical Pathway",
          "title": "Osteomyelitis Evaluation & Management Flowchart",
          "description": "A concise learner-facing pathway synthesized for this simulation.",
          "url": "osteomyelitis_pathway.html"
        },
        {
          "type": "Antibiotic Guidance",
          "title": "Empiric and Targeted Antibiotic Decision Aid",
          "description": "Use organism data, resistance markers, local susceptibility, and illness severity to select therapy.",
          "url": "antibiotic_guidance.html"
        }
      ],
      "resultTimes": [
        "07/03 16:00",
        "07/04 09:45",
        "07/04 13:32"
      ],
      "resultHistory": {
        "07/03 16:00": {
          "CBC": {
            "WBC": "11.8 K/uL",
            "RBC": "4.52 M/uL",
            "Hemoglobin": "11.7 g/dL",
            "Hematocrit": "34.8 %",
            "MCV": "77 fL",
            "MCH": "25.9 pg",
            "MCHC": "33.6 g/dL",
            "RDW": "13.2 %",
            "Platelets": "348 K/uL",
            "MPV": "8.9 fL"
          },
          "Inflammatory markers": {
            "CRP": "3.2 mg/L"
          },
          "Chemistry": {
            "Sodium": "138 mmol/L",
            "Potassium": "4.1 mmol/L",
            "Chloride": "104 mmol/L",
            "CO₂": "23 mmol/L",
            "BUN": "10 mg/dL",
            "Creatinine": "0.32 mg/dL",
            "Glucose": "92 mg/dL",
            "Calcium": "9.6 mg/dL"
          },
          "Microbiology": {
            "Blood culture": "Pending"
          },
          "Differential": {
            "Neutrophils": "62 %",
            "Lymphocytes": "28 %",
            "Monocytes": "8 %",
            "Eosinophils": "1 %",
            "Basophils": "1 %",
            "Absolute neutrophils": "7.3 K/uL",
            "Absolute lymphocytes": "3.3 K/uL",
            "Absolute monocytes": "0.9 K/uL",
            "Absolute eosinophils": "0.1 K/uL",
            "Absolute basophils": "0.1 K/uL"
          }
        },
        "07/04 09:45": {
          "CBC": {
            "WBC": "17.8 K/uL",
            "Hemoglobin": "11.2 g/dL",
            "Hematocrit": "33.5 %",
            "Platelets": "372 K/uL",
            "Neutrophils": "78 %",
            "Bands": "8 %",
            "Absolute neutrophils": "15.3 K/uL"
          },
          "Inflammatory markers": {
            "CRP": "87 mg/L",
            "Procalcitonin": "1.4 ng/mL"
          },
          "Chemistry": {
            "Sodium": "145 mmol/L",
            "Potassium": "4.0 mmol/L",
            "Chloride": "111 mmol/L",
            "CO₂": "20 mmol/L",
            "BUN": "22 mg/dL",
            "Creatinine": "0.34 mg/dL",
            "Glucose": "91 mg/dL",
            "Calcium": "9.2 mg/dL",
            "Albumin": "3.3 g/dL"
          }
        },
        "07/04 13:32": {
          "Microbiology": {
            "Blood culture — 07/03 16:18": "Gram-positive cocci in clusters",
            "Staphylococcus aureus": "Detected",
            "mecA/C": "Not detected",
            "Staphylococcus epidermidis": "Not detected",
            "Staphylococcus lugdunensis": "Not detected",
            "Streptococcus species": "Not detected",
            "Streptococcus agalactiae": "Not detected",
            "Streptococcus pneumoniae": "Not detected",
            "Streptococcus pyogenes": "Not detected",
            "Enterococcus faecalis": "Not detected",
            "Enterococcus faecium": "Not detected",
            "Listeria monocytogenes": "Not detected",
            "Acinetobacter calcoaceticus-baumannii complex": "Not detected",
            "Bacteroides fragilis": "Not detected",
            "Enterobacterales": "Not detected",
            "Enterobacter cloacae complex": "Not detected",
            "Escherichia coli": "Not detected",
            "Klebsiella aerogenes": "Not detected",
            "Klebsiella oxytoca": "Not detected",
            "Klebsiella pneumoniae group": "Not detected",
            "Proteus species": "Not detected",
            "Salmonella species": "Not detected",
            "Serratia marcescens": "Not detected",
            "Haemophilus influenzae": "Not detected",
            "Neisseria meningitidis": "Not detected",
            "Pseudomonas aeruginosa": "Not detected",
            "Stenotrophomonas maltophilia": "Not detected",
            "Candida albicans": "Not detected",
            "Candida auris": "Not detected",
            "Candida glabrata": "Not detected",
            "Candida krusei": "Not detected",
            "Candida parapsilosis": "Not detected",
            "Candida tropicalis": "Not detected",
            "Cryptococcus neoformans/gattii": "Not detected"
          }
        }
      },
      "activeOrders": [
        [
          "Cefazolin 660 mg IV q8h",
          "50 mg/kg/dose using verified 13.2 kg weight",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 46 mL/hr",
          "Started 15:00",
          "Active",
          "Medication"
        ],
        [
          "Ibuprofen 130 mg PO q6h scheduled",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 195 mg PO q6h PRN fever/pain",
          "Active",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "Ordered 13:05",
          "Active",
          "Medication"
        ],
        [
          "Regular pediatric diet",
          "Active until midnight",
          "Active",
          "Diet"
        ],
        [
          "NPO at midnight",
          "For Orthopedic re-evaluation",
          "Active",
          "Diet"
        ],
        [
          "Vital signs q4h",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Strict Intake & Output",
          "Every 4 hours",
          "Active",
          "Monitoring"
        ],
        [
          "Serial musculoskeletal examinations",
          "Active",
          "Active",
          "Monitoring"
        ],
        [
          "Blood Culture (Peripheral)",
          "Final identification/susceptibilities pending",
          "In process",
          "Lab"
        ],
        [
          "Orthopedic Surgery consult",
          "Following; re-evaluate in morning",
          "Active",
          "Consult"
        ],
        [
          "Infectious Diseases consult",
          "Requested after treatment plan presented",
          "Active",
          "Consult"
        ]
      ]
    },
    {
      "id": "5a",
      "label": "Phase 5A",
      "title": "Sepsis escalation",
      "time": "07/05/2026 03:18",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Hospital Medicine / MET",
      "severity": "Sepsis Red / MET active",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "2",
      "status": "worse",
      "learnerPrompt": "A Sepsis Red alert has triggered and the Medical Emergency Team is at the bedside. Assess Mason and initiate treatment.",
      "vitals": {
        "Temp": "39.4 °C",
        "HR": "178",
        "RR": "34",
        "BP": "92/55",
        "SpO₂": "95% on 2 L NC",
        "Pain": "7/10",
        "Updated": "07/05 03:15"
      },
      "summary": {
        "assessment": [
          "3 y.o. with MSSA bacteremia and proximal femur osteomyelitis, now with new systemic deterioration.",
          "Sepsis Red triggered for persistent fever, tachycardia, tachypnea, altered interaction, delayed capillary refill, oliguria, and new oxygen requirement.",
          "Blood pressure is trending downward but remains within an age-appropriate range."
        ],
        "problems": [
          "Sepsis with concern for evolving organ dysfunction",
          "MSSA bacteremia",
          "Proximal femur osteomyelitis",
          "New hypoxemia requiring 2 L nasal cannula",
          "Decreased urine output",
          "Altered mental status / decreased interaction"
        ],
        "events": [
          "Persistent fever despite scheduled ibuprofen and PRN acetaminophen",
          "SpO₂ fell to 90–91% on room air; improved to 95–96% on 2 L nasal cannula",
          "Capillary refill increased to 4 seconds",
          "Urine output decreased despite maintenance IV fluids",
          "Sepsis Red alert triggered; MET activated"
        ],
        "plan": [
          "Immediate bedside assessment and ABC stabilization",
          "Continue supplemental oxygen",
          "Initiate sepsis resuscitation and reassess response",
          "Broaden antimicrobial therapy while evaluating the source of deterioration",
          "Obtain laboratory evaluation for end-organ dysfunction",
          "Notify attending and discuss with PICU"
        ],
        "pending": [
          "Initial resuscitation decisions",
          "CBC, CMP, CRP, procalcitonin, lactate, VBG, and repeat blood culture",
          "Response to fluid bolus and antimicrobial escalation"
        ],
        "todo": [
          "Assess perfusion and mental status at bedside",
          "Give 20 mL/kg normal saline bolus",
          "Broaden to vancomycin plus ceftriaxone",
          "Obtain sepsis/end-organ function labs and repeat blood culture",
          "Notify attending",
          "Contact PICU and reassess after interventions"
        ],
        "meds": [
          "Cefazolin active before MET evaluation",
          "Scheduled ibuprofen",
          "PRN acetaminophen",
          "2 L/min oxygen by nasal cannula"
        ]
      },
      "timeline": [
        [
          "07/05 00:00",
          "Persistent fever despite antipyretics"
        ],
        [
          "07/05 02:30",
          "Increasing sleepiness and reduced urine output noted"
        ],
        [
          "07/05 03:08",
          "SpO₂ 90–91% on room air; 2 L NC applied"
        ],
        [
          "07/05 03:15",
          "Sepsis Red triggered; MET activated"
        ],
        [
          "07/05 03:18",
          "Primary team at bedside"
        ],
        [
          "09:30",
          "Last PHM progress note signed"
        ],
        [
          "11:05",
          "MRI finalized"
        ],
        [
          "12:47",
          "Blood culture positive"
        ],
        [
          "13:32",
          "Blood Culture ID PCR resulted"
        ],
        [
          "13:40",
          "Orthopedic consult signed"
        ],
        [
          "14:10",
          "Cefazolin started"
        ],
        [
          "19:00",
          "Evening handoff"
        ],
        [
          "19:05",
          "Corrected I-PASS documented"
        ],
        [
          "19:10",
          "Physician event note filed"
        ]
      ],
      "notes": [
        [
          "Nursing Event Note",
          "Night RN",
          "07/05 03:15",
          "Sepsis Red triggered for worsening perfusion, oxygen requirement, and decreased interaction.",
          "Mason has remained febrile despite scheduled ibuprofen and PRN acetaminophen overnight. Over the past several hours he has become increasingly sleepy, waking to voice but quickly falling back asleep. Mother states he \"just is not acting like himself\" and is less interactive than earlier today.\n\nRespiratory rate has increased with oxygen saturations of 90–91% on room air. He was placed on 2 L/min nasal cannula with improvement to 95–96%. Capillary refill is now approximately 4 seconds, and urine output has decreased despite maintenance IV fluids.\n\nPrimary team notified. Patient meets Sepsis Red criteria, and the Medical Emergency Team has been activated.",
          "Nursing"
        ],
        [
          "Corrected I-PASS Handoff",
          "Day Team",
          "07/04 19:05",
          "Watcher. MSSA bacteremia with MRI-confirmed osteomyelitis; concrete overnight actions and contingencies included.",
          "I — Illness severity: WATCHER.\n\nP — Patient summary: Previously healthy three-year-old with left proximal femur osteomyelitis and a small subperiosteal fluid collection without an operative indication today. Admission blood culture became positive for gram-positive cocci in clusters; rapid PCR detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started this afternoon. Orthopedics and ID are following. Pain improved after oxycodone, but he remains intermittently febrile with poor oral intake. Maintenance IV fluids are running. Regular diet this evening; NPO at midnight for Orthopedic re-evaluation.\n\nA — Action list: Follow up vital signs and urine output after treating pain/fever and after several hours on maintenance IV fluids. Make NPO at midnight.\n\nS — Situation awareness/contingency planning: If fever persists with worsening tachycardia, delayed capillary refill, decreased urine output, increasing pain, or other signs of deterioration, reassess Mason at the bedside, notify the senior resident and attending, and discuss repeat evaluation with Orthopedics and Infectious Diseases.\n\nS — Synthesis by receiver: Mason has S. aureus bacteremia with proximal femur osteomyelitis. He is receiving cefazolin, maintenance fluids, scheduled ibuprofen, and PRN acetaminophen/oxycodone. I will reassess vital signs and urine output, make him NPO at midnight, and escalate for worsening perfusion or other deterioration.",
          "Handoff"
        ],
        [
          "Physician Event Note",
          "Barnes, MD",
          "07/04 19:10",
          "Chart updated after MRI, culture PCR, and consultant recommendations.",
          "MRI today demonstrated left proximal femur osteomyelitis with a small subperiosteal fluid collection, no septic arthritis, and no drainable abscess. Admission blood culture is positive; rapid identification detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started using the verified 13.2 kg weight. Orthopedics recommends no operative intervention today, regular diet this evening, and NPO at midnight for morning re-evaluation. Infectious Diseases agrees with targeted beta-lactam therapy.\n\nMason remains intermittently febrile with poor oral intake and mild oliguria. Pain improved after PRN oxycodone. Maintenance IV fluids are running.\n\nOvernight plan: follow vital signs and urine output after fever/pain treatment and several hours of IV fluids. If worsening tachycardia, perfusion, urine output, pain, mental status, or other signs of deterioration occur, evaluate immediately and notify the senior resident/attending with Orthopedic and ID re-evaluation as indicated.",
          "Event"
        ],
        [
          "PHM Progress Note",
          "Barnes, MD",
          "07/04 09:30",
          "Persistent fever and worsening pain; broaden evaluation for osteoarticular infection.",
          "S — Subjective\nMother reports Mason remained febrile overnight and continues to refuse to stand or bear weight. He cries with repositioning of the left leg and has had only small sips of fluid with very little breakfast. Acetaminophen temporarily improved his fever, but his pain and activity level have not returned to baseline.\n\nO — Objective\nVital signs (07/04 07:45): T 39.1°C, HR 149, RR 30, BP 90/52, SpO₂ 98% on room air. Pain 7/10.\n\nIntake/Output: Poor oral intake overnight. Urine output remains present but is decreasing.\n\nPhysical Exam\nGeneral: Tired, uncomfortable-appearing child resting with mother; cries with movement but consoles when left leg is still.\nHEENT: Lips mildly dry; no oral lesions.\nCV: Tachycardic with regular rhythm; no murmur. Peripheral pulses 2+. Capillary refill approximately 3 seconds.\nResp: Clear to auscultation bilaterally; no retractions or increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held flexed. Marked pain with passive range of motion and with palpation over the proximal femur. No overlying erythema or visible swelling. Refuses to bear weight.\nNeuro: Awake and appropriately responsive to mother; moves all extremities except for pain-limited movement of the left leg.\nSkin: Warm; no rash or focal skin lesion.\n\nAdmission data reviewed: WBC 11.8 K/uL, CRP 3.2 mg/L, blood culture pending, left hip radiograph without acute abnormality.\n\nA — Assessment\nPreviously healthy 3-year-old admitted with fever and refusal to bear weight, initially managed as possible transient synovitis. Persistent high fever, worsening pain, continued inability to bear weight, tachycardia, and delayed capillary refill are no longer consistent with an uncomplicated course. Osteomyelitis and septic arthritis are now higher on the differential. He also has poor oral intake with early dehydration.\n\nP — Plan\n- Obtain CBC with differential, CRP, CMP, and procalcitonin.\n- Obtain MRI of the left hip/femur with contrast.\n- Consult Orthopedic Surgery.\n- Keep NPO pending imaging and operative recommendations.\n- Continue scheduled ibuprofen and PRN acetaminophen.\n- Continue maintenance IV fluids and strict intake/output monitoring.\n- Follow the admission blood culture.\n- Perform serial examinations and reassess perfusion, pain, and ability to bear weight.",
          "Physician"
        ],
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 13:40",
          "No operative intervention today; regular diet, then NPO at midnight.",
          "MRI findings are consistent with left proximal femur osteomyelitis with a small subperiosteal fluid collection. No septic arthritis and no drainable abscess. No operative intervention indicated today. Allow regular diet and make NPO at midnight for Orthopedic re-evaluation tomorrow morning.",
          "Consult"
        ],
        [
          "Infectious Diseases Consult",
          "A. Patel, MD",
          "07/04 13:50",
          "Targeted beta-lactam therapy recommended.",
          "Blood Culture ID PCR detected Staphylococcus aureus with mecA/C not detected. Recommend targeted beta-lactam therapy using the verified weight. Follow final identification and susceptibilities and monitor clinical response.",
          "Consult"
        ],
        [
          "I-PASS Handoff",
          "Day Team",
          "07/04 18:55",
          "Stable. Patient had more workup today due to persistent fever. Ortho/ID consulted.",
          "I — Illness severity: STABLE.\n\nP — Patient summary: Three-year-old admitted with fever, left hip pain, and refusal to bear weight. Initially thought to have transient synovitis. Receiving scheduled ibuprofen and PRN acetaminophen. Blood culture pending.\n\nUpdate: Patient had more workup today due to persistent fever. Ortho/ID consulted.\n\nA — Action list: None.\n\nS — Situation awareness/contingency planning: Continue to monitor.\n\nS — Synthesis by receiver: Not documented.",
          "Handoff"
        ],
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "Oxygen 2 L/min by nasal cannula",
          "Started 03:08",
          "Active",
          "Respiratory"
        ],
        [
          "Cefazolin IV",
          "Last dose given 00:15",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 45 mL/hr",
          "Infusing",
          "Active",
          "IV Fluid"
        ],
        [
          "Ibuprofen PO scheduled",
          "Given 01:10",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen PO PRN",
          "Given 02:05",
          "Active",
          "Medication"
        ]
      ],
      "mar": [
        [
          "00:15",
          "Cefazolin",
          "IV",
          "Given",
          "Scheduled dose"
        ],
        [
          "01:10",
          "Ibuprofen",
          "10 mg/kg PO",
          "Given",
          "Scheduled"
        ],
        [
          "02:05",
          "Acetaminophen",
          "15 mg/kg PO",
          "Given",
          "PRN fever"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "17.8 K/uL",
            "High"
          ],
          [
            "Hemoglobin",
            "11.2 g/dL",
            ""
          ],
          [
            "Hematocrit",
            "33.5 %",
            ""
          ],
          [
            "Platelets",
            "372 K/uL",
            ""
          ],
          [
            "Neutrophils",
            "78 %",
            "High"
          ],
          [
            "Bands",
            "8 %",
            "High"
          ],
          [
            "Absolute neutrophils",
            "15.3 K/uL",
            "High"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "87 mg/L",
            "High"
          ],
          [
            "Procalcitonin",
            "1.4 ng/mL",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "145 mmol/L",
            "High-normal"
          ],
          [
            "Potassium",
            "4.0 mmol/L",
            ""
          ],
          [
            "Chloride",
            "111 mmol/L",
            "High"
          ],
          [
            "CO₂",
            "20 mmol/L",
            "Low"
          ],
          [
            "BUN",
            "22 mg/dL",
            "High"
          ],
          [
            "Creatinine",
            "0.34 mg/dL",
            ""
          ],
          [
            "Glucose",
            "91 mg/dL",
            ""
          ],
          [
            "Calcium",
            "9.2 mg/dL",
            ""
          ],
          [
            "Albumin",
            "3.3 g/dL",
            "Low"
          ]
        ],
        "Microbiology": [
          [
            "Blood culture — 07/03 16:18",
            "Gram-positive cocci in clusters",
            "Critical 12:47"
          ],
          [
            "Staphylococcus aureus",
            "Detected",
            "Detected 13:32"
          ],
          [
            "mecA/C",
            "Not detected",
            "13:32"
          ],
          [
            "Staphylococcus epidermidis",
            "Not detected",
            ""
          ],
          [
            "Staphylococcus lugdunensis",
            "Not detected",
            ""
          ],
          [
            "Streptococcus species",
            "Not detected",
            ""
          ],
          [
            "Streptococcus agalactiae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pneumoniae",
            "Not detected",
            ""
          ],
          [
            "Streptococcus pyogenes",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecalis",
            "Not detected",
            ""
          ],
          [
            "Enterococcus faecium",
            "Not detected",
            ""
          ],
          [
            "Listeria monocytogenes",
            "Not detected",
            ""
          ],
          [
            "Acinetobacter calcoaceticus-baumannii complex",
            "Not detected",
            ""
          ],
          [
            "Bacteroides fragilis",
            "Not detected",
            ""
          ],
          [
            "Enterobacterales",
            "Not detected",
            ""
          ],
          [
            "Enterobacter cloacae complex",
            "Not detected",
            ""
          ],
          [
            "Escherichia coli",
            "Not detected",
            ""
          ],
          [
            "Klebsiella aerogenes",
            "Not detected",
            ""
          ],
          [
            "Klebsiella oxytoca",
            "Not detected",
            ""
          ],
          [
            "Klebsiella pneumoniae group",
            "Not detected",
            ""
          ],
          [
            "Proteus species",
            "Not detected",
            ""
          ],
          [
            "Salmonella species",
            "Not detected",
            ""
          ],
          [
            "Serratia marcescens",
            "Not detected",
            ""
          ],
          [
            "Haemophilus influenzae",
            "Not detected",
            ""
          ],
          [
            "Neisseria meningitidis",
            "Not detected",
            ""
          ],
          [
            "Pseudomonas aeruginosa",
            "Not detected",
            ""
          ],
          [
            "Stenotrophomonas maltophilia",
            "Not detected",
            ""
          ],
          [
            "Candida albicans",
            "Not detected",
            ""
          ],
          [
            "Candida auris",
            "Not detected",
            ""
          ],
          [
            "Candida glabrata",
            "Not detected",
            ""
          ],
          [
            "Candida krusei",
            "Not detected",
            ""
          ],
          [
            "Candida parapsilosis",
            "Not detected",
            ""
          ],
          [
            "Candida tropicalis",
            "Not detected",
            ""
          ],
          [
            "Cryptococcus neoformans/gattii",
            "Not detected",
            ""
          ]
        ]
      },
      "imaging": [
        [
          "MRI left femur/hip with contrast",
          "Marrow edema and enhancement involving the left proximal femoral metaphysis, consistent with osteomyelitis. Small adjacent subperiosteal fluid collection. No hip joint effusion or septic arthritis. No drainable abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "00:00",
          "01:30",
          "02:30",
          "03:08",
          "03:15"
        ],
        "rows": [
          [
            "Temperature",
            "38.6",
            "39.0",
            "39.2",
            "39.4",
            "39.4"
          ],
          [
            "Heart Rate",
            "132",
            "145",
            "160",
            "171",
            "178"
          ],
          [
            "Respiratory Rate",
            "24",
            "26",
            "30",
            "34",
            "34"
          ],
          [
            "Blood Pressure",
            "101/63",
            "98/60",
            "96/58",
            "94/56",
            "92/55"
          ],
          [
            "SpO₂",
            "98 RA",
            "97 RA",
            "94 RA",
            "90–91 RA",
            "95–96 on 2 L NC"
          ],
          [
            "Oxygen",
            "Room air",
            "Room air",
            "Room air",
            "2 L NC",
            "2 L NC"
          ],
          [
            "Pain",
            "5",
            "6",
            "6",
            "7",
            "7"
          ],
          [
            "Cap refill",
            "2 sec",
            "2–3 sec",
            "3 sec",
            "4 sec",
            "4 sec"
          ],
          [
            "Mental status",
            "Interactive",
            "Tired",
            "Sleepy",
            "Wakes to voice",
            "Wakes to voice"
          ],
          [
            "Urine output",
            "0.8 mL/kg/hr",
            "0.7 mL/kg/hr",
            "0.5 mL/kg/hr",
            "0.4 mL/kg/hr",
            "0.4 mL/kg/hr"
          ],
          [
            "PEWS",
            "2",
            "3",
            "4",
            "6",
            "6"
          ]
        ]
      },
      "messages": [
        [
          "Night RN",
          "03:16",
          "Sepsis Red triggered. MET at bedside. Please evaluate patient immediately.",
          "RN"
        ],
        [
          "Ashley RN",
          "19:08",
          "Thanks — I will repeat vitals after the next fever/pain treatment and update you on urine output after a few more hours of fluids.",
          "AR"
        ]
      ],
      "facilitator": [
        "Phase 5A focus: early recognition and initial escalation from sepsis before frank hypotension.",
        "Learners should integrate trends rather than wait for a single catastrophic vital sign.",
        "Expected priorities: bedside assessment, oxygen, 20 mL/kg NS bolus, vancomycin + ceftriaxone, CBC/CMP/CRP/procalcitonin/lactate/VBG/repeat blood culture, attending notification, PICU contact, and explicit reassessment plan."
      ],
      "aha": "Mason has evolving multisystem dysfunction even though his blood pressure is not frankly hypotensive.",
      "authenticQuestion": "What must happen now, before laboratory results are available?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ],
          [
            "07/04 11:00",
            87
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ],
          [
            "07/04 11:00",
            17.8
          ]
        ]
      },
      "diet": "Regular diet; NPO at midnight",
      "resources": [
        {
          "title": "ACH 2025 Antibiogram",
          "description": "Local Staphylococcus aureus susceptibility data.",
          "url": "2025_ACH_Antibiogram.pdf",
          "type": "Local PDF"
        },
        {
          "title": "PIDS/IDSA Pediatric Acute Hematogenous Osteomyelitis Guideline",
          "description": "National guidance for antimicrobial selection and monitoring.",
          "url": "PIDS-IDSA_Osteomyelitis_Guideline.pdf",
          "type": "Guideline PDF"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference",
          "url": "redbook_staph_reference.html"
        },
        {
          "type": "Clinical Pathway",
          "title": "Osteomyelitis Evaluation & Management Flowchart",
          "description": "A concise learner-facing pathway synthesized for this simulation.",
          "url": "osteomyelitis_pathway.html"
        },
        {
          "type": "Antibiotic Guidance",
          "title": "Empiric and Targeted Antibiotic Decision Aid",
          "description": "Use organism data, resistance markers, local susceptibility, and illness severity to select therapy.",
          "url": "antibiotic_guidance.html"
        }
      ],
      "resultTimes": [
        "07/03 16:00",
        "07/04 09:45",
        "07/04 13:32"
      ],
      "resultHistory": {
        "07/03 16:00": {
          "CBC": {
            "WBC": "11.8 K/uL",
            "RBC": "4.52 M/uL",
            "Hemoglobin": "11.7 g/dL",
            "Hematocrit": "34.8 %",
            "MCV": "77 fL",
            "MCH": "25.9 pg",
            "MCHC": "33.6 g/dL",
            "RDW": "13.2 %",
            "Platelets": "348 K/uL",
            "MPV": "8.9 fL"
          },
          "Inflammatory markers": {
            "CRP": "3.2 mg/L"
          },
          "Chemistry": {
            "Sodium": "138 mmol/L",
            "Potassium": "4.1 mmol/L",
            "Chloride": "104 mmol/L",
            "CO₂": "23 mmol/L",
            "BUN": "10 mg/dL",
            "Creatinine": "0.32 mg/dL",
            "Glucose": "92 mg/dL",
            "Calcium": "9.6 mg/dL"
          },
          "Microbiology": {
            "Blood culture": "Pending"
          },
          "Differential": {
            "Neutrophils": "62 %",
            "Lymphocytes": "28 %",
            "Monocytes": "8 %",
            "Eosinophils": "1 %",
            "Basophils": "1 %",
            "Absolute neutrophils": "7.3 K/uL",
            "Absolute lymphocytes": "3.3 K/uL",
            "Absolute monocytes": "0.9 K/uL",
            "Absolute eosinophils": "0.1 K/uL",
            "Absolute basophils": "0.1 K/uL"
          }
        },
        "07/04 09:45": {
          "CBC": {
            "WBC": "17.8 K/uL",
            "Hemoglobin": "11.2 g/dL",
            "Hematocrit": "33.5 %",
            "Platelets": "372 K/uL",
            "Neutrophils": "78 %",
            "Bands": "8 %",
            "Absolute neutrophils": "15.3 K/uL"
          },
          "Inflammatory markers": {
            "CRP": "87 mg/L",
            "Procalcitonin": "1.4 ng/mL"
          },
          "Chemistry": {
            "Sodium": "145 mmol/L",
            "Potassium": "4.0 mmol/L",
            "Chloride": "111 mmol/L",
            "CO₂": "20 mmol/L",
            "BUN": "22 mg/dL",
            "Creatinine": "0.34 mg/dL",
            "Glucose": "91 mg/dL",
            "Calcium": "9.2 mg/dL",
            "Albumin": "3.3 g/dL"
          }
        },
        "07/04 13:32": {
          "Microbiology": {
            "Blood culture — 07/03 16:18": "Gram-positive cocci in clusters",
            "Staphylococcus aureus": "Detected",
            "mecA/C": "Not detected",
            "Staphylococcus epidermidis": "Not detected",
            "Staphylococcus lugdunensis": "Not detected",
            "Streptococcus species": "Not detected",
            "Streptococcus agalactiae": "Not detected",
            "Streptococcus pneumoniae": "Not detected",
            "Streptococcus pyogenes": "Not detected",
            "Enterococcus faecalis": "Not detected",
            "Enterococcus faecium": "Not detected",
            "Listeria monocytogenes": "Not detected",
            "Acinetobacter calcoaceticus-baumannii complex": "Not detected",
            "Bacteroides fragilis": "Not detected",
            "Enterobacterales": "Not detected",
            "Enterobacter cloacae complex": "Not detected",
            "Escherichia coli": "Not detected",
            "Klebsiella aerogenes": "Not detected",
            "Klebsiella oxytoca": "Not detected",
            "Klebsiella pneumoniae group": "Not detected",
            "Proteus species": "Not detected",
            "Salmonella species": "Not detected",
            "Serratia marcescens": "Not detected",
            "Haemophilus influenzae": "Not detected",
            "Neisseria meningitidis": "Not detected",
            "Pseudomonas aeruginosa": "Not detected",
            "Stenotrophomonas maltophilia": "Not detected",
            "Candida albicans": "Not detected",
            "Candida auris": "Not detected",
            "Candida glabrata": "Not detected",
            "Candida krusei": "Not detected",
            "Candida parapsilosis": "Not detected",
            "Candida tropicalis": "Not detected",
            "Cryptococcus neoformans/gattii": "Not detected"
          }
        }
      },
      "activeOrders": [
        [
          "Oxygen 2 L/min by nasal cannula",
          "Started 03:08",
          "Active",
          "Respiratory"
        ],
        [
          "Continuous pulse oximetry",
          "Started 03:08",
          "Active",
          "Monitoring"
        ],
        [
          "Cefazolin IV",
          "Last dose given 00:15",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 45 mL/hr",
          "Infusing",
          "Active",
          "IV Fluid"
        ],
        [
          "Ibuprofen 10 mg/kg PO scheduled",
          "Given 01:10",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 15 mg/kg PO q6h PRN",
          "Given 02:05",
          "Active",
          "Medication"
        ],
        [
          "Oxycodone PO PRN severe pain",
          "Available",
          "Active",
          "Medication"
        ],
        [
          "Regular diet; NPO after midnight",
          "NPO in effect",
          "Active",
          "Diet"
        ],
        [
          "Strict intake and output",
          "Ongoing",
          "Active",
          "Nursing"
        ],
        [
          "Vital signs q4h and PRN deterioration",
          "Ongoing",
          "Active",
          "Monitoring"
        ],
        [
          "Orthopedic Surgery consult",
          "Following",
          "Active",
          "Consult"
        ],
        [
          "Infectious Diseases consult",
          "Following",
          "Active",
          "Consult"
        ]
      ]
    },
    {
      "id": "5b",
      "label": "Phase 5B",
      "title": "Post-resuscitation reassessment",
      "time": "07/05/2026 04:20",
      "location": "5D-4",
      "room": "5D-4",
      "team": "Hospital Medicine / MET",
      "severity": "Persistent sepsis / PICU transfer",
      "weight": "13.2 kg",
      "weightDetail": "29 lb 2 oz",
      "hospitalDay": "2",
      "status": "worse",
      "learnerPrompt": "The bolus and broadened antibiotics have been given. Reassess Mason using the updated examination, trends, and resulted labs.",
      "vitals": {
        "Temp": "39.0 °C",
        "HR": "155",
        "RR": "30",
        "BP": "94/57",
        "SpO₂": "96% on 2 L NC",
        "Pain": "6/10",
        "Updated": "07/05 04:15"
      },
      "summary": {
        "assessment": [
          "Sepsis with evolving end-organ dysfunction in a child with MSSA bacteremia and proximal femur osteomyelitis.",
          "Only partial improvement after 20 mL/kg NS bolus, supplemental oxygen, and escalation to vancomycin plus ceftriaxone.",
          "Persistent perfusion abnormalities, oxygen requirement, oliguria, altered interaction, metabolic acidosis, and elevated lactate warrant transfer to PICU."
        ],
        "problems": [
          "Sepsis with organ dysfunction",
          "Persistent abnormal perfusion after initial fluid resuscitation",
          "Lactic acidosis",
          "Early acute kidney injury / oliguria",
          "New oxygen requirement",
          "MSSA bacteremia and osteomyelitis"
        ],
        "events": [
          "20 mL/kg NS bolus completed",
          "Vancomycin and ceftriaxone initiated; cefazolin discontinued",
          "Sepsis labs and repeat blood culture obtained",
          "Attending evaluated at bedside",
          "PICU consulted and transfer accepted"
        ],
        "plan": [
          "Transfer to PICU for ongoing resuscitation and continuous monitoring",
          "Continue 2 L nasal cannula and titrate to oxygenation/work of breathing",
          "Continue vancomycin plus ceftriaxone pending repeat cultures and multidisciplinary reassessment",
          "Strict intake/output and serial perfusion examinations",
          "Repeat lactate and chemistry as clinically indicated",
          "Continue Orthopedic and Infectious Diseases involvement; reassess source control"
        ],
        "pending": [
          "Repeat blood culture",
          "Response to continued resuscitation",
          "Repeat lactate and renal function",
          "PICU bed transfer"
        ],
        "todo": [
          "Complete bedside handoff to PICU",
          "Continue frequent reassessment during transfer",
          "Communicate updated condition and treatment to family",
          "Reassess need for source control with Orthopedics"
        ],
        "meds": [
          "Vancomycin IV",
          "Ceftriaxone IV",
          "Normal saline bolus completed",
          "2 L/min oxygen by nasal cannula"
        ]
      },
      "timeline": [
        [
          "07/05 03:20",
          "20 mL/kg NS bolus started"
        ],
        [
          "07/05 03:24",
          "Sepsis labs and repeat blood culture collected"
        ],
        [
          "07/05 03:30",
          "Vancomycin and ceftriaxone initiated"
        ],
        [
          "07/05 03:50",
          "NS bolus completed"
        ],
        [
          "07/05 04:05",
          "Post-bolus reassessment: partial response"
        ],
        [
          "07/05 04:18",
          "PICU transfer accepted"
        ],
        [
          "07/05 00:00",
          "Persistent fever despite antipyretics"
        ],
        [
          "07/05 02:30",
          "Increasing sleepiness and reduced urine output noted"
        ],
        [
          "07/05 03:08",
          "SpO₂ 90–91% on room air; 2 L NC applied"
        ],
        [
          "07/05 03:15",
          "Sepsis Red triggered; MET activated"
        ],
        [
          "07/05 03:18",
          "Primary team at bedside"
        ],
        [
          "09:30",
          "Last PHM progress note signed"
        ],
        [
          "11:05",
          "MRI finalized"
        ],
        [
          "12:47",
          "Blood culture positive"
        ],
        [
          "13:32",
          "Blood Culture ID PCR resulted"
        ],
        [
          "13:40",
          "Orthopedic consult signed"
        ],
        [
          "14:10",
          "Cefazolin started"
        ],
        [
          "19:00",
          "Evening handoff"
        ],
        [
          "19:05",
          "Corrected I-PASS documented"
        ],
        [
          "19:10",
          "Physician event note filed"
        ]
      ],
      "notes": [
        [
          "Attending Significant Event Addendum",
          "Barnes, MD",
          "07/05 04:18",
          "Persistent organ dysfunction and incomplete response to initial resuscitation require PICU transfer.",
          "I evaluated Mason during the MET response and again after the initial 20 mL/kg normal saline bolus. He has shown modest improvement in heart rate and capillary refill but remains less interactive than baseline, tachypneic with a new oxygen requirement, and oliguric. Laboratory evaluation demonstrates lactic and metabolic acidosis with early renal dysfunction.\n\nAgree with broadening antimicrobial therapy to vancomycin plus ceftriaxone while repeat cultures are pending. Given persistent abnormal perfusion and evolving end-organ dysfunction despite initial resuscitation, he requires transfer to the PICU for continuous monitoring and further management. Orthopedics and Infectious Diseases should be updated and source control reconsidered as the clinical course evolves.",
          "Physician"
        ],
        [
          "Resident Significant Event Note",
          "PHM Resident",
          "07/05 04:12",
          "Sepsis Red response completed; only partial improvement after initial resuscitation.",
          "Sepsis Red / MET evaluation performed at bedside for persistent fever, tachycardia, tachypnea, new oxygen requirement, delayed capillary refill, decreased urine output, and decreased interaction.\n\nOn assessment, Mason awakened to voice but was less interactive than baseline. Breath sounds were clear with tachypnea and no focal crackles. Extremities were warm with weak peripheral pulses and capillary refill approximately 4 seconds. Blood pressure remained age appropriate but had trended downward from prior values.\n\nInterventions: Continued 2 L/min nasal cannula. Administered 20 mL/kg normal saline bolus. Cefazolin discontinued and antimicrobial therapy broadened to vancomycin plus ceftriaxone. CBC, CMP, CRP, procalcitonin, lactate, VBG, and repeat peripheral blood culture obtained. Attending notified and evaluated at bedside. PICU contacted.\n\nReassessment after bolus: HR improved from 178 to 155, capillary refill approximately 3 seconds, and Mason is slightly more alert but not back to baseline. He remains tachypneic, requires 2 L NC, and has had no additional urine output. Labs demonstrate elevated lactate, metabolic acidosis, and increased creatinine. Plan for PICU transfer for ongoing resuscitation and monitoring.",
          "Physician"
        ],
        [
          "Nursing Event Note",
          "Night RN",
          "07/05 03:15",
          "Sepsis Red triggered for worsening perfusion, oxygen requirement, and decreased interaction.",
          "Mason has remained febrile despite scheduled ibuprofen and PRN acetaminophen overnight. Over the past several hours he has become increasingly sleepy, waking to voice but quickly falling back asleep. Mother states he \"just is not acting like himself\" and is less interactive than earlier today.\n\nRespiratory rate has increased with oxygen saturations of 90–91% on room air. He was placed on 2 L/min nasal cannula with improvement to 95–96%. Capillary refill is now approximately 4 seconds, and urine output has decreased despite maintenance IV fluids.\n\nPrimary team notified. Patient meets Sepsis Red criteria, and the Medical Emergency Team has been activated.",
          "Nursing"
        ],
        [
          "Corrected I-PASS Handoff",
          "Day Team",
          "07/04 19:05",
          "Watcher. MSSA bacteremia with MRI-confirmed osteomyelitis; concrete overnight actions and contingencies included.",
          "I — Illness severity: WATCHER.\n\nP — Patient summary: Previously healthy three-year-old with left proximal femur osteomyelitis and a small subperiosteal fluid collection without an operative indication today. Admission blood culture became positive for gram-positive cocci in clusters; rapid PCR detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started this afternoon. Orthopedics and ID are following. Pain improved after oxycodone, but he remains intermittently febrile with poor oral intake. Maintenance IV fluids are running. Regular diet this evening; NPO at midnight for Orthopedic re-evaluation.\n\nA — Action list: Follow up vital signs and urine output after treating pain/fever and after several hours on maintenance IV fluids. Make NPO at midnight.\n\nS — Situation awareness/contingency planning: If fever persists with worsening tachycardia, delayed capillary refill, decreased urine output, increasing pain, or other signs of deterioration, reassess Mason at the bedside, notify the senior resident and attending, and discuss repeat evaluation with Orthopedics and Infectious Diseases.\n\nS — Synthesis by receiver: Mason has S. aureus bacteremia with proximal femur osteomyelitis. He is receiving cefazolin, maintenance fluids, scheduled ibuprofen, and PRN acetaminophen/oxycodone. I will reassess vital signs and urine output, make him NPO at midnight, and escalate for worsening perfusion or other deterioration.",
          "Handoff"
        ],
        [
          "Physician Event Note",
          "Barnes, MD",
          "07/04 19:10",
          "Chart updated after MRI, culture PCR, and consultant recommendations.",
          "MRI today demonstrated left proximal femur osteomyelitis with a small subperiosteal fluid collection, no septic arthritis, and no drainable abscess. Admission blood culture is positive; rapid identification detected Staphylococcus aureus with mecA/C not detected. Cefazolin was started using the verified 13.2 kg weight. Orthopedics recommends no operative intervention today, regular diet this evening, and NPO at midnight for morning re-evaluation. Infectious Diseases agrees with targeted beta-lactam therapy.\n\nMason remains intermittently febrile with poor oral intake and mild oliguria. Pain improved after PRN oxycodone. Maintenance IV fluids are running.\n\nOvernight plan: follow vital signs and urine output after fever/pain treatment and several hours of IV fluids. If worsening tachycardia, perfusion, urine output, pain, mental status, or other signs of deterioration occur, evaluate immediately and notify the senior resident/attending with Orthopedic and ID re-evaluation as indicated.",
          "Event"
        ],
        [
          "PHM Progress Note",
          "Barnes, MD",
          "07/04 09:30",
          "Persistent fever and worsening pain; broaden evaluation for osteoarticular infection.",
          "S — Subjective\nMother reports Mason remained febrile overnight and continues to refuse to stand or bear weight. He cries with repositioning of the left leg and has had only small sips of fluid with very little breakfast. Acetaminophen temporarily improved his fever, but his pain and activity level have not returned to baseline.\n\nO — Objective\nVital signs (07/04 07:45): T 39.1°C, HR 149, RR 30, BP 90/52, SpO₂ 98% on room air. Pain 7/10.\n\nIntake/Output: Poor oral intake overnight. Urine output remains present but is decreasing.\n\nPhysical Exam\nGeneral: Tired, uncomfortable-appearing child resting with mother; cries with movement but consoles when left leg is still.\nHEENT: Lips mildly dry; no oral lesions.\nCV: Tachycardic with regular rhythm; no murmur. Peripheral pulses 2+. Capillary refill approximately 3 seconds.\nResp: Clear to auscultation bilaterally; no retractions or increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held flexed. Marked pain with passive range of motion and with palpation over the proximal femur. No overlying erythema or visible swelling. Refuses to bear weight.\nNeuro: Awake and appropriately responsive to mother; moves all extremities except for pain-limited movement of the left leg.\nSkin: Warm; no rash or focal skin lesion.\n\nAdmission data reviewed: WBC 11.8 K/uL, CRP 3.2 mg/L, blood culture pending, left hip radiograph without acute abnormality.\n\nA — Assessment\nPreviously healthy 3-year-old admitted with fever and refusal to bear weight, initially managed as possible transient synovitis. Persistent high fever, worsening pain, continued inability to bear weight, tachycardia, and delayed capillary refill are no longer consistent with an uncomplicated course. Osteomyelitis and septic arthritis are now higher on the differential. He also has poor oral intake with early dehydration.\n\nP — Plan\n- Obtain CBC with differential, CRP, CMP, and procalcitonin.\n- Obtain MRI of the left hip/femur with contrast.\n- Consult Orthopedic Surgery.\n- Keep NPO pending imaging and operative recommendations.\n- Continue scheduled ibuprofen and PRN acetaminophen.\n- Continue maintenance IV fluids and strict intake/output monitoring.\n- Follow the admission blood culture.\n- Perform serial examinations and reassess perfusion, pain, and ability to bear weight.",
          "Physician"
        ],
        [
          "Orthopedic Surgery Consult",
          "J. Kim, MD",
          "07/04 13:40",
          "No operative intervention today; regular diet, then NPO at midnight.",
          "MRI findings are consistent with left proximal femur osteomyelitis with a small subperiosteal fluid collection. No septic arthritis and no drainable abscess. No operative intervention indicated today. Allow regular diet and make NPO at midnight for Orthopedic re-evaluation tomorrow morning.",
          "Consult"
        ],
        [
          "Infectious Diseases Consult",
          "A. Patel, MD",
          "07/04 13:50",
          "Targeted beta-lactam therapy recommended.",
          "Blood Culture ID PCR detected Staphylococcus aureus with mecA/C not detected. Recommend targeted beta-lactam therapy using the verified weight. Follow final identification and susceptibilities and monitor clinical response.",
          "Consult"
        ],
        [
          "I-PASS Handoff",
          "Day Team",
          "07/04 18:55",
          "Stable. Patient had more workup today due to persistent fever. Ortho/ID consulted.",
          "I — Illness severity: STABLE.\n\nP — Patient summary: Three-year-old admitted with fever, left hip pain, and refusal to bear weight. Initially thought to have transient synovitis. Receiving scheduled ibuprofen and PRN acetaminophen. Blood culture pending.\n\nUpdate: Patient had more workup today due to persistent fever. Ortho/ID consulted.\n\nA — Action list: None.\n\nS — Situation awareness/contingency planning: Continue to monitor.\n\nS — Synthesis by receiver: Not documented.",
          "Handoff"
        ],
        [
          "Night Shift Nursing Summary",
          "Night RN",
          "07/04 06:48",
          "Febrile overnight with persistent pain and limited movement.",
          "Shift Summary\n\nFebrile overnight to 39.1°C. Received scheduled ibuprofen and one PRN dose of acetaminophen for persistent fever with temporary improvement. Continues to refuse to bear weight on the left leg and cries with repositioning.\n\nSlept intermittently overnight, awakening several times due to pain. Taking only small sips of water and refused most dinner. Breakfast tray remains untouched this morning. Urine output adequate overnight.\n\nMother remains at bedside and reports Mason is \"not acting like himself\" and seems less playful than usual. Continues to appear uncomfortable with movement and has not demonstrated improvement in willingness to ambulate.",
          "Nursing"
        ],
        [
          "Attending Addendum to Admission H&P",
          "Barnes, MD",
          "07/03 22:15",
          "Observation admission with scheduled NSAIDs and serial exams remains appropriate.",
          "I personally evaluated Mason and discussed the case with the resident team. He presents with fever, refusal to bear weight, and a reassuring initial evaluation. Transient synovitis remains the leading diagnosis, though early osteoarticular infection cannot be excluded.\n\nGiven his persistent symptoms and inability to ambulate, observation admission with scheduled NSAIDs and serial examinations is appropriate. Blood culture has been obtained. Will continue to monitor his clinical course and reassess if symptoms fail to improve or additional findings emerge.\n\nThe ED weight discrepancy was identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "Pediatric Inpatient Nursing Shift Summary",
          "Day RN",
          "07/03 18:45",
          "Admitted from ED. Comfortable at rest but still refuses to bear weight.",
          "Shift Summary\n\nReceived Mason from the Emergency Department this afternoon. Mother remains at bedside and actively involved in care. Admission assessment completed.\n\nFebrile on arrival to the floor but more comfortable after scheduled ibuprofen. Continues to refuse to bear weight on the left leg and cries with attempts to stand. Pain appears well controlled while resting but increases with movement.\n\nTaking small amounts of fluids and ate a few bites of applesauce with encouragement. Voided once since arrival to the floor. Peripheral IV remains patent and infusing maintenance IV fluids without difficulty.\n\nMother updated on the plan for overnight observation, scheduled NSAIDs, and serial examinations. No additional concerns at end of shift.",
          "Nursing"
        ],
        [
          "Admission H&P",
          "Resident Team",
          "07/03 18:10",
          "Admit for observation, serial exams, scheduled NSAIDs.",
          "Chief Complaint\nFever and refusal to bear weight.\n\nHPI\nMason is a previously healthy 3-year-old male admitted from the ED for fever and left hip pain with refusal to bear weight. Symptoms began yesterday with fever and increasing discomfort with movement of the left leg. No known trauma. He had URI symptoms last week. In the ED, initial evaluation included CBC, CRP, blood culture, and left hip radiograph. X-ray was reassuring. CRP was normal. He improved clinically after antipyretic with normalization of heart rate and stable perfusion.\n\nPMHx\nBirth history: Full term, no NICU stay.\nMedical history: No chronic medical conditions.\nSurgical history: None.\nDevelopment: Age-appropriate per mother.\nAllergies: NKDA.\nVaccinations: Up to date.\n\nFamily History\nNo family history of rheumatologic disease, recurrent skin/soft tissue infections, MRSA, immunodeficiency, or bleeding disorders.\n\nSocial History\nLives with mother, father, and older sibling. Attends daycare. No recent travel. No known sick contacts other than recent URI symptoms in household.\n\nPhysical Exam\nGeneral: Tired but non-toxic appearing child sitting with mother, cries with movement of left leg but calms when resting.\nHEENT: Moist mucous membranes.\nCV: Regular rate and rhythm, no murmur. Capillary refill less than 2 seconds.\nResp: Clear to auscultation bilaterally, no increased work of breathing.\nAbdomen: Soft, non-tender, non-distended.\nMSK: Left hip held slightly flexed. Cries with passive range of motion, especially internal rotation. No overlying erythema or swelling. Refuses to bear weight.\nNeuro: Alert, interactive with mother, moves all extremities spontaneously except limited left leg movement due to pain.\nSkin: No rash, bruising, or focal skin lesion.\n\nObjective Data\nCBC: WBC 11.8 K/uL, Hgb 11.7 g/dL, Platelets 348 K/uL.\nCRP: 3.2 mg/L.\nBMP: Within normal limits.\nBlood culture: Collected and pending.\nLeft hip radiograph: No acute fracture or dislocation. No osseous abnormality.\n\nAssessment\n3-year-old male with fever, left hip pain, and refusal to bear weight. Most likely transient synovitis given recent viral symptoms, stable appearance, normal CRP, and reassuring radiograph. Early osteomyelitis or septic arthritis cannot be fully excluded at this time, so will admit for observation and serial examinations.\n\nPlan\n1. Left hip pain/refusal to bear weight\n- Scheduled ibuprofen.\n- Acetaminophen PRN.\n- Serial musculoskeletal examinations.\n- Reassess ability to bear weight after pain control.\n- Consider repeat labs, MRI, and orthopedic consultation if symptoms persist or worsen.\n\n2. Fever\n- Follow fever curve.\n- Follow blood culture.\n- Defer empiric antibiotics while stable and diagnosis remains uncertain.\n\n3. Fluids/nutrition\n- Regular diet as tolerated.\n- Maintenance IV fluids if oral intake remains poor.\n\n4. Medication safety\n- ED weight discrepancy identified during admission reconciliation. Weight verified with parent report and prior growth history; corrected to 13.2 kg. Weight-based medication dosing updated.",
          "Physician"
        ],
        [
          "ED Provider Note",
          "Patel, MD",
          "07/03 16:45",
          "Fever and left hip pain since yesterday. Refusing to bear weight.",
          "Previously healthy 3-year-old male with one day of fever and left hip/leg pain with refusal to bear weight. No known trauma. Had URI symptoms last week.\n\nExam: uncomfortable with movement, cries with passive left hip range of motion, no swelling or erythema. Initially tachycardic while febrile with improvement after antipyretic. Capillary refill less than 2 seconds. Interactive with mother between exams.\n\nAssessment: Differential includes transient synovitis, early osteomyelitis, septic arthritis, and occult fracture. Given reassuring perfusion and absence of septic physiology, plan to admit for observation and serial examinations.\n\nPlan: blood culture obtained, hip radiograph, pain control, IV fluids if poor intake. Defer empiric antibiotics while clinically stable to preserve culture yield unless patient worsens or additional data suggests bacterial infection. Consider MRI if worsening pain, persistent fever, rising inflammatory markers, or inability to bear weight persists.",
          "Physician"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 16:18",
          "PIV placed. Labs and blood culture drawn.",
          "Child crying with diaper changes and movement of left leg. Mother reports he weighed about 29 pounds at pediatrician visit last week. PIV placed, labs and blood culture drawn. Ibuprofen 310 mg PO administered per order.",
          "Nursing"
        ],
        [
          "Triage Note",
          "ED Triage RN",
          "07/03 14:38",
          "Arrived via private car. Fever today. Left hip pain. Won't walk.",
          "Chief complaint: Fever and will not walk. Mother reports no trauma. Triage weight documented: 31 kg.",
          "Nursing"
        ],
        [
          "ED Nursing Note",
          "Ashley RN",
          "07/03 14:32",
          "Initial assessment completed. Placed on monitor.",
          "Patient appears uncomfortable. No visible swelling or bruising.",
          "Nursing"
        ],
        [
          "ED Attending Attestation",
          "ED Attending",
          "07/03 17:00",
          "Agree with observation plan. Antibiotics deferred while stable.",
          "I saw and examined the patient with the resident. Child is febrile and uncomfortable with hip range of motion but is perfusing well and interactive with parent between exams. Differential includes transient synovitis and early musculoskeletal infection. Blood culture has been obtained. Given current stability and diagnostic uncertainty, agree with admission for observation and serial exams. Would obtain MRI and start antibiotics if clinical status worsens or inflammatory markers rise.",
          "Physician"
        ],
        [
          "Medication Reconciliation",
          "ED Pharmacist",
          "07/03 16:40",
          "Weight-based medication review requested.",
          "Pharmacy review initiated for weight-based medications. Documented ED weight appears high for age. Recommend verifying weight before additional weight-based medication preparation.",
          "Pharmacy"
        ]
      ],
      "orders": [
        [
          "Normal saline 20 mL/kg IV bolus",
          "Completed 03:50",
          "Completed",
          "IV Fluid"
        ],
        [
          "Vancomycin IV",
          "Started 03:30",
          "Active",
          "Medication"
        ],
        [
          "Ceftriaxone IV",
          "Started 03:30",
          "Active",
          "Medication"
        ],
        [
          "Cefazolin IV",
          "Discontinued 03:25",
          "Discontinued",
          "Medication"
        ],
        [
          "CBC with differential",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "Comprehensive metabolic panel",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "CRP",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "Procalcitonin",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "Lactate",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "Venous blood gas",
          "Collected 03:24",
          "Final",
          "Lab"
        ],
        [
          "Repeat peripheral blood culture",
          "Collected 03:24",
          "In process",
          "Lab"
        ],
        [
          "Transfer to PICU",
          "Accepted 04:18",
          "In progress",
          "Transfer"
        ],
        [
          "Oxygen 2 L/min by nasal cannula",
          "Ongoing",
          "Active",
          "Respiratory"
        ]
      ],
      "mar": [
        [
          "03:20",
          "Normal saline",
          "20 mL/kg IV",
          "Completed",
          "Bolus completed 03:50"
        ],
        [
          "03:30",
          "Vancomycin",
          "IV",
          "Started",
          "Empiric broadened coverage"
        ],
        [
          "03:30",
          "Ceftriaxone",
          "IV",
          "Started",
          "Empiric broadened coverage"
        ]
      ],
      "results": {
        "CBC": [
          [
            "WBC",
            "18.6 K/uL",
            "High"
          ],
          [
            "Hemoglobin",
            "10.8 g/dL",
            "Low"
          ],
          [
            "Platelets",
            "214 K/uL",
            ""
          ],
          [
            "Neutrophils",
            "86%",
            "High"
          ],
          [
            "Bands",
            "9%",
            "High"
          ],
          [
            "Absolute neutrophils",
            "16.0 K/uL",
            "High"
          ]
        ],
        "Chemistry": [
          [
            "Sodium",
            "146 mmol/L",
            "High"
          ],
          [
            "Potassium",
            "4.3 mmol/L",
            ""
          ],
          [
            "Chloride",
            "113 mmol/L",
            "High"
          ],
          [
            "CO₂",
            "17 mmol/L",
            "Low"
          ],
          [
            "BUN",
            "25 mg/dL",
            "High"
          ],
          [
            "Creatinine",
            "0.58 mg/dL",
            "Increased from 0.32"
          ],
          [
            "Glucose",
            "108 mg/dL",
            ""
          ],
          [
            "Calcium",
            "8.4 mg/dL",
            "Low"
          ],
          [
            "Albumin",
            "2.8 g/dL",
            "Low"
          ],
          [
            "AST",
            "58 U/L",
            "High"
          ],
          [
            "ALT",
            "39 U/L",
            "Mildly high"
          ]
        ],
        "Inflammatory markers": [
          [
            "CRP",
            "146 mg/L",
            "High; prior 87"
          ],
          [
            "Procalcitonin",
            "8.4 ng/mL",
            "High"
          ]
        ],
        "Perfusion / blood gas": [
          [
            "Lactate",
            "3.4 mmol/L",
            "High"
          ],
          [
            "Venous pH",
            "7.29",
            "Low"
          ],
          [
            "pCO₂",
            "36 mmHg",
            ""
          ],
          [
            "HCO₃",
            "17 mmol/L",
            "Low"
          ],
          [
            "Base deficit",
            "-8",
            ""
          ]
        ],
        "Microbiology": [
          [
            "Repeat blood culture",
            "Collected 07/05 03:24",
            "In process"
          ],
          [
            "Prior blood culture",
            "Staphylococcus aureus; mecA/C not detected",
            "Presumptive MSSA"
          ]
        ]
      },
      "imaging": [
        [
          "MRI left femur/hip with contrast",
          "Marrow edema and enhancement involving the left proximal femoral metaphysis, consistent with osteomyelitis. Small adjacent subperiosteal fluid collection. No hip joint effusion or septic arthritis. No drainable abscess."
        ]
      ],
      "growth": [
        [
          "Today verified",
          "13.2 kg"
        ]
      ],
      "flowsheet": {
        "times": [
          "03:15",
          "03:30",
          "03:50",
          "04:05",
          "04:15"
        ],
        "rows": [
          [
            "Temperature",
            "39.4",
            "39.4",
            "39.2",
            "39.1",
            "39.0"
          ],
          [
            "Heart Rate",
            "178",
            "171",
            "163",
            "157",
            "155"
          ],
          [
            "Respiratory Rate",
            "34",
            "34",
            "32",
            "31",
            "30"
          ],
          [
            "Blood Pressure",
            "92/55",
            "93/55",
            "94/56",
            "94/57",
            "94/57"
          ],
          [
            "SpO₂",
            "95 on 2 L",
            "95 on 2 L",
            "96 on 2 L",
            "96 on 2 L",
            "96 on 2 L"
          ],
          [
            "Oxygen",
            "2 L NC",
            "2 L NC",
            "2 L NC",
            "2 L NC",
            "2 L NC"
          ],
          [
            "Pain",
            "7",
            "7",
            "6",
            "6",
            "6"
          ],
          [
            "Cap refill",
            "4 sec",
            "4 sec",
            "3–4 sec",
            "3 sec",
            "3 sec"
          ],
          [
            "Mental status",
            "Wakes to voice",
            "Sleepy",
            "Slightly more alert",
            "Less interactive than baseline",
            "Less interactive than baseline"
          ],
          [
            "Urine output",
            "0.4 mL/kg/hr",
            "No new urine",
            "No new urine",
            "No new urine",
            "0.3 mL/kg/hr"
          ],
          [
            "PEWS",
            "6",
            "6",
            "6",
            "5",
            "5"
          ]
        ]
      },
      "messages": [
        [
          "PICU Fellow",
          "04:18",
          "Accepted for transfer. PICU is ready for the patient.",
          "PICU"
        ],
        [
          "Night RN",
          "04:05",
          "HR improved somewhat after bolus, but he remains sleepy and has not had additional urine output.",
          "RN"
        ],
        [
          "Night RN",
          "03:16",
          "Sepsis Red triggered. MET at bedside. Please evaluate patient immediately.",
          "RN"
        ],
        [
          "Ashley RN",
          "19:08",
          "Thanks — I will repeat vitals after the next fever/pain treatment and update you on urine output after a few more hours of fluids.",
          "AR"
        ]
      ],
      "facilitator": [
        "Phase 5B focus: reassessment after intervention and escalation of level of care.",
        "Learners should identify incomplete response plus objective organ dysfunction, not wait for hypotension.",
        "Expected disposition: PICU transfer for ongoing resuscitation, monitoring, and multidisciplinary reassessment including source control."
      ],
      "aha": "A normal-range blood pressure does not exclude pediatric septic shock or organ dysfunction.",
      "authenticQuestion": "Has Mason responded sufficiently to remain on the floor?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            3.2
          ],
          [
            "07/04 09:45",
            87
          ],
          [
            "07/05 03:24",
            146
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            11.8
          ],
          [
            "07/04 09:45",
            17.8
          ],
          [
            "07/05 03:24",
            18.6
          ]
        ],
        "Lactate": [
          [
            "07/05 03:24",
            3.4
          ]
        ],
        "Creatinine": [
          [
            "07/03 16:00",
            0.32
          ],
          [
            "07/04 09:45",
            0.34
          ],
          [
            "07/05 03:24",
            0.58
          ]
        ]
      },
      "diet": "Regular diet; NPO at midnight",
      "resources": [
        {
          "title": "ACH 2025 Antibiogram",
          "description": "Local Staphylococcus aureus susceptibility data.",
          "url": "2025_ACH_Antibiogram.pdf",
          "type": "Local PDF"
        },
        {
          "title": "PIDS/IDSA Pediatric Acute Hematogenous Osteomyelitis Guideline",
          "description": "National guidance for antimicrobial selection and monitoring.",
          "url": "PIDS-IDSA_Osteomyelitis_Guideline.pdf",
          "type": "Guideline PDF"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference",
          "url": "redbook_staph_reference.html"
        },
        {
          "type": "Clinical Pathway",
          "title": "Osteomyelitis Evaluation & Management Flowchart",
          "description": "A concise learner-facing pathway synthesized for this simulation.",
          "url": "osteomyelitis_pathway.html"
        },
        {
          "type": "Antibiotic Guidance",
          "title": "Empiric and Targeted Antibiotic Decision Aid",
          "description": "Use organism data, resistance markers, local susceptibility, and illness severity to select therapy.",
          "url": "antibiotic_guidance.html"
        }
      ],
      "resultTimes": [
        "07/03 16:00",
        "07/04 09:45",
        "07/04 13:32",
        "07/05 03:24"
      ],
      "resultHistory": {
        "07/03 16:00": {
          "CBC": {
            "WBC": "11.8 K/uL",
            "RBC": "4.52 M/uL",
            "Hemoglobin": "11.7 g/dL",
            "Hematocrit": "34.8 %",
            "MCV": "77 fL",
            "MCH": "25.9 pg",
            "MCHC": "33.6 g/dL",
            "RDW": "13.2 %",
            "Platelets": "348 K/uL",
            "MPV": "8.9 fL"
          },
          "Inflammatory markers": {
            "CRP": "3.2 mg/L"
          },
          "Chemistry": {
            "Sodium": "138 mmol/L",
            "Potassium": "4.1 mmol/L",
            "Chloride": "104 mmol/L",
            "CO₂": "23 mmol/L",
            "BUN": "10 mg/dL",
            "Creatinine": "0.32 mg/dL",
            "Glucose": "92 mg/dL",
            "Calcium": "9.6 mg/dL"
          },
          "Microbiology": {
            "Blood culture": "Pending"
          },
          "Differential": {
            "Neutrophils": "62 %",
            "Lymphocytes": "28 %",
            "Monocytes": "8 %",
            "Eosinophils": "1 %",
            "Basophils": "1 %",
            "Absolute neutrophils": "7.3 K/uL",
            "Absolute lymphocytes": "3.3 K/uL",
            "Absolute monocytes": "0.9 K/uL",
            "Absolute eosinophils": "0.1 K/uL",
            "Absolute basophils": "0.1 K/uL"
          }
        },
        "07/04 09:45": {
          "CBC": {
            "WBC": "17.8 K/uL",
            "Hemoglobin": "11.2 g/dL",
            "Hematocrit": "33.5 %",
            "Platelets": "372 K/uL",
            "Neutrophils": "78 %",
            "Bands": "8 %",
            "Absolute neutrophils": "15.3 K/uL"
          },
          "Inflammatory markers": {
            "CRP": "87 mg/L",
            "Procalcitonin": "1.4 ng/mL"
          },
          "Chemistry": {
            "Sodium": "145 mmol/L",
            "Potassium": "4.0 mmol/L",
            "Chloride": "111 mmol/L",
            "CO₂": "20 mmol/L",
            "BUN": "22 mg/dL",
            "Creatinine": "0.34 mg/dL",
            "Glucose": "91 mg/dL",
            "Calcium": "9.2 mg/dL",
            "Albumin": "3.3 g/dL"
          }
        },
        "07/04 13:32": {
          "Microbiology": {
            "Blood culture — 07/03 16:18": "Gram-positive cocci in clusters",
            "Staphylococcus aureus": "Detected",
            "mecA/C": "Not detected",
            "Staphylococcus epidermidis": "Not detected",
            "Staphylococcus lugdunensis": "Not detected",
            "Streptococcus species": "Not detected",
            "Streptococcus agalactiae": "Not detected",
            "Streptococcus pneumoniae": "Not detected",
            "Streptococcus pyogenes": "Not detected",
            "Enterococcus faecalis": "Not detected",
            "Enterococcus faecium": "Not detected",
            "Listeria monocytogenes": "Not detected",
            "Acinetobacter calcoaceticus-baumannii complex": "Not detected",
            "Bacteroides fragilis": "Not detected",
            "Enterobacterales": "Not detected",
            "Enterobacter cloacae complex": "Not detected",
            "Escherichia coli": "Not detected",
            "Klebsiella aerogenes": "Not detected",
            "Klebsiella oxytoca": "Not detected",
            "Klebsiella pneumoniae group": "Not detected",
            "Proteus species": "Not detected",
            "Salmonella species": "Not detected",
            "Serratia marcescens": "Not detected",
            "Haemophilus influenzae": "Not detected",
            "Neisseria meningitidis": "Not detected",
            "Pseudomonas aeruginosa": "Not detected",
            "Stenotrophomonas maltophilia": "Not detected",
            "Candida albicans": "Not detected",
            "Candida auris": "Not detected",
            "Candida glabrata": "Not detected",
            "Candida krusei": "Not detected",
            "Candida parapsilosis": "Not detected",
            "Candida tropicalis": "Not detected",
            "Cryptococcus neoformans/gattii": "Not detected"
          }
        },
        "07/05 03:24": {
          "CBC": {
            "WBC": "18.6 K/uL",
            "Hemoglobin": "10.8 g/dL",
            "Platelets": "214 K/uL",
            "Neutrophils": "86%",
            "Bands": "9%",
            "Absolute neutrophils": "16.0 K/uL"
          },
          "Chemistry": {
            "Sodium": "146 mmol/L",
            "Potassium": "4.3 mmol/L",
            "Chloride": "113 mmol/L",
            "CO₂": "17 mmol/L",
            "BUN": "25 mg/dL",
            "Creatinine": "0.58 mg/dL",
            "Glucose": "108 mg/dL",
            "Calcium": "8.4 mg/dL",
            "Albumin": "2.8 g/dL",
            "AST": "58 U/L",
            "ALT": "39 U/L"
          },
          "Inflammatory markers": {
            "CRP": "146 mg/L",
            "Procalcitonin": "8.4 ng/mL"
          },
          "Perfusion / blood gas": {
            "Lactate": "3.4 mmol/L",
            "Venous pH": "7.29",
            "pCO₂": "36 mmHg",
            "HCO₃": "17 mmol/L",
            "Base deficit": "-8"
          },
          "Microbiology": {
            "Repeat blood culture": "Collected 07/05 03:24 — in process",
            "Prior blood culture": "S. aureus detected; mecA/C not detected"
          }
        }
      },
      "activeOrders": [
        [
          "Oxygen 2 L/min by nasal cannula",
          "Ongoing",
          "Active",
          "Respiratory"
        ],
        [
          "Continuous pulse oximetry",
          "Ongoing",
          "Active",
          "Monitoring"
        ],
        [
          "Vancomycin IV",
          "Started 03:30",
          "Active",
          "Medication"
        ],
        [
          "Ceftriaxone IV",
          "Started 03:30",
          "Active",
          "Medication"
        ],
        [
          "D5NS + 20 mEq/L KCl at 45 mL/hr",
          "Restarted after bolus",
          "Active",
          "IV Fluid"
        ],
        [
          "Ibuprofen 10 mg/kg PO scheduled",
          "Per schedule",
          "Active",
          "Medication"
        ],
        [
          "Acetaminophen 15 mg/kg PO q6h PRN",
          "Available",
          "Active",
          "Medication"
        ],
        [
          "NPO",
          "Continued pending reassessment",
          "Active",
          "Diet"
        ],
        [
          "Strict intake and output",
          "Ongoing",
          "Active",
          "Nursing"
        ],
        [
          "Vital signs q1h pending transfer",
          "Ongoing",
          "Active",
          "Monitoring"
        ],
        [
          "Transfer to PICU",
          "Accepted 04:18; awaiting transport",
          "Active",
          "Transfer"
        ],
        [
          "Orthopedic Surgery consult",
          "Update requested",
          "Active",
          "Consult"
        ],
        [
          "Infectious Diseases consult",
          "Update requested",
          "Active",
          "Consult"
        ]
      ]
    }
  ]
};
