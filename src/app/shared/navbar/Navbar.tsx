'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed flex items-center lg:justify-center  top-0 w-full z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? 'bg-[#000] shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* desktop nav items */}
     <div className=' lg:flex items-center justify-between w-[80%] hidden'>
      <div className=' flex items-center gap-10'>
        <Image src="/assets/logo.png" alt="searchIcon" width={60} height={30}  />
        <a href="#">Demos</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Pages</a>
        <a href="#">Contact</a>
      </div>
          <div className='flex gap-2'>
              <button className='border border-[#363944] px-3 py-2 rounded-sm'>Sign in</button>
              <button className="gradient-button">Get Started Free</button>
          </div>
     </div>
     {/* mobile bar */}
     <div className="relative w-full lg:hidden block">
      <div className=" flex justify-between w-full px-5 py-4 items-center">
        <Image src="/assets/logo.png" alt="Logo" width={60} height={30} />
        <button
          onClick={toggleMenu}
          className="text-4xl text-white focus:outline-none transition-transform duration-300"
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#12141d] text-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-5 border-b">
          <Image src="/assets/logo.png" alt="Logo" width={60} height={30} />
        </div>
        <ul className="mt-10 space-y-4 text-lg font-medium">
          <li className="px-5 py-2 hover:bg-[#1f1f2e] cursor-pointer transition-colors">
          Demos
          </li>
          <li className="px-5 py-2 hover:bg-[#1f1f2e] cursor-pointer transition-colors">
            About
          </li>
          <li className="px-5 py-2 hover:bg-[#1f1f2e] cursor-pointer transition-colors">
            Blog
          </li>
          <li className="px-5 py-2 hover:bg-[#1f1f2e] cursor-pointer transition-colors">
            Pages
          </li>
          <li className="px-5 py-2 hover:bg-[#1f1f2e] cursor-pointer transition-colors">
            Contact
          </li>
        </ul>
        <div className='flex gap-2 flex-col px-5 mt-5'>
              <button className='border border-[#363944] px-3 py-2 rounded-sm'>Sign in</button>
              <button className="gradient-button">Get Started Free</button>
          </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
     
    </div>
  );
}