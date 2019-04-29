import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { BODY_LOGS } from '../constants/reducerObjects';
import { hideLoadingAction, showLoadingAction } from '../actions/loading';
import { firebaseService } from '../utilities/firebase';
import {
  listenForBodyLogsAction,
  recievedBodyLogsAction,
} from '../actions/bodyLogs';


export function* bodyLogsListener( uid ) {
  // #1
  yield put( showLoadingAction( { dataType: BODY_LOGS } ) );
  yield put( listenForBodyLogsAction( { uid } ) );

  const channel = new eventChannel( emiter => {
    const listener = firebaseService.listenToBodyLogs( uid ).onSnapshot( querySnapshot => {

      const bodyLogs = [];
      querySnapshot.forEach( document => {
        bodyLogs.push( { uid: document.id, ...document.data() } );
      } );

      emiter( bodyLogs );
    } );

    // #2
    return () => {
      listener.off();
    };
  } );

  // #3
  while ( true ) {
    const response = yield take( channel );
    // const { email, uid } = response;

    yield put( recievedBodyLogsAction( response ) );
    yield put( hideLoadingAction( { dataType: BODY_LOGS } ) );
  }
}
