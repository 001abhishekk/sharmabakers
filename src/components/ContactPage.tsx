import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Facebook, Navigation } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <section className="relative pt-20">
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img
            src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Sharma Bakers storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Let's Stay in Touch
              </h1>
              <p className="text-xl lg:text-2xl text-white/95">
                We're just a call, chat, or visit away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-8">
                Direct Contact
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white p-4 rounded-lg flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Phone</h3>
                    <a
                      href="tel:+918950345254"
                      className="text-amber-600 hover:text-amber-700 font-medium text-2xl block"
                    >
                      +91 89503 45254
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-4 rounded-lg flex-shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">WhatsApp</h3>
                    <a
                      href="https://wa.me/918950345254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-lg"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-4 rounded-lg flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Address</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Sharma Bakers, Model Town Market,<br />
                      Kurukshetra, Haryana
                    </p>
                    <a
                      href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1 mt-2"
                    >
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white p-4 rounded-lg flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Business Hours</h3>
                    <p className="text-gray-700 text-lg">Open Daily — 8 AM – 9 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 text-white p-4 rounded-lg flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Email</h3>
                    <a
                      href="mailto:info@sharmabakers.in"
                      className="text-gray-600 hover:text-gray-700 font-medium text-lg"
                    >
                      info@sharmabakers.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <a
                  href="tel:+918950345254"
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors shadow-lg font-semibold text-lg"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918950345254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg font-semibold text-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-semibold text-lg"
                >
                  <Navigation size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-amber-900 mb-8">
                Find Us Here
              </h2>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.123456789!2d76.828!3d29.963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzQ2LjgiTiA3NsKwNDknNDAuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sharma Bakers Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
              Prefer Talking to a Real Person?
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We do too! Call or WhatsApp us for any order or inquiry. We're
              here to help make your special moments even sweeter.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Whether you need a custom cake, bulk orders for an event, or
                just want to know what's fresh today — we're always happy to
                chat.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+918950345254"
                  className="flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors shadow-lg font-semibold text-lg"
                >
                  <Phone size={20} />
                  <span>Call +91 89503 45254</span>
                </a>
                <a
                  href="https://wa.me/918950345254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg font-semibold text-lg"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">
              Follow Our Fresh Bakes
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              We post our new cake designs and daily specials here first!
            </p>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <a
              href="#"
              className="flex flex-col items-center space-y-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={48} />
              <span className="font-semibold text-lg">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center space-y-2 bg-blue-600 text-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              aria-label="Like us on Facebook"
            >
              <Facebook size={48} />
              <span className="font-semibold text-lg">Facebook</span>
            </a>
            <a
              href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 bg-red-600 text-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              aria-label="Find us on Google Maps"
            >
              <MapPin size={48} />
              <span className="font-semibold text-lg">Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Bakery background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Visit Us Today — Taste the Difference of Fresh Baking
            </h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+918950345254"
                className="flex items-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl font-semibold text-lg"
              >
                <Phone size={20} />
                <span>Call +91 89503 45254</span>
              </a>
              <a
                href="https://wa.me/918950345254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors shadow-2xl font-semibold text-lg"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://maps.app.goo.gl/U7KsZY41Xixxa3wD7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-2xl font-semibold text-lg"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
