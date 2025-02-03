"use client";

import Image from "next/image";

interface WebsiteProps {
  github: boolean;
  linkedin: boolean;
  ig: boolean;
}
const Websites = ({ github, linkedin, ig }: WebsiteProps) => {
  return (
    <div className="flex flex-row justify-start gap-2">
      {github ? (
        <Image
          src="/icons/github.svg"
          alt="github_logo"
          width={18}
          height={18}
        />
      ) : (
        ""
      )}
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
      {ig ? <Image src="/icons/ig.svg" alt="ig" width={18} height={18} /> : ""}
    </div>
  );
};

export default Websites;
