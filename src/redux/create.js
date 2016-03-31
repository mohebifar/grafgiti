import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default function create() {
  const sagaMiddleware = createSagaMiddleware(sagas);
  const middleware = compose(
    applyMiddleware(sagaMiddleware)
  );

  return createStore(reducers, middleware);
}