import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './MySchedules.style';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

class MySchedule extends Component {

    render() {
        const { classes } = this.props;

        return(
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container  spacing={16} alignItems="center"
                        direction="row"  justify="center" className={classes.gridContainer}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
                        <Grid key={value} item xs={12} md={4}>
                            <ScheduleItem></ScheduleItem>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styles)(MySchedule)