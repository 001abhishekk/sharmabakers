import { Heart, Leaf, Users, UtensilsCrossed } from 'lucide-react';

const AboutPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative pt-20">
        <div className="relative h-[600px] lg:h-[700px] overflow-hidden mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img
            src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Baker frosting a cake"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                A Family Bakery Born in Kurukshetra
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-4">
                Freshness. Simplicity. Happiness since 2020.
              </p>
              <p className="text-lg text-white/80">
                Every batch made with heart and handmade care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sharma Bakers shop counter"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-6">
                From a Small Oven to a Local Favorite
              </h2>
              <div className="w-24 h-1 bg-amber-600 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sharma Bakers began in 2020 with a simple dream — to bring
                freshly baked, high-quality cakes and breads to our hometown of
                Kurukshetra. What started as a single counter and a family
                recipe has grown into a space loved by thousands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every item we make — from our birthday cakes to our evening
                puffs — is baked on-site daily with locally sourced ingredients.
              </p>
              <p className="text-xl text-amber-900 font-semibold leading-relaxed">
                We don't cut corners. No preservatives, no shortcuts — just
                warmth, good taste, and honest work.
              </p>
              <button
                onClick={() => scrollToSection('menu')}
                className="mt-8 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors shadow-lg"
              >
                Explore Our Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">
                Freshness First
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Everything is baked the same day, every day. No day-old stock,
                no compromises. Fresh from our oven to your table.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">
                Made with Love
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Family recipes and real ingredients only. Every product carries
                our passion and commitment to quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3 text-center">
                Community Roots
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Serving smiles across Kurukshetra since 2020. We're proud to be
                part of your celebrations and daily moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Meet the Bakers
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Head Baker"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Sharma Family
              </h3>
              <p className="text-amber-600 font-semibold mb-3">Owners & Head Bakers</p>
              <p className="text-gray-700 leading-relaxed">
                Three generations of baking expertise in one family.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cake Artist"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Cake Artists
              </h3>
              <p className="text-amber-600 font-semibold mb-3">Decorators & Designers</p>
              <p className="text-gray-700 leading-relaxed">
                Turning dreams into delicious masterpieces.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Counter Team"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Counter Team
              </h3>
              <p className="text-amber-600 font-semibold mb-3">Customer Care Specialists</p>
              <p className="text-gray-700 leading-relaxed">
                Bringing warmth and smiles to every interaction.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-xl text-gray-800 leading-relaxed">
              <span className="font-bold text-amber-900">
                We're not just bakers — we're family.
              </span>{' '}
              Each cake, loaf, and cookie that leaves our oven carries our name,
              our story, and our promise of quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              How We Bake
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Leaf className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Select Ingredients
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Locally sourced, premium-grade ingredients selected with care
                for quality and sustainability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <UtensilsCrossed className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Bake with Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fresh batches made daily using traditional techniques and modern
                expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Serve with Smile
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Straight from oven to counter with warmth, care, and a genuine
                smile.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-amber-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors shadow-lg"
            >
              See What's Fresh Today
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
              Why Locals Choose Us
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "They made a beautiful custom cake for my anniversary — tasted
                amazing!"
              </p>
              <p className="font-semibold text-amber-900">- Priya S.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "Best fresh breads in Kurukshetra. I buy them every morning."
              </p>
              <p className="font-semibold text-amber-900">- Rajesh K.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "Quality is unmatched. They genuinely care about every order."
              </p>
              <p className="font-semibold text-amber-900">- Anita V.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "5 years a customer. Never disappointed once. Highly recommend!"
              </p>
              <p className="font-semibold text-amber-900">- Harman D.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Drop By Anytime
              </h2>
              <div className="w-24 h-1 bg-amber-300 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-400 text-amber-900 p-3 rounded-lg flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
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
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Address</p>
                    <p className="text-amber-100">
                      Model Town Market, Kurukshetra, Haryana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-400 text-amber-900 p-3 rounded-lg flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Phone</p>
                    <a
                      href="tel:+918950345254"
                      className="text-amber-300 hover:text-white transition-colors"
                    >
                      +91 89503 45254
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-400 text-amber-900 p-3 rounded-lg flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Hours</p>
                    <p className="text-amber-100">Open Daily: 8 AM – 9 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-colors text-center"
              >
                Get Directions
              </a>
              <a
                href="tel:+918950345254"
                className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/918950345254"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
