import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import  rootReducer  from '../reducuers/index'

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(createLogger())
        )
    );
}

const store = configureStore();

module.exports = store;