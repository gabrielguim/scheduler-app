import React from 'react';
import styles from './CustomFooter.style';
import { Toolbar, AppBar, Typography, withStyles } from '@material-ui/core';

const CustomFooter = (props) => {

    const { classes } = props;

    return(
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
                <div className={classes.grow} />
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    Scheduler
                </Typography>
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    )

}

export default withStyles(styles)(CustomFooter);
