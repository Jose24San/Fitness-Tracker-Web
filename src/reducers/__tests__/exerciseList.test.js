import exerciseList from '../exerciseList';


describe( 'exerciseList reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( exerciseList( {}, {} ) ).toEqual( {} );
  } );

} );