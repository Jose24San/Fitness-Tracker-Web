import React, { Component } from 'react';
import PropTypes from 'prop-types';
import globalTheme from '../../config/theme';
import Accordion from '../../components/Accordion/Accordion';
import { rowHeaders, rowData } from '../../config/volumeRecommendation';
import Table from '../../components/Table/Table';

const styles = {
  mainArea: {
    width: '100%',
    background: globalTheme.GREY_BACKGROUND,
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
        <Accordion title="Volume Recommendations Per Week">
          <Table rowData={ rowData } rowHeaders={ rowHeaders } />
        </Accordion>
      </div>
    );
  }
}

Build.propTypes = {};

export default Build;
