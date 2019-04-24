import profile from '../profile';


describe( 'profile reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( profile( {}, {} ) ).toEqual( {} );
  } );

} );
