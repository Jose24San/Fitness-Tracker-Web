import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger( {
  duration: true,
  timestamp: false,
  diff: false,
} );


export default function configureStore( initialState ) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware( sagaMiddleware, thunk, logger, reduxImmutableStateInvariant() ),
  );

  sagaMiddleware.run( rootSaga );

  return store;
}
