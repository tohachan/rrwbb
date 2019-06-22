import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_POSTS,
    GET_POSTS_SUCCESS,
} from './constants';

export function* doGetComments(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = yield response.json();

    yield put({ type: GET_COMMENTS_SUCCESS, comments });

    return comments;
}

export function* doGetPosts(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');

    const posts = yield response.json();

    yield put({ type: GET_POSTS_SUCCESS, posts });

    return posts;
}

export default function* fullpageSaga() {
    yield takeLatest(GET_COMMENTS, doGetComments);
    yield takeLatest(GET_POSTS, doGetPosts);
}
