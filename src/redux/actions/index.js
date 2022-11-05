import {INCREMENT, DECREMENT} from './counterActionTypes';
import {SHOW, PAST, JOBS, COMMENTS, ASK, NEW, SUBMIT} from '../actions/newsActionTypes';

export const increment = (number) => {
    return {
        type: INCREMENT,
        payload: number
    };
};
export const decrement = (number) => {
    return {
        type: DECREMENT,
        payload: number
    };
};
export const filterShow = () => {
    return {
        type: SHOW
    };
};
export const filterPast = () => {
    return {
        type: PAST
    };
};
export const filterNew = () => {
    return {
        type: NEW
    };
};