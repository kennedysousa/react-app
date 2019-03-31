import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Signout extends Component{
    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Bye!</h1>
                    <p className="lead">Sorry to see you go.</p>
                    <hr className="my-4"/>
                    <p>Please, log in to continue.</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/Signin" role="button">Sign In</Link>
                    </p>
                </div>
            </div>
            
        );
    }
}

export default connect(null, actions)(Signout)