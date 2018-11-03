import * as actionTypes from '../constants/actionTypes';

export const fetchItems = () => {
    return {
        type: actionTypes.FETCH_ITEMS,
        loading: true
    };
};

export const searchItem = (text) => {
    return {
        type: actionTypes.SEARCH_ITEM,
        text
    };
};

export const fetchItem = (id) => {
    return {
        type: actionTypes.FETCH_ITEM,
        id
    };
};

export const createItem = (newItem) => {
    return {
        type: actionTypes.CREATE_ITEM,
        item: newItem
    };
};

export const updateItem = (modifiedItem) => {
    return {
        type: actionTypes.UPDATE_ITEM,
        item: modifiedItem
    };
};

export const removeItem = (id) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        id
    };
};