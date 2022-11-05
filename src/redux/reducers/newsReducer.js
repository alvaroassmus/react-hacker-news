import {SHOW, PAST, JOBS, COMMENTS, ASK, NEW, SUBMIT} from '../actions/newsActionTypes';

const initialState = {
    filter: NEW,
};

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                filter: SHOW
            }
        case PAST:
            return {
                ...state,
                filter: PAST
            }
        case NEW:
            return {
                ...state,
                filter: NEW
            }
        default:
            return state;
    }
};