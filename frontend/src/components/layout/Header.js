import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <span className="navbar-text mr-3">
                        <strong>{ user && `Hi, ${user.username}` }</strong>
                    </span>
                </li>
                <li className="nav-item">
                    <button 
                        onClick={this.props.logout}
                        className="nav-link btn btn-info btn-sm text-light px-2"
                    >Logout</button>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link 
                        to="/login" 
                        className="nav-link"
                    >Login</Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="/register" 
                        className="nav-link"
                    >Register</Link>
                </li>
            </ul>
        )

        return (
            <nav 
                className="navbar navbar-expand navbar-dark bg-dark"
            >
                <div className="container">
                    { isAuthenticated ? authLinks : guestLinks }
                    <a className="navbar-brand" href="/">Lead Manager App</a>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);