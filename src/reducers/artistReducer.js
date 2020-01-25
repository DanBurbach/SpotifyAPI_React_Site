import { List, Map, fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Map({
    isFetching: false,
    items: List(),
    details: Map()
});

function receiveArtist(state, artistsList) {
    var newState = fromJS({
        items: artistsList.items,
        isFetching: false
    });
    return state.merge(newState);
}

function requestArtist(state) {
    let newState = Map({
        isFetching: true
    });
    return state.merge(newState);
}

function receiveArtistDetail(state, artist) {
    var newState = fromJS({
        details: artist,
        isFetching: false
    });
    return state.merge(newState);
}

function requestArtistDetail(state) {
    let newState = Map({
        isFetching: true
    });
    return state.merge(newState);
}

export default function artists(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_ARTIST:
            return receiveArtist(state, action.artists);

        case types.REQUEST_ARTIST:
            return requestArtist(state);

        case types.RECEIVE_ARTIST_DETAILS:
            return receiveArtistDetail(state, action.artist);

        case types.REQUEST_ARTIST_DETAILS:
            return requestArtistDetail(state);

        default:
            return state;
    }
}