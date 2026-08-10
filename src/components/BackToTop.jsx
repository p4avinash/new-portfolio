import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label='Scroll back to top'
          className='fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-violet-400 hover:text-white hover:bg-violet-600 border border-violet-500/30 shadow-lg backdrop-blur-md transition-all duration-200 focus-ring'
        >
          <FaArrowUp className='h-4 w-4' />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
