import React, { Component } from 'react';
import UserContext from '../store/UserContext';

class HomePage extends Component {

    constructor(props, context) {
        super(props, context);

        console.log(context);
    }
    
    render() {
        return(
            <UserContext.Consumer>
                {(context) => {
                    console.log(context);
                    
                    return(
                        <h1>{context.fullName}</h1>
                    )
                }}
            </UserContext.Consumer>
        )
    }

}

export default HomePage;