export const FETCH_SONG_PENDING = 'FETCH_SONG_PENDING';
export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
export const FETCH_SONG_ERROR = 'FETCH_SONG_ERROR';

function fetchSongPending() {
    return {
        type: FETCH_SONG_PENDING
    }
}

function fetchSongSuccess(songs) {
    return {
        type: FETCH_SONG_SUCCESS,
        songs: songs
    }
}

function fetchSongError(error) {
    return {
        type: FETCH_SONG_ERROR,
        error: error
    }
}
