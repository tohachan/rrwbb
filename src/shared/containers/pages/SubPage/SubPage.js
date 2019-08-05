/**
 * Page SubPage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { renderRoutes } from 'react-router-config';

import { WithReducer } from 'shared/components/WithReducer';
import SubPageReducer from './reducer';
import { WithSaga } from 'shared/components/WithSaga';
import subpageSaga from './saga';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.scss';
import {
    defaultAction,
} from './actions';

function SubPage({ route }) {
    return (
        <React.Fragment>
            <Helmet>
                <title>SubPage</title>
            </Helmet>

            <section className="section SubPage">
                <div className="container">
                    <h2 className="title is-2"><FormattedMessage {...messages.title} /></h2>

                    {renderRoutes(route.routes)}
                </div>
            </section>
        </React.Fragment>
    );
}

SubPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        subpage: state.subpage,
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

SubPage.propTypes = {
    route: PropTypes.object,
    routes: PropTypes.array,
    subpage: PropTypes.object,
    dispatch: PropTypes.func,
};

export default compose(
    WithReducer('subpage', SubPageReducer),
    WithSaga('subpage', subpageSaga),
    withConnect,
)(SubPage);
