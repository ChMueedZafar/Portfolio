import React from 'react';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-blue-700 dark:text-white text-xl">Mueed's Portfolio</div>
      <div className="flex gap-6 items-center">
        <a href="#home" className="text-gray-800 dark:text-white hover:text-blue-600">Home</a>
        <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-600">About</a>
        <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-600">Contact</a>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
