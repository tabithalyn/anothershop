import { ReactNode, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ShoppingCartContext } from "../hooks/useShoppingCart";

type ShoppingProviderProps = {
  children: ReactNode;
}

export type ShopItem = {
  id: number;
  quantity: number;
}

export type ShoppingContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id:number) => number;
  increaseCartQuantity: (id:number) => void;
  decreaseCartQuantity: (id:number) => void;
  removeFromCart: (id:number) => void;
  cartQuantity: number;
  cartItems: ShopItem[];
}

export function ShoppingProvider({children}:ShoppingProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<ShopItem[]>("shopping-cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  );

  const openCart = () => setIsOpen(isOpen);
  const closeCart = () => setIsOpen(!isOpen);

  const getItemQuantity = (id:number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  const increaseCartQuantity = (id:number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item;
          }
        });
      }
    });
  }

  const decreaseCartQuantity = (id:number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        });
      }
    });
  }

  const removeFromCart = (id:number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}