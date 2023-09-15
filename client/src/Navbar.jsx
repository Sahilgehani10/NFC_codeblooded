import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
//import { useNavigate, useLocation } from "react-router-dom";

//import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "./assets/logo.png";
//import logoText from "../../assets/images/logo1.svg";

import "./Navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="navbar contentWrapper">
        <div className="logo">
          <img className="h-[5rem] w-full ml-4" src={logo} alt="" />
        </div>

        <div className="ml-[65vw]">
          <ul className="menuItems">
            <li className="menuItem">Home</li>
            <li className="menuItem">Features</li>
            <li className="menuItem">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        <div className="mobileMenuItems">
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
