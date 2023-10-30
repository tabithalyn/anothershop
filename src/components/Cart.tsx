import { useState } from "react";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import { ShopItem } from "../context/ShopContext";
import { prints, clothing, homeDecor } from "../data/data";

const Cart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  const storeItems = { ...prints, ...clothing, ...homeDecor };

  const getTotal = (
    cartItems?.reduce((total:number, cartItem:ShopItem) => {
      const item = storeItems.find((i:{id:number}) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  return (
    <section>
      <div>
        <span>
          <span className="font-bold">{cartQuantity}</span>
          <i
            className="bi bi-bag hover:cursor-pointer"
            onClick={() => setShowCart(!showCart)}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          ></i>
          {cartQuantity === 0 && isHovered ? (
            <span>Your bag is empty!</span>
          ) : null}
        </span>
      </div>
      {showCart ? (
        <div className="xs:w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[30vw] h-[70vh] fixed sm:-ml-[50%] md:-ml-[40%] lg:-ml-[30%] xl:-ml-[30%] xs:-ml-[60%] bg-yellow-50 z-30 shadow-2xl p-3 flex flex-wrap justify-end">
          <div className="w-full h-[70%] overflow-y-auto bg-stone-500">
            <ul>
              {cartItems?.map((item) => (
                <li key={item.id}>
                  <CartItem {...item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-wrap justify-end h-[20%] -mt-10 font-comfortaa">
            <p className="w-full bg-yellow-500 p-4">
              Subtotal: <span className="font-bold font-montserrat">{formatCurrency(getTotal)}</span>
            </p>
            <p className="w-full bg-orange-400 flex flex-wrap items-center justify-center p-3 gap-2 text-lg">
              <button disabled={getTotal === 0} className="p-3 border border-stone-800">VIEW BAG</button>
              <button disabled={getTotal === 0} className="p-3 border border-stone-800">CHECKOUT</button>
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
 
export default Cart;