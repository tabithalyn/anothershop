import { createContext, useContext } from "react";
import { ShoppingContext } from "../context/ShopContext";

export const ShoppingCartContext = createContext({} as ShoppingContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}