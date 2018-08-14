import {createStore} from 'redux'
import rootReducers from '../reducers/'

export default function configureStore(initialState) {
    const store = createStore(rootReducers, initialState);
    if (module.hot) {
      module.hot.accept('../reducers/', () => {
          store.replaceReducer(rootReducers)
      })
  }
  return store
}