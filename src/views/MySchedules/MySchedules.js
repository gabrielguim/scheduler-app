import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './MySchedules.style';

class MySchedule extends Component {

    render() {
        const { classes } = this.props;

        return(
            <div>
                <h1>top</h1>
            </div>
        )
    }

}

export default withStyles(styles)(MySchedule)