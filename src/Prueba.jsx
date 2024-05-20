import React, { useState } from 'react';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" >
      {/* Botón de activación del menú */}
      <button 
        onClick={toggleMenu}
        className=" md:hidden inline-flex items-center justify-center  h-10 w-20 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
      >
        <i  style={{color:"#63E6BE"}} class="fa-solid fa-bars"></i>
  
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <div id="Probando" className="absolute top-10 -right-2 w-screen shadow-lg rounded mt-2 bg-gray-700 text-left ">
          {/* Opciones del menú */}
          <a href="#" className="block px-4 py-2 ml-3 text-white-800 hover:bg-gray-100" onClick={closeMenu}>Home</a>
          <a href="#" className="block px-4 py-2 ml-3  text-white-800 hover:bg-gray-100" onClick={closeMenu}>About</a>
          <a href="#" className="block px-4 py-2 ml-3  text-white-800 hover:bg-gray-100" onClick={closeMenu}>Services</a>
          <a href="#" className="block px-4 py-2 ml-3  text-white-800 hover:bg-gray-100" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </div>
  );
}

export default DropDown;