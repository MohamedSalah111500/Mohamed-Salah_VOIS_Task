import { Product } from "../Types/Types";
import { ACTION_SET_DARK_MODE, ActionSetDarkMode, ActionProducts, ACTION_SET_PRODUCTS } from "./types";

export function setDarkMode(darkMode: boolean): ActionSetDarkMode {
  return {
    type: ACTION_SET_DARK_MODE,
    payload: darkMode
  };
}


export function setProducts(products: Array<Product>): ActionProducts {
  return {
    type: ACTION_SET_PRODUCTS,
    payload: products
  };
}