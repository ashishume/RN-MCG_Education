import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

//REDUCERS
// import postsReducer from './Reducers/posts';
import loaderReducer from './reducers/loader';

const rootReducer = combineReducers({
//   posts: postsReducer,
  loader: loaderReducer,
});

const middleWares = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, applyMiddleware(...middleWares));

const configureStore = () => {
  return store;
};

export default configureStore;
