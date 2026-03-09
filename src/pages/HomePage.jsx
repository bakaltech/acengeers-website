import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaLeaf, 
  FaStar,
  FaHome,
  FaBuilding,
  FaTruck,
  FaSnowflake,
  FaArrowRight 
} from 'react-icons/fa';
import ParallaxSection from '../components/ParallaxSection';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import heroImage from '../assets/hero.png'; // <-- Your image

const HomePage = () => {
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Experienced Team',
      description: 'Insured, background-checked professionals you can trust.',
    },
    {
      icon: FaCalendarAlt,
      title: 'Flexible Scheduling',
      description: 'One-time, weekly, or monthly visits that fit your life.',
    },
    {
      icon: FaLeaf,
      title: 'Eco-Friendly',
      description: 'Non-toxic, environmentally safe cleaning products.',
    },
    {
      icon: FaStar,
      title: '100% Satisfaction',
      description: 'We guarantee spotless results every single time.',
    },
  ];

  const featuredServices = [
    {
      icon: FaHome,
      title: 'Residential Cleaning',
      description: 'Regular home cleaning tailored to your schedule.',
      link: '/services/residential',
    },
    {
      icon: FaBuilding,
      title: 'Commercial Cleaning',
      description: 'Office and retail space maintenance.',
      link: '/services/commercial',
    },
    {
      icon: FaTruck,
      title: 'Move In/Out',
      description: 'Deep cleaning for your move.',
      link: '/services/move',
    },
    {
      icon: FaSnowflake,
      title: 'Seasonal Maintenance',
      description: 'Spring cleaning, snow removal, etc.',
      link: '/services/seasonal',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative z-10 space-y-16 pb-16">
      {/* ===== PREMIUM HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 py-24">

        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/40 backdrop-blur-sm rounded-full"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                bottom: -20,
              }}
              animate={{
                y: [-20, -800],
                x: [0, Math.random() * 80 - 40],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* TEXT SIDE */}
            <div className="text-white">

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                We Make Cleaning
                <span className="block">Effortless</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-lg"
              >
                Professional residential and commercial cleaning services in Toronto.
                Reliable, eco-friendly, and trusted by hundreds of clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link
                  to="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-xl"
                >
                  Get a Free Quote
                </Link>

                <div className="flex items-center gap-2 text-white/90">
                  <FaShieldAlt />
                  Insured & Bonded
                </div>
              </motion.div>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-6 mt-8 text-white/90 text-sm">
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-200" />
                  5 Star Rated
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  Same Day Service
                </span>

                <span className="flex items-center gap-2">
                  <FaLeaf />
                  Eco Friendly
                </span>
              </div>
            </div>

            {/* IMAGE SIDE with fade-in and floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.img
                src={heroImage}
                alt="Cleaning service hero"
                className="max-w-xl w-full drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section ref={servicesRef} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.15)' }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 overflow-hidden group"
            >
              <div className="p-6">
                <div className="text-4xl text-primary mb-4 group-hover:scale-110 transition">
                  <service.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium hover:text-secondary transition"
                >
                  Learn More <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== PARALLAX SECTION ===== */}
      <ParallaxSection />

      {/* ===== WHY CHOOSE US ===== */}
      <section ref={featuresRef} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-primary"
        >
          Why Choose Acengeers?
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15)' }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/30 flex items-start space-x-4 transition-all"
            >
              <div className="text-3xl text-primary flex-shrink-0">
                <feature.icon />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <div className="bg-white/90 backdrop-blur-sm py-12">
        <StatsSection />
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="bg-white/90 backdrop-blur-sm py-12">
        <Testimonials />
      </div>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Cleaning Effortless?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Acengeers.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;