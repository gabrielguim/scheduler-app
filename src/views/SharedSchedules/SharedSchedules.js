import React, { Component } from 'react';
import ScheduleService from '../../service/ScheduleService';
import SchedulerList from '../../components/ScheduleList/ScheduleList';

class SharedSchedules extends Component {

    state = {
        updatedCalendars: []
    }

    componentWillReceiveProps() {
        const { context } = this.props;

        ScheduleService.getSharedCalendars(context.userInfo.email)
            .then(response => {
                this.setState({
                    updatedCalendars: response.data
                })
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <SchedulerList calendars={this.state.updatedCalendars} isOwner={false}></SchedulerList>
        )
    }

}

export default SharedSchedules