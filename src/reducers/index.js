import { combineReducers } from 'redux';
import CounterReducer from './counterReducer';
import HelloReducer from './helloReducer';
import UsersReducer from './usersReducer';

export default combineReducers({
    counter: CounterReducer,
    hello: HelloReducer,
    users: UsersReducer,
});