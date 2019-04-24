import { hideLoading, showLoading } from '../loading';
import { HIDE_LOADING, SHOW_LOADING } from '../../constants/loading';


describe( 'loading action creators', () => {

  it( 'showLoading() should dispatch SHOW_LOADING event', () => {
    const expectedAction = {
      type: SHOW_LOADING,
      payload: 1,
    };

    expect( showLoading( 1 ) ).toEqual( expectedAction );
  } );

  it( 'hideLoading() should dispatch HIDE_LOADING event', () => {
    const expectedAction = {
      type: HIDE_LOADING,
      payload: 1,
    };

    expect( hideLoading( 1 ) ).toEqual( expectedAction );
  } );

} );