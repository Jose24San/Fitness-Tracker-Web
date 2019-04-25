import { getUser, getAuthenticaton } from '../user';

const state = {
  user: {
    email: '',
    uid: '',
  },
};

describe( 'user selectors', () => {

  it( 'should user the user reducer', () => {
    expect( getUser( state ) ).toEqual( { email: '', uid: '' } );
  } );

  it( 'should return boolean depending on whether the user is logged in', () => {
    const loggedOutState = { user: {} };
    expect( getAuthenticaton( loggedOutState ) ).toEqual( false );

    const loggedInState = {
      user: {
        email: 'test@gmail.com',
        uid: 1,
      },
    };
    expect( getAuthenticaton( loggedInState ) ).toEqual( true );
  } );

} );
