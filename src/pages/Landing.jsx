import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaRecycle,
  FaTint,
  FaLeaf,
  FaBoxOpen,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logoImage from "../assets/images/logo.png";
import heroBgImage from "../assets/images/hero-bg.png";

// Dark forest green color scheme
const primaryGreen = "#2E8B57"; // Forest Green
const secondaryGreen = "#3D5A3C"; // Dark Forest Green
const lightGreen = "#4CAF50"; // Lighter green for accents

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: secondaryGreen }}
              >
                <FaLeaf className="text-white text-sm" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ color: secondaryGreen }}
              >
                GML Grow Green
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-green-800 transition-colors"
                style={{ color: secondaryGreen }}
              >
                About
              </a>
              <Link
                to="/products"
                className="text-gray-700 hover:text-green-800 transition-colors"
                style={{ color: secondaryGreen }}
              >
                Products
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: secondaryGreen }}
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="py-2 transition-colors hover:text-green-800"
                  style={{ color: secondaryGreen }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <Link
                  to="/products"
                  className="py-2 transition-colors hover:text-green-800"
                  style={{ color: secondaryGreen }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding for fixed navbar */}
      <div className="pt-16"></div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-start bg-cover bg-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBgImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Grow Smarter.
              <br />
              Grow Greener.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl mx-auto md:mx-0">
              Sustainable gardening solutions for a better tomorrow
            </p>
            <Link to="/products" className="inline-block">
              <button
                className="px-6 py-3 md:px-8 md:py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm md:text-base"
                style={{
                  backgroundColor: "#ffffff",
                  color: secondaryGreen,
                }}
              >
                Explore Products
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg w-full">
                <img
                  src={logoImage}
                  alt="About GML Green"
                  className="w-full h-48 md:h-96 object-contain p-4 md:p-8 bg-gray-50"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: secondaryGreen }}
                >
                  About GML Green
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    At GML Grow Green, we believe that sustainable living begins
                    with the smallest of actions — like the way you grow your
                    plants. Our mission is to make gardening smarter, cleaner,
                    and greener by offering eco-friendly grow bags and
                    sustainable gardening solutions.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We're passionate about combining innovation with
                    environmental responsibility. Every GML product is crafted
                    using durable, biodegradable materials designed to reduce
                    waste and promote healthy plant growth.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Whether you're a home gardener, a farming enthusiast, or a
                    business growing on a larger scale, GML Grow Green is here
                    to support your journey towards a greener tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainability Highlights Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
              style={{ color: secondaryGreen }}
            >
              Sustainability Highlights
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {/* Recyclable Materials */}
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaRecycle className="text-white text-2xl md:text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                  Recyclable
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">Materials</p>
              </div>

              {/* Reduces Water Waste */}
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaTint className="text-white text-2xl md:text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                  Reduces
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">Water Waste</p>
              </div>

              {/* Organic & Non-GMO */}
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaLeaf className="text-white text-2xl md:text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                  Organic &
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">Non-GMO</p>
              </div>

              {/* Eco-friendly Design */}
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaBoxOpen className="text-white text-2xl md:text-4xl" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                  Eco-friendly
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">Design</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
              style={{ color: secondaryGreen }}
            >
              Why Choose GML Grow Green?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaLeaf className="text-white text-lg md:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                  Durable Materials
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  High-quality, long-lasting products designed to withstand the
                  elements and serve you for years.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaBoxOpen className="text-white text-lg md:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                  Eco Packaging
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  100% recyclable and biodegradable packaging materials that
                  minimize environmental impact.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaTint className="text-white text-lg md:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                  Customer Support
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Dedicated team ready to help you succeed with expert gardening
                  advice and assistance.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: secondaryGreen }}
                >
                  <FaRecycle className="text-white text-lg md:text-xl" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Quick and reliable shipping to get your sustainable gardening
                  journey started right away.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Landing;
