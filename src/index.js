import React from 'react';
import App from './App';
import {render} from 'react-dom'
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import userReducers from './reducers/user'

let store = createStore(combineReducers({
    user: userReducers
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                {/*<Route path="*" component={FourZeroFour}/>*/}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
