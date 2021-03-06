import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav__brand">
          Commservus
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/register" className="nav__btn">
              Sign up
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/login" className="nav__btn">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;