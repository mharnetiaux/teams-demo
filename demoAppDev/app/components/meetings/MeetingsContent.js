import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MeetingsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            startDate: moment(),
            days : ["S","M","T","W","T","F","S"],
            meetings: [
                {
                    day: "TODAY",
                    date: "October 21",
                    schedule: [
                        {
                            title: "Contoso ICU team gathering",
                            going: "tentative",
                            time: "9:00 AM - 10:00 AM",
                            room: "Conference Rm 520",
                            meeting: true
                        },
                        {
                            title: "Monthly review",
                            going: "going",
                            time: "11:00 AM - 12:00 PM",
                            room: "Teams meeting",
                            meeting: true
                        },
                        {
                            title: "Lunch",
                            going: "busy",
                            time: "12:30 PM - 1:30 PM",
                            room: "",
                            meeting: false
                        },
                        {
                            title: "Quick catchup",
                            going: "busy",
                            time: "3:00 PM - 3:30 PM",
                            room: "",
                            meeting: false
                        }
                    ]
                },
                {
                    day: "TOMORROW",
                    date: "October 22",
                    schedule: [
                        {
                            title: "Contoso ICU team gathering",
                            going: "tentative",
                            time: "9:00 AM - 10:00 AM",
                            room: "Conference Rm 520",
                            meeting: true
                        },
                        {
                            title: "Monthly review",
                            going: "going",
                            time: "11:00 AM - 12:00 PM",
                            room: "Teams meeting",
                            meeting: true
                        },
                        {
                            title: "Lunch",
                            going: "busy",
                            time: "12:30 PM - 1:30 PM",
                            room: "",
                            meeting: false
                        },
                        {
                            title: "Quick catchup",
                            going: "busy",
                            time: "3:00 PM - 3:30 PM",
                            room: "",
                            meeting: false
                        }
                    ]
                }
            ]
        };
        this.handleChange.bind(this);
    }

    getMeetings(){
        return this.state.meetings.map((item, key)=>{
            const meetingTime = item.schedule.map((time ,key)=>{
                  return(
                      <span className="time-container" key={key}>
                          <ul className={time.going}>
                              <li className="title">{time.title}</li>
                              <li className="time">{time.time}</li>
                              <li className="room">{time.room}</li>
                          </ul>
                          <button className={time.meeting ? "going" : "not-going"}>Join</button>
                      </span>
                  )
            });

            return (
                 <section className="meeting" key={key}>
                     <ul><li>{item.day}</li><li>{item.date}</li></ul>
                     <div className="meeting-time">
                         {meetingTime}
                     </div>
                 </section>
            )
        });
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    
    render() {
        return(
            <section className="page-content">
                <span className="team-weekdays">{this.state.days.map((day, key)=>{return (<span key={key}>{day}</span>)})}</span>
                <DatePicker
                    inline
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                {this.getMeetings()}
            </section>
        );
    }
}

export default MeetingsContent;