import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './index';

export default function configureStore(history, initialState = {}) {
    const middleware = [
        thunk,
    ];

    const rootReducer = combineReducers({
        ...rootReducers,
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        //initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
