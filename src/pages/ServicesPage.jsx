import { FaBroom } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    id: 'residential',
    title: "Residential Cleaning",
    description: "Regular home cleaning tailored to your schedule.",
    iconName: "residential"
  },
  {
    id: 'commercial',
    title: "Commercial Cleaning",
    description: "Office and retail space maintenance.",
    iconName: "commercial"
  },
  {
    id: 'move',
    title: "Move In/Out Cleaning",
    description: "Deep cleaning for your move.",
    iconName: "move"
  },
  {
    id: 'seasonal',
    title: "Seasonal Maintenance",
    description: "Spring cleaning, snow removal, etc.",
    iconName: "seasonal"
  }
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Our Services"
        subtitle="Professional cleaning solutions for every need"
        icon={FaBroom}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;