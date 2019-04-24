import tracking from '../tracking';


describe( 'tracking reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( tracking( {}, {} ) ).toEqual( {} );
  } );

} );
