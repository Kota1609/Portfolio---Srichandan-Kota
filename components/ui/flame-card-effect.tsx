import React from 'react';
import { motion } from 'framer-motion';

interface FlameCardEffectProps {
  children: React.ReactNode;
}

const FlameCardEffect: React.FC<FlameCardEffectProps> = ({ children }) => {
  return (
    <div className="relative group">
      {/* Main flame glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,69,0,0.4) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving flame particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,69,0,0.9) 0%, rgba(255,140,0,0.7) 50%, transparent 100%)',
            filter: 'blur(6px)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FlameCardEffect; 