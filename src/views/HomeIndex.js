import React, { Component } from 'react';
import UserContext from '../store/UserContext';

class HomeIndex extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <UserContext.Consumer>
                {(context) => {
                    console.log(context);
                    
                    return(
                        <h1>{context.userInfo.fullName}</h1>
                    )
                }}
            </UserContext.Consumer>
        )
    }

}

export default HomeIndex;