"use client";

export default function SupportButton() {
    const handleClick = () => {
        window.open("https://forms.gle/sh4Q88vxr5vgFrNM6", "_blank");
    };
    return (
        <button onClick={handleClick} className="bg-primary-yellow text-style-subTitle32 text-neutral-white px-[30px] py-[10px] rounded-[44px] hover:bg-primary/80 transition-colors duration-300">
            후원하기
        </button>
    );
}