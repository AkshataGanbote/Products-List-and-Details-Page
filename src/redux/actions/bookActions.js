import {ActionTypes} from '../constants/action_types';

export const setBooks = (books) =>{
  return {
    type : ActionTypes.SET_BOOKS,
    payload : books,
  }
}

export const selectedBook = (book) =>{
    return {
      type : ActionTypes.SELECTED_BOOK,
      payload : book,
    }
}

export const removeSelectedBook = () =>{
  return {
    type : ActionTypes.REMOVE_SELECTED_BOOK,
  }
}
