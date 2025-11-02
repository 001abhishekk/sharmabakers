import { MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 lg:pt-24">
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <img
          src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fresh baked goods"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Baked Fresh Daily in Kurukshetra
              </h2>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed">
                From our oven to your celebration — pure, handmade, and full of
                love since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors shadow-lg"
                >
                  View Menu
                </button>
                <a
                  href="tel:+918950345254"
                  className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
                >
                  Call to Order
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/PHcPD53wmMtoxRG86"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <MapPin size={20} />
                <span className="text-lg">
                  Visit us at Paras road , Opposite Hindustan Medical Laboratory , Ayush Chowk, Kurukshetra, Haryana 136118
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
