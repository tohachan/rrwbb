import * as Cookies from 'js-cookie';

import {
    CHANGE_LOCALE,
    CHANGE_LOCALE_SUCCESS,
    CHANGE_LOCALE_ERROR,

    CHANGE_MESSAGES,
    SET_LOCALE,
} from './constants';

export function changeLocale(locale) {
    Cookies.set('locale', locale);

    return {
        type: CHANGE_LOCALE,
        locale,
    };
}

export function changeLocaleSuccess(messages) {
    return {
        type: CHANGE_LOCALE_SUCCESS,
        data: messages
    };
}

export function changeLocaleError(err) {
    return {
        type: CHANGE_LOCALE_ERROR,
        err
    };
}

export function changeMessages(messages) {
    return {
        type: CHANGE_MESSAGES,
        data: messages
    };
}

export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        locale
    };
}
