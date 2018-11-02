import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MeetingsContent extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            startDate: moment(),
            days : ["S","M","T","W","T","F","S"],
            meetings: [
                {
                    isToday: true,
                    day: "TODAY",
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
                    isToday: false,
                    day: "TOMORROW",
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
    }

    getDate(n){
        const date = new Date(),
              months = ["January","February","March","April","May","June","July","August","September","October","November","December"],
              dayOfWeek = ["Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday"],
              m = months[date.getMonth()],
              dw = dayOfWeek[date.getDay()],
              dd = date.getDate();
        return m + " " + (dd + n);
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
                     <ul><li>{item.day}</li><li>{item.isToday ? this.getDate(0) : this.getDate(1)}</li></ul>
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
            <section className="page-content meetings-content">
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