import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import rootReducers from './index';
//import { createBrowserHistory } from 'history';

//export const history = createBrowserHistory();

export default function configureStore(history) {
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  const createRootReducer = (history) => combineReducers({
    ...rootReducers,
    router : connectRouter(history)
  });

  const enhancers = [];
  const windowIfDefined = typeof window === 'undefined' ? null : window;
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(
    createRootReducer(history),
    //initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ...middleware
      ),
      ...enhancers
    )
  );
}
