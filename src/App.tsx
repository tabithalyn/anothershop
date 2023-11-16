import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Shop from "./sections/Shop";
import { ShoppingProvider } from "./context/ShopContext";

// https://github.com/tabithalyn/artsyshoppe/blob/main/index.html

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", App);
} else {
  App();
}

function App() {
  
  
  return (
    <ShoppingProvider>
      <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
        <Header />
        <Shop />
        <About />
        <Footer />
      </div>
    </ShoppingProvider>
  );
}

export default App;