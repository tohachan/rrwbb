import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';

const enLocaleData = require('react-intl/locale-data/en');
const ruLocaleData = require('react-intl/locale-data/ru');

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

function ConnectedIntlProvider(props) {
    // console.log('ConnectedIntlProvider: ', props.global.locale, props.i18n);

    return (
        <IntlProvider
            locale={props.global.locale}
            messages={props.i18n[props.global.locale]}
            >
            {props.children}
        </IntlProvider>
    );
}

const mapStateToProps = state => {
    return {
        global: state.global,
        i18n: state.i18n,
    };
};

export default connect(mapStateToProps)(ConnectedIntlProvider);
