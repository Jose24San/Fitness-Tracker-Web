import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ( {
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
} );

const PrimaryButton = ( { children, classes, ...props } ) => (
  <Button
    color="primary"
    variant="contained"
    className={ classes.button }
    { ...props }
  >
    { children }
  </Button>
);


PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
  props: PropTypes.object,
};

export default withStyles( styles )( PrimaryButton );
