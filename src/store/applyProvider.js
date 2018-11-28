import React from 'react';
import UserContext from './UserContext';
import { firebase } from '../firebase/Firebase';
import StoreService from '../store/StoreService';
import UserService from '../service/UserService';

const applyProvider = (Component) => 
    class UserContextProvider extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
                userInfo: {
                    'name': "Usuário",
                    'email': "-",
                    'uid': ""
                },
                updateUserInfo: (newUserInfo) => {
                    this.setState(() => ({ userInfo: newUserInfo }))
                }
            };
        }

        updateAuthUser(authUser, userInfo) {
            this.setState(() => ({ authUser: authUser, userInfo: userInfo }))            
        }

        componentDidMount() {           
            firebase.auth.onAuthStateChanged(authUser => { 
                if (authUser) {          
                  authUser.getIdToken().then(data => {
                    const uid = authUser.uid;
                    const token = data;
        
                    StoreService.saveTokenAndUID(token, uid);

                    UserService.getUser(uid)
                        .then((data) => {
                            console.log(data);
                        }).catch(err => {
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