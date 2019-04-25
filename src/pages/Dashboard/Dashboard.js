import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAuthenticaton } from '../../selectors/user';
import { showRedirectMessage } from '../../actions/routing';


class Dashboard extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    console.log('Dashboard props: ', this.props);
    if ( !this.props.isLoggedIn ) {
      // console.warn('redirect from dashboard to login page');
      this.props.redirected( 'Dashboard' );
      return <Redirect to="/login" />;
    }

    return (
      <p>Dashboard page</p>
    );
  }
}


Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool,
  redirected: PropTypes.func,
};

const mapStatetoProps = state => {
  return {
    isLoggedIn: getAuthenticaton( state ),
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ( {
  redirected: page => dispatch( showRedirectMessage( page ) ),
} );

export default connect( mapStatetoProps, mapDispatchToProps )( Dashboard );
