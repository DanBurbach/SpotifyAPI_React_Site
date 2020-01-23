import {FETCH_SONG_PENDING, FETCH_SONG_SUCCESS, FETCH_SONG_ERROR} from '../actions';

const initialState = {
    pending: false,
    song: [],
    error: null
}

export function rootReducer(state = initialState, action){
    return state;
}

export function SongReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SONG_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_SONG_SUCCESS:
            return {
                ...state,
                pending: false,
                song: action.payload
            }
        case FETCH_SONG_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getSong = state => state.song;
export const getSongPending = state => state.pending;
export const getSongError = state => state.error;