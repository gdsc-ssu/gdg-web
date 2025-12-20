'use client';

import SliderRow from "@/app/components/common/SliderRow";

const SEMINAR_IMAGES = [
    '/seminar_ssumall2.png',
    '/seminar_ssumall3.png',
    '/seminar_sumall1.png',
];

const SSUMallSeminarSection = () => {
    return (
        <div className="flex flex-col items-center mt-[170px] w-full animate-fade-in">
            <div className="flex flex-col items-center gap-y-[60px] text-center max-w-[800px]">
                <h2 className="text-style-subTitle text-secondary-halftone-red">SSUmall Seminar</h2>
                <p className="text-style-subTitle32">서로의 경험을 공유하고 선한 영향력을 주고 받는 가치</p>
                <p className="text-style-body14 text-neutral-grey break-keep">
                    SSUmall Seminar(슈몰세미나)는 GDG on Campus Soongsil University의 대표적인 활동입니다.
                    숭실대학교 SSU에서 가져오기도 하였지만, Small(스몰)이라는 뜻도 가지고 있습니다.
                    SSUmall Seminar에서는 어떤 작은 내용을 공유해도 큰 가치를 지닌다는 뜻입니다.
                    멤버들은 최근 흥미를 가지게 된 기술에 대해 이야기하고,
                    목표하는 커리어에 대해 이야기하기도 하며,
                    심지어는 본인의 평소 가치관이나 생활 습관에 대해서도
                    자유롭게 이야기를 나눕니다.
                </p>
            </div>
            <div className="w-full h-[200px]" />
            <h2 className="text-style-subTitle text-neutral-black">지금 바로 슈몰세미나를 만나보세요</h2>
            <div className="w-full h-[20px]" />
            <p className="text-style-body14 text-neutral-grey break-keep">지난 슈몰세미나는 지난 슈몰세미나는 GDGoC Soongsil 유튜브 에서 확인할 수 있습니다.</p>
            <div className="w-full h-[60px]" />


            <div className="w-full overflow-hidden">
                <SliderRow images={SEMINAR_IMAGES} />
            </div>

            <div className="w-full overflow-hidden mt-4">
                <SliderRow images={SEMINAR_IMAGES} reverse />
            </div>

            <div className="w-full h-[245px]" />
        </div>
    );
};

export default SSUMallSeminarSection;
