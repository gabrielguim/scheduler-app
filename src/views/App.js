import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Router from '../routers/Router';
import applyProvider from '../store/applyProvider';

const App = () => 
    <BrowserRouter>
        <Router />
    </BrowserRouter>

export default applyProvider(App);