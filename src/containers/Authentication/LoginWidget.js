import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    maxWidth: 275,
    height: 300,
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
};

class LoginWidget extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={ classes.card }>
        <CardContent>
          <p>login widget</p>
        </CardContent>
      </Card>
    );
  }
}

LoginWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles( styles )( LoginWidget );
