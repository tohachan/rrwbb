/**
 * This is a wrapper component to dynamically call injectReducer to add a reducer to the redux store
 *
 * */
import React from 'react';
import { ReactReduxContext } from "react-redux";

class ReducerLoader extends React.Component {
    constructor(props) {
        super(props);
        const { store, keyName, reducer } = props;

        console.log('store.injectReducer: ', keyName);
        store.injectReducer(keyName, reducer);
    }

    render() {
        return this.props.children;
    }
}

export const WithReducer = (key, reducer) => WrappedComponent => {
    return (props) => {
        return (
            <ReactReduxContext.Consumer>
                {({ store, storeState }) => {
                    return <ReducerLoader keyName={key} reducer={reducer} store={store}>
                        <WrappedComponent {...props} />
                    </ReducerLoader>;
                }}
            </ReactReduxContext.Consumer>
        );
    };
};
