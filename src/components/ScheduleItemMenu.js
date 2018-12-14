import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import ScheduleService from '../service/ScheduleService';
import StoreService from '../store/StoreService';
import UserContext from '../store/UserContext';

class ScheduleItemMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDelete = (context) => {
    const { _id } = StoreService.getTokenAndUID();
    const { calendar } = this.props;
        
    if (_id) {
        ScheduleService.removeCalendar(calendar._id, _id)
          .then(response => {
              this.setState({
                anchorEl: null
              })

              context.updateCalendars(response.data);

          }).catch(err => {
              console.log(err);
          })
    }
  };

  handleShare = () => {
    // TODO: Open share modal
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}>
    
              <MenuItem onClick={this.handleShare}>
                <ListItemIcon>
                  <ShareIcon />
                </ListItemIcon>
                <ListItemText inset primary="Share" />
              </MenuItem>
              <MenuItem onClick={() => this.handleDelete(context)}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText inset primary="Delete" />
              </MenuItem>
            </Menu>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ScheduleItemMenu;