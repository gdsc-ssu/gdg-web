"use client";
import { useState } from "react";
import Image from "next/image";
import EventImage from "@public/community_main.png";
import CatImg from "@public/challenge_cat.jpg";
import GonImg from "@public/community_gon.png";

const Community = () => {
  const events = [
    {
      image: GonImg,
      title: "GDGoC 고니고니",
      date: "2024. 10. 12.",
    },
    {
      image: CatImg,
      title: "GDGoC Cat MT",
      date: "2023. 09. 15.",
    },
    {
      image: EventImage,
      title: "GDGoC 2nd MT",
      date: "2022. 08. 10.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  // 마우스 터치 시 x좌표 저장
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
  };

  // 포인터 이동 시 X 좌표 업데이트
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setEndX(e.clientX);
  };

  // 포인터 종료 시 스와이프 방향에 따라 슬라이드 변경
  const handlePointerUp = () => {
    if (startX !== null && endX !== null) {
      const deltaX = startX - endX;
      const threshold = 50;
      if (deltaX > threshold) {
        // 왼쪽으로 드래그 → 다음 슬라이드
        nextSlide();
      } else if (deltaX < -threshold) {
        // 오른쪽으로 드래그 → 이전 슬라이드
        prevSlide();
      }
    }
    // 좌표 초기화
    setStartX(null);
    setEndX(null);
  };

  const leftIndex = (currentIndex - 1 + events.length) % events.length;
  const rightIndex = (currentIndex + 1) % events.length;

  return (
    <main className="w-full min-h-screen bg-white py-16">
      <section className="text-center mb-12">
        <h1 className="text-[48px]
        sm:text-[32px]
        md:text-[48px]
        font-extrabold text-primary-green">
          Community Events
        </h1>
        <p className="text-lg font-semibold mt-2">
          GDGoC Soongsil에서 기획하는 다양한 이벤트들
        </p>
      </section>

      <section className="relative max-w-6xl mx-auto flex items-center justify-center">
        <div
          className="flex items-center space-x-4 overflow-hidden"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* 왼쪽 슬롯 */}
          <div className="relative rounded-lg overflow-hidden w-[711px] h-[378px] scale-90 opacity-50">
            <Image
              src={events[leftIndex].image}
              alt={events[leftIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          </div>

          {/* 가운데 슬롯 */}
          <div className="relative rounded-lg overflow-hidden w-[862px] h-[458px] scale-100">
            <Image
              src={events[currentIndex].image}
              alt={events[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg font-extrabold">
                {events[currentIndex].title}
              </h2>
              <p className="text-sm">{events[currentIndex].date}</p>
            </div>
          </div>

          {/* 오른쪽 슬롯 */}
          <div className="relative rounded-lg overflow-hidden w-[711px] h-[378px] scale-90 opacity-50">
            <Image
              src={events[rightIndex].image}
              alt={events[rightIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
          </div>
        </div>
      </section>

      <section className="text-center mt-12 px-4">
        <p className="font-medium">
          개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의
          활동을 함께합니다. <br />
          세미나, 대회, MT, Code Jam, 네트워킹 등 한계 없이 다양한 범위의
          이벤트를 개최합니다.
        </p>
      </section>
    </main>
  );
};

export default Community;
