import React, { useState } from 'react';
import logo from '../assets/projects/Logo-JK-circular.png';
import { NavLink } from 'react-router-dom';
import { IoIosHome, IoIosContact } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';
import { PiCertificateFill } from 'react-icons/pi';
import { GoProjectSymlink } from 'react-icons/go';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="bg-black mb-20">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="w-16 cursor-pointer" src={logo} alt="Logo" />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-black  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isMenuOpen ? 'top-[9%]' : ''}`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <NavLink className="hover:text-pink-500" to="">Home</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-pink-500" to="/aboutUs">About</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-pink-500" to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-pink-500" to="/certifications">Certifications</NavLink>
            </li>
            <li>
              <NavLink className="hover:text-pink-500" to="/experience">Experience</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-pink-500">
            Contact
          </button>
          <button
            onClick={handleToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar2;
