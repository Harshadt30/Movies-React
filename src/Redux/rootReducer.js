import { combineReducers } from "redux";
import genreReducer from "./genreReducer/genreReducer";
import movieReducer from "./movieReducer/movieReducer";

const rootReducer = combineReducers({
    genre: genreReducer,
    movie: movieReducer
})

export default rootReducer