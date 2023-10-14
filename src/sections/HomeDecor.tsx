import { motion as m } from "framer-motion";
import { homeDecor } from "../data/data";

const HomeDecor = () => {
  return (
    <section className="py-10 bg-pink-300 pt-28" id="home-decor">
      <m.h2
        className="text-4xl text-center w-full py-5 mb-10 bg-pink-400 font-comfortaa"
        initial={{ x: "-200vh" }}
        whileInView={{ x: "0%" }}
        transition={{
          delay: 0.1,
          duration: 0.6
        }}
      >HOME DECOR</m.h2>
      <m.div
        className="flex flex-wrap justify-center gap-2"
        transition={{
          delay: 0.3,
          staggerChildren: 0.7,
          when: "beforeChildren"
        }}
      >
      {homeDecor.map((item) => (
        <m.div
          key={item.id}
          className="flex flex-wrap justify-center w-1/4 bg-slate-300"
          whileInView={{ scale: [0, 1] }}
        >
          <span className="w-full">{item.name}</span>
          <img src={item.imgUrl} alt={item.name} className="w-2/3" />
          <span className="w-full">{item.price}</span>
          <div className="w-full flex justify-center p-3"><button type="button" className="bg-slate-500">ADD TO CART</button></div>
        </m.div>
      ))}
      </m.div>
    </section>
  );
}
 
export default HomeDecor;