"use client";

import Image from "next/image";
import Link from "next/link";

interface WebsiteProps {
  github: string;
  linkedin: string;
  ig: string;
}
const Websites = ({ github, linkedin, ig }: WebsiteProps) => {
  return (
    <div className="flex flex-row justify-start gap-2">
      <Link href={github || ""} target="_blank">
        {github ? (
          <Image
            src="/icons/github.svg"
            alt="github_logo"
            width={18}
            height={18}
            onClick={() => {
              `location.href=${github}`;
            }}
          />
        ) : (
          ""
        )}
      </Link>
      <Link href={linkedin || ""} target="_blank">
        {linkedin ? (
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin_logo"
            width={18}
            height={18}
          />
        ) : (
          ""
        )}
      </Link>
      <Link href={ig || ""} target="_blank">
        {ig ? (
          <Image src="/icons/ig.svg" alt="ig" width={18} height={18} />
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default Websites;
