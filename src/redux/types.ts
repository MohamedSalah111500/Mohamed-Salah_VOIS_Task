import { Product } from "../Types/Types";

export const ACTION_SET_DARK_MODE = "ACTION_SET_DARK_MODE";
export const ACTION_SET_PRODUCTS = "ACTION_SET_PRODUCTS";
export const ACTION_GET_PRODUCTS = "ACTION_GET_PRODUCTS";


export interface ActionSetDarkMode {
  type: typeof ACTION_SET_DARK_MODE;
  payload: boolean;
}

export type UiAction = ActionSetDarkMode;

export type GlobalAction = UiAction;

export type UiState = Readonly<{
  darkMode: boolean;
}>;

export type GlobalState = Readonly<{
  uiState: UiState;
}>;

export interface ActionProducts {
  type: string;
  payload: Product[];
}
export type GlobalProductsState = Readonly<{
  productsList: ProductsState;
}>;

export type ProductsState = {
  products: Product[];
};
