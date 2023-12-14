import { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import { motion as m } from "framer-motion";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "../components/CartItem";
import { prints, clothing, homeDecor } from "../data/data";

const ViewCart = () => {
  const [menu, showMenu] = useState<boolean>(false);
  const { cartItems, cartQuantity } = useShoppingCart();

  const storeItems = [ ...prints, ...clothing, ...homeDecor ];

  const getTotal = (
    cartItems.reduce((total, cartItem) => {
      const item = storeItems.find(i => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  return (
    <>
    <header className="flex flex-wrap z-30 justify-end px-4 py-2 bg-orange-300 text-xl fixed w-[99vw]">
      <div className="w-full flex flex-wrap items-center justify-start p-3 bg-orange-300">
        <m.div
          className="flex flex-wrap w-full justify-start"
          whileInView={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.2, delay: 0.02 }}
        >
          <div>
          {!menu ? (
            <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all text-lg xs:text-[20px] sm:text-[20px] xl:text-2xl lg:text-2xl">
              <i className="bi bi-list"></i>
            </span>
          ) : (
            <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all text-lg xs:text-[20px] sm:text-[20px] xl:text-2xl lg:text-2xl">
              <i className="bi bi-x"></i>
            </span>
          )}
          </div>
          {menu ? (
            <NavMenu />
          ) : null}
        </m.div>
      </div>
    </header>
    <section className="w-full h-screen flex flex-wrap items-center justify-center font-montserrat bg-orange-300" id="home">
      <div className="flex flex-wrap items-center justify-center w-full mt-[10vh]">
        <div className="w-3/5 flex flex-wrap items-center justify-center mb-10 bg-orange-50 shadow-lg shadow-orange-800 h-[85vh] overflow-y-auto p-3">
          <div className="bg-orange-500 w-full pl-3 flex justify-center items-center flex-wrap">
            <span className="w-1/2"><Link to={"/"}>&larr; Continue Shopping</Link></span>
            <span className="font-bold p-4 bg-red-300 w-1/2 text-right pr-3">Cart Items <span className="bg-red-500 py-2 px-3.5 rounded-full ml-1">{cartQuantity}</span></span>
          </div>
          <div className="flex flex-wrap bg-rose-400 items-center justify-center">
            <div className="flex flex-wrap w-full p-2">
              {cartItems?.map((item) => (
                <li key={item.id} className="list-none w-full">
                  <CartItem {...item} />
                </li>
              ))}
            </div>
            <div className="w-full bg-red-400 p-4">
              <span className="text-lg">Subtotal:</span> <span className="font-bold font-comfortaa text-lg">{formatCurrency(getTotal)}</span><br />
              Shipping: {getTotal > 100 ? (
                <span className="font-bold font-comfortaa">FREE</span>
              ) : <span className="font-bold font-comfortaa">$5.00</span>}<br /><br />
              <span className="text-2xl">Total:</span> {getTotal > 100 ? (
                <span className="font-bold font-comfortaa text-2xl">{formatCurrency(getTotal)}</span>
              ) : (
                <span className="font-bold font-comfortaa text-2xl">{formatCurrency(getTotal + 5)}</span>
              )}
            </div>
            <div className="w-full bg-red-600 p-4 text-center">
              <Link to={"/checkout"} className="bg-red-200 p-4">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
 
export default ViewCart;