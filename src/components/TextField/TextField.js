import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/TextField';

const styles = theme => ( {
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
} );


const TextField = ( { classes, label, value, error = false, styleOverride, onChange, type = 'text', ...props } ) => (
  <Input
    error={ error }
    label={ label }
    className={ classes.textField }
    value={ value }
    onChange={ event => onChange( event.target.value ) }
    margin="normal"
    style={ styleOverride }
    type={ type }
    { ...props }
  />
);


TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  error: PropTypes.bool,
  styleOverride: PropTypes.object,
  onChange: PropTypes.func,
  type: PropTypes.string,
  props: PropTypes.object,
};

export default withStyles( styles )( TextField );
