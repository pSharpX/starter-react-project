import api from '../api';
import * as actionTypes from '../constants/actionTypes';

const appInitialState = {
    fetching: false,
    error: false,
    all: [],
    current: undefined,    
};

const authInitialState = {
    authenticated: false,
    user: undefined,
};

export const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case actionTypes.USER_AUTHENTICATION: {
            const { authenticated } = action;
            return {
                ...state,
                authenticated
            };
        }
        default:
            return state;
    }
};

export const itemReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS: {
            const { items } = action;
            return {
                ...state,
                all: items
            }
        }
        case actionTypes.FETCH_ITEM: {
            const { item } = action;
            return {
                ...state,
                current: item
            };
        }
        case actionTypes.FETCH_ITEM_STARTED: {
            return {
                ...state,
                fetching: true
              };
        }
        case actionTypes.FETCH_ITEM_SUCCESS: {
            return {
                ...state,
                fetching: false,
                error: null,
                current: {
                    ...action.payload
                }
              };
        }
        case actionTypes.FETCH_ITEMS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                error: null,
                all: [
                    ...action.payload
                ]
              };
        }
        case actionTypes.FETCH_ITEM_FAILURE: {
            return {
                ...state,
                fetching: false,
                error: action.error
              };
        }
        case actionTypes.CREATE_ITEM:
        case actionTypes.UPDATE_ITEM:
        default:
            return state;
    }
};