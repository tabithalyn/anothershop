import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebase";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

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

  const token = localStorage.getItem("token");

  const handleSectionLink = (section:string) => {
    document.getElementById(`${section}`)?.scrollIntoView({
      behavior:"smooth", block: "start", inline:"nearest"
    });
  }

  return (
    <nav id="nav-menu" className="font-montserrat w-[88%] text-lg sm:text-[16px] xs:text-[16px] lg:text-2xl xl:text-2xl z-30 xs:w-[78%] sm:w-[78%] xl:w-[95%]">
      <m.ul variants={variants} initial="hidden" whileInView="visible" className="w-[70%] ml-8">
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer">
          {
            location.pathname === "/" ? (
              <Menu>
                <MenuButton>
                  {({open}) => (
                    <div className="w-full flex flex-wrap items-center">
                      <span>Shop</span>
                      {open ? <i className="fa-solid fa-chevron-up mr-4 w-2 text-sm ml-2"></i> : <i className="fa-solid fa-chevron-down mr-4 w-2 text-sm ml-2"></i>}
                    </div>
                  )}
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <MenuItems anchor="top" className={"flex flex-wrap w-1/6 transition-all mt-4 ml-10 bg-orange-300"}>
                    <MenuItem>
                      <a className="w-full hover:cursor-pointer hover:tracking-wider transition-all p-4" onClick={() => handleSectionLink("clothing")}>
                        <span className="bg-orange-200 rounded-full p-3"><i className={`fa-solid fa-shirt`}></i></span>
                        <span className="uppercase text-sm ml-4 font-semibold">Clothing</span>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a className="w-full hover:cursor-pointer hover:tracking-wider transition-all p-4" onClick={() => handleSectionLink("home-decor")}>
                        <span className="bg-orange-200 rounded-full p-3"><i className={`fa-solid fa-mug-saucer`}></i></span>
                        <span className="uppercase text-sm ml-4 font-semibold">Home Decor</span>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a className="w-full hover:cursor-pointer hover:tracking-wider transition-all p-4" onClick={() => handleSectionLink("prints")}>
                        <span className="bg-orange-200 rounded-full p-3"><i className={`fa-solid fa-image`}></i></span>
                        <span className="uppercase text-sm ml-4 font-semibold">Prints</span>
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <a onClick={() => navigate("/")}>Shop</a>
            )
          }
        </m.li>
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => handleSectionLink("about")}>About</a></m.li>
        <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a href="https://www.redbubble.com/people/pinkmonkeybird/explore?asc=u&page=1&sortOrder=recent">RedBubble</a></m.li>
        {!token ? (
          <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => navigate("/signin")}>Sign In</a></m.li>
        ) : null}
        {token ? (
          <m.li variants={variants} className="inline p-2 xs:px-2 hover:cursor-pointer"><a onClick={() => navigate(`/account/${auth.currentUser?.uid}`)}>Account</a></m.li>
        ) : null}
      </m.ul>
    </nav>
  );
}
 
export default NavMenu;