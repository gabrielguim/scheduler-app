import React from 'react';
import UserContext from './UserContext';
import { firebase } from '../firebase/Firebase';
import StoreService from '../store/StoreService';
import UserService from '../service/UserService';

const applyProvider = (Component) => 
    class UserContextProvider extends React.Component {
        
        state = {
            authUser: null,
            showSnippet: false,
            userInfo: {
                '_id': "",
                'name': "",
                'email': "-",
                'uid': ""
            },
            userCalendars: [],
            updateUserInfo: (newUserInfo) => {
                this.setState(() => ({ userInfo: newUserInfo }))
            },
            updateCalendars: (newCalendars) => {
                this.setState(() => ({ userCalendars: [...newCalendars] }))
            }
        };

        updateAuthUser(authUser, userInfo) {
            this.setState(() => ({ authUser: authUser, userInfo: userInfo }))            
        }

        componentDidMount() {      
            firebase.auth.onAuthStateChanged(authUser => { 
                if (authUser) {          
                  authUser.getIdToken().then(data => {
                    const uid = authUser.uid;
                    const token = data;
                    StoreService.saveTokenAndUID(token, uid, 'root');
    
                    UserService.getUser(uid)
                        .then((result) => {
                            const user = result.data;
                            StoreService.saveTokenAndUID(token, uid, user._id);
                            this.setState({ userInfo: user });
                        }).catch(err => {
                            // TODO : SHOW TOAST
                            console.log(err);
                        })

                  });
                }
        
                authUser
                  ? this.setState(() => ({ authUser: authUser }))
                  : this.setState(() => ({ authUser: null }));          
              });
        }

        render() {
            return (
              <UserContext.Provider value={this.state}>
                <Component />
              </UserContext.Provider>
            );
        }

    }


export default applyProvider;