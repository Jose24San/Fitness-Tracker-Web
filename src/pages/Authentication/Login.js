import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginWidget from '../../containers/Authentication/LoginWidget';
import { loginRequestAction } from '../../actions/authentication';
import { getRedirectedFromPage } from '../../selectors/routing';
import { getAuthenticaton } from '../../selectors/user';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
};

class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  handleLogin = data => this.props.login( data );


  render() {
    const { pageRedirectedFrom, isLoggedIn } = this.props;

    if ( isLoggedIn ) {
      // console.warn('redirect from login to dashboard');
      return <Redirect to="/dashboard" />;
    }

    return (
      <div style={ styles.container }>
        {
          ( pageRedirectedFrom )
          && <p>You must be logged in to see { pageRedirectedFrom }</p>
        }
        <LoginWidget
          onClick={ credentials => this.handleLogin( credentials ) }
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  pageRedirectedFrom: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = state => ( {
  pageRedirectedFrom: getRedirectedFromPage( state ),
  isLoggedIn: getAuthenticaton( state ),
} );

const mapDispatchToProps = dispatch => ( {
  login: ( { email, password } ) => dispatch( loginRequestAction( { email, password } ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );
