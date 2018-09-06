import React, { Component } from 'react';
<<<<<<< HEAD
import TextFieldGroup from '../common/TextFieldGroup';
=======
import TextFieldGroup from '../../modules/common/TextFieldGroup';
>>>>>>> 431a1f21ba6d05d9ab0a654c0d0e608e5807f968

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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
            <h1 className="card__heading">Sign Up</h1>
            <p className="card__subheading">Create your Commservus Account</p>
            </div>
            <form className="form">
              <TextFieldGroup 
                placeholder="Name"
                name="name"
                label="Organization Name"
                className="form__input"
                value={this.state.name}
                onChange={this.onChange}
              />
              <TextFieldGroup 
                label="Organization Email"
                placeholder="Email"
                name="email"
                type="email"
                value={this.state.email}
                className="form__input"
                onChange={this.onChange}
              />
              <TextFieldGroup 
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                className="form__input"
                onChange={this.onChange}
              />
              <TextFieldGroup
                label="Confirm Password" 
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={this.state.password2}
                className="form__input"
                onChange={this.onChange}
              />
              <div className="form__footer text-center">
                <input value="Sign up" type="submit" className="btn btn--register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;