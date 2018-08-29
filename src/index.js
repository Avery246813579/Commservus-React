import React from 'react';
import LandingScreen from './components/LandingScreen';
import {render} from 'react-dom'
import './style/App.css';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import userReducers from './reducers/user'
import LoginScreen from "./components/pre/LoginScreen";
import SignupScreen from "./components/pre/SignupScreen";

let store = createStore(combineReducers({
    user: userReducers
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <header className="nav">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Signup</Link>
                </header>

                <Switch>
                    <Route exact path="/" component={LandingScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/signup" component={SignupScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
