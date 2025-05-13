import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export type AnimationType = 'fadeUp' | 'drawLine' | 'fadeDown';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  delay?: number;
  animationType?: AnimationType;
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  fadeDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  drawLine: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const AnimatedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  delay = 0,
  animationType = 'fadeUp'
}: AnimatedImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedAnimation = {
    ...animations[animationType],
    animate: isInView ? animations[animationType].animate : animations[animationType].initial,
    transition: {
      ...animations[animationType].transition,
      delay: isInView ? delay : 0
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      {...selectedAnimation}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full"
      />
    </motion.div>
  );
}; 