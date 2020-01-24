import { combineReducers } from 'redux';
import songReducer from './songReducer';
import coreReducer from './songReducer';

const rootReducer = combineReducers({
    song: songReducer,
    state: coreReducer
});

export default rootReducer;

// export const getSong = state => state.song;
// export const getSongPending = state => state.pending;
// export const getSongError = state => state.error;