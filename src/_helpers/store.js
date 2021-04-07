import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers/rootReducer';
import promiseMiddleware from 'redux-promise-middleware';

// const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            // loggerMiddleware,
            promiseMiddleware
        )
    );
}