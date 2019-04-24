import { LOGIN_SUCCESS } from '../constants/authentication';


export default function user( state = {}, action ) {
  switch ( action.type ) {

    case LOGIN_SUCCESS:
      return {
        ...action.payload,
      };

    default: return state;
  }
}
