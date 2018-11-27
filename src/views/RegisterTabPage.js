import React, { Component } from 'react';

import { 
    withStyles, 
    TextField,
    Button
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 8
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    }
});

class RegisterTabPage extends Component {

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.container}>
                <TextField id="outlined-name-input" label="Name"
                        className={classes.textField}
                        type="name" name="name" autoComplete="name"
                        margin="normal" fullWidth variant="outlined" />
                <TextField id="outlined-email-input" label="Email"
                        className={classes.textField}
                        type="email" name="email" autoComplete="email"
                        margin="normal" fullWidth variant="outlined" />
                <TextField id="outlined-pwd-input" label="Password"
                        className={classes.textField}
                        type="password" name="password"
                        margin="normal" fullWidth variant="outlined" />

                <Button variant="contained" color="primary" className={classes.button}>
                    Register
                </Button>
            </div>
        )
    }

}

export default withStyles(styles)(RegisterTabPage)