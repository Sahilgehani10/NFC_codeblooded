import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
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
      <div className="navbar flex justify-between contentWrapper ">
        <div className="logo flex ">
          <Link to={'/'}><img className="h-[5rem] w-full ml-4" src={logo} alt="" /></Link>
        </div>

        <div className="ml-[65vw]">
          <ul className="menuItems">
            <li className="menuItem"><Link to={'/'}>Home</Link></li>
            <li className="menuItem"><Link to={"/features"}>Features</Link></li>
            <li className="menuItem">
              <Link to={'/login'}>Login</Link>
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
