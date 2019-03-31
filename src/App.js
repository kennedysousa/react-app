import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';

class App extends Component {
  
    constructor() {
        super();
        this.state = {list: []};
    }
    
    render() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>
                    React
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Header/>
                </div>
            </nav>
            <div className="container pt-4">
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
