// import { List, Map, fromJS } from 'immutable';
// import * as types from '../constants/ActionTypes';

// const initialState = Map({
//     isFetching: false,
//     items: List(),
//     details: Map(),
//     total: 0
// });

// function receiveArtistAlbum(state, artistAlbum, totalAlbum) {
//     var newState = fromJS({
//         items: artistAlbum,
//         isFetching: false,
//         total: totalAlbum
//     });
//     return state.merge(newState);
// }

// function requestArtistAlbum(state) {
//     let newState = Map({
//         isFetching: true
//     });
//     return state.merge(newState);
// }

// function receiveAlbumDetails(state, albumDetails) {
//     var newState = fromJS({
//         details: albumDetails, // TODO: extract details from the correct property of the artistDetails object
//         isFetching: false
//     });
//     return state.merge(newState);
// }

// function requestAlbumDetails(state) {
//     let newState = Map({
//         isFetching: true
//     });
//     return state.merge(newState);
// }

// export default function artistAlbum(state=initialState, action) {
//   switch(action.type) {
//     case types.RECEIVE_ARTIST_ALBUMS:
//       return receiveArtistAlbum(state, action.albums, action.total);

//     case types.REQUEST_ARTIST_ALBUMS:
//       return requestArtistAlbum(state);

//     case types.RECEIVE_ALBUM_DETAILS:
//       return receiveAlbumDetails(state, action.details);

//     case types.REQUEST_ALBUM_DETAILS:
//       return requestAlbumDetails(state);

//     default:
//       return state;
//   }
// }