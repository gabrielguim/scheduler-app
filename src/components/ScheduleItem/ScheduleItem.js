import React, { Component } from 'react';
import classnames from 'classnames';
import {
    Card,
    withStyles,
    CardHeader,
    CardContent,
    Typography,
    CardActions,
    Collapse,
    IconButton,
    Grid,
    Tooltip
} from '@material-ui/core';
import CustomAvatar from '../CustomAvatar';
import ScheduleItemMenu from '../ScheduleItemMenu';
import styles from './ScheduleItem.style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import People from '@material-ui/icons/People';

class ScheduleItem extends Component {

    state = { expanded: false };

    handleExpandClick = () => { this.setState(state => ({ expanded: !state.expanded })); };

    render() {
        const { classes, calendar, isOwner } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    action={isOwner ? <ScheduleItemMenu calendar={calendar}></ScheduleItemMenu> : null}
                    title={calendar.name}/>
                <CardContent>
                    <Typography paragraph>Creation Date: {new Date(calendar.creationDate).toLocaleDateString()}</Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Owner">
                        <CustomAvatar avatarName={calendar.owner.name}></CustomAvatar>
                    </IconButton>
                    {
                        calendar.users.length > 0
                            ? <Tooltip title={`Shared with ${calendar.users.length}`} placement="right">
                                <IconButton aria-label="Shared">
                                  <People />
                                </IconButton>
                              </Tooltip>
                            : null
                    }
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Shared with: </Typography>
                        <Grid item xs={12}>
                            <Grid container spacing={8}>
                                {
                                    calendar.users.map(user => (
                                        <Grid item key={user}>
                                            <CustomAvatar avatarName={user}></CustomAvatar>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }

}

export default withStyles(styles)(ScheduleItem);
