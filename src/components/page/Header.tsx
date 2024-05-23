import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { motion as m } from "framer-motion";
import Cart from "../shop/Cart";

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
    <header className="flex flex-wrap z-30 justify-end px-4 pt-3 bg-orange-300 text-xl fixed w-[99vw]">
      {isScrolled ? (
        <>
        <div className="w-full flex flex-wrap justify-start items-center p-3 bg-orange-200">
          <div className="w-full">
            <span className="text-center flex flex-wrap items-center">
              <a onClick={() => handleSectionLink("home")}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2asUoDQRCGfwJGUlqK0dpKGxtjYa3iQ2ihpVbmCTT6ANoovokGFUEfwE4EMbGUdEGbkYP/5JDc3F307kYzHwwsM3/25s/uHhsI4DhOVqoAjgC8AhBj0QXQYo+JHBpoWBLiII2RLsWLsEcjsjKJhK4DbgHcJIyLRiL9pRYGzV4njP+EEYtIViPWQ6VuoEFJGVOakTWK7gbUtG+iyNo98ytQaFJ0WnKzWu2M+T0onFO0Y9jILvOBoViuKFovuVmttsp8GwpPFC0YNjLL/CMUehRNltysVptg/g0K7xSNGzZSZT7oNZYXiuolN6vVZph/hkKboo1v+Upk4krJtU3mLzUj25Fr8jKAGoB5ABeRiYPxHLdfkbUaewp/ZmxpRsaUK0Ev8jIouybsVSUUPgDocy8eA5jm/jxh7qPgWp89aedqoBGriBv5TysiGWLYz2Wd043ID1ZyWCSvFcntoXnMKW4EviJxiG8t+BmBv7UUxM8I8jkj5u5aI2skD2TkjHQpbBg0ssRndNKIW7+4t/OK/TRGqjQTroyl6NBEqj8MOI6DLz4B5Cf5RFtsyKcAAAAASUVORK5CYII=" className="w-[60%] -mb-1 hover:cursor-pointer" alt="Back To Top" />
              </a>
            </span>
          </div>
          <div className="w-[88%] flex flex-wrap justify-start items-center bg-orange-200 ml-8 md:-mt-8 lg:-mt-6 sm:-mt-4 xs:-mt-6 xs:-mb-1 xl:-mt-7">
            <m.div
              className="flex flex-wrap justify-start w-full"
              whileInView={{ x: ["-100%", "0%"] }}
              transition={{ duration: 0.1, delay: 0.02 }}
            >
              <div className="ml-3">
              {!menu ? (
                <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all text-lg xs:text-[20px] sm:text-[20px] xl:text-2xl lg:text-2xl">
                  <i className="bi bi-list"></i>
                </span>
              ) : (
                <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all xl:text-2xl lg:text-2xl">
                  <i className="bi bi-x"></i>
                </span>
              )}
              </div>
              {menu ? (
                <NavMenu />
              ) : null}
            </m.div>
          </div>
        </div>
        </>
      ) : (
        <>
        <div className="w-4/5 flex flex-wrap items-center justify-start p-2 bg-orange-300">
          <m.div
            className="flex flex-wrap w-full justify-start"
            whileInView={{ x: ["-100%", "0%"] }}
            transition={{ duration: 0.2, delay: 0.02 }}
          >
            <div className="inline-block">
            {!menu ? (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all text-lg xs:text-[20px] sm:text-[20px] xl:text-2xl lg:text-2xl">
                <i className="bi bi-list"></i>
              </span>
            ) : (
              <span onClick={() => showMenu(!menu)} className="hover:cursor-pointer hover:text-orange-500 transition-all">
                <i className="bi bi-x"></i>
              </span>
            )}
            </div>
            {menu ? (
              <NavMenu />
            ) : null}
          </m.div>
        </div>
        </>
      )}
      <div className={isScrolled ? "w-auto h-full flex flex-wrap justify-end items-center bg-orange-200 text-lg mr-6 -mt-[37px] xs:mr-4 xl:text-2xl lg:text-2xl xl:-mt-[45px] lg:-mt-[45px]" : "w-1/5 flex flex-wrap p-3 justify-end items-center bg-orange-300 xl:text-2xl lg:text-2xl"}>
        <Cart />
      </div>
    </header>
  );
}
 
export default Header;