import { useState } from "react";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import { prints, clothing, homeDecor } from "../data/data";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, cartQuantity } = useShoppingCart();
  const [showCart, setShowCart] = useState<boolean>(false);

  const storeItems = [ ...prints, ...clothing, ...homeDecor ];

  const getTotal = (
    cartItems.reduce((total, cartItem) => {
      const item = storeItems.find(i => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  return (
    <section>
      <div onClick={() => setShowCart(!showCart)}>
        <span className="font-bold mr-1">{cartQuantity}</span>
        <i
          className="bi bi-bag hover:cursor-pointer"
        ></i>
      </div>
      {showCart ? (
        <div className="xs:w-[92vw] sm:w-[50vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] h-[70vh] fixed sm:-ml-[50%] md:-ml-[40%] lg:-ml-[40%] xl:-ml-[40%] xs:-ml-[80%] xs:mt-4 bg-yellow-50 z-30 shadow-2xl p-3 flex flex-wrap justify-end">
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
              <button disabled={getTotal === 0} className="p-3 border border-stone-800"><Link to={"/viewcart"}>VIEW CART</Link></button>
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
 
export default Cart;