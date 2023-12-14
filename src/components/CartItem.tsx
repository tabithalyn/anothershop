import { ShopItem } from "../context/ShopContext";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { prints, clothing, homeDecor } from "../data/data";
import { formatCurrency } from "../utils/formatCurrency";

const CartItem = ({id, quantity}:ShopItem) => {
  const { removeFromCart } = useShoppingCart();

  const storeItems = [ ...prints, ...clothing, ...homeDecor ];

  const item = storeItems.find((i:{id:number}) => i.id === id);
  if (item == null) return null;

  return (
    <div className="w-full bg-rose-600 m-1 flex flex-wrap">
      <img src={item.imgUrl} alt={item.name} className="w-[15%] float-left" />
      <div className="flex flex-wrap items-center justify-end w-[80%] ml-[2%]">
        <span className="bg-rose-700 w-full">{item.name}</span>
        <span className="bg-rose-400 w-full">{formatCurrency(item.price)}</span>
        <span className="bg-rose-200 w-full">(x{quantity}) {formatCurrency(item.price * quantity)}</span>
        <button onClick={() => removeFromCart(item.id)}>
          REMOVE
        </button>
      </div>
    </div>
  );
}
 
export default CartItem;