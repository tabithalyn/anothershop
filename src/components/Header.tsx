import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { motion as m } from "framer-motion";
import Cart from "./Cart";

const Header = () => {
  const [menu, showMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
    <header className="flex flex-wrap z-30 justify-end px-4 py-3 bg-orange-300 text-xl fixed w-[99vw]">
      {isScrolled ? (
        <>
        <div className="w-1/2 flex flex-wrap justify-start items-center p-3 bg-orange-200">
          <span className="text-center flex flex-wrap items-center w-[5%]">
            <a onClick={() => handleSectionLink("home")}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2asUoDQRCGfwJGUlqK0dpKGxtjYa3iQ2ihpVbmCTT6ANoovokGFUEfwE4EMbGUdEGbkYP/5JDc3F307kYzHwwsM3/25s/uHhsI4DhOVqoAjgC8AhBj0QXQYo+JHBpoWBLiII2RLsWLsEcjsjKJhK4DbgHcJIyLRiL9pRYGzV4njP+EEYtIViPWQ6VuoEFJGVOakTWK7gbUtG+iyNo98ytQaFJ0WnKzWu2M+T0onFO0Y9jILvOBoViuKFovuVmttsp8GwpPFC0YNjLL/CMUehRNltysVptg/g0K7xSNGzZSZT7oNZYXiuolN6vVZph/hkKboo1v+Upk4krJtU3mLzUj25Fr8jKAGoB5ABeRiYPxHLdfkbUaewp/ZmxpRsaUK0Ev8jIouybsVSUUPgDocy8eA5jm/jxh7qPgWp89aedqoBGriBv5TysiGWLYz2Wd043ID1ZyWCSvFcntoXnMKW4EviJxiG8t+BmBv7UUxM8I8jkj5u5aI2skD2TkjHQpbBg0ssRndNKIW7+4t/OK/TRGqjQTroyl6NBEqj8MOI6DLz4B5Cf5RFtsyKcAAAAASUVORK5CYII=" className="w-[80%] hover:cursor-pointer" alt="Back To Top" />
            </a>
          </span>
        </div>
        <div className="w-1/2 flex flex-wrap justify-end items-center p-2 bg-orange-200">
          <m.div
            className="flex flex-wrap justify-end w-full"
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            <div className="mr-4">
            {menu ? (
              <NavMenu />
            ) : null}
            </div>
            <div>
            {!menu ? (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all">
                <i className="bi bi-list"></i>
              </span>
            ) : (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all">
                <i className="bi bi-x"></i>
              </span>
            )}
            </div>
          </m.div>
        </div>
        </>
      ) : (
        <>
        <div className="w-2/5 flex flex-wrap items-center justify-start p-2 bg-orange-200">
          <m.div
            className="flex flex-wrap w-full justify-start"
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ duration: 0.1, delay: 0.02 }}
          >
            <div>
            {!menu ? (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all">
                <i className="bi bi-list"></i>
              </span>
            ) : (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all">
                <i className="bi bi-x"></i>
              </span>
            )}
            </div>
            <div>
            {menu ? (
              <NavMenu />
            ) : null}
            </div>
          </m.div>
        </div>
        <div className="w-1/5 text-center flex flex-wrap justify-center font-comfortaa bg-orange-200">
          <span className="w-full text-center flex flex-wrap justify-center items-center">
            <a onClick={() => handleSectionLink("home")}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2asUoDQRCGfwJGUlqK0dpKGxtjYa3iQ2ihpVbmCTT6ANoovokGFUEfwE4EMbGUdEGbkYP/5JDc3F307kYzHwwsM3/25s/uHhsI4DhOVqoAjgC8AhBj0QXQYo+JHBpoWBLiII2RLsWLsEcjsjKJhK4DbgHcJIyLRiL9pRYGzV4njP+EEYtIViPWQ6VuoEFJGVOakTWK7gbUtG+iyNo98ytQaFJ0WnKzWu2M+T0onFO0Y9jILvOBoViuKFovuVmttsp8GwpPFC0YNjLL/CMUehRNltysVptg/g0K7xSNGzZSZT7oNZYXiuolN6vVZph/hkKboo1v+Upk4krJtU3mLzUj25Fr8jKAGoB5ABeRiYPxHLdfkbUaewp/ZmxpRsaUK0Ev8jIouybsVSUUPgDocy8eA5jm/jxh7qPgWp89aedqoBGriBv5TysiGWLYz2Wd043ID1ZyWCSvFcntoXnMKW4EviJxiG8t+BmBv7UUxM8I8jkj5u5aI2skD2TkjHQpbBg0ssRndNKIW7+4t/OK/TRGqjQTroyl6NBEqj8MOI6DLz4B5Cf5RFtsyKcAAAAASUVORK5CYII=" className="w-[80%] hover:cursor-pointer" />
            </a>
            The Shop
          </span>
        </div>
        <div className="w-2/5 flex flex-wrap p-3 justify-end items-center bg-orange-200">
          <Cart />
        </div>
        </>
      )}
    </header>
  );
}
 
export default Header;