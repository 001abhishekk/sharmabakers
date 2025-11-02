import { Instagram, Facebook, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    if (onNavigate) {
      onNavigate('about-full');
    } else {
      scrollToSection('about');
    }
  };

  const handleMenuClick = () => {
    if (onNavigate) {
      onNavigate('menu-full');
    } else {
      scrollToSection('menu');
    }
  };

  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      scrollToSection('home');
    }
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact-full');
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <button
            onClick={handleHomeClick}
            className="text-left hover:opacity-90 transition-opacity"
          >
            <div className="mb-4">
              <img
                src="/logo.svg"
                alt="Sharma Bakers Logo"
                className="h-16 w-auto mb-3"
              />
            </div>
            <p className="text-amber-100 leading-relaxed">
              Baking Happiness Since 2020
            </p>
          </button>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-300">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-amber-100 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={handleMenuClick}
                className="text-left text-amber-100 hover:text-white transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-amber-100 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-amber-100 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={handleContactClick}
                className="text-left text-amber-100 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 p-3 rounded-lg hover:bg-amber-700 transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center">
          <p className="text-amber-100 flex items-center justify-center space-x-2">
            <span>&copy; 2025 Sharma Bakers</span>
            <span>|</span>
            <span className="flex items-center">
              Made with <Heart size={16} className="mx-1 fill-red-500 text-red-500" /> in
              Kurukshetra
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
