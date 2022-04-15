import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducers';
import { cartReducer } from './reducers/cartReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = combineReducers({ auth: authReducer, cart: cartReducer });
const middleware = [thunk];
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
