import React, { Component } from 'react';
import PageHeader from '../PageHeader';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';

class Signin extends Component {
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/home');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <PageHeader title="Sign In"/>
                <form className="col-6" onSubmit={ handleSubmit(this.onSubmit) }>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <Field
                                name="email"
                                type="text"
                                component="input"
                                className="form-control"
                                placeholder="What's your email address"
                                autoComplete="none"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <Field
                                name="password"
                                type="password"
                                component="input"
                                className="form-control"
                                placeholder="Type a password"
                                autoComplete="none"
                                aria-describedby="passwordHelpBlock"
                            />
                        </div>
                        <small id="passwordHelpBlock" className="form-text text-muted pl-4">
                            { this.props.errorMessage }
                        </small>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary float-right mb-4">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);