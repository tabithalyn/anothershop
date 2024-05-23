import { motion as m } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../data/firebase";

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
  const navigate = useNavigate();

  const handleSectionLink = (section:string) => {
    document.getElementById(`${section}`)?.scrollIntoView({
      behavior:"smooth", block: "start", inline:"nearest"
    });
  }

  return (
    <nav id="nav-menu" className="font-montserrat w-[88%] text-lg sm:text-[16px] xs:text-[16px] lg:text-2xl xl:text-2xl z-30 xs:w-[78%] sm:w-[78%] xl:w-[95%]">
      <m.ul variants={variants} initial="hidden" whileInView="visible" className="w-[70%] ml-8">
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><Link to={"/"}>Shop</Link></m.li>
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => handleSectionLink("about")}>About</a></m.li>
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a href="https://www.redbubble.com/people/pinkmonkeybird/explore?asc=u&page=1&sortOrder=recent">RedBubble</a></m.li>
        {!auth.currentUser?.uid ? (
          <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => navigate("/signin")}>Sign In</a></m.li>
        ) : null}
        {auth.currentUser?.uid ? (
          <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => navigate(`/account/${auth.currentUser?.uid}`)}>Account</a></m.li>
        ) : null}
      </m.ul>
    </nav>
  );
}
 
export default NavMenu;