import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunkMiddleWare from 'redux-thunk';

export default createStore(
    reducers,
    applyMiddleware(thunkMiddleWare)
);

