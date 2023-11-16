import { useShoppingCart } from "../hooks/useShoppingCart";
import { formatCurrency } from "../utils/formatCurrency";

type StoreProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }:StoreProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <span className="w-full text-center p-3 font-montserrat text-lg font-bold xs:text-sm xs:font-semibold sm:text-sm md:text-base">{name}</span>
          <img src={imgUrl} alt={name} className="w-2/3" />
          <span className="w-full text-right py-3 px-5 text-lg font-montserrat font-semibold xs:text-sm"><span className="font-normal mx-1">&#36;</span>{formatCurrency(price)}</span>
        <div>
          {quantity === 0 ? (
            <div className="w-full flex justify-center p-3">
              <button onClick={() => increaseCartQuantity(id)} className="bg-yellow-200 border border-yellow-950 skew-y-3 p-2 text-lg xs:text-sm hover:bg-yellow-300 transition-all hover:border-orange-950 hover:text-orange-950">
                + Add to Cart
              </button>
            </div>
          ) : (
            <div>
              <button onClick={() => decreaseCartQuantity(id)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => increaseCartQuantity(id)}>
                +
              </button>
              <div>
                <button onClick={() => removeFromCart(id)}>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default StoreItem;