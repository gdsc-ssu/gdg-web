'use client';

import ActivitySection from '@/app/components/main/ActivitySection/ActivitySection';
import HeroSection from '@/app/components/main/HeroSection/HeroSection';
import PictureSection from '@/app/components/main/PictureSection/PictureSection';

const STUDY_PROJECT_IMAGES = [
    '/project_bird_sweeper.webp',
    '/project_ANBD.webp',
    '/project_baby24.webp',
    '/project_beyond-b.webp',
    '/project_litera-sea.webp',
    '/project_Path-to-Pet.webp',
    '/project_weve.webp',
    '/project_ssung_delivery.webp'
];

const ACTIVITIES = [
    {
        variant: "seminar" as const,
        activityName: "슈몰세미나",
        description: (
            <p>
                모든 멤버가 최소 한 번 직접 주제를 정하고 발표하는 내부 세미나 활동입니다.
                <br />
                꼭 프로그래밍이 아니어도 여행 경험이나 관심사 등 다양한 주제로 발표할 수 있습니다.
            </p>
        ),
    },
    {
        variant: "study" as const,
        activityName: "스터디&프로젝트",
        images: STUDY_PROJECT_IMAGES,
        href: 'https://github.com/gdsc-ssu',
        description: (
            <p>
                내부에서 다양하고 재미있는 주제로 스터디와 프로젝트가 활발하게 개설됩니다.
                <br />
                함께 할 때 가치가 높아지는 것이라면 그 어떤 주제도 환영합니다.
            </p>
        ),
    },
    {
        variant: "community" as const,
        activityName: "커뮤니티 활동",
        description: (
            <p>
                개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께 합니다.
                <br />
                세미나, 대회, MT, Code Jam 등 한계 없이 다양한 범위의 이벤트를 개최합니다.
            </p>
        ),
    },
];

const LandingPage = () => {

    return (
        <main className="flex flex-col justify-center items-center w-full min-h-screen">
            <HeroSection />
            {ACTIVITIES.map((activity) => (
                <ActivitySection
                    key={activity.activityName}
                    variant={activity.variant}
                    activityName={activity.activityName}
                    description={activity.description}
                    images={'images' in activity ? activity.images : undefined}
                    href={'href' in activity ? activity.href : undefined}
                />
            ))}
            <PictureSection />
        </main>
    );
};

export default LandingPage;
