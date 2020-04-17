// import $ from "jquery";

// export const FETCH_SONG_PENDING = 'FETCH_SONG_PENDING';
// export const FETCH_SONG_SUCCESS = 'FETCH_SONG_SUCCESS';
// export const FETCH_SONG_ERROR = 'FETCH_SONG_ERROR';

// export function fetchSongPending() {
//     return {
//         type: FETCH_SONG_PENDING
//     }
// }

// export function fetchSongSuccess(songs) {
//     return {
//         type: FETCH_SONG_SUCCESS,
//         songs: songs
//     }
// }

// export function fetchSongError(error) {
//     return {
//         type: FETCH_SONG_ERROR,
//         error: error
//     }
// }

// export function fetchSong(token) {
//     $.ajax({
//         url: "https://api.spotify.com/v1/me/player",
//             type: "GET",
//             beforeSend: (xhr) => {
//                 xhr.setRequestHeader("Authorization", "Bearer " + token);
//             },
//             success: (data) => {
//                 this.setState({
//                     item: data.item,
//                     is_playing: data.is_playing,
//                     progress_ms: data.progress_ms,
//                 });
//             }
//         });
// }