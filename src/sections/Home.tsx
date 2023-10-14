import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 300))
    }
  }, []);

  const handleSectionLink = (section:string) => {
    document.getElementById(`${section}`)?.scrollIntoView({
      behavior:"smooth", block: "start", inline:"nearest"
    });
  }

  return (
    <section className="w-full h-screen flex flex-wrap items-center justify-center bg-orange-300 font-montserrat" id="home">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center">
          <span className="text-7xl text-white text-center w-full font-comfortaa drop-shadow-xl shadow-yellow-700">Art Prints</span>
          <span className="text-2xl italic font-light w-full text-center">& More!</span>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/clothing.png')] bg-cover transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3">
          <a onClick={() => handleSectionLink("clothing")}>SHOP CLOTHING</a>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/home-decor.png')] bg-cover bg-center transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3 mx-2">
          <a onClick={() => handleSectionLink("home-decor")}>SHOP HOME DECOR</a>
        </div>
        <div className="text-2xl bg-yellow-100 border border-gray-950 mt-20 w-[30%] p-3 h-20 hover:bg-[url('src/img/stock/prints.png')] bg-cover transition-all flex flex-wrap items-center justify-center hover:cursor-pointer skew-y-3">
          <a onClick={() => handleSectionLink("prints")}>SHOP PRINTS</a>
        </div>
      </div>
      {isScrolled ? (
        <div className="fixed bottom-3 right-3 z-30 flex flex-wrap justify-end items-center">
          {isHovered ? (
            <m.div
              initial={{ opacity: 0, x: "30%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="text-sm text-stone-600"
            >
              BACK TO TOP
            </m.div>
          ) : null}
          <m.button 
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior:"smooth", block: "start", inline:"nearest" })}
            className="p-2 text-4xl hover:text-stone-600 transition-all z-30"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            initial={{ y: 0 }}
            whileHover={{
              y: ["-4rem", "0.5rem", "1.5rem"],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeOut"
              }
            }}
          >
            <i className="bi bi-arrow-up-circle text-stone-700"></i>
          </m.button>
        </div>
      ) : null}
    </section>
  );
}
 
export default Home;