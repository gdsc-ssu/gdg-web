'use client';

import ProjectSection from "./project/ProjectSection";

const SolutionChallengeSection = () => {
    return (
        <div className="flex flex-col items-center gap-10 mt-[170px] w-full animate-fade-in">
            <div className="flex flex-col items-center gap-y-[60px] text-center max-w-[800px]">
                <h2 className="text-style-subTitle text-secondary-halftone-blue">Solution Challenge</h2>
                <p className="text-style-subTitle32">Social Impact를 실현하는 Google Developer Students</p>
                <p className="text-style-body14 text-neutral-grey break-keep">
                    Solution Challenge는 Google의 기술을 활용하여 UN의 17가지 지속 가능한 개발 목표 중 하나를선택하여 문제를 해결하는, 전 세계 1,700개 이상의 GDGoC챕터가 참여하는 글로벌 규모의 콘테스트입니다.
                    UN의 17가지 지속 가능한 개발 목표는 2015년에 지정되어 2030년까지 목표를 실현하기 위하여
                    193개의 UN 회원국이 합의하여 지구촌의 빈곤을 종식하고, 풍요로움을 추구하여 지구를 보호하기 위해 등장하게 되었습니다
                    Google Solution Challenge에 참가하여, 지속 가능한 목표를 더욱 빠르게 달성하기 위하여엔지니어의 시선에서 기술적으로 해결하는 기회를 가질 수 있습니다.
                </p>
            </div>

            <ProjectSection />
        </div>
    );
};

export default SolutionChallengeSection;
