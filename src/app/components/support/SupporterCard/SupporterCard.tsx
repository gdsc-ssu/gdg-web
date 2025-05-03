import Image from 'next/image';
import { SupporterCardProps } from '@/types/supporter';
  

  
  const SupporterCard = ({ supporterInfo, reverse }: SupporterCardProps) => {
    const { profile, description, name, exRole, job } = supporterInfo;
  
    return (
      <div className={`flex flex-row items-start p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow gap-8 ${reverse ? 'flex-row-reverse' : ''}`}>
        {/* 프로필 이미지 섹션 */}
        <div className="w-[280px] h-[300px] rounded-xl overflow-hidden flex-shrink-0">
          <Image 
            src={profile} 
            alt={`${name}의 프로필`}
            width={280}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 우측 섹션 */}
        <div className="flex flex-col h-[300px] justify-between py-4 flex-grow">
          {/* 설명 섹션 */}
          <div>
            <p className="text-grayscale-gray7 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* 후원사 정보 섹션 */}
          <div className="gap-2">
            <h3 className={`text-2xl font-bold text-grayscale-black ${reverse ? 'text-right' : ''}`}>{name}</h3>
            <p className={`text-base text-grayscale-gray6 ${reverse ? 'text-right' : ''}`}>{job}</p>
            {exRole && (
              <p className={`text-base text-grayscale-gray5 italic ${reverse ? 'text-right' : ''}`}>
                이전 역할: {exRole}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SupporterCard;