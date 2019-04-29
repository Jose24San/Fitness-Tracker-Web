import { CHART_FORMATS } from '../constants/bodyLogs';


export const getBodyLogs = state => state.bodyLogs;

export const getBodyLogsByAmount = ( bodyLogs, amount ) => {
  return ( amount )
    ? bodyLogs.slice( 0, amount ).reverse()
    : bodyLogs.slice( 0, 10 ).reverse();
};

export const getBodyLogsByMetric = ( bodyLogs, metric ) => {

  return bodyLogs.map( log => {
    const temp = {};
    temp.trackedOn = log.trackedOn.formatted;
    temp[ metric ] = log[ metric ];

    return temp;
  } );
};

export const getBodyLogsByChartFormat = ( bodyLogs, format, metric ) => {

  if ( format === CHART_FORMATS.LINE_CHART ) {
    return bodyLogs.map( log => {
      const temp = {};

      temp.x = log.trackedOn
        .split( '/' )
        .slice( 0, 2 )
        .join( '/' );

      if ( temp.x[ 0 ] === '0' ) {
        temp.x = temp.x.substring( 1 );
      }

      temp.y = parseFloat( log[ metric ].value );
      temp.measurement = log[ metric ].measurement;

      return temp;
    } );
  }

  return bodyLogs;
};


export const getSpecifiedBodyLogs = ( state, options ) => {
  const { amount, metric, format } = options;

  const bodyLogs = getBodyLogs( state );
  const bodyLogsByAmount = getBodyLogsByAmount( bodyLogs, amount );
  const bodyLogsByMetric = getBodyLogsByMetric( bodyLogsByAmount, metric );

  return getBodyLogsByChartFormat( bodyLogsByMetric, format, metric );
};
