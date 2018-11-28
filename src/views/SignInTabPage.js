import React, { Component } from 'react';
import { auth } from '../firebase/Firebase';
import CustomSnackBar from '../components/CustomSnackBar';

import { 
    withStyles, 
    TextField,
    Card,
    CardContent,
    CardActions,
    Button,
    Icon,
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    sideMargin: {
        display: 'flex',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    signin: {
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginRight: 0,
        }
    }
});

class SignInTabPage extends Component {

    state = {
        password: '',
        email: '',
        error: null
    };

    loginWithGoogle = () => {
        console.log("google")
    }

    loginWithEmail = () => {
        const {
            email,
            password,
        } = this.state;
      
        this.props.showProgress(true);
        auth.doSignInWithEmailAndPassword(email, password)
            .then((authUser) => {
                this.getAsyncToken(authUser.user);
            }).catch(error => {
                this.props.showProgress(false);
                this.setState({
                    error: error.message
                });
            });
    }

    handleChange = prop => event => { this.setState({ [prop]: event.target.value }); };

    closeSnackBar = () => { this.setState({ error: null }); }

    render() {
        const { classes } = this.props;
        const { email, password, error } = this.state;

        return(
            <div className={classes.container}>
                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <TextField id="outlined-email-log-input" label="Email"
                            type="email" name="email" autoComplete="email"
                            value={email}
                            onChange={this.handleChange('email')}
                            margin="normal" fullWidth variant="outlined" />
                        <TextField id="outlined-pwd-log-input" label="Password"
                            type="password" name="password"
                            value={password}
                            onChange={this.handleChange('password')}
                            margin="normal" fullWidth variant="outlined"/>
                    </CardContent>
                    {
                        error
                            ?   <CardContent>
                                    <CustomSnackBar
                                        variant="error"
                                        onClose={this.closeSnackBar}
                                        message={error}/>
                                </CardContent>
                            : null
                    }
                    <CardActions className={classes.sideMargin}>
                        <Button variant="outlined" color="primary" onClick={() => this.loginWithGoogle()}>
                            <Icon color="primary" className={'fab fa-google'}/>
                        </Button>
                        <Button color="secondary" className={classes.signin} onClick={() => this.loginWithEmail()}>
                            Sign in
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }

}

export default withStyles(styles)(SignInTabPage)