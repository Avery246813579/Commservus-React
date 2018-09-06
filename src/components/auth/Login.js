import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import TextFieldGroup from '../common/TextFieldGroup';
=======
import TextFieldGroup from '../../modules/common/TextFieldGroup';
>>>>>>> 431a1f21ba6d05d9ab0a654c0d0e608e5807f968

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="section-register">
        <div className="container">
          <div className="card">
          <div className="card__header text-center">
            <h1 className="card__heading">Log In</h1>
            <p className="card__subheading">Log in to your Commservus Account</p>
          </div>
            <form className="form">
              <TextFieldGroup 
                label="Organization Email"
                placeholder="Email Address"
                name="email"
                type="email"
                className="form__input"
                value={this.state.email}
                onChange={this.onChange}
              />
              <TextFieldGroup 
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                className="form__input"
                value={this.state.password}
                onChange={this.onChange}
              />
              <Link to="/forgot-password" className="form__link">
                Forgot your password?
              </Link>
              <div className="form__footer text-center">
                <input value="Log in" type="submit" className="btn btn--login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;