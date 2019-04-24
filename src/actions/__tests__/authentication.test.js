import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../../constants/authentication';
import { loginFailedAction, loginRequestAction, loginSuccessAction } from '../authentication';


describe( 'Authentication action creators', () => {


  it( 'loginRequestAction() should dispatch a LOGIN_REQUEST event', () => {
    const expectedAction = {
      type: LOGIN_REQUEST,
      payload: { email: 'test', password: 'test' },
    };

    expect( loginRequestAction( { email: 'test', password: 'test' } ) )
      .toEqual( expectedAction );

  } );

  it( 'loginFailedAction() should dispatch a LOGIN_FAILED event', () => {
    const expectedAction = {
      type: LOGIN_FAILED,
      payload: 1,
    };

    expect( loginFailedAction( 1 ) ).toEqual( expectedAction );
  } );

  it( 'loginSuccessAction() should dispatch a LOGIN_SUCCESS event', () => {
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: 1,
    };

    expect( loginSuccessAction( 1 ) ).toEqual( expectedAction );
  } );

} );
