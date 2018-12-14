import React, { Component } from 'react';
import ScheduleService from '../../service/ScheduleService';
import StoreService from '../../store/StoreService';
import UserContext from '../../store/UserContext';
import SchedulerList from '../../components/ScheduleList/ScheduleList';

class MySchedules extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { _id } = StoreService.getTokenAndUID();
        const { context } = this.props;

        if (context !== undefined && _id !== 'root') {
            ScheduleService.getCalendarsForUser(_id)
                .then(response => {
                    context.updateCalendars(response.data);
                }).catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        return(
            <UserContext.Consumer>
                {context => <SchedulerList calendars={context.userCalendars} isOwner={true}></SchedulerList>}
            </UserContext.Consumer>
        )
    }

}

export default MySchedules