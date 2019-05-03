import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import globalTheme from '../../config/theme';

const styles = theme => ( {
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem( 15 ),
    fontWeight: theme.typography.fontWeightRegular,
    // color: globalTheme.LIGHT_FONT,
  },
  // background: { background: globalTheme.LIGHT_DARK_BACKGROUND },
  // white: { color: globalTheme.LIGHT_FONT },
} );

function Accordion( { classes, title, children, ...props } ) {
  return (
    <div className={ classes.root }>
      <ExpansionPanel classes={ { root: classes.background } } { ...props }>

        <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon  /> }>
          <Typography className={ classes.heading }>{ title }</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          { children }
        </ExpansionPanelDetails>

      </ExpansionPanel>

      {/*<ExpansionPanel>*/}
      {/*  <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>*/}
      {/*    <Typography className={ classes.heading }>Expansion Panel 2</Typography>*/}
      {/*  </ExpansionPanelSummary>*/}
      {/*  <ExpansionPanelDetails>*/}
      {/*    <Typography>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
      {/*      sit amet blandit leo lobortis eget.*/}
      {/*    </Typography>*/}
      {/*  </ExpansionPanelDetails>*/}
      {/*</ExpansionPanel>*/}

      {/*<ExpansionPanel disabled>*/}
      {/*  <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon /> }>*/}
      {/*    <Typography className={ classes.heading }>Disabled Expansion Panel</Typography>*/}
      {/*  </ExpansionPanelSummary>*/}
      {/*</ExpansionPanel>*/}

    </div>
  );
}

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default withStyles( styles )( Accordion );
