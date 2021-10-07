import axios from "axios";
import { GENRE_REQUEST, GENRE_REQUEST_SUCESS, GENRE_REQUEST_FAIL, GENRE_ID } from "./genreTypes";

export const genreRequest = () => ({

    type: GENRE_REQUEST
})

export const genreId = id => ({

    type: GENRE_ID,
    payload: id
})

export const genreRequestSucess = genreData => ({

    type: GENRE_REQUEST_SUCESS,
    payload: genreData
})

export const genreRequestFail = genreError => ({

    type: GENRE_REQUEST_FAIL,
    payload: genreError
})

export const fetchGenre = () => (

    (dispatch) => {

        dispatch(genreRequest)
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b2f74f99038f05879b5e3be6c3411afe&language=en-US')
            .then(response => {

                const genreData = response.data;
                dispatch(genreRequestSucess(genreData))
            })
            .catch(error => {

                const genreError = error.message;
                dispatch(genreRequestFail(genreError))
            })
    })

export const updateId = id => (
    (dispatch) => { dispatch(genreId(id)) }
)
