import { ShopItem } from "../context/ShopContext";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { prints, clothing, homeDecor } from "../data/data";
import { formatCurrency } from "../utils/formatCurrency";

const CartItem = ({id, quantity}:ShopItem) => {
  const { removeFromCart } = useShoppingCart();

  const storeItems = { ...prints, ...clothing, ...homeDecor };

  const item = storeItems.find((i:{id:number}) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <div>
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div>
        <span>{item.name}</span>
        <span>{formatCurrency(item.price)}</span>
        <span>x{quantity} | {formatCurrency(item.price * quantity)}</span>
      </div>
      <div>
        <button onClick={() => removeFromCart(item.id)}>
          <i className="bi bi-x"></i>
        </button>
      </div>
    </div>
  );
}
 
export default CartItem;