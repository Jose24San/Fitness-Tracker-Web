import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import globalTheme from '../../config/theme';

const styles = {
  card: {
    minWidth: 275,
    width: 'fit-content',
    // background: globalTheme.LIGHT_DARK_BACKGROUND,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  white: { color: globalTheme.LIGHT_FONT },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 },
};

function DashboardCard( { classes, children } ) {
  return (
    <Card className={ classes.card }>
      <CardContent>
        { children }
      </CardContent>

      {/*<CardActions>*/}
      {/*  <Button className={ classes.white } size="small">Learn More</Button>*/}
      {/*</CardActions>*/}
    </Card>
  );
}

DashboardCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array,
};

export default withStyles( styles )( DashboardCard );