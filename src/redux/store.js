import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cart/CartReducers';
import { userReducer } from './user/UserReducers';
import { favoritesReducer } from './favorites/FavoritesReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;