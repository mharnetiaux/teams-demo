import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MeetingsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            startDate: moment()
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return(
            <section className="page-content">
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