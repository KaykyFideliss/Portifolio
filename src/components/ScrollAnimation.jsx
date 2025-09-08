import { motion } from 'framer-motion';

const ScrollAnimation = ({ 
  children, 
  direction = 'up', // up, down, left, right
  delay = 0,
  duration = 0.6,
  className = '' 
}) => {
  // Configura as direções iniciais
  const getInitialDirection = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  // Configura as direções finais
  const getAnimateDirection = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialDirection()}
      whileInView={getAnimateDirection()}
      viewport={{ once: true, margin: '-100px' }} // Aparece quando estiver a 100px do viewport
      transition={{ 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;