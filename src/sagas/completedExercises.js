import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as firebase from 'firebase';
import { hideLoadingAction, showLoadingAction } from '../actions/loading';
import { COMPLETED_EXERCISES } from '../constants/reducerObjects';
import { listenForCompletedExercisesAction, recievedCompletedExercisesAction } from '../actions/completedExercises';


export function* completedExerciseListener( uid ) {
  yield put( showLoadingAction( { dataType: COMPLETED_EXERCISES } ) );
  yield put( listenForCompletedExercisesAction( { uid } ) );

  const channel = new eventChannel( emiter => {

    const listener = firebase.firestore()
      .collection( 'completedExercises' )
      .where( 'userId', '==', uid )
      .orderBy( 'trackedOn', 'desc' )
      .onSnapshot( snapshot => {

        const completedExercises = [];
        snapshot.forEach( doc => completedExercises.push( { ...doc.data() } ) )
        emiter( completedExercises );
      } );

    // #2
    return () => {
      listener.off();
    };
  } );

  // #3
  while ( true ) {
    const response = yield take( channel );

    yield put( recievedCompletedExercisesAction( response ) );
    yield put( hideLoadingAction( { dataType: COMPLETED_EXERCISES } ) );
  }
}
