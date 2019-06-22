import {
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_POSTS,
    GET_POSTS_SUCCESS,
} from './constants';

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

        case GET_COMMENTS:
            return Object.assign({}, state, { commentsLoading: true });

        case GET_COMMENTS_SUCCESS:
            return Object.assign({}, state, { comments: action.comments, commentsLoading: false });

        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, { posts: action.posts });

        default:
            return state;
    }
};
