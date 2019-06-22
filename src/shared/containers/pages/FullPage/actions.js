import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_POSTS,
    GET_POSTS_SUCCESS,
} from './constants';

export function getComments() {
    return {
        type: GET_COMMENTS,
    };
}

export function getCommentsSuccess(comments) {
    return {
        type: GET_COMMENTS_SUCCESS,
        comments,
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
    };
}

export function getPostsSuccess(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    };
}
