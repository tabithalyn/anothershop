import { ReactNode, useState } from "react";
import { ShoppingCartContext } from "../hooks/useShoppingCart";
import { ref, remove, set, update } from "firebase/database";
import { auth, database } from "../data/firebase";

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
  increaseCartQuantity: (id:number, name:string) => void;
  decreaseCartQuantity: (id:number) => void;
  removeFromCart: (id:number) => void;
  cartQuantity: number;
  cartItems: ShopItem[];
}

export function ShoppingProvider({children}:ShoppingProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([{
    quantity: 0,
    id: 0
  }]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  );

  const openCart = () => setIsOpen(isOpen);
  const closeCart = () => setIsOpen(!isOpen);

  const getItemQuantity = (id:number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  const increaseCartQuantity = (id:number, name:string) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        auth.onAuthStateChanged((user) => {
          if (user) {
            set(ref(database, "items/" + id), {
              name: name,
              quantity: getItemQuantity(id) + 1
            });
          }
        });
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            update(ref(database, "items/" + id), {
              quantity: getItemQuantity(id) + 1
            });
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
        auth.onAuthStateChanged((user) => {
          if (user) {
            remove(ref(database, "items/" + id));
          }
        });
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            auth.onAuthStateChanged((user) => {
              if (user) {
                update(ref(database, "items/" + id), {
                  quantity: getItemQuantity(id) - 1
                });
              }
            });
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
      auth.onAuthStateChanged((user) => {
        if (user) {
          remove(ref(database, "items/" + id));
        }
      });
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