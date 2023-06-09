import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { headerIcons, menuItems } from "./utils/helpers";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="flex lg:flex-row  flex-col lg:items-center items-start justify-between py-5 border-b lg:px-10 px-5">
        <Logo />

        <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-20 gap-5 mt-5">
          <p className="text-lg text-[#666] hover:text-[#000]">
            +91 9731816547
          </p>
          <p className="text-lg text-[#666] hover:text-[#000]">
            hrithikchandrashekar@gmail.com
          </p>
          <div className="flex items-center gap-5">
            {headerIcons.map((item) => (
              <img src={item.logo} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className=" flex lg:flex-row flex-col lg:items-center items-start justify-between lg:px-10 px-5 ">
        <div className="flex lg:flex-row md:flex-row flex-col justify-start lg:items-center  items-start lg:px-0 lg:gap-10 gap-5 py-5">
          {menuItems.map((item) => (
            <Link to={item.link}>
              <p className="text-lg font-medium text-[#666] hover:text-[#000] cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
