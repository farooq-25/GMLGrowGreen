// src/pages/AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaLeaf, FaSeedling, FaRecycle, FaTruck, FaHeadset } from 'react-icons/fa';
import aboutUsBg from '../assets/images/about_us_bg2.jpg';
import aboutUsBg3 from '../assets/images/about_us_bg3.jpg';

const primaryGreen = '#10B981';
const secondaryGreen = '#059669';

// Enhanced Animated Section Component
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
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
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New Grow Up Animation Component for CTA Section
const GrowUpCard = ({ children, delay = 0 }) => {
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
        hidden: { 
          opacity: 0, 
          scale: 0.8,
          y: 50
        },
        visible: { 
          opacity: 1, 
          scale: 1,
          y: 0
        }
      }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

// Fade In Up Component for general content
const FadeInUp = ({ children, delay = 0, className = "" }) => {
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
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered List Component for process items
const StaggeredList = ({ children, className = "" }) => {
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
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// New Process Timeline Component
const ProcessTimeline = () => {
  const processes = [
    {
      step: "01",
      icon: FaSeedling,
      title: "Material Selection",
      description: "Premium, breathable materials chosen for optimal root health and superior aeration",
      color: "from-green-400 to-green-500"
    },
    {
      step: "02",
      icon: FaLeaf,
      title: "Design & Manufacturing",
      description: "Expertly designed using advanced techniques for sturdy, reliable products",
      color: "from-emerald-400 to-emerald-500"
    },
    {
      step: "03",
      icon: FaRecycle,
      title: "Sustainability Focus",
      description: "Commitment to organic, eco-friendly materials to minimize environmental impact",
      color: "from-teal-400 to-teal-500"
    },
    {
      step: "04",
      icon: FaHeadset,
      title: "Quality Assurance",
      description: "Stringent inspections ensure every product meets our high standards",
      color: "from-cyan-400 to-cyan-500"
    },
    {
      step: "05",
      icon: FaTruck,
      title: "Efficient Delivery",
      description: "Reliable logistics partners ensure prompt and secure shipping nationwide",
      color: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <div className="relative">
      {/* Vertical Timeline for Desktop */}
      <div className="hidden lg:block">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 to-emerald-200 transform -translate-x-1/2">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-green-500 to-emerald-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />
        </div>
        
        <div className="space-y-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </motion.div>
              </div>

              {/* Center Icon & Step */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {process.step}
                </motion.div>
                <div className="absolute -inset-4 bg-white/20 rounded-full" />
              </div>

              {/* Icon */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                    <process.icon className="text-3xl" style={{ color: primaryGreen }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8">
        {processes.map((process, index) => (
          <motion.div
            key={process.step}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-start space-x-4">
              <motion.div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}
                whileHover={{ scale: 1.1 }}
              >
                {process.step}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <process.icon className="text-lg" style={{ color: primaryGreen }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{process.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${aboutUsBg})`
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm mb-6 shadow-lg">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                <FaLeaf className="text-2xl" style={{ color: primaryGreen }} />
              </motion.div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              About GML Grow Green
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={0.5}>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Pioneering sustainable gardening solutions through innovation, quality, and environmental stewardship.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Mission Section with Original Animations */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <motion.div 
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-green-50"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed font-light">
                To provide premium organic grow bags that create the ideal environment for plant growth while significantly reducing environmental impact through sustainable practices and innovative design.
              </p>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      {/* Passion Section with Background */}
      <section 
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${aboutUsBg3})`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/90 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="mb-8">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Our Passion for Sustainable Gardening
                  </motion.h2>
                  <motion.div 
                    className="w-20 h-1 bg-green-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                
                <div className="space-y-6">
                  {[
                    "As leading manufacturers of Grow Bags, Vermi Beds, Azolla Beds, and comprehensive gardening solutions, we distinguish ourselves through an unwavering commitment to quality and timely delivery.",
                    "At GML Grow Bags, we're passionate about empowering gardeners to cultivate thriving ecosystems using eco-friendly methods. We understand that plant health begins with the growing medium, which is why we meticulously craft our products from organic, sustainable materials.",
                    "Our grow bags, made from premium natural fibers, create breathable environments that prevent root circling and promote robust development. Whether for balcony gardens, rooftop setups, or backyard farming, our diverse range supports everything from delicate herbs to bountiful vegetables."
                  ].map((text, index) => (
                    <motion.p 
                      key={index}
                      className="text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
              
              <FadeInUp delay={0.3}>
                <div className="bg-white/90 rounded-2xl p-8 shadow-lg">
                  <StaggeredList className="grid grid-cols-2 gap-6">
                    {[
                      { icon: FaSeedling, title: "Premium Quality", desc: "Superior materials for optimal growth" },
                      { icon: FaRecycle, title: "Eco-Friendly", desc: "Sustainable & biodegradable" },
                      { icon: FaTruck, title: "Timely Delivery", desc: "Reliable nationwide shipping" },
                      { icon: FaHeadset, title: "Expert Support", desc: "Gardening guidance & assistance" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-sm border border-green-100 text-center hover:shadow-lg transition-all duration-300 group"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="text-3xl mx-auto mb-3" style={{ color: primaryGreen }} />
                        </motion.div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </motion.div>
                    ))}
                  </StaggeredList>
                </div>
              </FadeInUp>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From material selection to your doorstep, we maintain excellence at every step
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mt-6"></div>
            </div>
          </FadeInUp>
          <ProcessTimeline />
        </div>
      </section>

      {/* CTA Section with Original Grow Up Animation */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GrowUpCard>
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Grow Together?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Discover exceptional quality and unbeatable value with our sustainable gardening solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="http://www.gromart.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Our Online Store
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>
              </motion.div>
              
              <motion.p 
                className="text-green-200 mt-4 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                gromart.in
              </motion.p>
            </motion.div>
          </GrowUpCard>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;