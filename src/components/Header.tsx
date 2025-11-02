import { Menu, Phone, MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about-full');
    } else {
      scrollToSection('about');
    }
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    if (onNavigate) {
      onNavigate('menu-full');
    } else {
      scrollToSection('menu');
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      scrollToSection('home');
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact-full');
    } else {
      scrollToSection('contact');
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="/logo.svg"
              alt="Sharma Bakers Logo"
              className="h-12 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={handleMenuClick}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('custom-cakes')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Custom Cakes
            </button>
            <button
              onClick={handleAboutClick}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={handleContactClick}
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+918950345254"
              className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">Call Us</span>
            </a>
            <a
              href="https://wa.me/918950345254"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-amber-600"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={handleMenuClick}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('custom-cakes')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Custom Cakes
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Gallery
              </button>
              <button
                onClick={handleContactClick}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="tel:+918950345254"
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">Call Us</span>
                </a>
                <a
                  href="https://wa.me/918950345254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
