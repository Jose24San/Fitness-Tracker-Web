import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import globalTheme from '../../config/theme';
import { getSpecifiedBodyLogs } from '../../selectors/bodyLogs';
import { CHART_FORMATS } from '../../constants/bodyLogs';
import { getPreferredWeightMeasurement } from '../../selectors/user';
import LineChart from '../../components/Charts/LineChart';
import { DashboardCard } from '../../components/Cards';

const styles = {
  mainArea: {
    width: '100%',
    background: globalTheme.MIDDLE_DARK_BACKGROUND,
    padding: 40,
  },
  white: {
    color: globalTheme.LIGHT_FONT,
  },
  header: {
    color: globalTheme.LIGHT_FONT,
    marginBottom: '-15',
  },
};

class Grid extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const { bodyLogs, measurement } = this.props;

    return (
      <div style={ styles.mainArea }>
        <p style={ styles.white }>Dashboard Control Panel</p>

        <DashboardCard>
          <h2 style={ styles.header }>
            Weight Over Time in { measurement }
          </h2>
          <LineChart
            containerStyling={ { height: 330 } }
            data={ bodyLogs.data }
            horizontalLabel=""
            verticalLabel=""
            maxDomain={ bodyLogs.maxDomainValue }
            minDomain={ bodyLogs.minDomainValue }
          />
        </DashboardCard>

      </div>
    );
  }
}

Grid.propTypes = {
  bodyLogs: PropTypes.object,
  measurement: PropTypes.string,
};

const mapStateToProps = state => ( {
  bodyLogs: getSpecifiedBodyLogs( state, { amount: 10, metric: 'weight', format: CHART_FORMATS.LINE_CHART } ),
  measurement: getPreferredWeightMeasurement( state ),
} );

const mapDispatchToProps = dispatch => ( {} );

export default connect( mapStateToProps, mapDispatchToProps )( Grid );
