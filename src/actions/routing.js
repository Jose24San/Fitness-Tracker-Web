import { REDIRECT_TO_LOGIN } from '../constants/routing';

export const showRedirectMessage = data => ( {
  type: REDIRECT_TO_LOGIN,
  payload: data,
} );
