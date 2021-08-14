import { Store, createStore, combineReducers } from "redux";
import { productsStateReducer, uiStateReducer } from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";


export function createGlobalStore(): Store<any, any> {
  const rootReducer = combineReducers({
    uiState: uiStateReducer,
    productsList:productsStateReducer
  });

  return createStore(rootReducer, composeWithDevTools({})());
}
