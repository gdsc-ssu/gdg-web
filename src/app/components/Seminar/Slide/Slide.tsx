"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import SSUmall1 from "../../../../../public/seminar_sumall1.png";
import SSUmall2 from "../../../../../public/seminar_ssumall2.png";
import SSUmall3 from "../../../../../public/seminar_ssumall3.png";
const images = [
  {
    img: SSUmall1,
  },
  {
    img: SSUmall2,
  },
  {
    img: SSUmall3,
  },
];

const Slide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: `-${index * 506}px` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {images.map((data, i) => (
          <div key={i} className="w-[502px] h-[284px] flex-shrink-0">
            <Image
              src={data.img}
              alt={`Seminar ${i + 1}`}
              width={502}
              height={284}
              className="rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide;
