import axios from "axios";
import { MOVIE_REQUEST, MOVIE_REQUEST_SUCESS, MOVIE_REQUEST_FAIL } from "./movieTypes";

export const movieRequest = () => ({

    type: MOVIE_REQUEST
})

export const movieRequestSucess = movieData => ({

    type: MOVIE_REQUEST_SUCESS,
    payload: movieData
})

export const movieRequestFail = movieError => ({

    type: MOVIE_REQUEST_FAIL,
    payload: movieError
})

export const fetchMovies = (url) => (

    (dispatch) => {

        dispatch(movieRequest)
        axios.get(url)
            .then(response => {

                const movieData = response.data;
                dispatch(movieRequestSucess(movieData))
            })
            .catch(error => {

                const movieError = error.message;
                dispatch(movieRequestFail(movieError))
            })
    })
