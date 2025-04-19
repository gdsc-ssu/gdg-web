"use client";
import { useState } from "react";
import ChallengeSubImg from "@public/challenge_sub.png";
import ChallengeCatImg from "@public/challenge_cat.jpg";

import Image from "next/image";

const Challenge = () => {
  const projects = [
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "제목이 한 줄이면 이렇게",
    },
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "만약에 한 줄보다 길면은 이렇게 . . .",
    },
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "만약에 한 줄보다 길면은 이렇게 . . .",
    },
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "2-1 케러셀",
    },
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "2-2 케러셀",
    },
    {
      image: ChallengeCatImg,
      team: "Team Name",
      title: "2-3 케러셀",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
  };

  const getVisibleProjects = () => {
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      visibleProjects.push(projects[(currentIndex + i) % projects.length]);
    }
    return visibleProjects;
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="text-center py-16">
        <h1 className="text-[48px] 
        sm:text-[36px]
        font-extrabold text-primary-yellow">
          Solution Challenge
        </h1>
        <p className="text-lg font-semibold pt-2">
          Social Impact를 실현하는 Google Developer Students
        </p>
      </section>

      <section className="flex justify-center pb-12">
        <Image
          src="/challenge_main.webp"
          alt="ChallengeMainImg"
          width={854}
          height={480}
          className="rounded-lg"
        />
      </section>

      <section className="max-w-[1084px] mx-auto text-center p-12 border-2 border-primary-ssu-blue-light rounded-lg mb-16">
        <p className="leading-relaxed font-medium">
          <span className="text-primary-ssu-blue-light font-bold">
            Solution Challenge
          </span>
          는 <span className="text-blue-500 font-bold">Google의 기술</span>을
          활용하여{" "}
          <span className="text-blue-500 font-bold">
            UN의 17가지 지속 가능한 개발 목표{" "}
          </span>
          중 하나를 <br />
          선택하여 문제를 해결하는, 전 세계 1,700개 이상의 GDSC 챕터가 참여하는
          글로벌 규모의 콘테스트입니다.
        </p>
      </section>

      <section className="relative bg-black text-white py-12 px-6">
        <Image
          src={ChallengeSubImg}
          alt="ChallengeSubImg"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="leading-relaxed font-medium">
            UN의 17가지 지속 가능한 개발 목표는 2015년에 지정되어 <br />
            2030년까지 목표를 실현하기 위하여 193개의 UN 회원국이 합의하여{" "}
            <br />
            지구촌의 빈곤을 종식하고, 풍요로움을 추구하여 지구를 보호하기 위해
            등장하게 되었습니다.
          </p>
          <p className="mt-4 leading-relaxed">
            Google Solution Challenge에 참가하여, 지속 가능한 목표를 더욱 빠르게
            달성하기 위하여 <br />
            엔지니어의 시선에서 기술적으로 해결하는 기회를 가질 수 있습니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 ">Projects</h2>
        <div className="relative flex justify-center items-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 text-gray-600 hover:text-black"
          >
            <Image
              src="/icons/challenge_left.svg"
              alt="left_arrow"
              width={14}
              height={26}
            />
          </button>

          <div className="flex space-x-4">
            {getVisibleProjects().map((project, index) => (
              <div
                key={index}
                className="w-60 bg-white rounded-lg shadow-md  overflow-hidden"
              >
                <div className=" h-40 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="object-contain h-full"
                    width={240}
                    height={160}
                  />
                </div>
                <div className="bg-yellow-100 p-4">
                  <h3 className="text-sm font-bold">{project.team}</h3>
                  <p className="text-xs text-gray-700 mt-1">{project.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 text-gray-600 hover:text-black"
          >
            <Image
              src="/icons/challenge_right.svg"
              alt="right_arrow"
              width={14}
              height={26}
            />
          </button>
        </div>
      </section>

      <section className="text-center py-8">
        <p>
          <span className="font-medium">
            사회에 선한 영향력을 주는 개발자,
            <br />
          </span>
          <span className="font-bold">
            Google Developer Groups on Campus
          </span>{" "}
          에서 소셜 임팩트를 실현하세요.
        </p>
      </section>
    </main>
  );
};

export default Challenge;
