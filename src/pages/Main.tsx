import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../sections/About";
import Shop from "../sections/Shop";
// import FormatCurrency from "./components/FormatCurrency";

const Main = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-orange-300 to-[#fcc183]">
        <Header />
        {/* <FormatCurrency /> */}
        <Shop />
        <About />
        <Footer />
      </div>
    </>
  );
}
 
export default Main;