/**
 * Page SubFooPage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithReducer } from 'shared/components/WithReducer';
import SubFooPageReducer from './reducer';
import { WithSaga } from 'shared/components/WithSaga';
import subfoopageSaga from './saga';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.scss';
import {
    defaultAction,
} from './actions';

function SubFooPage() {
    return (
        <React.Fragment>
            <Helmet>
                <title>SubFooPage</title>
            </Helmet>

            <h3 className="title is-3"><FormattedMessage {...messages.title} /></h3>
        </React.Fragment>
    );
}

SubFooPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        subfoopage: state.subfoopage,
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

SubFooPage.propTypes = {
    subfoopage: PropTypes.object,
    dispatch: PropTypes.func,
};

export default compose(
    WithReducer('subfoopage', SubFooPageReducer),
    WithSaga('subfoopage', subfoopageSaga),
    withConnect,
)(SubFooPage);
