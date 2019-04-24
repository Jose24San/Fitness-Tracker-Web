import user from '../user';
import { loginSuccessAction } from '../../actions/authentication';


describe( 'user reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( user( {}, {} ) ).toEqual( {} );
  } );

  it( 'should store user info in respone to LOGIN_SUCCESS event', () => {
    const action = loginSuccessAction( {
      email: 'test',
      id: 1,
    } );
    const expectedState = { email: 'test', id: 1 };

    expect( user( {}, action ) ).toEqual( expectedState );
  } );

} );
