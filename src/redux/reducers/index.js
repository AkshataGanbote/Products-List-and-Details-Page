import { combineReducers } from "redux";
import { bookReducer, selectedBookReducer} from "./bookReducer";


const reducers = combineReducers({
    allBooks: bookReducer,
    book: selectedBookReducer,
});

export default reducers;

