import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/images/logo.webp'
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='container-x'>
       {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <nav className={isOpen ? "navbar active" : "navbar"}>
        <div className="w-full flex p-[0 20px] justify-start md:items-center md:justify-between">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className={isOpen ? "navbaritems active" : "navbaritems"}>
            <p className='lg:block xl:hidden'>Sevdiyin işlə məşğul ol, izləyicilərindən dəstək qazan!</p>
            <ul className="navbar-items">
              <li>
                <NavLink className="heading font-semibold" to="/creators">Üzvlərimiz</NavLink>
              </li>
              <li>
                <NavLink className="heading font-semibold" to="/blogs">Bloq</NavLink>
              </li>
              <li>
                <NavLink className="heading font-semibold" to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <div className='navbar-end flex gap-4 items-center'>
              <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/" className='flex items-center gap-1'>
                  <img src="https://kofe.al/assets/images/icons/az.png" alt="" />
                  <span className="menu-item">Azərbaycan</span>
                  <span>
                    {hovered ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </Link>
                <ul className="dropdown-submenu">
                  <li className='flex items-center gap-1'>
                    <img src="https://kofe.al/assets/images/icons/en.png" alt="" />
                    <span className="menu-item">English</span>
                  </li>
                  <li className='flex items-center gap-1'>
                    <img src="https://kofe.al/assets/images/icons/tr.png" alt="" />
                    <span className="menu-item">Türkce</span>
                  </li>
                  <li className='flex items-center gap-1'>
                    <img src="https://kofe.al/assets/images/icons/ru.png" alt="" />
                    <span className="menu-item">Русский</span>
                  </li>
                </ul>
              </div>
              <div className="btns flex gap-1">
                <button className="btn-outline">Daxil ol</button>
                <button className="nav-btn-gradient text-md">Qeydiyyat</button>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <IoCloseSharp onClick={closeMenu} /> : <RxHamburgerMenu />}
        </div>
      </nav>
    </div>
  );
}

export default Header;
