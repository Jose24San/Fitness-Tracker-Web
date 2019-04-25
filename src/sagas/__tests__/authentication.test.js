import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { login, loginREST, watchLoginRequest } from '../authentication';
import * as matchers from 'redux-saga-test-plan/matchers';
import { LOGIN_REQUEST } from '../../constants/authentication';
import { loginFailedAction, loginSuccessAction } from '../../actions/authentication';
import { hideLoading, showLoading } from '../../actions/loading';
import { AUTHENTICATION } from '../../constants/domains';
import { handleErrorAction } from '../../actions/errors';

/*
*
* What is the unit under test? ( module, function, class )
* What should it do?
* What was the actual output?
* What was the expected output?
* How do your reproduce the failure?
*
* */


describe( 'Authentication saga functionality', () => {

  // it( 'Logs user in', () => {
  //   const action = { payload: { email: 'test@gmail.com', password: 'test' } };
  //   const response = { email: 'test@gmail.com', password: 'test' };
  //
  //   return expectSaga( login, action )
  //     .provide(
  //       [
  //         call(
  //           [ firebase.auth(), firebase.auth().signInWithEmailAndPassword ],
  //           action.payload.email,
  //           action.payload.password,
  //         ), response ],
  //     )
  //     .put( showLoading( { domain: AUTHENTICATION } ) )
  //     .put( loginSuccessAction( { email: 'test@gmail.com', password: 'test' } ) )
  //     .run();
  //
  //
  // } );

  /*
    * request happens
    *
    * loading flag changed to true
    * - loading = true || false
    * - domain specific
    * authentication: true
    *
    * success happens
    *
    * store user credentials inside of user reducer
    *
    * change loading flag to false
    *  */

  describe( 'login() saga functionality', () => {
    const action = {
      type: LOGIN_REQUEST,
      payload: { email: 'test', password: 'test' },
    };
    const { email, password } = action.payload;
    const gen = cloneableGenerator( login )( action );

    it( 'should put showLoading()', () => {
      expect( gen.next().value )
        .toEqual( put( showLoading( { domain: AUTHENTICATION } ) ) );
    } );

    it( 'should call loginREST', () => {
      const response = {};
      expect( gen.next( response ).value ).toEqual( call( loginREST, email, password ) );
    } );

    it( 'should handle error by put loginFailedAction() and put handleErrorAction()', () => {
      const clone = gen.clone();
      const error = {};
      const user = { email: '', user: '' };

      clone.next( user );

      expect( clone.throw( error ).value ).toEqual( put( loginFailedAction() ) );

      expect( clone.next().value ).toEqual( put(
        handleErrorAction( { error, domain: AUTHENTICATION } ),
      ) );

    } );

    it( 'should put loginSuccesstAction()', () => {
      const response = { user: { email: '', uid: '' } };
      expect( gen.next( response ).value )
        .toEqual(
          put( loginSuccessAction( { email: '', uid: '' } ) ),
        );
    } );

    it( 'should put hideLoading()', () => {
      const payload = { domain: AUTHENTICATION };
      expect( gen.next().value ).toEqual( put( hideLoading( payload ) ) );
    } );

    it( 'login() saga should be finished', () => {
      expect( gen.next().done ).toEqual( true );
    } );

  } );


  describe( 'saga watcher', () => {
    it( 'watchLoginRequest() should create a saga watcher for LOGIN_REQUEST', () => {
      const gen = cloneableGenerator( watchLoginRequest )();

      expect( JSON.stringify( gen.next().value ) )
        .toEqual( JSON.stringify( fork(
          takeEvery,
          LOGIN_REQUEST,
          login,
        ) ) );
    } );


    // it( 'watchAuthChange() should create a saga watcher for auth event emitter', () => {
    //   const gen = cloneableGenerator( watchAuthChanges )();
    //
    //   expect( JSON.stringify( gen.next().value ) )
    //     .toEqual( JSON.stringify( fork(
    //       takeEvery,
    //     ) ) )
    // } );
  } );

} );
