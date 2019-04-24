import { HANDLE_ERROR } from '../constants/errors';


export default function errors( state = {}, action ) {
  switch ( action.type ) {

    case HANDLE_ERROR: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: return state;
  }
}
