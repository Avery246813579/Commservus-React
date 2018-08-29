import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Actions from '../actions/index'
import {Link} from 'react-router-dom'

import {
    withRouter
} from 'react-router-dom'

function mapStateToProps(state) {
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

/**
 * This will be the container that all our screens are in
 */
class App extends Component {
    render() {
        return (
            <div>
                Landing
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
