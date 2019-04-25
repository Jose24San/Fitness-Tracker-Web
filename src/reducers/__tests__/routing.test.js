import routing from '../routing';
import { showRedirectMessage } from '../../actions/routing';
import { loginSuccessAction } from '../../actions/authentication';


describe( 'Routing reducer', () => {

  it( 'should return initial state', () => {
    expect( routing( {}, {} ) ).toEqual( {} );
  } );

  it( 'should store page redirect in response to REDIRECT_TO_LOGIN', () => {
    const action = showRedirectMessage( 'Dashboard' );
    expect( routing( {}, action ) ).toEqual( { redirectFrom: 'Dashboard' } );
  } );

  it( 'should clear redirectFrom when user logs in', () => {
    const action = loginSuccessAction();
    const initialState = {
      redirectFrom: 'Dashboard',
    }
    expect( routing( initialState, action ) ).toEqual( {} );
  } );

} );