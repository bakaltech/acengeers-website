import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote: 'Acengeers transformed my home! Professional, punctual, and eco-friendly. Highly recommend!',
  },
  {
    name: 'Mark Williams',
    role: 'Office Manager',
    quote: 'Our office has never looked better. The team is reliable and thorough. They work around our schedule perfectly.',
  },
  {
    name: 'Emily Chen',
    role: 'Property Manager',
    quote: 'They handle multiple properties for us with ease. Great communication and consistent quality every time.',
  },
  {
    name: 'David Thompson',
    role: 'Restaurant Owner',
    quote: 'Our kitchen has never been cleaner. They work after hours so we never miss a business day.',
  },
  {
    name: 'Lisa Garcia',
    role: 'Real Estate Agent',
    quote: 'I recommend Acengeers to all my clients. Their move-in/move-out cleaning is top-notch.',
  },
  {
    name: 'James Wilson',
    role: 'Facility Manager',
    quote: 'Reliable, thorough, and always on time. The best commercial cleaning service in Toronto.',
  },
];

// Duplicate the testimonials to create a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -1920], // Adjust based on your card width (assuming ~320px per card * 6)
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, inView]);

  // Pause animation on hover
  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () => {
    if (inView) {
      controls.start({
        x: [0, -1920],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    }
  };

  return (
    <section ref={ref} className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mt-2">Join hundreds of satisfied customers</p>
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="flex gap-6"
          animate={controls}
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-80 flex-shrink-0"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;