import { GENRE_ID, GENRE_REQUEST, GENRE_REQUEST_FAIL, GENRE_REQUEST_SUCESS } from "./genreTypes"

const initialState = {

    loading: false,
    data: [],
    error: '',
    genreId: 0
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {

        case GENRE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GENRE_ID:
            return {
                ...state,
                genreId: action.payload
            }

        case GENRE_REQUEST_SUCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: action.payload
            }

        case GENRE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default genreReducer
