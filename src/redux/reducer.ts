import { ACTION_GET_PRODUCTS, ACTION_SET_DARK_MODE, ACTION_SET_PRODUCTS,ActionProducts, GlobalAction, ProductsState, UiState } from "./types";

const INITIAL_STATE: UiState = {
  darkMode: false
};

const INITIAL_PRODUCTS_STATE: ProductsState = {
  products: []
};

export function uiStateReducer(state: UiState = INITIAL_STATE, action: GlobalAction): UiState {
  switch (action.type) {
    case ACTION_SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
}

export function productsStateReducer(state: ProductsState = INITIAL_PRODUCTS_STATE, action: ActionProducts): ProductsState {
  
  switch (action.type) {
    case ACTION_SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

      case ACTION_GET_PRODUCTS:
        return state
    default:
      return state;
  }
}

