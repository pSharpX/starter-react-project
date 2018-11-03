import redux from 'redux';

export const configure = () => {
    const reducer = redux.combineReducers({

    });
    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
};
