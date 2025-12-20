import { cn } from '@/utils/cn';

const INFO_ITEMS = [
    {
        title: '경쟁이 아닌\n개방된 개발 문화의 정착',
        description: '많은 대학생 개발자들이 학업과 취업 준비 과정에서 고립되거나 경쟁에 지치곤 합니다. 우리는 닫힌 개인의 학습을 열린 공유의 장으로 이끌어내어, 누구나 자신의 지식을 나누고 서로의 경험을 통해 배우는 ‘건강하고 개방적인 개발자 문화’를 숭실대 캠퍼스에 뿌리내리기 위해 존재합니다.',
        bgColor: 'bg-secondary-halftone-red',
        roundedClass: 'rounded-tr-[100px] max-lg:rounded-[20px]',
    },
    {
        title: '실력을 넘어선\n협업의 즐거움 전파',
        description: '기술적 역량은 중요하지만, 그것만으로는 세상을 바꿀 수 없습니다. 우리는 ‘실력 너머의 유쾌함’이라는 가치를 통해, 딱딱하고 어려운 개발이 아닌 동료와 함께 문제를 해결하는 과정 자체가 즐거운 놀이가 될 수 있음을 증명합니다. 이를 통해 개발을 오랫동안 사랑할 수 있는 동기를 부여합니다.',
        bgColor: 'bg-secondary-halftone-green',
        roundedClass: 'max-lg:rounded-[20px]',
    },
    {
        title: '글로벌 기술\n생태계와의 연결',
        description: '전 세계 111개국, 1,863개 챕터와 연결된 Google의 글로벌 커뮤니티로서, 숭실대학교 학생들에게 글로벌 기술 트렌드를 가장 빠르게 소개하고 넓은 시야를 제공합니다. 학교라는 울타리 안에서도 전 세계의 개발 흐름과 호흡할 수 있는 기회를 제공하는 교두보 역할을 수행합니다.',
        bgColor: 'bg-secondary-halftone-blue',
        roundedClass: 'rounded-tl-[100px] rounded-bl-[100px] max-lg:rounded-[20px]',
    },
];

const InfoSection = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-0 max-lg:gap-6 mt-10">
            {INFO_ITEMS.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex flex-col items-center justify-center text-center p-10 flex-1 min-h-[400px]",
                        item.bgColor,
                        item.roundedClass
                    )}
                >
                    <h3 className="text-white text-[28px] font-bold leading-[140%] whitespace-pre-line mb-8">
                        {item.title}
                    </h3>
                    <p className="text-white text-[16px] font-medium leading-[160%] break-keep max-w-[320px]">
                        {item.description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default InfoSection;
