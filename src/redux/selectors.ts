import {Selector} from "react-redux";
import { Product } from "../Types/Types";
import {GlobalState, GlobalProductsState} from "./types";

export const getDarkMode: Selector<GlobalState, boolean> = state => state.uiState.darkMode;
export const getProducts: Selector<GlobalProductsState, Array<Product>> = state => state.productsList.products;