import React from 'react';
import { withStyles, Avatar, Tooltip } from "@material-ui/core";

const styles = theme => ({
    s_avatar: {
        width: 32,
        height: 32,
        backgroundColor: theme.palette.primary[500]
    },
    avatar: {
        backgroundColor: theme.palette.primary[500],
    }
})

const CustomAvatar = (props) => {

    const { classes, small } = props;
    
    return (
        <Tooltip title={props.avatarName} placement="right">
            <Avatar aria-label="avatar" src={props.avatarUrl ? props.avatarUrl : null } className={small ? classes.s_avatar : classes.avatar}>
                { props.avatarName.charAt(0).toUpperCase() }
            </Avatar>
        </Tooltip>
    )

}

export default withStyles(styles)(CustomAvatar)