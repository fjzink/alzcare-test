export const SET_TAGS = 'set_tags';
export const SET_PHOTOS = 'set_photos';

export function setTags(tags) {
    return {
        type: SET_TAGS,
        payload: tags,
    };
}

export function setPhotos(photos) {
    return {
        type: SET_PHOTOS,
        payload: photos,
    };
}
