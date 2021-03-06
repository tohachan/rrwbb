import {
    DEFAULT,
} from './constants';

const defaultState = {
    data: ''
};

const initialState = (typeof window !== 'undefined')
    ? window.__INITIAL__DATA__.subbarpage || defaultState
    : defaultState;

export default(state = initialState, action) => {
    switch (action.type) {

        case DEFAULT:
            return Object.assign({}, state, { data: action.data });

        default:
            return state;
    }
};
