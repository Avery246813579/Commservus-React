import React, { Component } from 'react';
<<<<<<< HEAD
import TextFieldGroup from '../common/TextFieldGroup';
=======
import TextFieldGroup from '../../modules/common/TextFieldGroup';
>>>>>>> 431a1f21ba6d05d9ab0a654c0d0e608e5807f968

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
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
            <h1 className="card__heading">Forgot Password?</h1>
            <p className="card__subheading">Let us know your email so we can help you out</p>
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
              <div className="form__footer text-center">
                <input value="Send Email" type="submit" className="btn btn--register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default ForgotPassword;