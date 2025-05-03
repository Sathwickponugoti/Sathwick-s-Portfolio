import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-purple-100/90 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-200 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Name */}
          <div className="text-xl font-bold text-purple-900">SATHWICK PONUGOTI</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-500 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-orange-500 transition-colors">Skills</a>
            <a href="#certifications" className="text-gray-700 hover:text-orange-500 transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-orange-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-100 border-t border-purple-200">
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-orange-500">About</a>
          <a href="#projects" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Projects</a>
          <a href="#skills" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Skills</a>
          <a href="#certifications" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Certifications</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:text-orange-500">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
