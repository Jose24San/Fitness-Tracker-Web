import loading from '../loading';
import { AUTHENTICATION } from '../../constants/domains';
import { hideLoading, showLoading } from '../../actions/loading';


describe( 'loading reducer unit tests', () => {

  it( 'should return initial state', () => {
    expect( loading( {}, {} ) ).toEqual( {} );
  } );

  it( 'should handle change loading flag to true for specified domain', () => {
    const action = showLoading( { domain: AUTHENTICATION } );
    const expectedState = {
      [ AUTHENTICATION ]: true,
    };
    expect( loading( {}, action ) ).toEqual( expectedState );
  } );

  it( 'should handle change loading flag to false for specified domain', () => {
    const action = hideLoading( { domain: AUTHENTICATION } );
    const expectedState = { [ AUTHENTICATION ]: false };

    expect( loading( {}, action ) ).toEqual( expectedState );
  } );

} );
