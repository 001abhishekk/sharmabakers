import { useState, useEffect } from 'react';
import { Cake, Cookie, Sandwich, Coffee, Phone, MessageCircle } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['cakes', 'pastries', 'breads', 'snacks', 'beverages'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const cakes = [
    {
      name: 'Chocolate Truffle Cake',
      description: 'Rich chocolate layers with truffle cream',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Black Forest Cake',
      description: 'Classic chocolate cake with cherry filling',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Pineapple Cake',
      description: 'Light vanilla cake with pineapple chunks',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Red Velvet Cake',
      description: 'Velvety smooth with cream cheese frosting',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Butterscotch Cake',
      description: 'Creamy butterscotch with crunchy bits',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Vanilla Cake',
      description: 'Classic vanilla with fresh cream',
      sizes: '½ kg, 1 kg, 2 kg',
      image: 'https://images.pexels.com/photos/265801/pexels-photo-265801.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const pastries = [
    { name: 'Chocolate Pastry', description: 'Rich chocolate cream topping', image: 'https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Pineapple Pastry', description: 'Fresh pineapple cream', image: 'https://images.pexels.com/photos/1120964/pexels-photo-1120964.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Strawberry Pastry', description: 'Fresh strawberry topping', image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Black Forest Pastry', description: 'Cherry and chocolate delight', image: 'https://images.pexels.com/photos/3618538/pexels-photo-3618538.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Butterscotch Pastry', description: 'Crunchy butterscotch cream', image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Vanilla Pastry', description: 'Classic vanilla cream', image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const breads = [
    { name: 'Garlic Breadsticks', description: 'Crispy and buttery with garlic' },
    { name: 'Veg Puff', description: 'Flaky pastry with spiced vegetables' },
    { name: 'Paneer Roll', description: 'Soft roll with spiced paneer filling' },
    { name: 'Plain Bread Loaf', description: 'Fresh daily white bread' },
    { name: 'Whole Wheat Loaf', description: 'Healthy whole wheat bread' },
    { name: 'Dinner Rolls', description: 'Soft and fluffy dinner rolls' },
  ];

  const snacks = [
    { name: 'Veg Burger', description: 'Fresh vegetables with special sauce', image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Pizza Slice', description: 'Cheese loaded pizza slices', image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Veg Patty', description: 'Crispy vegetable patty', image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Sandwich', description: 'Fresh vegetables in toasted bread', image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  const beverages = [
    { name: 'Hot Coffee', price: '₹40' },
    { name: 'Cold Coffee', price: '₹60' },
    { name: 'Chocolate Milkshake', price: '₹80' },
    { name: 'Vanilla Milkshake', price: '₹80' },
    { name: 'Strawberry Milkshake', price: '₹80' },
    { name: 'Soft Drinks', price: '₹30' },
  ];

  const customCakes = [
    'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1702374/pexels-photo-1702374.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <>
      <section className="relative pt-20">
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img
            src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Assorted cakes and pastries"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Our Menu
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-4">
                Freshly baked every morning — crafted with love since 2020.
              </p>
              <p className="text-lg text-white/80">
                Prices vary by size and design — call us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start space-x-4 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => scrollToSection('cakes')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'cakes'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
              }`}
            >
              <Cake size={20} />
              <span>Cakes</span>
            </button>
            <button
              onClick={() => scrollToSection('pastries')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'pastries'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
              }`}
            >
              <Cookie size={20} />
              <span>Pastries</span>
            </button>
            <button
              onClick={() => scrollToSection('breads')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'breads'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
              }`}
            >
              <Sandwich size={20} />
              <span>Breads & Puffs</span>
            </button>
            <button
              onClick={() => scrollToSection('snacks')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'snacks'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
              }`}
            >
              <Sandwich size={20} />
              <span>Snacks</span>
            </button>
            <button
              onClick={() => scrollToSection('beverages')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'beverages'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
              }`}
            >
              <Coffee size={20} />
              <span>Beverages</span>
            </button>
          </div>
        </div>
      </div>

      <section id="cakes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Cakes for Every Occasion
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cakes.map((cake, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cake.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{cake.description}</p>
                  <p className="text-amber-600 font-semibold mb-4">
                    Available in: {cake.sizes}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="tel:+918950345254"
                      className="flex-1 flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      <Phone size={18} />
                      <span>Call</span>
                    </a>
                    <a
                      href="https://wa.me/918950345254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-serif font-bold text-amber-900 mb-6 text-center">
              Custom Cakes
            </h3>
            <p className="text-center text-gray-700 text-lg mb-8">
              Send us your design and we'll create your dream cake
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {customCakes.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Custom cake design ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://wa.me/918950345254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Your Design Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pastries" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Fresh Cream Pastries
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {pastries.map((pastry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pastry.image}
                    alt={pastry.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pastry.name}
                  </h3>
                  <p className="text-gray-600">{pastry.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/918950345254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Order Pastries via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section id="breads" className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Straight from the Oven
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-800 font-semibold">
              Baked fresh every morning — limited stock daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breads.map((bread, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {bread.name}
                </h3>
                <p className="text-gray-600">{bread.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="snacks" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Snacks & Savouries
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {snacks.map((snack, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={snack.image}
                    alt={snack.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {snack.name}
                  </h3>
                  <p className="text-gray-600">{snack.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+918950345254"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <Phone size={20} />
              <span>Call Now to Pre-Book Bulk Orders</span>
            </a>
          </div>
        </div>
      </section>

      <section id="beverages" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Beverages
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beverages.map((beverage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex justify-between items-center"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {beverage.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-600">
                    {beverage.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-amber-900 mb-4">
                Today's Specials
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-800 mb-4">
                Fresh Strawberry Cake — Available Today!
              </p>
              <a
                href="https://wa.me/918950345254"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-lg shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Ask on WhatsApp What's Fresh Today</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Everything you see here is baked right here in Kurukshetra
            </h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+918950345254"
                className="flex items-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              >
                <Phone size={20} />
                <span>Call +91 89503 45254</span>
              </a>
              <a
                href="https://wa.me/918950345254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg shadow-lg"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
