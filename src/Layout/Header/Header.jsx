import React, { useState } from 'react';
import './header.css'; // Stil dosyası
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/images/logo.webp'
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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

  return (
    <div className='container-x'>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <NavLink to="/home">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
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
          </div>
          <div className='flex gap-4 items-center'>
            <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href="#" className='flex items-center gap-1'>
                <img src="https://kofe.al/assets/images/icons/az.png" alt="" />
                <span className="menu-item">Azərbaycan</span>
                <span>
                  {hovered ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </a>
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
          <div className="navbar-toggle" onClick={toggleMenu}>
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
