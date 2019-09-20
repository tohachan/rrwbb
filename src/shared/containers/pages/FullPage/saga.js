import { call, put, takeLatest, all } from 'redux-saga/effects';

import {
    commentsRoutine,
    postsRoutine,
} from './actions';

export function* doGetComments(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = yield response.json();

    yield put(commentsRoutine.success(comments));

    return comments;
}

export function* doGetPosts(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const posts = yield response.json();

    yield put(postsRoutine.success(posts));

    return posts;
}

export default function* fullpageSaga() {
    yield takeLatest(commentsRoutine.TRIGGER, doGetComments);
    yield takeLatest(postsRoutine.TRIGGER, doGetPosts);
}
