import { all, call } from 'redux-saga/effects';

export const waitAll = (sagas) => function* () {
    const tasks = yield sagas.map(([saga, ...params]) => call(saga, ...params));
    const [...responses] = yield all(tasks);

    return responses;
};
