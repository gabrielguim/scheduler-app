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
    Grid
} from '@material-ui/core';
import CustomAvatar from '../CustomAvatar';
import UserContext from '../../store/UserContext';
import ScheduleItemMenu from '../ScheduleItemMenu';
import styles from './ScheduleItem.style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ScheduleItem extends Component {

    state = { expanded: false };

    handleExpandClick = () => { this.setState(state => ({ expanded: !state.expanded })); };

    render() {
        const { classes, calendar } = this.props;

        return (
            <UserContext.Consumer>
                {(context) => (
                    <Card className={classes.card}>
                        <CardHeader
                            action={<ScheduleItemMenu></ScheduleItemMenu>}
                            title="CALENDAR NAME"/>
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton aria-label="Owner">
                                <CustomAvatar avatarName={context.userInfo.name}></CustomAvatar>
                            </IconButton>
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
                                <Typography paragraph>Creation Date: {"12/08/2018"/*calendar.creationDate*/}</Typography>
                                <Typography paragraph>Shared with: </Typography>
                                <Grid item xs={12}>
                                    <Grid container spacing={8}>
                                        <Grid item>
                                            <CustomAvatar avatarName={context.userInfo.name}></CustomAvatar>
                                        </Grid>
                                        <Grid item>
                                            <CustomAvatar avatarName={context.userInfo.name}></CustomAvatar>
                                        </Grid>
                                        <Grid item>
                                            <CustomAvatar avatarName={context.userInfo.name}></CustomAvatar>
                                        </Grid>
                                        <Grid item>
                                            <CustomAvatar avatarName={context.userInfo.name}></CustomAvatar>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                )}
            </UserContext.Consumer>
        );
    }

}

export default withStyles(styles)(ScheduleItem);
