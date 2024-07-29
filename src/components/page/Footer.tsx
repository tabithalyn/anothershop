import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
}

const Footer = () => {
  return (
    <footer className="h-[40vh] flex flex-wrap w-full items-center">
      <m.ul
        className="w-1/3 flex flex-wrap justify-center p-5 gap-2 font-montserrat text-sm"
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <m.h3 variants={variants} className="w-full text-left pt-2 px-2 font-bold font-montserrat border-b-2 border-orange-500">One</m.h3>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
      </m.ul>
      <m.ul
        className="w-1/3 flex flex-wrap justify-center p-5 gap-2 font-montserrat text-sm"
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <m.h3 variants={variants} className="w-full text-left pt-2 px-2 font-bold font-montserrat border-b-2 border-orange-600">Two</m.h3>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
      </m.ul>
      <m.ul
        className="w-1/3 flex flex-wrap justify-center p-5 gap-2 font-montserrat text-sm"
        variants={variants}
        initial="hidden"
        whileInView="visible"
      >
        <m.h3 variants={variants} className="w-full text-left pt-2 px-2 font-bold font-montserrat border-b-2 border-orange-700">Three</m.h3>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
        <m.li variants={variants} className="w-full px-4 py-1 flex flex-wrap items-center">
          <a href="">Link</a>
        </m.li>
      </m.ul>
    </footer>
  );
}
 
export default Footer;