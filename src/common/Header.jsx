import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

// import { FaCartShopping } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa'; // Correct import here
import { HiMenuAlt3, HiX } from 'react-icons/hi';

import { ShoppingCart } from 'lucide-react';
import { Usecart } from './Usecart';
import '../index.css';

const menuLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Products', link: '/products' },
  { id: 3, name: 'Purchase', link: '/purchase' },
  { id: 4, name: 'About', link: '/about' },
  { id: 5, name: 'Contact', link: '/contact' }
];

export default function Header() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { cartCount } = Usecart();

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo with Icon */}
        <a
          href="#"
          className="flex items-center text-blue-600 font-bold text-2xl tracking-wide uppercase space-x-2"
        >
          <FaShoppingBag className="text-3xl" />
          <span>SHOPZEN</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Hover Search */}
          <div className="relative group hidden sm:block">
            <IoMdSearch className="text-xl text-gray-600  cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 opacity-0 group-hover:w-64 group-hover:opacity-100 transition-all duration-300 bg-white  border border-gray-300  rounded-full px-4 py-1 text-sm focus:outline-none"
            />
          </div>

     {/* 🛒 Cart with count */}
          <div className="relative">
            <ShoppingCart className="text-gray-700" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-2xl text-gray-700 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="bg-white  px-5 py-4 lg:hidden shadow-md space-y-3">
          {menuLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block text-gray-600  hover:text-blue-600  transition font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}


// import React, { useState } from 'react'
// import { FaShoppingBag } from 'react-icons/fa';


// const menuLinks = [
//   { id: 1, name: 'Home', link: '/' },
//   { id: 2, name: 'Products', link: '/products' },
//   { id: 3, name: 'Purchase', link: '/purchase' },
//   { id: 4, name: 'About', link: '/about' },
//   { id: 5, name: 'Contact', link: '/contact' }

// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//    <header className='fixed top-0 left-0 w-full z-50'>
//       <div className='max-w-7xl mx-auto flex justify-between items-center'>
//          <a href="" className='flex items-center text-2xl text-blue-700 uppercase'>
//           <FaShoppingBag className='text-3xl'/>
//           <span>Shopzen</span>
//          </a>
//       </div>

//       <ul className='hidden lg:flex items-center'>
//         {menuLinks.map((item) => (
//           <li key={item.id}>
//             <a href={item.link} className='font-medium text-gray-400 hover:text-blue-800'>
//               {item.name}
//             </a>
//           </li>
//         ))}

//       </ul>
//    </header>
//   )
// }