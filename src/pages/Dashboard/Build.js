import React, { Component } from 'react';
import PropTypes from 'prop-types';
import globalTheme from '../../config/theme';
import Accordion from '../../components/Accordion/Accordion';

const styles = {
  mainArea: {
    width: '100%',
    background: globalTheme.MIDDLE_DARK_BACKGROUND,
    padding: 40,
  },
};

class Build extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
      <div style={ styles.mainArea }>
        <p>Build page</p>
        <Accordion title="Volume Recommendations">
          <div>Accordion content</div>
        </Accordion>
      </div>
    );
  }
}

Build.propTypes = {};

export default Build;
