import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducers';
import rootSaga from '../saga/sagas';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;