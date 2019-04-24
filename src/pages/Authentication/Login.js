import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginWidget from '../../containers/Authentication/LoginWidget';
import { loginRequestAction } from '../../actions/authentication';

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
    return (
      <div style={ styles.container }>
        <LoginWidget
          onClick={ credentials => this.handleLogin( credentials ) }
        />
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

const mapStateToProps = state => { };

const mapDispatchToProps = dispatch => ( {
  login: ( { email, password } ) => dispatch( loginRequestAction( { email, password } ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );
