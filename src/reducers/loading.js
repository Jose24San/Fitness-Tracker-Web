import { HIDE_LOADING, SHOW_LOADING } from '../constants/loading';


export default function loading( state = {}, action ) {
  switch ( action.type ) {

    case SHOW_LOADING:
      return {
        ...state,
        [ action.payload.domain ]: true,
      };

    case HIDE_LOADING:
      return {
        ...state,
        [ action.payload.domain ]: false,
      };

    default: return state;
  }
}
