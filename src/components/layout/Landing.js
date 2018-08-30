import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing text-center">
        <div className="container">
          <div className="container__content">
            <h1 className="landing__heading">Welcome to Commservus</h1>
            <p className="landing__subheading">Promote and host your events as a community organization.  </p>
            <a className="btn btn--landing">Read More</a>
          </div>        
        </div>
      </div>
    );
  }
};

export default Landing;