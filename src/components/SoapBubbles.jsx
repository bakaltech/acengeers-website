import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBroom, FaSoap, FaSprayCan, FaBucket, FaHandSparkles } from 'react-icons/fa';

const SoapBubbles = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Bubble colors – pastel rainbow
  const bubbleColors = [
    'rgba(255, 182, 193, 0.25)', // light pink
    'rgba(173, 216, 230, 0.25)', // light blue
    'rgba(144, 238, 144, 0.25)', // light green
    'rgba(255, 255, 224, 0.25)', // light yellow
    'rgba(221, 160, 221, 0.25)', // plum
  ];

  // Generate bubbles
  const bubbles = [...Array(15)].map((_, i) => ({
    id: `bubble-${i}`,
    type: 'bubble',
    size: Math.random() * 120 + 60,
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    delay: Math.random() * 5,
    color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    speed: Math.random() * 0.5 + 0.3,
  }));

  // Cleaning icons array
  const iconList = [FaBroom, FaSoap, FaSprayCan, FaBucket, FaHandSparkles];
  
  // Generate icons – fewer than bubbles, more subtle
  const icons = [...Array(8)].map((_, i) => {
    const IconComponent = iconList[Math.floor(Math.random() * iconList.length)];
    return {
      id: `icon-${i}`,
      type: 'icon',
      component: IconComponent,
      size: Math.random() * 60 + 40, // 40–100px
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.15 + 0.05, // very faint (0.05–0.2)
    };
  });

  // Combine both
  const elements = [...bubbles, ...icons];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => {
        if (el.type === 'bubble') {
          return (
            <motion.div
              key={el.id}
              className="absolute rounded-full backdrop-blur-[1px]"
              style={{
                width: el.size,
                height: el.size,
                left: el.x,
                top: el.y,
                background: `radial-gradient(circle at 30% 30%, white, ${el.color})`,
                boxShadow: '0 0 30px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
              animate={{
                x: [
                  el.x,
                  el.x + (mousePos.x - dimensions.width/2) * 0.005,
                  el.x
                ],
                y: [
                  el.y,
                  el.y + (mousePos.y - dimensions.height/2) * 0.005,
                  el.y
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 30 + Math.random() * 20,
                repeat: Infinity,
                delay: el.delay,
                ease: 'easeInOut',
              }}
            />
          );
        } else {
          const Icon = el.component;
          return (
            <motion.div
              key={el.id}
              className="absolute"
              style={{
                left: el.x,
                top: el.y,
                opacity: el.opacity,
                filter: 'blur(1px)',
              }}
              animate={{
                x: [
                  el.x,
                  el.x + (mousePos.x - dimensions.width/2) * 0.005,
                  el.x
                ],
                y: [
                  el.y,
                  el.y + (mousePos.y - dimensions.height/2) * 0.005,
                  el.y
                ],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 40 + Math.random() * 20,
                repeat: Infinity,
                delay: el.delay,
                ease: 'easeInOut',
              }}
            >
              <Icon size={el.size} className="text-white/80" />
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default SoapBubbles;