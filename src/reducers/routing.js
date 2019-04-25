import { REDIRECT_TO_LOGIN } from '../constants/routing';
import { LOGIN_SUCCESS } from '../constants/authentication';


export default function routing( state = {}, action ) {
  switch( action.type ) {
    case LOGIN_SUCCESS:
      return {};

    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectFrom: action.payload,
      };

    default: return state;
  }
}
