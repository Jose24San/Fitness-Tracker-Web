import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/authentication';


export const loginRequestAction = data => ( {
  type: LOGIN_REQUEST,
  payload: data,
} );

export const loginFailedAction = data => ( {
  type: LOGIN_FAILED,
  payload: data,
} );

export const loginSuccessAction = data => ( {
  type: LOGIN_SUCCESS,
  payload: data,
} );
