import React, { Component } from 'react';
import UserContext from '../store/UserContext';
import { auth } from '../firebase/Firebase';

import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Grid,
    Button,
    withStyles,
    IconButton,
    InputBase
} from '@material-ui/core';

import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  appbar: {
    backgroundColor: 'white',
    color: 'black'
  },

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
                                <Toolbar>
                                    <div className={classes.grow} />
                                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                        <MenuIcon />
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