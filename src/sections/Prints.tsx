import { motion as m } from "framer-motion";
import { prints } from "../data/data";
import StoreItem from "../components/shop/StoreItem";

const Prints = () => {
  return (
    <section className="py-10 pt-28 w-full" id="prints">
      <m.h2
        className="text-4xl text-center w-full py-5 mb-10 border-b-2 border-yellow-950 font-comfortaa"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.03,
          duration: 0.4
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
          className="flex flex-wrap justify-center w-1/4 xs:w-[45%] sm:w-1/3 xxs:w-[95%] bg-yellow-50"
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