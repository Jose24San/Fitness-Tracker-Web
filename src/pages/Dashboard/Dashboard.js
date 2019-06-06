import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getAuthenticaton } from '../../selectors/user';
import { showRedirectMessage } from '../../actions/routing';
import SideMenu from '../../components/Menu/SideMenu';
import Grid from '../../containers/Dashboard/Grid';
import Build from './Build';

const styles = {
  container: {
    display: 'flex',
    height: '100%',
  },
};

class Dashboard extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    console.log('Dashboard props: ', this.props);
    // if ( !this.props.isLoggedIn ) {
    //   // console.warn('redirect from dashboard to login page');
    //   this.props.redirected( 'Dashboard' );
    //   return <Redirect to="/login" />;
    // }

    return (
      <div style={ styles.container }>
        <SideMenu history={ this.props.history } />

        <Route path="/dashboard" exact component={ Grid } />
        <Route path="/dashboard/build" component={ Build } />
      </div>

    );
  }
}


Dashboard.propTypes = {
  isLoggedIn: PropTypes.bool,
  redirected: PropTypes.func,
  history: PropTypes.object,
};

const mapStatetoProps = state => ( {
  isLoggedIn: getAuthenticaton( state ),
} );

const mapDispatchToProps = dispatch => ( {
  redirected: page => dispatch( showRedirectMessage( page ) ),
} );

export default connect( mapStatetoProps, mapDispatchToProps )( Dashboard );
