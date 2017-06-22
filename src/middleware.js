import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

export const middleware = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
  ));

export default middleware;