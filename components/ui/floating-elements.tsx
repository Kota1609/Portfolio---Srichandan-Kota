"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main Flame Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-gradient-to-b from-[#ff8c00] to-[#ff4500]"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
        animate={{
          x: [0, 150, 0],
          y: [0, -30, 0],
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Flame-like particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * 100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            scale: [null, Math.random() * 0.5 + 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Flame trails */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * 200 - 100],
            x: [null, Math.random() * 200 - 100],
            opacity: [0, 0.6, 0],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
} 