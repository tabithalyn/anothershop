import { useContext } from "react";

// https://github.com/machadop1407/shopping-cart-react/blob/main/src/pages/shop/product.jsx

const Product = (props) => {
  const { id, name, price, imgUrl} = props.data;
  const { addToCart, cartItems  } = useContext(ShopContext);

  return (
    <>
    <h2 className="text-2xl text-center w-full py-5">PRINTS</h2>
      <div className="flex flex-wrap justify-center gap-2">
      {prints.map((item) => (
        <div key={item.id} className="flex flex-wrap justify-center w-1/4 bg-slate-300">
          <span className="w-full">{item.name}</span>
          <img src={item.imgUrl} alt={item.name} className="w-2/3" />
          <span className="w-full">{item.price}</span>
          <div className="w-full flex justify-center p-3"><button type="button" className="bg-slate-500">ADD TO CART</button></div>
        </div>
      ))}
      </div>
    </>
  );
}
 
export default Product;