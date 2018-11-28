import React, { Component } from 'react';
import { auth } from '../firebase/Firebase';
import CustomSnackBar from '../components/CustomSnackBar';
import UserService from '../service/UserService';
import StoreService from '../store/StoreService';

import { 
    withStyles, 
    TextField,
    Card,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';
import UserContext from '../store/UserContext';

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

class SignUpTabPage extends Component {

    state = {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        error: null
    };

    registerUser = (context, user) => {
        auth.doCheckToken()
            .then(data => {
                const token = data;
                StoreService.saveTokenAndUID(token, user.uid);

                UserService.registerUser(user)
                    .then(response => {
                        const user = response.data
                        context.updateUserInfo(user);
                    }).catch(_ => { 
                        auth.doDeleteUser()
                            .then(_ => {
                                auth.doSignOut();
                            }).catch(_ => {
                                auth.doSignOut();
                            });
                    });
            });
    }

    signUp = (context) => {
        const { name, email, password, } = this.state;
      
        this.props.showProgress(true);
        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                const uid = authUser.user.uid;
                const user = {
                    'uid': uid,
                    'email': email,
                    'name': name
                };

                this.registerUser(context, user);

            }).catch(error => {
                this.props.showProgress(true);
                this.setState({ error: error.message });
            });
    }
    
    closeSnackBar = () => { this.setState({ error: null }); }

    handleChange = prop => event => { this.setState({ [prop]: event.target.value }); };

    render() {
        const { classes } = this.props;
        const { name, email, password, confirmPassword, error } = this.state;

        return(
            <UserContext.Consumer>
                {(context) => (
                    <div className={classes.container}>
                        <Card className={classes.card} elevation={0}>
                            <CardContent>
                                <TextField id="outlined-name-input" label="Name"
                                    type="name" name="name" autoComplete="name"
                                    value={name}
                                    onChange={this.handleChange('name')}
                                    margin="normal" fullWidth variant="outlined" />
                                <TextField id="outlined-email-input" label="Email"
                                    type="email" name="email" autoComplete="email"
                                    value={email}
                                    onChange={this.handleChange('email')}
                                    margin="normal" fullWidth variant="outlined" />
                                <TextField id="outlined-pwd-input" label="Password"
                                    type="password" name="password"
                                    value={password}
                                    onChange={this.handleChange('password')}
                                    margin="normal" fullWidth variant="outlined" />
                                <TextField id="outlined-pwdc-input" label="Confirm Password"
                                    type="password" name="passwordconfirm"
                                    value={confirmPassword}
                                    onChange={this.handleChange('confirmPassword')}
                                    margin="normal" fullWidth variant="outlined" />
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
                                <Button color="secondary" className={classes.signin} onClick={() => this.signUp(context)}>
                                    Sign up
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }

}

export default withStyles(styles)(SignUpTabPage)