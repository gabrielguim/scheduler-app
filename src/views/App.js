import React from 'react'
import { getMessage } from '../actions/MessageAction'
import { connect } from 'react-redux'

class App extends React.Component {
    
    componentDidMount() {
        this.props.getMessage();
    }

    render() {
        return (
            <h1>{this.props.data}</h1>
        )
    }    
}

function mapStateToProps(state) {              
    return {
        data: state.MessageReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessage: () => dispatch(getMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)