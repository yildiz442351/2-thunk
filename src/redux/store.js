import { combineReducers, createStore, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducer';
import basketReducer from './reducers/basketReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
});

// apply middlware fonksiyonu yardımıyla
// redux thunk ara yazılımıını store'a tanıttık
export default createStore(rootReducer, applyMiddleware(thunk));