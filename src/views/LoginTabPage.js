import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

class LoginTabPage extends Component {

    render() {
        return(
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    d1092412947812
                    </Typography>
                    <Typography variant="h5" component="h2">
                    be
                    nev
                    lent
                    </Typography>
                    <Typography color="textSecondary">
                    adjective
                    </Typography>
                    <Typography component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }

}

export default LoginTabPage