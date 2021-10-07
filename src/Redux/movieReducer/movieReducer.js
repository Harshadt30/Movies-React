import { MOVIE_REQUEST, MOVIE_REQUEST_SUCESS, MOVIE_REQUEST_FAIL } from './movieTypes'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case MOVIE_REQUEST_SUCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: payload
            }

        case MOVIE_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: payload
            }
        default:
            return state
    }
}

export default movieReducer