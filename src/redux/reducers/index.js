import {combineReducers} from 'redux';
import {counterReducer} from './counterReducer';
import {newsReducer} from './newsReducer';

export default combineReducers({
    counterReducer, newsReducer
})