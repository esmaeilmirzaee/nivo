import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';

export const reducers = combineReducers({
    transaction: transactionReducer,
});
