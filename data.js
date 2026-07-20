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
      }
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
      }
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
          "Orthopedics recommends medical management today",
          "Infectious Diseases consulted"
        ],
        "plan": [
          "Use institutional and national resources to select definitive therapy",
          "Restart maintenance IV fluids for poor intake and mild dehydration",
          "Continue multimodal pain control",
          "Regular diet today; NPO at midnight for Orthopedic re-evaluation"
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
          "Persistent fever and pain; broaden evaluation for osteoarticular infection.",
          "Three-year-old admitted overnight with fever, left hip pain, and refusal to bear weight. Weight discrepancy has been corrected. Despite scheduled ibuprofen, he remains febrile and will not bear weight.\n\nAssessment: Clinical course is no longer consistent with uncomplicated transient synovitis. Osteomyelitis and septic arthritis are now higher on the differential.\n\nPlan: Obtain CBC, CRP, CMP, procalcitonin, and MRI with contrast. Consult Orthopedics. Keep NPO pending imaging and surgical recommendations. Continue scheduled ibuprofen and PRN acetaminophen. Follow admission blood culture.",
          "Physician"
        ],
        [
          "Infectious Diseases Consult",
          "A. Patel, MD",
          "07/04 13:50",
          "Use microbiology and local susceptibility data to guide targeted treatment.",
          "MRI confirms osteomyelitis. Admission blood culture is positive for Staphylococcus aureus by rapid molecular identification; mecA/C is not detected. Recommend targeted beta-lactam therapy using the verified 13.2 kg weight. Follow the final culture identification and susceptibilities. Monitor fever curve, pain, perfusion, urine output, and CRP response.",
          "Consult"
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
          "Infectious Diseases consult",
          "Completed 13:50",
          "Completed",
          "Consult"
        ],
        [
          "CBC, CRP, CMP, Procalcitonin",
          "Resulted",
          "Completed",
          "Lab"
        ],
        [
          "D5NS + 20 mEq/L KCl at 46 mL/hr",
          "Restart for poor intake",
          "Recommended",
          "Medication"
        ],
        [
          "Cefazolin 660 mg IV q8h",
          "50 mg/kg/dose using 13.2 kg",
          "Recommended",
          "Medication"
        ],
        [
          "Regular diet now; NPO at midnight",
          "Per Orthopedics",
          "Recommended",
          "Diet"
        ],
        [
          "Oxycodone 1.3 mg PO q4h PRN severe pain",
          "0.1 mg/kg/dose",
          "Recommended",
          "Medication"
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
        "Expected plan: cefazolin using the verified weight, maintenance IV fluids, ID and Ortho involvement, multimodal pain control, regular diet until NPO at midnight, and monitoring of clinical response/CRP."
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
          "title": "CHOP Bone and Joint Infection Clinical Pathway",
          "description": "Clinical pathway for evaluation and management of pediatric bone and joint infection.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-clinical-pathway",
          "type": "External resource"
        },
        {
          "title": "CHOP Bone and Joint Infection Antibiotic Recommendations",
          "description": "Empiric and targeted antibiotic recommendations.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-antibiotic-recommendations",
          "type": "External resource"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference"
        }
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
          "Persistent fever and pain; broaden evaluation for osteoarticular infection.",
          "Three-year-old admitted overnight with fever, left hip pain, and refusal to bear weight. Weight discrepancy has been corrected. Despite scheduled ibuprofen, he remains febrile and will not bear weight.\n\nAssessment: Clinical course is no longer consistent with uncomplicated transient synovitis. Osteomyelitis and septic arthritis are now higher on the differential.\n\nPlan: Obtain CBC, CRP, CMP, procalcitonin, and MRI with contrast. Consult Orthopedics. Keep NPO pending imaging and surgical recommendations. Continue scheduled ibuprofen and PRN acetaminophen. Follow admission blood culture.",
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
          "title": "CHOP Bone and Joint Infection Clinical Pathway",
          "description": "Clinical pathway for evaluation and management of pediatric bone and joint infection.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-clinical-pathway",
          "type": "External resource"
        },
        {
          "title": "CHOP Bone and Joint Infection Antibiotic Recommendations",
          "description": "Empiric and targeted antibiotic recommendations.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-antibiotic-recommendations",
          "type": "External resource"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference"
        }
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
          "Persistent fever and pain; broaden evaluation for osteoarticular infection.",
          "Three-year-old admitted overnight with fever, left hip pain, and refusal to bear weight. Weight discrepancy has been corrected. Despite scheduled ibuprofen, he remains febrile and will not bear weight.\n\nAssessment: Clinical course is no longer consistent with uncomplicated transient synovitis. Osteomyelitis and septic arthritis are now higher on the differential.\n\nPlan: Obtain CBC, CRP, CMP, procalcitonin, and MRI with contrast. Consult Orthopedics. Keep NPO pending imaging and surgical recommendations. Continue scheduled ibuprofen and PRN acetaminophen. Follow admission blood culture.",
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
          "title": "CHOP Bone and Joint Infection Clinical Pathway",
          "description": "Clinical pathway for evaluation and management of pediatric bone and joint infection.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-clinical-pathway",
          "type": "External resource"
        },
        {
          "title": "CHOP Bone and Joint Infection Antibiotic Recommendations",
          "description": "Empiric and targeted antibiotic recommendations.",
          "url": "https://www.chop.edu/clinical-pathway/bone-joint-infection-antibiotic-recommendations",
          "type": "External resource"
        },
        {
          "title": "Red Book — Invasive Staphylococcal Infections",
          "description": "Reference: serious MSSA infections should receive an antistaphylococcal beta-lactam when susceptibilities allow.",
          "type": "Reference"
        }
      ]
    },
    {
      "id": "5",
      "label": "Phase 5",
      "title": "Escalation of care",
      "time": "07/05/2026 02:10",
      "location": "5D-4 → PICU",
      "room": "5D-4",
      "team": "PHM + PICU + Ortho",
      "severity": "Critical",
      "weight": "13 kg",
      "weightDetail": "28 lb 10 oz",
      "hospitalDay": "2",
      "status": "worse",
      "learnerPrompt": "The patient is deteriorating. Review the chart quickly and lead the next steps.",
      "vitals": {
        "Temp": "40.2 °C",
        "HR": "190",
        "RR": "48",
        "SpO₂": "92% RA",
        "Pain": "—",
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
          "Activate and lead MET response",
          "Fluid resuscitation",
          "Repeat cultures and broaden antibiotics",
          "PICU transfer",
          "Urgent Ortho reassessment for source control"
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
          "Called for hypotension and altered mental status in 3yo with bacteremic osteomyelitis. On arrival: lethargic, HR 190, RR 48, BP 72/38, SpO2 92% RA, cap refill 5 seconds, weak pulses, mottled extremities. Impression: septic shock with end-organ dysfunction.",
          "Event"
        ],
        [
          "PICU Acceptance Note",
          "S. Allen, MD",
          "07/05 02:15",
          "Accept to PICU for septic shock.",
          "Accept to PICU for septic shock. Initiate sepsis bundle, fluid resuscitation, vasoactive support if inadequate response, broaden antibiotics per sepsis pathway, urgent Ortho reassessment for source control.",
          "Event"
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
            "pCO₂",
            "31 mmHg",
            ""
          ],
          [
            "HCO₃",
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
            "Temperature",
            "39.8",
            "40.0",
            "40.2",
            "40.2"
          ],
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
            "SpO₂",
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
      ],
      "aha": "The child has septic shock with end-organ dysfunction.",
      "authenticQuestion": "Does this patient require escalation of care now?",
      "resultTrends": {
        "CRP": [
          [
            "07/03 16:00",
            8.6
          ],
          [
            "07/04 07:45",
            16.4
          ],
          [
            "07/05 02:00",
            28.1
          ]
        ],
        "WBC": [
          [
            "07/03 16:00",
            13.8
          ],
          [
            "07/04 07:45",
            15.6
          ],
          [
            "07/05 02:00",
            21.4
          ]
        ],
        "Lactate": [
          [
            "07/04 21:35",
            2.1
          ],
          [
            "07/05 02:00",
            5.1
          ]
        ]
      }
    }
  ]
};
const PATIENT_PHOTO = "patient_photo.png";
