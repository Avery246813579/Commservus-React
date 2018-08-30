import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions/index'
=======
>>>>>>> feature/nav

import { Provider } from 'react-redux'; 
import store from './store';

<<<<<<< HEAD
import store from './store';

import Nav from './components/layout/Nav';
=======
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
>>>>>>> feature/nav

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
<<<<<<< HEAD
            <Nav />
            <Switch>
              {/* <Route exact path="/" component={App}/> */}
              {/*<Route path="*" component={FourZeroFour}/>*/}
            </Switch>
=======
            <Nav />            
            <Route exact path="/" component={Landing}/>
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              {/*<Route path="*" component={FourZeroFour}/>*/}
            </div>
>>>>>>> feature/nav
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};
<<<<<<< HEAD

function mapStateToProps(state) {
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
=======
>>>>>>> feature/nav

export default App;
