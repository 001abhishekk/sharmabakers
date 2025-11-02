import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bestsellers from './components/Bestsellers';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import { updatePageMeta } from './utils/head';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (currentPage === 'about-full') {
      updatePageMeta('about');
    } else if (currentPage === 'menu-full') {
      updatePageMeta('menu');
    } else if (currentPage === 'contact-full') {
      updatePageMeta('contact');
    } else if (currentPage === 'gallery') {
      updatePageMeta('gallery');
    } else {
      updatePageMeta('home');
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Bakery',
      'name': 'Sharma Bakers',
      'image': 'https://sharmabakers.in/sharma-bakers-logo-kurukshetra.png',
      'url': 'https://sharmabakers.in',
      'telephone': '+918950345254',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Model Town Market',
        'addressLocality': 'Kurukshetra',
        'addressRegion': 'Haryana',
        'postalCode': '136118',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 29.963,
        'longitude': 76.828,
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '08:00',
        'closes': '21:00',
      },
      'sameAs': [
        'https://www.facebook.com/sharmabakers',
        'https://www.instagram.com/sharmabakers',
        'https://maps.app.goo.gl/U7KsZY41Xixxa3wD7',
      ],
      'servesCuisine': 'Bakery',
      'foundingDate': '2020',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '150',
      },
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, []);

  if (currentPage === 'about-full') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentPage} />
        <AboutPage />
        <Footer onNavigate={setCurrentPage} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPage === 'menu-full') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentPage} />
        <MenuPage />
        <Footer onNavigate={setCurrentPage} />
        <WhatsAppButton />
      </div>
    );
  }

  if (currentPage === 'contact-full') {
    return (
      <div className="min-h-screen bg-amber-50">
        <Header onNavigate={setCurrentPage} />
        <ContactPage />
        <Footer onNavigate={setCurrentPage} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header onNavigate={setCurrentPage} />
      <Hero />
      <Bestsellers />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
