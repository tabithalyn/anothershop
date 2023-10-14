import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      when: "afterChildren"
    }
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.2,
      ease: "easeOut"
    }
  }
}


const NavMenu = () => {
  return (
    <nav id="nav-menu" className="font-montserrat w-[98%]">
      <m.ul variants={variants} initial="hidden" whileInView="visible">
        <m.li variants={variants} className="inline py-2 px-4"><a href="">Home</a></m.li>
        <m.li variants={variants} className="inline py-2 px-4"><a href="">Shop</a></m.li>
        <m.li variants={variants} className="inline py-2 px-4"><a href="">About</a></m.li>
        <m.li variants={variants} className="inline py-2 px-4"><a href="https://www.redbubble.com/people/pinkmonkeybird/explore?asc=u&page=1&sortOrder=recent">RedBubble</a></m.li>
      </m.ul>
    </nav>
  );
}
 
export default NavMenu;