import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Home from './Home';
import Public from './Public';
import reducers from './reducers';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import ActorBox from './components/Actor';

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Public}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/signup" component={Signup}/> 
                        <Route path="/signout" component={Signout}/> 
                        <Route path="/signin" component={Signin}/>
                        <Route path="/actors" component={ActorBox}/>
                    </Switch>
                </App>
            </Router>
        </Provider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
