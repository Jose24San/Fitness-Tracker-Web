import { combineReducers } from 'redux';
import user from './user';
import exerciseList from './exerciseList';
import programs from './programs';
import workouts from './workouts';
import loading from './loading';
import errors from './errors';
import profile from './profile';
import logs from './logs';
import building from './building';
import tracking from './tracking';
import authentication from './authentication';
import routing from './routing';
import bodyLogs from './bodyLogs';
import completedExercises from './completedExercises';

const reducers = combineReducers( {
  // Domain data from the server
  bodyLogs,
  completedExercises,
  user,
  exerciseList,
  programs,
  workouts,
  loading,
  errors,
  routing,

  // EDIT state for core Domains in app
  authentication,
  profile,
  logs,
  building,
  tracking,
} );

const rootReducer = ( state, action ) => {
  // if (action.type === LOG_OUT) {
  //   state = undefined;
  // }

  return reducers( state, action );
};


export default rootReducer;
