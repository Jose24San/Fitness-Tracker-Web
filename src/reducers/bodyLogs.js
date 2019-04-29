import moment from 'moment';
import { RECIEVED_BODY_LOGS } from '../constants/bodyLogs';

export const handleLogs = ( state, action ) => {

  return action.payload
    .map( log => {
      return {
        ...log,
        trackedOn: {
          ...log.trackedOn,
          formatted: moment( moment.unix( log.trackedOn.seconds ) )
            .format( 'MM/DD/YYYY' ),
        },
      };
    } )
    .sort( ( a, b ) => {
      return new Date( b.trackedOn.formatted ) - new Date( a.trackedOn.formatted );
    } );
};

const bodyLogsReducer = ( state = [], action ) => {
  switch ( action.type ) {

    case RECIEVED_BODY_LOGS:
      return handleLogs( state, action );

    default: return state;
  }
};

export default bodyLogsReducer;
