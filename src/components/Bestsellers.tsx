import { Cake, Cookie, Sandwich, Coffee } from 'lucide-react';

const Bestsellers = () => {
  const items = [
    {
      icon: Cake,
      title: 'Cakes for Every Occasion',
      description: 'Custom designs for birthdays, weddings & more',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Cookie,
      title: 'Pastries & Cookies',
      description: 'A sweet treat for every mood',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Sandwich,
      title: 'Fresh Breads & Puffs',
      description: 'Baked every morning with premium ingredients',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Coffee,
      title: 'Snacks & Savouries',
      description: 'Perfect with your evening tea',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
            What We're Known For
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div
                className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}
              >
                <item.icon size={64} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" id="custom-cakes">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors shadow-lg inline-block"
          >
            See Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
