import { headerIcons, menuItems } from "./utils/helpers";
import React, { useState } from "react";
import menu from "../assets/icons/menu.svg";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const Header = ({ handleTechStack, handleProjects }: any) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-between py-5 lg:px-10 md:px-10 px-5">
        <Logo />

        <div className="lg:flex hidden items-center gap-10">
          {menuItems.map((item: any) => (
            <Link to={item.link}>
              <p
                onClick={
                  item?.name === "Tech Stack" ? handleTechStack : handleProjects
                }
                className="text-lg font-medium text-[#666666] hover:text-[#000] cursor-pointer"
              >
                {item?.name}
              </p>
            </Link>
          ))}

          <div className="lg:flex hidden items-center gap-5">
            {headerIcons.map((item: any) => (
              <img className="cursor-pointer" src={item.logo} alt="" />
            ))}
          </div>
        </div>

        <div className="lg:hidden block">
          <img
            onClick={toggle}
            className="w-[26px] h-[26px] cursor-pointer"
            src={menu}
            alt=""
          />
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div className="flex flex-col items-start gap-5 lg:px-10 px-5 bg-[#f2f2f2] py-5">
            {menuItems.map((item) => (
              <Link to={item.link}>
                <p className="text-lg text-[#666666] font-medium">
                  {item.name}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Header;
