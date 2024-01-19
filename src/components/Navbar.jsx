import { useState } from "react";
import { logo } from "../assets";
import { style } from "../util/style";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { navigationLinks } from "../util/constants";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggleNav, setToggleNav] = useState(false);
  const toggleHandler = () => {
    setToggleNav((prev) => !prev);
  };
  const activeHandler = (id) => setActive(id);
  return (
    <div className={`${style.flexbetween} w-full mt-6  navbar`}>
      <ul className="list-none sm:flex hidden justify-start items-center  ">
        {navigationLinks.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${style.navLink} ${
                index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
              } ${active === item.id ? "text-white" : "text-lightWhite"}
               hover:text-white transition-all duration-300 navlink`}
              onClick={() => activeHandler(item.id)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={`${style.heding1}flex  justify-end cursor-pointer`}>
        <img src={logo} alt="logo" className="w-[130px] " />
      </div>
      {/* navigation btn*/}
      <div className="sm:hidden flex flex-1 justify-end items-end z-20">
        <div
          className="text-white text-[25px] cursor-pointer"
          onClick={toggleHandler}
        >
          {toggleNav ? <AiOutlineClose /> : <AiOutlineMenuFold />}
        </div>

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0
          left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex justify-center items-center flex-1 ">
            {navigationLinks.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${style.navLink}
                
                  ${active === item.id ? "active" : ""}
               hover:text-white transition-all duration-300 navlink mr-10`}
                  onClick={() => activeHandler(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
