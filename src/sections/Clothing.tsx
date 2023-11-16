import { motion as m } from "framer-motion";
import { clothing } from "../data/data";
import StoreItem from "../components/StoreItem";

const Clothing = () => {
  return (
    <section className="h-full w-full pb-5 pt-28" id="clothing">
      <m.div
        className="text-4xl text-center w-full py-5 mb-10 font-comfortaa border-b-2 border-yellow-950"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.03,
          duration: 0.4
        }}
      >CLOTHING</m.div>
      <m.div
        className="flex flex-wrap justify-center gap-2"
        transition={{
          delay: 0.3,
          staggerChildren: 0.5,
          when: "beforeChildren"
        }}
      >
      {clothing.map((item) => (
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
 
export default Clothing;