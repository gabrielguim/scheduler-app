import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';
import { Provider } from 'react-redux' 

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
