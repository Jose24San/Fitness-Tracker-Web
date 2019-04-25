import { getRedirectedFromPage, getRouting } from '../routing';


const state = {
  routing: {
    redirectFrom: 'Dashboard',
  },
};

describe( 'Routing selectors', () => {

  it( 'getRouting() should return routing reducer', () => {
    expect( getRouting( state ) ).toEqual(
      { redirectFrom: 'Dashboard' },
    );
  } );

  it( 'getRedirectedFromPage() should return which page it was redirected from', () => {
    expect( getRedirectedFromPage( state ) ).toEqual( 'Dashboard' );
  } );

} );