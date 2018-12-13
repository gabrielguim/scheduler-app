import React from 'react';
import { withStyles, Avatar, Tooltip } from "@material-ui/core";

const styles = theme => ({
    avatar: {
        backgroundColor: theme.palette.primary[500],
    },
})

const CustomAvatar = (props) => {

    const { classes } = props;
    
    return (
        <Tooltip title={props.avatarName} placement="right">
            <Avatar aria-label="avatar" src={props.avatarUrl ? props.avatarUrl : null } className={classes.avatar}>
                { props.avatarName.charAt(0).toUpperCase() }
            </Avatar>
        </Tooltip>
    )

}

export default withStyles(styles)(CustomAvatar)