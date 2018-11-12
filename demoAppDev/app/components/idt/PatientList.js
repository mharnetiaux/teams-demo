import React, { Component } from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import CloseHeader from '../../../icon/close-header.svg';
import DownCaret from '../../../icon/idt-patients-down-caret.svg';
import DownArrow from '../../../icon/idt-patients-down-arrow.svg';
import InfoIcon from '../../../icon/idt-patients-info.svg';
import PatientsListIcon from '../../../icon/patients-list-icon.svg';
import PatientsListLeftArrow from '../../../icon/patients-list-left-arrow.svg';
import PatientsListRightArrow from '../../../icon/patients-list-right-arrow.svg';
import PlusIcon from '../../../icon/plus-add-new.svg';
import DeleteIcon from '../../../icon/delete.svg';
import RightArrow from '../../../icon/right-arrow.svg';
import CollapseChevron from '../../../icon/collapse-chevron.svg';
import ExpandChevron from '../../../icon/collapse-right-chevron.svg';

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
    },
    {
        patientName: "Parker, Elva",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "7"
    },
    {
        patientName: "Browning, Kristin",
        patientLocation: "Sher 2-A Med Surg..",
        patientRoom: "8"
    }
]
const idtChatData = {
    chatOne : "The choice is not clear because of conflicting medical evidence or a lack of it.",
    chatTwo : "I did find one case report of a man who developed anit-neutrophil anitbodies while on antibiotics (antibodies against one type of WBC) which then disapped when he went off antibiotics. If so, WBC should bounce back sometime between 3-30 days.",
    chatThree : "Check out this new article! https://jamanetwork.com/journals/jama/article-abstract/2678616"
};
let SalyerData = {
    Name: "Salyer, Darrell",
    Demographics: 
        {
            "Room": "1-A",
            "Location unit": "Sher-2A Cardiac Care, 1505 Greenview Avenue, Elgin, Illinois",
            "Payor": "Premera",
            "ID": "123456789",
            "Gender": "Male",
            "Age": 87,
            "Date of birth": "March 18, 1931",
            "Date of admittance": "May 21, 2018",
            "Attending physiscian": "Jazmine Simmons",
            "Care manager": "Bruno Zhao",

        },
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
    Details: 
        { 
            "Diagnosis": ["Migraine with aura, non-intractable (346.00)", "Common migraine without mention of intractable migraine (231.00)", "Unspecified ashtma, uncomplicated (j45.909)"],
            "MedicalHistory": ["CAD w/ Left heart cath in 2005 showing 40% LAD, 50% small D2, 40% RCA and 30% large OM; 2006 TTE showing LVEF 60-65% with diastolic dysfunction, LVH, mild LA dilation", "DM 2, last A1c 6.7 in 9/2005", "h/o iron deficiency anemia"],
            "Allergies": ["Peanuts", "Seasonal Allergies"]
        },
    
    Notes: [
        {
            NoteName: "Gerardo McGuire",
            NoteDate: "May 4, 11:36 AM",
            NoteText: "Followed up with family. Able to go home safely"
        }
    ]
};


export default class PatientList extends Component{
    constructor(props){
        super(props);
        let date = new Date();
        this.state = {
            redirect: false,
            patients: patientData,
            salyerData: SalyerData,
            counter: 0,
            response: {
                message: "Monitor blood sugar and order additional CT scan of left lung in two weeks."
            },
        };
        this.redirectList = this.redirectList.bind(this);
        this.getMedications = this.getMedications.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.getPatientData = this.getPatientData.bind(this);
        this.getNotes = this.getNotes.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
        this.adjustHeight = this.adjustHeight.bind(this);
        this.addNote = this.addNote.bind(this);
        this.toggleChevron = this.toggleChevron.bind(this);
    }
    render(){
        if (this.state.redirect) {
            return (
                <section className="idt-chat">
                    <header>
                    <h2 className="header-center">Patients</h2>
                    <h1 className="header-center header-center-under">Contoso Hospital / IDT</h1>
                        <ul className="icon-container">
                            <li className="back-close"><Link to={{pathname: '/more', state: {prev: 'true'}}}><SVG
                                src={CloseHeader}/></Link></li>
                        </ul>
                    </header>
                    <section className="idt-patient-list">
                        <div className="idt-patient-list-header">
                            <SVG className="patient-list-icon" src={PatientsListIcon}/>
                            <div className="patient-list-text" >Patients list</div>
                            <SVG className="patient-list-arrow-left" src={PatientsListLeftArrow}/>
                            <SVG className="patient-list-arrow-right" src={PatientsListRightArrow}/>
                        </div>
                        <div className="idt-patient-list-name">{this.state.salyerData.Name}</div>
                        
                        <div id="demographicsID" className="idt-patient-list-clicker">
                            <div 
                                id="demographics-header" className="idt-patient-list-clicker-header open" 
                                onClick={()=> this.toggleChevron(["demographics-header","demographicsID"])}
                            >
                                <SVG className="collapseChevron" src={CollapseChevron}/>
                                <SVG className="expandChevron" src={ExpandChevron}/>
                                Demographics
                            </div>
                            {this.getPatientData()}
                        </div>
                        
                        <div id="medicationsID" className="idt-patient-list-clicker">
                            <div 
                                id="medications-header"    
                                className="idt-patient-list-clicker-header open" 
                                onClick={() => this.toggleChevron(["medications-header", "medicationsID"])}
                            >
                                <SVG className="collapseChevron" src={CollapseChevron}/>
                                <SVG className="expandChevron" src={ExpandChevron}/>
                                Medications
                            </div>
                            {this.getMedications()}
                        </div>
                        
                        <div className="idt-patient-list-clicker closed">
                            <SVG src={ExpandChevron}/>
                            Vitals
                        </div>
                        <div className="idt-patient-list-clicker open">
                            <SVG src={CollapseChevron}/>
                            Details
                        </div>
                        {this.getDetails()}
                        <div className="idt-patient-list-clicker open">
                            <SVG src={CollapseChevron}/>
                            Notes
                        </div>
                        <section className="input-message" id="input-message">
                            <form>
                                <textarea placeholder="Write a note..." id="send-message" onKeyDown={this.typeWriter}></textarea>
                            </form>
                            <div id="send-arrow" onClick={this.addNote}><SVG src={RightArrow}/></div>
                        </section>
                        {/* <div id="send-arrow"><SVG src={RightArrow}/></div> */}
                        {this.getNotes()}
                        <div className="remove-patient-tab">
                            <div className="remove-patient-tab-inner">
                                <SVG className="delete-icon" src={DeleteIcon}/>
                                <span>Remove patient</span>
                            </div>
                        </div>
                    </section>
                </section>
            )
        } else{
            return (
                <section className="idt-chat">
                    <header>
                        <h2 className="header-center">Patients</h2>
                        <h1 className="header-center header-center-under">Contoso Hospital / IDT</h1>
                        <ul className="icon-container">
                            <li className="back-close"><Link to={{pathname: '/teams', state: {prev: 'true'}}}><SVG
                                src={CloseHeader}/></Link></li>
                        </ul>
                    </header>
                    <section className="idt-patient-list">
                        <div className="idt-patient-list-header">
                            <div className="left-text">Diabetic patients</div>
                            <SVG className="down-caret" src={DownCaret}/>
                            <div className="right-text">Room</div>
                            <SVG className="down-arrow" src={DownArrow}/>
                            <SVG className="info-icon" src={InfoIcon}/>
                        </div>
                        <div className="idt-patient-list-add-new">
                            <SVG className="plus-icon" src={PlusIcon}/> 
                            Add patient
                        </div>
                        <div>
                            <div className="idt-list-header">
                                <div className="idt-list-header-name">Name</div>
                                <div className="idt-list-header-location">Location</div>
                                <div className="idt-list-header-room">Room</div>
                            </div>
                            <ul className="patient-list">
                                {this.state.patients.map((patient, index) => {
                                    return (
                                        <li key={patient.patientName+index} className={`patient`} onClick={this.redirectList}>
                                            <div className="idt-list-header-name">{patient.patientName}</div>
                                            <div className="idt-list-header-location">{patient.patientLocation}</div>
                                            <div className="idt-list-header-room">{patient.patientRoom}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>   
                    </section>
                </section>

            )
        }
    }
    redirectList() {
        this.setState((prevState) => {
            return {
                redirect: !prevState.redirect
            }
        });
    }
    getPatientData(){
        let data = [];
        for(let key in this.state.salyerData.Demographics){
            data.push(
                <div className="demographic-item">
                    <div>{key}</div>
                    <div>{this.state.salyerData.Demographics[key]}</div>
                </div>
            )
        }
        return (
            <div className="idt-patient-list-clicker-text">
                {data}
            </div>
        )
    }
    getMedications(){
        const meetingTime = this.state.salyerData.Medications.map((time)=>{
            return(
                <span className="time-container" key={time.MedicationName}>
                    <ul>
                        <li className="title">{time.MedicationName}</li>
                        <li className="time">{time.MedicationNote}</li>
                    </ul>
                </span>
            )
        });

        return (
            <div className="idt-patient-list-clicker-text">
                <section className="meeting">
                    <div className="meeting-time">
                    {meetingTime}
                    </div>
                </section>
            </div>
        )
    }
    getNotes(){
        const meetingTime = this.state.salyerData.Notes.map((time)=>{
            return(
                <span className="time-container" key={time.NoteName}>
                    <ul>
                        <li className="title">{time.NoteName}</li>
                        <li className="time">{time.NoteText}</li>
                    </ul>
                </span>
            )
        });

        return (
            <section className="meeting">
                <div className="meeting-time">
                    {meetingTime}
                </div>
            </section>
        )
    }
    getDetails(){
        let details = [];
        for(let key in this.state.salyerData.Details){
            let children = [];
            for(let value in this.state.salyerData.Details[key]){
                children.push(<li className="time">{this.state.salyerData.Details[key][value]}</li>);
            }
            details.push(
                <span className="time-container">
                    <ul>
                        <li className="title">{key}</li>
                        {children}
                    </ul>
                </span>
            )
        }
        return (
            <section className="meeting">
                <div className="meeting-time">
                    {details}
                </div>
            </section>
        )
    }
    /// Pass string to tell input what to write on keyDown() event
    typeWriter(event) {
        event.preventDefault();
        // document.getElementById("send-arrow").classList.add("send");
        if(this.state.counter < this.state.response.message.length){
            document.getElementById("send-message").value += this.state.response.message.charAt(this.state.counter);
            this.state.counter++;
            this.adjustHeight();
        }
    }
    /// Adjust height of <textarea> depending on size of content
    adjustHeight() {
        const a = document.getElementById("send-message");
        a.style.height = (a.scrollHeight > a.clientHeight) ? (a.scrollHeight - 34) + "px" : "1px";
    }
    addNote(){
        console.log("adding note");
        SalyerData.Notes.splice(
            0,0,
            {
                NoteName: "Sylvia McCarthye",
                NoteDate: "May 4, 11:36 AM",
                NoteText: "Monitor blood sugar and order additional CT scan of left lung in two weeks."
            }
        );
        this.setState({
            counter: 0,
            response: {
                message: ""
            },
            salyerData: SalyerData
        });
    }
    toggleChevron(idVar){
        document.getElementById(idVar[0]).classList.toggle('open');
        document.getElementById(idVar[0]).classList.toggle('closed');
        document.getElementById(idVar[1]).classList.toggle('closed');
    }
}