/**
 * This is a wrapper component to dynamically call injectSaga
 *
 * */
import React, { useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import PropTypes from 'prop-types';

class SagaLoader extends React.Component {
    constructor(props) {
        super(props);
        const { store, keyName, saga, args } = props;

        store.injectSaga(keyName, saga, args);
    }

    componentWillUnmount() {
        const { store, keyName } = this.props;

        store.ejectSaga(keyName);
    }

    render() {
        return this.props.children;
    }
}

// using functional component with useEffect will cause delay for injection so
// useEffect inside child component wouldn't work without some magic like setTimeout

// function SagaLoader (props) {
//     const { store, keyName, saga, args } = props;
//
//     useEffect(() => {
//         store.injectSaga(keyName, saga, args);
//
//         return () => {
//             store.ejectSaga(keyName);
//         };
//     }, []);
//
//     return props.children;
// }

SagaLoader.propTypes = {
    store: PropTypes.object,
    keyName: PropTypes.string,
    saga: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]),
    args: PropTypes.array,
    'store.injectSaga': PropTypes.func,
    'store.ejectSaga': PropTypes.func,
    children: PropTypes.node.isRequired,
};

export const WithSaga = (key, saga, args) => WrappedComponent => {
    return (props) => {
        return (
            <ReactReduxContext.Consumer>
                {({ store, storeState }) => {
                    return <SagaLoader keyName={key} saga={saga} args={args} store={store}>
                        <WrappedComponent {...props} />
                    </SagaLoader>;
                }}
            </ReactReduxContext.Consumer>
        );
    };
};
