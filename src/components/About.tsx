const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Sharma Bakers shop"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-amber-900 mb-6">
              A Family Bakery with a Heart
            </h2>
            <div className="w-24 h-1 bg-amber-600 mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sharma Bakers has been serving Kurukshetra since 1998 with one
              simple goal — to make every customer feel at home. Our recipes
              blend tradition, freshness, and quality — no shortcuts, no
              preservatives, just honest baking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every cake, pastry, and loaf that comes out of our oven is made
              with the finest ingredients and a whole lot of love. We believe in
              the magic that happens when time-honored recipes meet skilled
              hands and passionate hearts.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
