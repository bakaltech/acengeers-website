import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaTruck, FaLeaf, FaArrowRight } from 'react-icons/fa';

const iconMap = {
  residential: FaHome,
  commercial: FaBuilding,
  move: FaTruck,
  seasonal: FaLeaf,
};

const ServiceCard = ({ id, title, description, iconName }) => {
  const Icon = iconMap[iconName] || FaHome;

  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition group bg-white">
      <div className="text-4xl text-primary mb-4 group-hover:scale-110 transition">
        <Icon />
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={`/services/${id}`}
        className="inline-flex items-center text-primary font-medium hover:text-secondary transition"
      >
        Learn More <FaArrowRight className="ml-2 text-sm" />
      </Link>
    </div>
  );
};

export default ServiceCard;