/**
 * Main global App container
 */

import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { withRouter } from 'react-router-dom';
import { Switch } from 'react-router';

import { FaHeart } from 'react-icons/fa';

// redux
import { connect } from 'react-redux';
import { compose } from 'redux';

import { renderRoutes } from 'react-router-config';
import Routes from 'shared/Routes';

import Nav from 'shared/components/Nav';

// i18n
import { changeLocale, setLocale } from 'shared/containers/ConnectedIntlProvider/actions';
import { injectIntl, FormattedMessage } from 'react-intl';

/**
 * App component
 * @param {Object} props
 */
const App = (props) => {
    useEffect(() => {
        // console.log('App rerender');
    });
    useEffect(() => {
        // console.log('App init');

        // We have to sync persisted state since server data and persisted data might be differrent
        if (props.global.locale) {
            props.dispatch(setLocale(props.global.locale));
        }
    }, []);

    const { formatMessage } = props.intl;

    return (
        <React.Fragment>
            <Helmet
                titleTemplate={'%s | RRWBB SSR setup'}
                defaultTitle={'RRWBB SSR setup'}
            >
                <meta charSet="utf-8" />
                <meta name="description" content={formatMessage({
                    id: 'meta.description',
                    defaultMessage: 'Default meta description'
                })} />
                <meta name="keywords" content="react webpack babel" />
                <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" type="javascript/auto" href="/manifest.json" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <title>{formatMessage({
                    id: 'meta.title',
                    defaultMessage: 'Default meta title'
                })}</title>
            </Helmet>

            <div className="hero-head">
                <Nav
                    changeLocale={(locale) => props.dispatch(changeLocale(locale))}
                    setLocale={(locale) => props.dispatch(setLocale(locale))}
                    locale={props.global.locale}
                    i18n={props.i18n}
                />
            </div>
            <div className="hero-body hero-body_main">
                <div className="container main-container">
                    <Switch>
                        {renderRoutes(Routes)}
                    </Switch>
                </div>
            </div>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>RRWBB</strong> by @tohachan. Made with
                        <FaHeart className="has-text-danger" />
                    </p>
                </div>
            </footer>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        global: state.global,
        i18n: state.i18n,
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

App.propTypes = {
    global: PropTypes.object,
    i18n: PropTypes.object,
    intl: PropTypes.object,
    dispatch: PropTypes.func,
};

export default compose(withConnect, hot, injectIntl, withRouter)(App);
