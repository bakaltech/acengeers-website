import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Acengeers</Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:text-secondary transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li><Link to="/" onClick={toggleMenu} className="block hover:text-secondary transition">Home</Link></li>
              <li><Link to="/services" onClick={toggleMenu} className="block hover:text-secondary transition">Services</Link></li>
              <li><Link to="/about" onClick={toggleMenu} className="block hover:text-secondary transition">About</Link></li>
              <li><Link to="/contact" onClick={toggleMenu} className="block hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;