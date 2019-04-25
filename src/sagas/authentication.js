import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as firebase from 'firebase';
import { LOGIN_REQUEST } from '../constants/authentication';
import { handleErrorAction } from '../actions/errors';
import { AUTHENTICATION } from '../constants/domains';
import { loginFailedAction, loginSuccessAction } from '../actions/authentication';
import { hideLoading, showLoading } from '../actions/loading';
import { getUser } from '../selectors/user';


export function* loginREST( email, password ) {
  return yield call(
    [ firebase.auth(), firebase.auth().signInWithEmailAndPassword ],
    email,
    password,
  );
}

export function* login( action ) {
  try {
    yield put( showLoading( { domain: AUTHENTICATION } ) );
    const response = yield call(
      loginREST,
      action.payload.email,
      action.payload.password,
    );

    const { email, uid } = response.user;
    yield put( loginSuccessAction( { email, uid } ) );
  }
  catch ( error ) {
    console.log( 'error logging in', error );
    yield put( loginFailedAction() );
    yield put( handleErrorAction( { error, domain: AUTHENTICATION } ) );
  }

  yield put( hideLoading( { domain: AUTHENTICATION } ) );
}

export function* watchLoginRequest() {
  yield takeEvery( LOGIN_REQUEST, login );
}


export function* watchAuthchanges() {
  // #1
  const channel = new eventChannel( emiter => {
    // const listener = database.ref( 'todos' ).on( 'value', snapshot => {
    //   emiter( { data: snapshot.val() || {} } );
    // } );

    const listener = firebase.auth().onAuthStateChanged( user => {
      if ( user ) {
        emiter( user );
      }
    } );

    // #2
    return () => {
      listener.off();
    };
  } );

  // #3
  while ( true ) {
    const response = yield take( channel );
    const { email, uid } = response;

    // #4
    const user = yield select( getUser );
    if ( user.email === '' && user.uid === '' ) {
      yield put( loginSuccessAction( { email, uid } ) );
    }
  }
}
