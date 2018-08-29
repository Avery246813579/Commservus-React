import React, { Component } from 'react';
import logo from './logo.svg';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from './actions/index'

import {
    withRouter
} from 'react-router-dom'

function mapStateToProps(state) {
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p className="dog">
              Hi
          </p>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
