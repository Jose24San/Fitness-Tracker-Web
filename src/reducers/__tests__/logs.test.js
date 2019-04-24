import logs from '../logs';


describe( 'logs reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( logs( {}, {} ) ).toEqual( {} );
  } );

} );
