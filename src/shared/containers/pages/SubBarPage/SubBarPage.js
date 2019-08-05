/**
 * Page SubBarPage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithReducer } from 'shared/components/WithReducer';
import SubBarPageReducer from './reducer';
import { WithSaga } from 'shared/components/WithSaga';
import subbarpageSaga from './saga';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.scss';
import {
    defaultAction,
} from './actions';

function SubBarPage() {
    return (
        <React.Fragment>
            <Helmet>
                <title>SubBarPage</title>
            </Helmet>

            <h3 className="title is-3"><FormattedMessage {...messages.title} /></h3>
        </React.Fragment>
    );
}

SubBarPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        subbarpage: state.subbarpage,
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

SubBarPage.propTypes = {
    subbarpage: PropTypes.object,
    dispatch: PropTypes.func,
};

export default compose(
    WithReducer('subbarpage', SubBarPageReducer),
    WithSaga('subbarpage', subbarpageSaga),
    withConnect,
)(SubBarPage);
