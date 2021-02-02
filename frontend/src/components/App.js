import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';


const alertOptions = {
    timeout: 10000,
    position: 'top center'
}

export class App extends Component {
    render() {
        return (
            <Provider 
                store={store}
            >
                <AlertProvider 
                    template={AlertTemplate} 
                    {...alertOptions}
                >
                    <Alerts/>
                    <Header/>
                    <Dashboard/>
                </AlertProvider>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));