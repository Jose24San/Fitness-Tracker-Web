import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import chartTheme from './chartTheme';


class LineChart extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    const { horizontalLabel, verticalLabel, topLabel, data, containerStyling } = this.props;

    return (
      <div style={ containerStyling }>
        <VictoryChart theme={ chartTheme }>
          {/*<VictoryLabel text={ topLabel } textAnchor="middle" x={225} y={30} style={ { color: 'white' } } />*/}
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
  topLabel: PropTypes.string,
  horizontalLabel: PropTypes.string,
  verticalLabel: PropTypes.string,
  containerStyling: PropTypes.object,
};

export default LineChart;
