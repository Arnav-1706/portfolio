import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small pause at 100%
          return 100;
        }
        // Random increment for a "booting" feel
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-dark-900 flex flex-col items-center justify-center text-neon-blue font-pixel"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-80 space-y-4">
          <p className="text-xl animate-pulse">Booting portfolio...</p>
          <div className="w-full h-8 border-2 border-neon-blue p-1 rounded-none relative overflow-hidden">
            <div
              className="h-full bg-neon-purple transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-right text-sm">{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
