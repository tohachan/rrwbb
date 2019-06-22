import { GET_POST, CHANGE_POST } from './constants';

export function getPost() {
    return {
        type: GET_POST,
    };
}

export function changePost(post) {
    return {
        type: CHANGE_POST,
        post,
    };
}
