import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaRecycle, FaTint, FaLeaf, FaBoxOpen, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/images/logo.png';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center">
                <FaLeaf className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-primary-green">GML Grow Green</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary-green transition-colors">
                About
              </a>
              <Link to="/products" className="text-gray-700 hover:text-primary-green transition-colors">
                Products
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/assets/images/hero-bg.png')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Grow Smarter.<br />
              Grow Greener.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Sustainable gardening solutions for a better tomorrow
            </p>
            <Link to="/products">
              <button className="bg-white text-primary-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Explore Products
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={logoImage} 
                  alt="About GML Green" 
                  className="w-full h-96 object-contain p-8 bg-gray-50"
                />
              </div>
              
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-primary-green mb-6">
                  About GML Green
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  At GML Grow Green, we believe that sustainable living begins with the smallest of actions — like the way you grow your plants. Our mission is to make gardening smarter, cleaner, and greener by offering eco-friendly grow bags and sustainable gardening solutions that help you nurture the planet while you nurture your plants.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We're passionate about combining innovation with environmental responsibility. Every GML product is crafted using durable, biodegradable materials designed to reduce waste and promote healthy plant growth.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you're a home gardener, a farming enthusiast, or a business growing on a larger scale, GML Grow Green is here to support your journey towards a greener tomorrow.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainability Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-primary-green mb-16">
              Sustainability Highlights
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Recyclable Materials */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <FaRecycle className="text-white text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Recyclable</h3>
                <p className="text-gray-600 text-sm">Materials</p>
              </div>

              {/* Reduces Water Waste */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <FaTint className="text-white text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Reduces</h3>
                <p className="text-gray-600 text-sm">Water Waste</p>
              </div>

              {/* Organic & Non-GMO */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <FaLeaf className="text-white text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Organic &</h3>
                <p className="text-gray-600 text-sm">Non-GMO</p>
              </div>

              {/* Eco-friendly Design */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <FaBoxOpen className="text-white text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Eco-friendly</h3>
                <p className="text-gray-600 text-sm">Design</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-primary-green mb-16">
              Why Choose GML Grow Green?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Durable Materials</h3>
                <p className="text-gray-600">
                  High-quality, long-lasting products designed to withstand the elements and serve you for years.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                  <FaBoxOpen className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco Packaging</h3>
                <p className="text-gray-600">
                  100% recyclable and biodegradable packaging materials that minimize environmental impact.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                  <FaTint className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Support</h3>
                <p className="text-gray-600">
                  Dedicated team ready to help you succeed with expert gardening advice and assistance.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary-green rounded-lg flex items-center justify-center mb-4">
                  <FaRecycle className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable shipping to get your sustainable gardening journey started right away.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-green text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Name */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <FaLeaf className="text-primary-green text-lg" />
              </div>
              <span className="text-xl font-bold">Grow Green</span>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right space-y-1 mb-4 md:mb-0">
              <p className="text-sm">info@gmlgreen.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-300 mt-6 pt-6 border-t border-white border-opacity-20">
            © 2025 GML Grow Green. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

