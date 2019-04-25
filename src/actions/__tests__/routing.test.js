import { REDIRECT_TO_LOGIN } from '../../constants/routing';
import { showRedirectMessage } from '../routing';


describe( 'Routing action creators', () => {

  it( 'showRedirectMessage() should dispatch REDIRECT_TO_LOGIN', () => {
    const expectedAction = {
      type: REDIRECT_TO_LOGIN,
      payload: 'Dashboard',
    };

    expect( showRedirectMessage( 'Dashboard' ) ).toEqual( expectedAction );
  } );

} );