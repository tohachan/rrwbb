import { call, put, takeLatest } from 'redux-saga/effects';

import {
    DEFAULT,
} from './constants';

export function* doDefault(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = yield response.json();

    // yield put({ type: DEFAULT_SUCCESS, comments });

    return comments;
}

export default function* subbarpageSaga() {
    yield takeLatest(DEFAULT, doDefault);
}
