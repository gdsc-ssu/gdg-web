'use client';
import { useScroll, useTransform, motion as m } from 'framer-motion';
import { useEffect } from 'react';

export default function Example() {
  const { scrollYProgress } = useScroll();
  const firstSectionOpacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  useEffect(() => {
    console.log(firstSectionOpacity);
  }, [firstSectionOpacity]);

  return (
    <m.div
      style={{
        opacity: firstSectionOpacity,
      }}
      className="h-screen bg-blue-200"
    >
      스크롤에 따라 나타나거나 사라지는 영역
    </m.div>
  );
}
