import React from 'react';
import styles from './CustomFooter.style';
import { Toolbar, AppBar, Typography, withStyles, Button } from '@material-ui/core';

const CustomFooter = (props) => {

    const { classes, openModal } = props;

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <div className={classes.grow} />
                <Typography className={classes.grow} variant="h6" color="inherit" noWrap>
                    Scheduler
                </Typography>
                <Button variant="contained" size="small" color="primary" onClick={() => openModal()}>
                    Create schedule
                </Button>
                <div className={classes.grow} />
            </Toolbar>
        </AppBar>
    )

}

export default withStyles(styles)(CustomFooter);
