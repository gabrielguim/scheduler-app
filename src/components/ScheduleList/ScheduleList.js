import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './ScheduleList.style';
import ScheduleItem from '../ScheduleItem/ScheduleItem';

const ScheduleList = (props) => {

    const { classes, isOwner, calendars } = props;

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container  spacing={16} alignItems="center"
                    direction="row" className={classes.gridContainer}>
                    {
                        calendars.map(calendar => (
                            <Grid key={calendar._id} item xs={12} md={4}>
                                <ScheduleItem isOwner={isOwner} calendar={calendar}></ScheduleItem>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )

}

export default withStyles(styles)(ScheduleList)