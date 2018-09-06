import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { registerUser } from '../../actions/authActions';
import { updateSomething } from '../../actions/updateActions';   

import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="section-register">
        <div className="container">
          <div className="card">
            <div className="card__header text-center">
            <h1 className="card__heading">Sign Up</h1>
            <p className="card__subheading">Create your Commservus Account</p>
            </div>
            <form noValidate className="form" onSubmit={this.onSubmit}>
              <TextFieldGroup 
                placeholder="First Name"
                name="firstName"
                type="text"
                label="First Name"
                value={this.state.firstName}
                onChange={this.onChange}
                error={errors.firstName}
              />
              <TextFieldGroup 
                placeholder="Last Name"
                name="lastName"
                type="text"
                label="Last Name"
                value={this.state.lastName}
                onChange={this.onChange}
                error={errors.lastName}
              />
              <TextFieldGroup 
                placeholder="Username"
                name="username"
                type="text"
                label="Username"
                value={this.state.username}
                onChange={this.onChange}
                error={errors.username}
              />
              <TextFieldGroup 
                 placeholder="Email"
                 name="email"
                 type="email"
                 label="Email"
                 value={this.state.email}
                 onChange={this.onChange}
                 error={errors.email}
              />
              <TextFieldGroup 
                placeholder="Password"
                name="password"
                type="password"
                label="Password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
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

Register.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser, updateSomething })(withRouter(Register));