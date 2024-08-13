import React, { useState } from 'react';
import logo from '../assets/projects/Logo-JK-circular.png';
import { NavLink } from 'react-router-dom';
import { HiBars4 } from "react-icons/hi2";
import {  GiSplitCross } from "react-icons/gi";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black mb-20">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="sm:w-16 w-[50px] mt-[20px]   cursor-pointer" src={logo} alt="Logo" />
        </div>
        <div
          className={`nav-links z-[1] duration-500 md:static absolute bg-black md:min-h-fit min-h-[42vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isMenuOpen ? 'top-[9%]' : ''}`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <NavLink
                to="/"
                onClick={handleLinkClick} 
                className={({ isActive }) => 
                  `hover:text-pink-500 ${isActive ? 'border-b-2 border-red-500' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `hover:text-pink-500 ${isActive ? 'border-b-2 border-red-500' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `hover:text-pink-500 ${isActive ? 'border-b-2 border-red-500' : ''}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certifications"
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `hover:text-pink-500 ${isActive ? 'border-b-2 border-red-500' : ''}`
                }
              >
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `hover:text-pink-500 ${isActive ? 'border-b-2 border-red-500' : ''}`
                }
              >
                Experience
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:ring-cyan-200 focus:outline-none rounded-lg text-sm px-6 py-[5px] text-center">
            Contact
          </button>
          <button
            onClick={handleToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ?<GiSplitCross className='text-lime-500'/> :<HiBars4/>}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
