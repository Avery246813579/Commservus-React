import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions/index'

import {
    withRouter
} from 'react-router-dom'

import store from './store';

import Nav from './components/layout/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Switch>
              {/* <Route exact path="/" component={App}/> */}
              {/*<Route path="*" component={FourZeroFour}/>*/}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
