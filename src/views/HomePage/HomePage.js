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
import NewScheduleModal from '../../components/NewScheduleModal/NewScheduleModal';
import ScheduleService from '../../service/ScheduleService';
import StoreService from '../../store/StoreService';
import CustomLinearProgress from '../../components/CustomLinearProgress';
import SharedSchedules from '../SharedSchedules/SharedSchedules';

class HomePage extends Component {

    state = {
        activeTab: 0,
        showLoading: false,
        focused: false,
        openModal: false
    }

    showLinearProgress = (showLoading) => { this.setState({ showLoading: showLoading }); }
    
    handleChange = (_, value) => { this.setState({ activeTab: value }); } 

    handleFocus = (value) => { this.setState({focused : value }); }
    
    handleChangeIndex = index => { this.setState({ activeTab: index }); };
    
    handleLogout = () => {
        this.setState({ showLoading: true });
        auth.doSignOut()
            .then(data => {
                this.setState({ showLoading: false });
                console.log(data);
            }).catch(err => {
                this.setState({ showLoading: false });
                console.log(err);
            })
    }

    handleOpenModal = () => {
        this.setState({ openModal: true })
    }

    handleCloseModal = () => {
        this.setState({ openModal: false })
    }

    searchCalendar = (context, e) => {
        const { _id } = StoreService.getTokenAndUID();

        this.setState({ showLoading: true });
        if (context !== undefined && _id !== 'root') {
            ScheduleService.searchCalendar(_id, e.target.value)
                .then(response => {
                    this.setState({ showLoading: false });
                    context.updateCalendars(response.data);
                }).catch(err => {
                    this.setState({ showLoading: false });
                    console.log(err);
                })
        }
    }

    render() {
        const { classes, theme } = this.props;

        return(
            <UserContext.Consumer>
                {(context) => {                    
                    return(
                        <div className={classes.root}>
                            <NewScheduleModal open={this.state.openModal} handleClose={this.handleCloseModal}></NewScheduleModal>
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
                                        onChange={(e) => this.searchCalendar(context, e)}
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
                                <CustomLinearProgress loading={this.state.showLoading} />
                            </AppBar>
                            <Grid item xs={12} className={classes.marginToolbar}>
                                <Grid container direction="column">
                                    <Grid container direction="row" justify="center">
                                        <Card elevation={0} className={classes.grow}>
                                            <Grid container direction="column">
                                                <CardContent>
                                                    <Tabs value={this.state.activeTab} indicatorColor="primary" fullWidth
                                                        textColor="primary" onChange={this.handleChange}>

                                                        <Tab label="My Schedules" />
                                                        <Tab label="Shared with Me" />
                                                    </Tabs>
                                                    <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                        index={this.state.activeTab} onChangeIndex={this.handleChangeIndex}>

                                                        <MySchedules {...this.props} context={context} showProgress={this.showLinearProgress}></MySchedules>
                                                        <SharedSchedules {...this.props} context={context} showProgress={this.showLinearProgress}></SharedSchedules>
                                                    </SwipeableViews>
                                                </CardContent>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <CustomFooter openModal={this.handleOpenModal} />
                        </div>
                    )
                }}
            </UserContext.Consumer>
        )
    }

}

export default withStyles(styles, { withTheme: true })(HomePage);