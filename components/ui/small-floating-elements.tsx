"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SmallFloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Small Flame Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-gradient-to-b from-[#ff8c00] to-[#ff4500]"
        animate={{
          x: [0, -50, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
        animate={{
          x: [0, 75, 0],
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Small flame-like particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.3 + 0.2,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * 50 - 25],
            x: [null, Math.random() * 50 - 25],
            opacity: [0, 0.4, 0],
            scale: [null, Math.random() * 0.3 + 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Small flame trails */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-gradient-to-b from-[#ff4500] to-[#ff8c00]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * 100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.3, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
} 