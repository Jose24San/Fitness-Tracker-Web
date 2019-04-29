import {
  getBodyLogs,
  getBodyLogsByAmount,
  getBodyLogsByChartFormat,
  getBodyLogsByMetric,
  getSpecifiedBodyLogs,
} from '../bodyLogs';
import { CHART_FORMATS } from '../../constants/bodyLogs';


const state = {
  bodyLogs: [
    {
      uid: '48DMDv7hJHE1l9LSDIKH',
      trackedOn: {
        seconds: 1556082000,
        nanoseconds: 0,
        formatted: '04/24/2019',
      },
      userId: 'JbdTa6ILGLRLecFAoWUB3sp9Stu1',
      weight: {
        measurement: 'lbs',
        value: '175.2',
      },
    },
    {
      uid: '48DMDv7hJH',
      trackedOn: {
        seconds: 1556082090,
        nanoseconds: 0,
        formatted: '04/20/2019',
      },
      userId: 'JbdTa6ILGLRLecFAoWUB3sp9Stu1',
      weight: {
        measurement: 'lbs',
        value: '176.5',
      },
    },
  ],
};

describe( 'Body log selectors', () => {

  it( 'getBodyLogs() should return body logs reducer', () => {
    expect( getBodyLogs( state ) ).toEqual( state.bodyLogs );
  } );

  it( 'getBodyLogsByAmount should return specified amount of body logs', () => {
    const expectedState = [
      {
        uid: '48DMDv7hJHE1l9LSDIKH',
        trackedOn: {
          seconds: 1556082000,
          nanoseconds: 0,
          formatted: '04/24/2019',
        },
        userId: 'JbdTa6ILGLRLecFAoWUB3sp9Stu1',
        weight: {
          measurement: 'lbs',
          value: '175.2',
        },
      },
    ];

    expect( getBodyLogsByAmount( state.bodyLogs, 1 ) )
      .toEqual( expectedState );
  } );

  it( 'getBodyLogsByMetric should return only the metric related data', () => {

    const expectedState = [
      {
        trackedOn: '04/24/2019',
        weight: {
          measurement: 'lbs',
          value: '175.2',
        },
      },
      {
        trackedOn: '04/20/2019',
        weight: {
          measurement: 'lbs',
          value: '176.5',
        },
      },
    ];

    expect( getBodyLogsByMetric( state.bodyLogs, 'weight' ) )
      .toEqual( expectedState );

  } );

  it( 'getBodyLogsByChartFormat should return the correct format for a specific chart', () => {
    const expectedState = [
      { x: '4/24', y: 175.2, measurement: 'lbs' },
      { x: '4/20', y: 176.5, measurement: 'lbs' },
    ];

    const bodyLogs = getBodyLogsByMetric( state.bodyLogs, 'weight' );


    expect( getBodyLogsByChartFormat( bodyLogs, CHART_FORMATS.LINE_CHART, 'weight' ) )
      .toEqual( expectedState );

  } );

  it( 'getSpecifiedBodyLogs() should return body logs with amount, metric and chart format if specificed', () => {


    const expectedState = [ { x: '4/24', y: 175.2, measurement: 'lbs' } ];

    const options = {
      amount: 1,
      metric: 'weight',
      format: CHART_FORMATS.LINE_CHART,
    };

    expect( getSpecifiedBodyLogs( state, options ) ).toEqual( expectedState );


  } );

} );
