import authentication from '../authentication';


describe( 'Authentication reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( authentication( {}, {} ) ).toEqual( {} );
  } );

} );