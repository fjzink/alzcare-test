export const SET_TAGS = 'set_tags';

export function setTags(tags) {
    return {
        type: SET_TAGS,
        payload: tags,
    };
}
