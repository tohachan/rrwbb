import {
    commentsRoutine,
    postsRoutine,
} from './actions';

const defaultState = {
    commentsLoading: false,

    comments: [],
    posts: []
};

const initialState = (typeof window !== 'undefined')
    ? window.__INITIAL__DATA__.fullpage || defaultState
    : defaultState;

export default(state = initialState, action) => {
    switch (action.type) {

        case commentsRoutine.TRIGGER:
            return {
                ...state,
                commentsLoading: true,
            };

        case commentsRoutine.SUCCESS:
            return {
                ...state,
                comments: action.payload,
                commentsLoading: false,
            };

        case postsRoutine.SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };

        default:
            return state;
    }
};
