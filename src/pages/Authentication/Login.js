import React, { Component } from 'react';
import LoginWidget from '../../containers/Authentication/LoginWidget';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div style={ styles.container }>
        <p>This is the Login page</p>

        <LoginWidget />
      </div>
    );
  }
}

export default Login;
