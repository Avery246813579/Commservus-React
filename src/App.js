import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux'; 
import store from './store';

import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Nav />            
            <Route exact path="/" component={Landing}/>
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              {/*<Route path="*" component={FourZeroFour}/>*/}
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
};

export default App;
