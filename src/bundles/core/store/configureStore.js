import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { authReducer, itemReducer } from '../reducers/reducers'

export const configure = () => {
  const reducer = combineReducers({
    auth: authReducer,
    items: itemReducer
  })
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  )

  return store
}
