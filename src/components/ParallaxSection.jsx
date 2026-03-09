import { useParallax } from 'react-scroll-parallax';

const ParallaxSection = () => {
  const parallax = useParallax({
    speed: -10, // Moves slower than scroll
  });

  const textParallax = useParallax({
    speed: 5, // Moves faster than scroll
  });

  return (
    <section className="relative h-[600px] overflow-hidden bg-blue-900">
      {/* Background image with parallax */}
      <div
        ref={parallax.ref}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc7162?w=1200)',
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Text content with opposite parallax */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={textParallax.ref} className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">We Transform Spaces</h2>
          <p className="text-xl">Experience the difference with Acengeers</p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;