import {ActionTypes} from '../constants/action_types';

const initialState = {
    books : [],
    /* For Testing Initial State 
        {
            id: 1,
            title : 'John',
            category : 'Male',
        }
    */
};

// Manages the state 
export const bookReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BOOKS:
            return {...state, books: payload};
    
        default:
            return state;
    }
}

export const selectedBookReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_BOOK:
            return {...state, ...payload};
        
        // Remove Selected Book

        case ActionTypes.REMOVE_SELECTED_BOOK:
            return {};

    
        default:
            return state;
    }
}


