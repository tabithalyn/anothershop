import { motion as m } from "framer-motion";
import { prints } from "../data/data";
import StoreItem from "../components/StoreItem";

const Prints = () => {
  return (
    <section className="py-10 pt-28" id="prints">
      <m.h2
        className="text-4xl text-center w-full py-5 mb-10 border-b-2 border-yellow-950 font-comfortaa"
        initial={{ x: "-200vh" }}
        whileInView={{ x: "0%" }}
        transition={{
          delay: 0.1,
          duration: 0.6
        }}
      >PRINTS</m.h2>
      <m.div
        className="flex flex-wrap justify-center gap-2"
        transition={{
          delay: 0.3,
          staggerChildren: 0.7,
          when: "beforeChildren"
        }}
      >
      {prints.map((item) => (
        <m.div
          key={item.id}
          className="flex flex-wrap justify-center w-1/4 bg-yellow-50"
          whileInView={{ scale: [0, 1] }}
        >
          <StoreItem {...item} />
        </m.div>
      ))}
      </m.div>
    </section>
  );
}
 
export default Prints;