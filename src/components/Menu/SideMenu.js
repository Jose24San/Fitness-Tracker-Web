import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import globalTheme from '../../config/theme';

const styles = () => ( {
  root: {
    width: '100%',
    // height: '100%',
    maxWidth: 225,
    backgroundColor: globalTheme.DARK_BACKGROUND,
  },
  white: {
    color: globalTheme.LIGHT_FONT,
  },
} );

function SideMenu( { classes, history } ) {
  return (
    <div className={ classes.root }>
      <List component="nav">

        <ListItem button onClick={ () => history.push( '/dashboard' ) }>
          <ListItemIcon className={ classes.white }>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            classes={ { primary: classes.white } }
            primary="Dashboard"
          />
        </ListItem>

        <ListItem button onClick={ () => history.push( '/dashboard/build' ) }>
          <ListItemIcon className={ classes.white }>
            <DraftsIcon />
          </ListItemIcon>

          <ListItemText
            classes={ { primary: classes.white } }
            primary="Build"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon className={ classes.white }>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText
            classes={ { primary: classes.white } }
            primary="Track"
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon className={ classes.white }>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText
            classes={ { primary: classes.white } }
            primary="Analytics"
          />
        </ListItem>

      </List>

    </div>
  );
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default withStyles( styles )( SideMenu );