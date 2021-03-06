import { eventChannel } from 'redux-saga';
import { put, take } from 'redux-saga/effects';
import * as firebase from 'firebase';
import { hideLoadingAction, showLoadingAction } from '../actions/loading';
import { BODY_LOGS, SAVED_WORKOUTS } from '../constants/reducerObjects';
import { listenForSavedWorkoutsAction, receivedSavedWorkoutsAction } from '../actions/savedWorkouts';

export function* savedWorkoutsListener( uid ) {
  // #1
  yield put( showLoadingAction( { dataType: BODY_LOGS } ) );
  yield put( listenForSavedWorkoutsAction( { uid } ) );

  const channel = new eventChannel( emiter => {
    const listener = firebase.firestore()
      .collection( 'savedWorkouts' )
      .where( 'userId', '==', uid )
      .orderBy( 'created', 'desc' )
      .onSnapshot( snapShot => {

        const savedWorkouts = [];
        snapShot.forEach( doc => {
          savedWorkouts.push( { ...doc.data(), documentId: doc.id } );
        } );

        emiter( { savedWorkouts } );
      } );

    // #2
    return () => {
      listener.off();
    };
  } );

  // #3
  while ( true ) {
    const response = yield take( channel );

    yield put( receivedSavedWorkoutsAction( response ) );
    yield put( hideLoadingAction( { dataType: SAVED_WORKOUTS } ) );
  }
}
