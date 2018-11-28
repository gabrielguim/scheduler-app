import React, { Component } from 'react';
import UserContext from '../store/UserContext';
import { auth } from '../firebase/Firebase';

import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    Tabs, 
    Tab,
    withStyles,
    Button
} from '@material-ui/core';

const styles = theme => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh'
    },
    appbar: {
        backgroundColor: 'white',
        color: 'black'
    },
    content: {
        maxWidth: '60vh'
    },
    grow: {
        flexGrow: 1
    }
});

class HomePage extends Component {
    
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
        const { classes } = this.props;

        return(
            <UserContext.Consumer>
                {(context) => {                    
                    return(
                        <div className={classes.root}>
                            <AppBar className={classes.appbar} elevation={0}> 
                                <Toolbar >
                                    <Typography variant="h6" className={classes.grow} color="inherit">
                                        Scheduler
                                    </Typography>
                                    <Button color="primary" onClick={() => this.handleLogout(context)}>Log out</Button>
                                </Toolbar>
                            </AppBar>
                            <Grid item xs={12}>
                                <Grid container className={classes.root} direction="column" justify="center" alignItems="center">
                                    Olá, { context.userInfo.name}                     
                                </Grid>
                            </Grid>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        )
    }

}

export default withStyles(styles, { withTheme: true })(HomePage);