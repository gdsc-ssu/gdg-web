"use client";
import Image from "next/image";
import { useState } from "react";
import SeminarMainImg from "@public/seminar_main.png";

const Seminar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const seminarContents = [
    {
      title: "Small? SSUmall!",
      description:
        "SSUmall Seminar(슈몰세미나)는 GDG on Campus Soongsil University의 대표적인 활동입니다.",
    },
    {
      title: "Small? SSUmall!",
      description:
        "숭실대학교 SSU에서 가져오기도 하였지만, Small(스몰)이라는 뜻도 가지고 있습니다. SSUmall Seminar에서는 어떤 작은 내용을 공유해도 큰 가치를 지닌다는 뜻입니다.",
    },
    {
      title: "Small? SSUmall!",
      description:
        "멤버들은 최근 흥미를 가지게 된 기술에 대해 이야기하고, 목표하는 커리어에 대해 이야기하기도 하며, 심지어는 본인의 평소 가치관이나 생활 습관에 대해서도 자유롭게 이야기를 나눕니다.",
    },
  ];
  return (
    <main className="w-full min-h-screen bg-white pt-16">
      <section>
        <div className="text-center mb-12">
          <h1 className="text-[48px] font-extrabold text-primary-red">
            SSUmall Seminar
          </h1>
          <p className="text-lg sm:text-base mt-2 font-semibold">
            서로의 경험을 공유하고 선한 영향력을 주고 받는 가치
          </p>
        </div>

        <div className="relative mb-12 h-[500px] rounded-lg shadow-md overflow-hidden">
          <Image
            src={SeminarMainImg}
            alt="SSUmall Seminar Main"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-40">
            함께 한 경험은 배움의 가치를 더합니다.
          </p>
        </div>
      </section>
      <section className="w-full bg-white ">
        <article className="max-w-[1280px] mx-auto px-6 sm:px-4 flex items-center justify-center">
          <div className="flex flex-row gap-8 sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="text-center sm:text-left">
              <h1 className="text-[48px] sm:text-[36px] font-extrabold text-black leading-tight">
                Small?
                <br />
                <span className="text-primary-ssu-blue-light">SSUmall!</span>
              </h1>
            </div>

            <div className=" rounded-md p-6  relative w-[400px]">
              <div className="flex items-center space-x-2 mb-4">
                {seminarContents.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full border ${
                      selectedIndex === index
                        ? "bg-primary-ssu-blue-light"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedIndex(index)}
                  ></button>
                ))}
              </div>
              <p className="text-grayscale-black leading-relaxed font-medium">
                {seminarContents[selectedIndex].description}
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="flex-col gap-3 py-16">
        <hr className="w-32 border-t h-1 border-gray-300  mx-auto pb-20" />

        <p className="text-center text-lg mb-8">
          지난 슈몰세미나는
          <a
            href="https://www.youtube.com/@gdscsoongsil6711"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GDSC Soongsil 유튜브
          </a>
          에서 확인할 수 있습니다.
        </p>

        {/* 케러셀 확인 후 대체 예정 */}
        <article className="flex justify-center space-x-4 mb-8">
          <div className="w-1/4 bg-red-200 p-4 rounded-xl shadow-md">
            <p className="text-lg font-bold text-red-600">
              당신이 원해왔던, 슈몰세미나.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              GDG server/cloud 장환곤
            </p>
          </div>

          <div className="w-1/4 bg-blue-200 p-4 rounded-xl shadow-md">
            <p className="text-lg font-bold text-red-600">
              당신이 원해왔던, 슈몰세미나.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              GDG server/cloud 장환곤
            </p>
          </div>

          <div className="w-1/4 bg-green-200 p-4 rounded-xl shadow-md relative">
            <p className="text-lg font-bold text-red-600">
              당신이 원해왔던, 슈몰세미나.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              GDG server/cloud 장환곤
            </p>
          </div>
        </article>

        <article className="text-center">
          <p className="text-base font-medium">
            다양한 경험, 지식, 관심사를 가진 학생 개발자들이 모여 수많은
            이야기를 공유합니다.
          </p>
          <p className="text-lg font-bold mt-2 ">
            SSUmall Seminar에서 다양한 인사이트와 경험을 얻어가시길 바랍니다!
          </p>
        </article>
      </section>
    </main>
  );
};

export default Seminar;
