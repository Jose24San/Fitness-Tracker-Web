import { HIDE_LOADING, SHOW_LOADING } from '../constants/loading';


export const showLoading = data => ( {
  type: SHOW_LOADING,
  payload: data,
} );

export const hideLoading = data => ( {
  type: HIDE_LOADING,
  payload: data,
} );
