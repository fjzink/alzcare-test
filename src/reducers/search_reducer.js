import { SET_TAGS } from '../actions/search_actions';

export default function (state = { tags: '' }, action) {
    switch (action.type) {
        case SET_TAGS:
            return { ...state, tags: action.payload };
        default:
            return state;
    }
}
