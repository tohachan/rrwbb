import { call, put, takeLatest, all } from 'redux-saga/effects';

import { GET_POST, CHANGE_POST } from 'shared/containers/App/constants';

import {
    CHANGE_LOCALE,
    CHANGE_MESSAGES,
    SET_LOCALE,
} from 'shared/containers/ConnectedIntlProvider/constants';

export function* doGetPost(action) {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts/1');
    const post = yield response.json();

    yield put({ type: CHANGE_POST, post });

    return post;
}

export function* doChangeLocale(action) {
    const { locale } = action;

    const response = yield call(fetch, `/intl/${locale}.json`);
    const messages = yield response.json();

    yield put({ type: CHANGE_MESSAGES, data: { [locale]: messages } });
    yield put({ type: SET_LOCALE, locale });

    return messages;
}

export default function* globalSaga() {
    yield takeLatest(GET_POST, doGetPost);
    yield takeLatest(CHANGE_LOCALE, doChangeLocale);
}
