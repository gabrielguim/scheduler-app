import React, { Component } from 'react';

import { 
    withStyles, 
    TextField
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
                <TextField id="outlined-email-input" label="Email"
                        className={classes.textField}
                        type="email" name="email" autoComplete="email"
                        margin="normal" fullWidth variant="outlined" />
            </div>
        )
    }

}

export default withStyles(styles)(RegisterTabPage)