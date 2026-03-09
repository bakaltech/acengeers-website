import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
  const stats = [
    { icon: FaUsers, value: '500+', label: 'Happy Clients' },
    { icon: FaTrophy, value: '10+', label: 'Years Experience' },
    { icon: FaLeaf, value: '100%', label: 'Eco-Friendly' },
    { icon: FaHeart, value: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="About Acengeers"
        subtitle="Your trusted cleaning partner in Toronto"
        icon={FaHeart}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-12"
        >
          <p className="text-lg text-gray-700 mb-4">
            We are a Toronto-based company dedicated to providing top-tier cleaning and maintenance solutions.
            Our team is trained, insured, and passionate about making your space spotless.
          </p>
          <p className="text-lg text-gray-700">
            We believe in eco-friendly practices and work around your schedule to deliver exceptional results every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="text-4xl text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide exceptional cleaning services that exceed expectations while maintaining 
            our commitment to eco-friendly practices and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;