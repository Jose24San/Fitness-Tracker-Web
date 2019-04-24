import errors from '../errors';


describe( 'errors reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( errors( {}, {} ) ).toEqual( {} );
  } );

} );