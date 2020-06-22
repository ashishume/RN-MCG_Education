import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

//REDUCERS
import loginReducer from './reducers/login';
import loaderReducer from './reducers/loader';

const rootReducer = combineReducers({
  login: loginReducer,
  loader: loaderReducer,
});

const middleWares = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, applyMiddleware(...middleWares));

const configureStore = () => {
  return store;
};

export default configureStore;
