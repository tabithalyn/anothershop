import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Shop from "./sections/Shop";

// https://github.com/tabithalyn/artsyshoppe/blob/main/index.html

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", App);
} else {
  App();
}

function App() {
  
  
  return (
    <div className="bg-gradient-to-br from-[#4f3449] to-[#b16a63]">
      <Header />
      <Shop />
      <About />
      <Footer />
    </div>
  );
}

export default App;