import building from '../building';


describe( 'building reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( building( {}, {} ) ).toEqual( {} );
  } );

} );