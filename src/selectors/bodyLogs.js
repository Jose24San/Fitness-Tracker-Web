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

export const getDomainMinAndMax = ( bodyLogs, key ) => {

  // holds just a numeric value
  const maxValue = bodyLogs.reduce( ( prev, current ) => {
    return ( prev[ key ] > current[ key ] ) ? prev : current;
  } )[ key ];

  const minValue = bodyLogs.reduce( ( prev, current ) => {
    return ( prev[ key ] < current[ key ] ) ? prev : current;
  } )[ key ];

  const range = maxValue - minValue;

  // Adding 10% to make graph look better
  const percentageBasedPadding = Math.ceil( ( 10 / 100 ) * range );

  return {
    maxDomainValue: Math.ceil( maxValue + percentageBasedPadding ),
    minDomainValue: Math.floor( minValue - percentageBasedPadding ),
  };

};

export const getSpecifiedBodyLogs = ( state, options ) => {

  const bodyLogs = getBodyLogs( state );

  if ( bodyLogs.length > 0 ) {
    const { amount, metric, format } = options;

    const bodyLogsByAmount = getBodyLogsByAmount( bodyLogs, amount );
    const bodyLogsByMetric = getBodyLogsByMetric( bodyLogsByAmount, metric );
    const bodyLogsByChartFormat = getBodyLogsByChartFormat( bodyLogsByMetric, format, metric );

    const { maxDomainValue, minDomainValue } = getDomainMinAndMax( bodyLogsByChartFormat, 'y' );

    return {
      data: bodyLogsByChartFormat,
      maxDomainValue,
      minDomainValue,
    };
  }

  return {
    data: [],
    maxDomainValue: undefined,
    minDomainValue: undefined,
  };
};
