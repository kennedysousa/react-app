import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Public extends Component{
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Hello!</h1>
                    <p className="lead">You are not logged in yet.</p>
                    <hr className="my-4"/>
                    <p>Please, log in to continue.</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
                    </p>
                </div>
            </div>
            
        );
    }
}
