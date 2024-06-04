import { Route, Routes } from "react-router-dom";
import { ShoppingProvider } from "./context/ShopContext";
import Main from "./pages/Main";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Account from "./pages/private/Account";
import Orders from "./pages/private/Orders";
import Protected from "./pages/private/Protected";

// https://github.com/tabithalyn/artsyshoppe/blob/main/index.html

function App() {

  return (
    <ShoppingProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Protected />} />
        <Route path="/account/:id" element={<Account />} />
        <Route path="/account/:id/orders" element={<Orders />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/checkout" element={<Checkout id={0} quantity={0} />} />
      </Routes>
    </ShoppingProvider>
  );
}

export default App;