import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MeetingsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            startDate: moment(),
            days : ["S","M","T","W","T","F","S"]
        };
        this.handleChange.bind(this);
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
            </section>
        );
    }
}

export default MeetingsContent;