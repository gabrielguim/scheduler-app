import React from 'react';
import UserContext from './UserContext';
import { firebase } from '../firebase/Firebase';
import { saveTokenAndUID } from './StoreService';
import { getUser } from '../service/UserService';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
                userInfo: {
                    'fullName': "Usuário",
                    'email': "-",
                    'uid': "",
                    'address': "",
                    'phone': ""
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
            const self = this;
            
            firebase.auth.onAuthStateChanged(authUser => { 
                if (authUser) {          
                  authUser.getIdToken().then(function(data) {
                    const uid = authUser.uid;
                    const token = data;
        
                    saveTokenAndUID(token, uid);

                    // TODO: use UserService.getUser instead only getUser
                    getUser(uid)
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
}


export default withAuthentication;