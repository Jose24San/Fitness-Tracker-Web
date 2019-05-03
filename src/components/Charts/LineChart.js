import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';
import chartTheme from './chartTheme';
import globalTheme from '../../config/theme';

class LineChart extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const { horizontalLabel, verticalLabel, data, containerStyling, minDomain, maxDomain } = this.props;

    return (
      <div style={ containerStyling }>
        <VictoryChart
          theme={ chartTheme }
          minDomain={ { y: minDomain } }
          maxDomain={ { y: maxDomain } }
        >
          <VictoryAxis label={ horizontalLabel } />
          <VictoryAxis dependentAxis label={ verticalLabel } />
          <VictoryLine data={ data } />
        </VictoryChart>
      </div>
    );
  }
}

LineChart.propTypes = {
  data: PropTypes.array,
  horizontalLabel: PropTypes.string,
  verticalLabel: PropTypes.string,
  containerStyling: PropTypes.object,
  maxDomain: PropTypes.number,
  minDomain: PropTypes.number,
};

export default LineChart;
