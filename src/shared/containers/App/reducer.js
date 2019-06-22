import {
    GET_POST,
    CHANGE_POST,
} from 'shared/containers/App/constants';

import {
    DEFAULT_LOCALE,
    SET_LOCALE
} from 'shared/containers/ConnectedIntlProvider/constants';

const initialState = {
    locale: DEFAULT_LOCALE,
    post: {}
};

export default(state = initialState, action) => {
    switch (action.type) {

        case CHANGE_POST:
            return Object.assign({}, state, { post: action.post });

        case SET_LOCALE:
            return Object.assign({}, state, { locale: action.locale });

        default:
            return state;
    }
};
