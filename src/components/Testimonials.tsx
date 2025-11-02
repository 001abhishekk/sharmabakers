import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Best cake in Kurukshetra — they made my custom truffle exactly how I wanted! The attention to detail and taste is unmatched.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      text: 'Been coming here for 10 years. The quality never drops. Their fresh breads and puffs are a must-try every morning!',
      rating: 5,
    },
    {
      name: 'Anita Verma',
      text: 'Ordered a wedding cake for my sister. Everyone kept asking where we got it from. Absolutely beautiful and delicious!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-4">
            Loved by Locals
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Star size={20} className="text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">Rated on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative"
            >
              <Quote
                size={48}
                className="text-amber-200 absolute top-6 right-6 opacity-50"
              />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-amber-900 text-lg">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
