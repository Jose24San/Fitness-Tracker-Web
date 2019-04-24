import exercises from '../exercises';


describe( 'exercises reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( exercises( {}, {} ) ).toEqual( {} );
  } );

} );
