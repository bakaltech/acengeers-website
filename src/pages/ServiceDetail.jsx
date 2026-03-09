import { useParams, Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaTruck, FaLeaf, FaArrowLeft, FaBroom } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const serviceDetails = {
  residential: {
    title: "Residential Cleaning",
    icon: FaHome,
    description: "We provide comprehensive home cleaning services tailored to your schedule. Our team uses eco-friendly products and ensures every corner is spotless.",
    features: [
      "Weekly, bi-weekly, or monthly visits",
      "Kitchen and bathroom deep cleaning",
      "Living areas, bedrooms, and floors",
      "Eco-friendly, non-toxic products",
      "Background-checked, insured staff"
    ],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    fallbackImage: "https://placehold.co/600x400/0EA5E9/white?text=Residential+Cleaning",
    price: "Starting at $120/visit"
  },
  commercial: {
    title: "Commercial Cleaning",
    icon: FaBuilding,
    description: "Keep your office or retail space pristine with our flexible commercial cleaning plans. We work around your business hours.",
    features: [
      "After-hours cleaning available",
      "Carpet and floor maintenance",
      "Restroom sanitization",
      "Trash removal and recycling",
      "Customizable frequency"
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    fallbackImage: "https://placehold.co/600x400/0EA5E9/white?text=Commercial+Cleaning",
    price: "Custom quote based on space"
  },
  move: {
    title: "Move In/Out Cleaning",
    icon: FaTruck,
    description: "Deep cleaning for your move – whether you're leaving or arriving. We'll make the space shine for the next occupants.",
    features: [
      "Inside cabinets and drawers",
      "Appliances (fridge, oven)",
      "Walls, baseboards, and windows",
      "Carpet cleaning available",
      "Fast turnaround"
    ],
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80",
    fallbackImage: "https://placehold.co/600x400/0EA5E9/white?text=Move+In+Out+Cleaning",
    price: "Starting at $200"
  },
  seasonal: {
    title: "Seasonal Maintenance",
    icon: FaLeaf,
    description: "From spring cleaning to snow removal, we handle seasonal tasks so you can enjoy the weather.",
    features: [
      "Spring deep cleaning",
      "Gutter cleaning",
      "Snow removal (winter)",
      "Pressure washing",
      "Window washing"
    ],
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&q=80",
    fallbackImage: "https://placehold.co/600x400/0EA5E9/white?text=Seasonal+Maintenance",
    price: "Varies by service"
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-primary">Service not found</h1>
        <Link to="/services" className="text-primary mt-4 inline-block hover:text-secondary transition">
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/services" className="inline-flex items-center text-primary mb-6 hover:text-secondary transition">
        <FaArrowLeft className="mr-2" /> Back to Services
      </Link>
      
      <PageHeader 
        title={service.title}
        icon={Icon}
      />
      
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 h-80 md:h-auto relative bg-soft-bg">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = service.fallbackImage;
              }}
            />
          </div>
          <div className="p-8 md:w-1/2">
            <p className="text-gray-700 mb-6">{service.description}</p>
            <h2 className="text-xl font-semibold mb-3 text-primary">What's included:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {service.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="bg-soft-bg p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold text-primary">{service.price}</p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;