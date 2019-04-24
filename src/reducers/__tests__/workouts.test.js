import workouts from '../workouts';


describe( 'workouts reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( workouts( {}, {} ) ).toEqual( {} );
  } );

} );