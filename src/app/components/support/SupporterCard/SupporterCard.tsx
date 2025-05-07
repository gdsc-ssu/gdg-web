'use client';

import Image from 'next/image';
import { SupporterCardProps } from '@/types/supporter';
import { motion } from 'framer-motion';
  

  
  const SupporterCard = ({ supporterInfo, reverse }: SupporterCardProps) => {
    const { profile, description, name, exRole, job } = supporterInfo;
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow gap-8
        md:flex-row md:items-start md:p-4
        ${reverse ? 'md:flex-row-reverse' : ''}
        `}>
        {/* 프로필 이미지 섹션 */}
        <div className="w-full md:w-1/3 max-w-[280px] max-h-[300px] rounded-xl overflow-hidden flex-shrink-0">
          <div className="relative aspect-[3/4]">
            <Image 
              src={profile} 
              alt={`${name}의 프로필`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 우측 섹션 */}
        <div className="flex flex-col h-full flex-grow">
          {/* 설명 섹션 */}
          <div>
            <p className="text-grayscale-gray7 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="h-[4rem]"> </div>

          {/* 후원사 정보 섹션 */}
          <div className="flex flex-col gap-2 mt-4">
            <h3 className={`text-2xl font-bold text-grayscale-black ${reverse ? 'text-right' : ''}`}>{name}</h3>
            <p className={`text-base text-grayscale-gray6 ${reverse ? 'text-right' : ''}`}>{job}</p>
            {exRole && (
              <p className={`text-base text-grayscale-gray5 italic ${reverse ? 'text-right' : ''}`}>
                {exRole}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default SupporterCard;