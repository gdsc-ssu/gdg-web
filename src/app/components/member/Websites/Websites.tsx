"use client";

import Image from "next/image";
import Link from "next/link";

interface WebsiteProps {
  github: string;
  linkedin: string;
  instagram: string;
}
const Websites = ({ github, linkedin, instagram }: WebsiteProps) => {

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-row justify-start gap-4">
      <Link href={github || ""} target="_blank">
        {github && (
          <Image
            src="/icons/github.svg"
            alt="github_logo"
            width={20}
            height={20}
            onClick={() => handleClick(github)}
          />
        )}
      </Link>
      <Link href={linkedin || ""} target="_blank">
        {linkedin && (
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin_logo"
            width={20}
            height={20}
            onClick={() => handleClick(linkedin)}
          />
        )}
      </Link>
      <Link href={instagram || ""} target="_blank">
        {instagram && (
          <Image src="/icons/instagram.svg" 
            alt="instagram" 
            width={20} 
            height={20} 
            onClick={() => handleClick(instagram)} />
        )}
      </Link>
    </div>
  );
};

export default Websites;
