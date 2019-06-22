import {
    CHANGE_LOCALE,
    CHANGE_LOCALE_SUCCESS,
    CHANGE_LOCALE_ERROR,
    CHANGE_MESSAGES,
} from './constants';

const defaultState = {
    'en-US': {},
    'ru-RU': {}
};

const initialState = (typeof window !== 'undefined')
    ? window.__INITIAL__DATA__.i18n || defaultState
    : defaultState;

export default(state = initialState, action) => {
    switch (action.type) {

        case CHANGE_MESSAGES:
            return Object.assign({}, state, action.data);

        default:
            return state;
    }
};
