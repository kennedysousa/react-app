import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import requireAuth from './components/requireAuth';

class Home extends Component{
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello!</h1>
                    <p className="lead">Welcome to our React application! You are now logged in.</p>
                    <hr className="my-4"/>
                    <p>Enjoy your stay!</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/signin" role="button">Sign In</Link>
                    </p>
                </div>
            </div>
            
        );
    }
}

export default requireAuth(Home);