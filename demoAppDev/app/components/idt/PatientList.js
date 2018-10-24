import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Page from "../Page";

const patientData = [
    {
        patientName: "Salyer, Darrell",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "1-A"
    },
    {
        patientName: "Dabbs, Tyrone",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "1-B"
    },
    {
        patientName: "Ratliff, Crystal",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "1-C"
    },
    {
        patientName: "Cabrera, Lily",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "2  -A"
    },
    {
        patientName: "Ward, Baxley",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "2-B"
    },
    {
        patientName: "Hood, Concetta",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "3"
    },
    {
        patientName: "Knotts, Elmer",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "4"
    },
    {
        patientName: "Robey, Vern",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "5-A"
    },
    {
        patientName: "Chau, Hugh",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "5-B"
    },
    {
        patientName: "Blackwell, Margarita",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "6"
    }
]
const idtChatData = {
    chatOne : "The choice is not clear because of conflicting medical evidence or a lack of it.",
    chatTwo : "I did find one case report of a man who developed anit-neutrophil anitbodies while on antibiotics (antibodies against one type of WBC) which then disapped when he went off antibiotics. If so, WBC should bounce back sometime between 3-30 days.",
    chatThree : "Check out this new article! https://jamanetwork.com/journals/jama/article-abstract/2678616"
}
const SalyerData = {
    Name: "Salyer, Darrell",
    Demographics: [
        {
            Room: "1-A",
            LocationUnit: "Sher-2A Cardiac Care, 1505 Greenview Avenue, Elgin, Illinois",
            Payor: "Premera",
            ID: "123456789",
            Gender: "Male",
            Age: 87,
            DateOfBirth: "March 18, 1931",
            DateOfAdmittance: "May 21, 2018",
            AttendingPhysiscian: "Jazmine Simmons",
            CareManager: "Bruno Zhao",

        }
    ],
    Medications: [
        {
            MedicationName: "Maxalt",
            MedicationNote: "5 mg tablet. 1 tablet at onset of headache. May repeat in 2 hours. 14 tab. No refill. Active."
        },
        {
            MedicationName: "Acetominophen (Tylenol)",
            MedicationNote: "325 mg oral tablet. Start at 02/26/18."
        },
        {
            MedicationName: "Fluticasone Propionate",
            MedicationNote: "50 mcg/act nasal flonase allergy relief suspension. Start 03/26/18."
        },
        {
            MedicationName: "Menthol",
            MedicationNote: "2.7 mg. Mouth/throat cough drops lozenge. Start 02/03/17."
        },
    ],
    Details: [
        { 
            Diagnosis: ["Migraine with aura, non-intractable (346.00)", "Common migraine without mention of intractable migraine (231.00)", "Unspecified ashtma, uncomplicated (j45.909)"],
            MedicalHistory: ["CAD w/ Left heart cath in 2005 showing 40% LAD, 50% small D2, 40% RCA and 30% large OM; 2006 TTE showing LVEF 60-65% with diastolic dysfunction, LVH, mild LA dilation", "DM 2, last A1c 6.7 in 9/2005", "h/o iron deficiency anemia"],
            Allergies: ["Peanuts", "Seasonal Allergies"]
        }
    ], 
    Notes: [
        {
            NoteName: "Gerardo McGuire",
            NoteDate: "May 4, 11:36 AM",
            NoteText: "Followed up with family. Able to go home safely"
        }
    ]

}

export default class PatientList extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            patients: patientData
        }
    }
    render(){
        if (this.state.redirect) {
            return <Redirect push to="/messages" />;
        } else{
            return (
                <Page className="chat-page">
                <h2 className="page-title">Patients</h2>
                <section className="idt-patient-list">
                    <div className="idt-patient-list-header">
                        <div>Diabetic patients</div>
                        <div>Room</div>
                    </div>
                    <div className="idt-patient-list-add-new">+ Add patient</div>
                    <div>
                        <div className="idt-list-header">
                            <div className="idt-list-header-name">Name</div>
                            <div className="idt-list-header-location">Location</div>
                            <div className="idt-list-header-room">Room</div>
                        </div>
                        <ul className="patient-list">
                            {this.state.patients.map((patient, index) => {
                                return (
                                    <li key={patient.patientName+index} className={`patient`}>
                                        <div className="idt-list-header-name">{patient.patientName}</div>
                                        <div className="idt-list-header-location">{patient.patientLocation}</div>
                                        <div className="idt-list-header-room">{patient.patientRoom}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>   
                </section>
                </Page>
            )
        }
             
    }
}