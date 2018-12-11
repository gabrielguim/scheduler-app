import React, { Component } from 'react';

import SignUpTabPage from '../SignUpTabPage/SignUpTabPage';
import SignInTabPage from '../SignInTabPage/SignInTabPage';
import CustomLinearProgress from '../../components/CustomLinearProgress';
import SwipeableViews from 'react-swipeable-views';
import styles from './AuthPage.style';

import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Tabs, 
    Tab,
    withStyles
} from '@material-ui/core';

class AuthPage extends Component {

    state = {
        activeTab: 0,
        showLoading: false
    }

    showLinearProgress = (showLoading) => { this.setState({ showLoading: showLoading }); }
    
    handleChange = (_, value) => { this.setState({ activeTab: value }); } 
    
    handleChangeIndex = index => { this.setState({ activeTab: index }); };

    render() {
        const { classes, theme } = this.props;

        return(                  
            <div className={classes.root}>
                <AppBar className={classes.appbar} elevation={0}> 
                    <Toolbar >
                        <div className={classes.grow} />
                        <Typography variant="h6" color="inherit">
                            Scheduler
                        </Typography>
                        <div className={classes.grow} />
                    </Toolbar>
                    <CustomLinearProgress loading={this.state.showLoading} />
                </AppBar>
                <Grid item xs={12}>
                    <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
                        <Card elevation={0} className={classes.content}>
                            <CardContent>
                                <Tabs value={this.state.activeTab} indicatorColor="primary" fullWidth
                                    textColor="primary" onChange={this.handleChange}>

                                    <Tab label="Sign in" />
                                    <Tab label="Sign up" />
                                </Tabs>
                                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={this.state.activeTab} onChangeIndex={this.handleChangeIndex}>

                                    <SignInTabPage showProgress={this.showLinearProgress} />
                                    <SignUpTabPage showProgress={this.showLinearProgress} />
                                </SwipeableViews>
                            </CardContent>
                        </Card>                     
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles, { withTheme: true })(AuthPage);