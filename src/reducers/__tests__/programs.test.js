import programs from '../programs';


describe( 'programs reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( programs( {}, {} ) ).toEqual( {} );
  } );

} );
