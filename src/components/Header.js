import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderLinks(){
        if (this.props.authenticated) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/actors">Actors <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signout">Sign Out<span className="sr-only"></span></Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="d-flex justify-content-end navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signin">Sing In <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/signup">Sign Up <span className="sr-only"></span></Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <span>
                <ul className="navbar-nav">
                    { this.renderLinks() }
                </ul>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);