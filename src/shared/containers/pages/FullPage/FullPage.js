import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';

import StaticChunk from 'shared/containers/pages/FullPage/staticChunk';
import StaticChunk2 from 'shared/containers/pages/FullPage/staticChunk2';
import DynamicChunk from 'shared/containers/pages/FullPage/dynChankLoader';

import { WithReducer } from 'shared/components/WithReducer';
import { WithSaga } from 'shared/components/WithSaga';

import FullPageReducer from './reducer';

import { doGetPost } from 'shared/containers/App/saga';
import fullpageSaga, { doGetComments, doGetPosts } from './saga';

import { getPost } from 'shared/containers/App/actions';
import { getComments, getPosts } from './actions';

import TextPlaceholder from 'shared/components/TextPlaceholder';

function FullPage (props) {
    useEffect(() => {
        props.dispatch(getPosts());
    }, []);

    const { posts, comments, commentsLoading } = props.fullpage;

    const listHtml = posts.map((item, i) => (
        <article
            key={i}
            className="message"
        >
            <div className="message-header">
                <p>{item.id} {item.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {item.body}
            </div>
        </article>
    ));

    const commentsHtml = comments.map((item, i) => (
        <article
            key={i}
            className=""
        >
            <p>{item.id} {item.name}, {item.email}</p>
        </article>
    ));

    return (
        <React.Fragment>
            <Helmet>
                <title>Loadable page with requested data</title>
            </Helmet>

            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Loadable page with requested data and injected reducer and saga</h2>

                    <p>This page is loadable.</p>
                    <p>Reducer for this page is injected on page load.</p>
                    <p>Saga for this page is injected on page load and ejected on page unload.</p>
                    <p>This page load another loadable component with static content.</p>
                    <p className="m-b-xl">This page request data by API before load on server side (on page reload) and after load by client side.</p>

                    <div className="box">
                        <h3 className="title">Get data (trigger injected saga watcher)</h3>
                        <h4 className="subtitle">from GET https://jsonplaceholder.typicode.com/comments?postId=1</h4>

                        <div>
                            <button
                                onClick={() => props.dispatch(getComments())}
                                className={'button is-info' + (commentsLoading ? ' is-loading' : '')}
                            >Get them!</button>
                        </div>

                        <div className={comments.length ? 'm-t-lg' : ''}>
                            {commentsLoading ? (<TextPlaceholder />) : commentsHtml}
                        </div>
                    </div>

                    <div className="box">
                        <h3 className="title">Static data from inside container</h3>
                        <h4 className="subtitle">This data will be inside container chunk and preloaded by server</h4>
                        <p>
                            Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг!Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен
                        </p>
                        <p>
                            Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг!Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен
                        </p>
                        <hr/>

                        <h3 className="title">Static data from another static components</h3>
                        <h4 className="subtitle">This data will be inside container chunk and preloaded by server</h4>
                        <StaticChunk />
                        <StaticChunk2 />
                        <hr/>

                        <h3 className="title">Static data from loadable components</h3>
                        <h4 className="subtitle">This data will be <strong>outside</strong> container chunk and preloaded by server in separate chunk</h4>
                        <DynamicChunk />
                        <DynamicChunk />
                        <hr/>

                        <h3 className="title">Dynamic data from GET https://jsonplaceholder.typicode.com/posts api call</h3>
                        <h4 className="subtitle">This data will be requested by server on page <strong>refresh</strong> or by client if opened from another page</h4>
                        {posts.length ? listHtml : (<TextPlaceholder />)}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

// SSR data loaders and reducer export
export const asyncReduxEnhancers = {
    dataLoaders: [
        [doGetPost, getPost()],
        [doGetPosts, {}],
    ],
    asyncReducer: ['fullpage', FullPageReducer]
};

const mapStateToProps = state => {
    return {
        fullpage: state.fullpage,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

FullPage.propTypes = {
    fullpage: PropTypes.object,
    dispatch: PropTypes.func,
};

export default compose(
    WithReducer('fullpage', FullPageReducer),
    WithSaga('fullpage', fullpageSaga),
    withConnect,
)(FullPage);
