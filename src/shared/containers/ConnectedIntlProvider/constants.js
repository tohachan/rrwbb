export const DEFAULT_LOCALE = require('./defaults').DEFAULT_LOCALE;
export const LOCALES = require('./defaults').LOCALES;

export const CHANGE_LOCALE = 'intl/change_locale';
export const CHANGE_LOCALE_SUCCESS = 'intl/change_locale_success';
export const CHANGE_LOCALE_ERROR = 'intl/change_locale_error';

export const SET_LOCALE = 'intl/set_locale';
export const CHANGE_MESSAGES = 'intl/change_messages';

export const LANG_TO_LOCALE = {
    'en': 'en-US',
    'ru': 'ru-RU',
};
export const LOCALE_TO_LANG = {
    'en-US': 'en',
    'ru-RU': 'ru',
};
