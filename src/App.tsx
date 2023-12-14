import { Route, Routes } from "react-router-dom";
import { ShoppingProvider } from "./context/ShopContext";
import Main from "./pages/Main";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";

// https://github.com/tabithalyn/artsyshoppe/blob/main/index.html

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", App);
} else {
  App();
}

function App() {
  
  
  return (
    <ShoppingProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ShoppingProvider>
  );
}

export default App;