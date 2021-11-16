import * as api from '../api'
import * as actionTypes from '../constants/actionTypes'

export const startUserAuthenticationActionCreator = () => ({
  type: actionTypes.START_USER_AUTHENTICATION
})

export const finishUserAuthenticationActionCreator = () => ({
  type: actionTypes.FINISH_USER_AUTHENTICATION
})

export const userAuthenticationActionCreator = ({ isAuthenticated, user }) => ({
  type: actionTypes.USER_AUTHENTICATION,
  authenticated: isAuthenticated,
  user
})

export const fetchItemsActionCreator = (items) => ({
  type: actionTypes.FETCH_ITEMS,
  items
})
export const fetchItems = () => (dispatch, getState) => {
  dispatch(fetchItemStartedActionCreator())
  api
    .fetchItems()
    .then((res) => dispatch(fetchItemsSuccessActionCreator(res.data)))
    .catch((error) => dispatch(fetchItemFailureActionCreator(error)))
}
export const fetchItemStartedActionCreator = () => ({
  type: actionTypes.FETCH_ITEM_STARTED
})
export const fetchItemSuccessActionCreator = (item) => ({
  type: actionTypes.FETCH_ITEM_SUCCESS,
  payload: {
    ...item
  }
})
export const fetchItemsSuccessActionCreator = (items) => ({
  type: actionTypes.FETCH_ITEMS_SUCCESS,
  payload: [...items]
})
export const fetchItemFailureActionCreator = (error) => ({
  type: actionTypes.FETCH_ITEM_FAILURE,
  error
})

export const searchItemActionCreator = (text) => ({
  type: actionTypes.SEARCH_ITEM,
  text
})

export const fetchItemActionCreator = (item) => ({
  type: actionTypes.FETCH_ITEM,
  item
})

export const createItemActionCreator = (newItem) => ({
  type: actionTypes.CREATE_ITEM,
  item: newItem
})

export const updateItemActionCreator = (modifiedItem) => ({
  type: actionTypes.UPDATE_ITEM,
  item: modifiedItem
})

export const removeItemActionCreator = (id) => ({
  type: actionTypes.REMOVE_ITEM,
  id
})
