import React, { Component } from 'react';
import UserContext from '../../store/UserContext';
import { auth } from '../../firebase/Firebase';
import styles from './HomePage.style';
import SwipeableViews from 'react-swipeable-views';
import MySchedules from '../MySchedules/MySchedules';

import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Grid,
    Button,
    withStyles,
    IconButton,
    InputBase,
    CardContent,
    Card,
    Tabs,
    Tab
} from '@material-ui/core';

import TodayIcon from '@material-ui/icons/Today';
import SearchIcon from '@material-ui/icons/Search';
import CustomFooter from '../../components/CustomFooter/CustomFooter';

class HomePage extends Component {

    
    state = {
        activeTab: 0,
        showLoading: false,
        focused: false
    }

    showLinearProgress = (showLoading) => { this.setState({ showLoading: showLoading }); }
    
    handleChange = (_, value) => { this.setState({ activeTab: value }); } 

    handleFocus = (value) => { this.setState({focused : value }); }
    
    handleChangeIndex = index => { this.setState({ activeTab: index }); };
    
    handleLogout = () => {
        auth.doSignOut()
            .then(data => {
                // TODO : SHOW TOAST
                console.log(data);
            }).catch(err => {
                // TODO : SHOW TOAST
                console.log(err);
            })
    }

    render() {
        const { classes, theme } = this.props;

        return(
            <UserContext.Consumer>
                {(context) => {                    
                    return(
                        <div className={classes.root}>
                            <AppBar position="relative" className={classes.appbar} elevation={this.state.focused ? 2 : 0 }>
                                <Toolbar>
                                    <div className={classes.grow} />
                                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                        <TodayIcon />
                                    </IconButton>
                                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                        Scheduler
                                    </Typography>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon />
                                        </div>
                                        <InputBase
                                        placeholder="Search…"
                                        onFocus={() => this.handleFocus(true)}
                                        onBlur={() => this.handleFocus(false)}
                                        onChange={(e) => console.log('changed', e)}
                                        className={classes.inputColor}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}/>
                                    </div>
                                    <div className={classes.grow} />
                                    <Button color="primary" onClick={() => this.handleLogout(context)}>Log out</Button>
                                    <div className={classes.grow} />
                                </Toolbar>
                            </AppBar>
                            <Grid item xs={12} >
                                <Grid container direction="column">
                                    <div className={classes.growContent} />
                                    <Grid container direction="row">
                                        <div className={classes.growContent} />
                                        <Card elevation={0} className={classes.grow} >
                                            <Grid container direction="column">
                                                <CardContent>
                                                    <Tabs value={this.state.activeTab} indicatorColor="primary" fullWidth
                                                        textColor="primary" onChange={this.handleChange}>

                                                        <Tab label="Meus Calendários" />
                                                        <Tab label="Compartilhados Comigo" />
                                                        <Tab label="Alguma outra coisa" />
                                                    </Tabs>
                                                    <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                        index={this.state.activeTab} onChangeIndex={this.handleChangeIndex}>

                                                        <MySchedules showProgress={this.showLinearProgress}></MySchedules>
                                                        <MySchedules showProgress={this.showLinearProgress}></MySchedules>
                                                        <MySchedules showProgress={this.showLinearProgress}></MySchedules>
                                                    </SwipeableViews>
                                                </CardContent>
                                            </Grid>
                                        </Card>
                                        <div className={classes.growContent} />
                                    </Grid>
                                    <div className={classes.growContent} />
                                </Grid>
                            </Grid>
                            <CustomFooter />
                        </div>
                    )
                }}
            </UserContext.Consumer>
        )
    }

}

export default withStyles(styles, { withTheme: true })(HomePage);