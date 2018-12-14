import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './NewScheduleModal.style';
import { TextField, Tooltip, Chip, DialogTitle, Dialog, DialogContent, DialogContentText, DialogActions, CardContent } from '@material-ui/core';
import CustomAvatar from '../CustomAvatar';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import ScheduleService from '../../service/ScheduleService';
import UserContext from '../../store/UserContext';
import CustomLinearProgress from '../CustomLinearProgress';

class NewScheduleModal extends React.Component {

  state = {
    name: '',
    slots: [],
    email: '',
    users: [],
    error: null,
    showLoading: false
  }

  handleChange = prop => event => { this.setState({ [prop]: event.target.value }); };

  handleAddUser = event => { 
    if (event.key === 'Enter') {
      this.setState({ 
        users: [...this.state.users, event.target.value],
        email: ''
      }); 
    }
  };

  handleDelete = data => () => {
    this.setState(state => {
      const users = [...state.users];
      const userToDelete = users.indexOf(data);
      users.splice(userToDelete, 1);
      
      return { users };
    });
  };

  addNewScheduler = (context) => {
    const calendar = { 
      name: this.state.name,
      users: this.state.users,
      owner: context.userInfo,
      slots: []
    }

    this.setState({showLoading : true})
    ScheduleService.addCalendar(calendar)
      .then(response => {
        this.setState({
          showLoading: false 
        })

        context.updateCalendars(response.data);
        this.props.handleClose();
      }).catch(err => {
        this.setState({
          error: err.response.data.violations,
          showLoading: false 
        })
      })
   
  }

  closeSnackBar = () => { this.setState({ error: null }); }

  render() {
    const { classes } = this.props;
    const { name, email, users, error, showLoading } = this.state;

    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <Dialog
              open={this.props.open}
              onClose={this.props.handleClose}
              aria-labelledby="form-dialog-title">
              <CustomLinearProgress loading={showLoading} />
              <DialogTitle id="form-dialog-title">New Schedule</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Create your schedules and share with your customers!
                </DialogContentText>
                <TextField id="outlined-name-input" label="Scheduler Name"
                    type="name" name="name"
                    value={name}
                    onChange={this.handleChange('name')}
                    margin="normal" fullWidth variant="outlined"/>
                  <TextField id="outlined-email-input" label="Share with: "
                    type="email" name="email"
                    value={email}
                    onChange={this.handleChange('email')}
                    onKeyPress={this.handleAddUser}
                    margin="normal" fullWidth variant="outlined"/>
                    
                    { users.map((data, index) => {
    
                      return (
                        <Tooltip key={index} title={data} placement="right">
                          <Chip
                            avatar={<CustomAvatar small={true} avatarName={data}></CustomAvatar>}
                            label={data}
                            onDelete={this.handleDelete(data)}
                            className={classes.chip}
                          />
                        </Tooltip>
                        
                      );
                    })}
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
              </DialogContent>
              <DialogActions>
                <Button onClick={this.props.handleClose} disabled={showLoading} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => this.addNewScheduler(context)} disabled={showLoading} color="primary">
                  Add Schedule
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default withStyles(styles)(NewScheduleModal);