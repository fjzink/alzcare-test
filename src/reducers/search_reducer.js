import { SET_TAGS, SET_PHOTOS } from '../actions/search_actions';

export default function (state = { tags: '', photos: [] }, action) {
    switch (action.type) {
        case SET_TAGS:
            return { ...state, tags: action.payload };
        case SET_PHOTOS:
            return { ...state, photos: action.payload };
        default:
            return state;
    }
}
