import { ShopItem } from "../../context/ShopContext";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { prints, clothing, homeDecor } from "../../data/data";
import { formatCurrency } from "../../utils/formatCurrency";

const CartItem = ({id, quantity}:ShopItem) => {
  const { removeFromCart } = useShoppingCart();

  const storeItems = [ ...prints, ...clothing, ...homeDecor ];

  const item = storeItems.find((i:{id:number}) => i.id === id);
  if (item == null) return null;

  return (
    <div className="w-full m-1 flex flex-wrap">
      <img src={item.imgUrl} alt={item.name} className="w-[13%] xs:w-[20%] float-left xs:h-full xs:mt-2 xs:mr-2" />
      <div className="flex flex-wrap items-center justify-end w-[80%] xs:w-[70%] ml-[2%] border-b border-b-orange-800">
        <span className="w-full text-xl sm:text-lg xs:text-base">{item.name}</span>
        <span className="w-full text-lg xs:text-base">{formatCurrency(item.price)}</span>
        <span className="w-full xs:text-sm">(x{quantity}) {formatCurrency(item.price * quantity)}</span>
        {window.location.pathname !== "/checkout" ? (
          <button onClick={() => removeFromCart(item.id)} className="text-red-800 hover:text-red-700 hover:font-semibold p-2 text-sm xs:text-xs xs:-mt-2">
            REMOVE
          </button>
        ) : null}
      </div>
    </div>
  );
}
 
export default CartItem;