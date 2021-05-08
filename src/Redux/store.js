import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerMainNav, 
  reducerHomePage, 
  reducerAboutPage,
  reducerFoodMenu,
  reducerFoodMenuTxnTerm,
  reducerFoodMenuBg
} from './Reducer';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerMainNav,
    reducerHomePage,
    reducerAboutPage,
    reducerFoodMenu,
    reducerFoodMenuTxnTerm,
    reducerFoodMenuBg
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
