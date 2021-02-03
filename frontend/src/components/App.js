import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Dashboard from './leads/Dashboard';

import Login from './accounts/Login';
import Register from './accounts/Register';

import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

const alertOptions = {
    timeout: 10000,
    position: 'top right'
}

export class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider 
                store={store}
            >
                <AlertProvider 
                    template={AlertTemplate} 
                    {...alertOptions}
                >
                    <Router>
                        <Alerts/>
                        <Header/>
                        <Switch>
                            <PrivateRoute 
                                exact 
                                path="/" 
                                component={Dashboard}
                            />
                            <Route 
                                exact 
                                path="/register" 
                                component={Register}
                            />
                            <Route 
                                exact 
                                path="/login" 
                                component={Login}
                            />
                        </Switch>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));