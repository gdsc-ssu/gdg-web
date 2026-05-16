'use client';

import EventSection from "./event/EventSection";

const COMMUNITY_IMAGES = [
    '/mt.png',
    '/festival.jpg',
    '/3rd-mt.jpeg',
];

const CommunitySection = () => {
    return (
        <div className="flex flex-col items-center gap-10 mt-[170px] w-full animate-fade-in">
            <div className="flex flex-col items-center gap-y-[60px] text-center max-w-[800px]">
                <h2 className="text-style-subTitle text-secondary-halftone-yellow">Community</h2>
                <p className="text-style-subTitle32">GDGoC Soongsil에서 기획하는 다양한 이벤트들</p>
                <p className="text-style-body14 text-neutral-grey break-keep">
                    GDGoC Soongsil은 개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께합니다.
                    <br />
                    세미나, 대회, MT, Code Jam, 네트워킹 등 한계 없이 다양한 범위의 이벤트를 개최합니다.
                    <br />
                    더 많은 이벤트 내용은 <a href="https://gdg.community.dev/gdg-on-campus-soongsil-university-seoul-south-korea/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">GDGoC bevy페이지</a>에서 확인해 보실 수 있습니다.
                </p>
            </div>

            <EventSection />
        </div>
    );
};

export default CommunitySection;
