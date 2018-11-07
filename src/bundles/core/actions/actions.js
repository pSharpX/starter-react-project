import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

export const userAuthenticationActionCreator = ({isAuthenticated, user}) => {
    return {
        type: actionTypes.USER_AUTHENTICATION,
        authenticated: isAuthenticated,
        user
    }
};

export const fetchItemsActionCreator = (items) => {
    return {
        type: actionTypes.FETCH_ITEMS,
        items
    };
};
export const fetchItems = () => (dispatch, getState) => {
    dispatch(fetchItemStartedActionCreator());
    api.fetchItems()
        .then((res) => dispatch(fetchItemsSuccessActionCreator(res.data)))
        .catch((error) => dispatch(fetchItemFailureActionCreator(error)));
};
export const fetchItemStartedActionCreator = () => {
    return {
        type: actionTypes.FETCH_ITEM_STARTED
    };
};
export const fetchItemSuccessActionCreator = (item) => {
    return {
        type: actionTypes.FETCH_ITEM_SUCCESS,
        payload: {
            ...item
        }
    };
};
export const fetchItemsSuccessActionCreator = (items) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        payload: [
            ...items
        ]
    };
};
export const fetchItemFailureActionCreator = (error) => {
    return {
        type: actionTypes.FETCH_ITEM_FAILURE,
        error
    };
};

export const searchItemActionCreator = (text) => {
    return {
        type: actionTypes.SEARCH_ITEM,
        text
    };
};

export const fetchItemActionCreator = (item) => {
    return {
        type: actionTypes.FETCH_ITEM,
        item
    };
};

export const createItemActionCreator = (newItem) => {
    return {
        type: actionTypes.CREATE_ITEM,
        item: newItem
    };
};

export const updateItemActionCreator = (modifiedItem) => {
    return {
        type: actionTypes.UPDATE_ITEM,
        item: modifiedItem
    };
};

export const removeItemActionCreator = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id
    };
};