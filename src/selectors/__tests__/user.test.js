import { getUser } from '../user';

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

} );
