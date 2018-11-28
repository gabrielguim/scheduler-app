import React from 'react';

const UserContext = React.createContext({
    authUser: null,
    userInfo: {
        'name': "Usuário",
        'email': "-",
        'uid': "",
        'address': "",
        'phone': ""
    }
})

export default UserContext;