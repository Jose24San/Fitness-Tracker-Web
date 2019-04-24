import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '../../components/TextField/TextField';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const styles = {
  card: {
    maxWidth: 330,
    height: 300,
  },
  buttonContainer: {
    marginTop: 20,
  },
};

class LoginWidget extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <Card className={ classes.card }>
        <CardContent>
          <TextField
            fullWidth={ true }
            value={ email }
            label="Email"
            onChange={ value => this.setState( { email: value } ) }
          />
          <TextField
            fullWidth
            value={ password }
            label="Password"
            type="password"
            onChange={ value => this.setState( { password: value } ) }
          />
          <div className={ classes.buttonContainer }>
            <PrimaryButton onClick={ () => this.props.onClick( { email, password } ) }>
              Login
            </PrimaryButton>
          </div>
        </CardContent>
      </Card>
    );
  }
}

LoginWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};


export default withStyles( styles )( LoginWidget );
