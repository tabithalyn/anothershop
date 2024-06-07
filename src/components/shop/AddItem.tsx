import { addDoc, collection } from "firebase/firestore";
import { db } from "../../data/firebase";
import { clothing, homeDecor, prints } from "../../data/data";
import { ShopItem } from "../../context/ShopContext";
import CartItem from "./CartItem";

const AddItem = ({id}:ShopItem) => {
  const storeItems = [ ...prints, ...clothing, ...homeDecor ];
  const item = storeItems.find((i:{id:number}) => i.id === id);
  if (item == null) return null;

  const addItemToDb = async () => {
    try {
      const itemRef = collection(db, "items");
      await addDoc(itemRef, item);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <CartItem id={0} quantity={0} />
    </>
  );
}
 
export default AddItem;