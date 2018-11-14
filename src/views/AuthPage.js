import React, { Component } from 'react';

import RegisterTabPage from './RegisterTabPage';
import LoginTabPage from './LoginTabPage';
import SwipeableViews from 'react-swipeable-views';
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

const styles = theme => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh'
    },
    appbar: {
        backgroundColor: 'white',
        color: 'black'
    }
});

class AuthPage extends Component {

    state = {
        activeTab: 0
    }

    handleChange = (_, value) => { this.setState({ activeTab: value }); } 
    
    handleChangeIndex = index => { this.setState({ activeTab: index }); };

    render() {
        const { classes, theme } = this.props;

        return(                  
            <div className={classes.root}>
                <AppBar className={classes.appbar} elevation={0}> 
                    <Toolbar >
                        <Typography variant="h6" color="inherit">
                            Scheduler
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid item xs={12}>
                    <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
                        <Card>
                            <CardContent>
                                <Tabs value={this.state.activeTab} indicatorColor="primary" fullWidth
                                    textColor="primary" onChange={this.handleChange}>

                                    <Tab label="Entrar" />
                                    <Tab label="Registrar" />
                                </Tabs>
                                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={this.state.activeTab} onChangeIndex={this.handleChangeIndex}>

                                    <LoginTabPage />
                                    <RegisterTabPage />
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