import Image from "next/image";
import Link from "next/link";

interface WebsiteProps {
  github: string;
  linkedin: string;
  instagram: string;
}

const Websites = ({ github, linkedin, instagram }: WebsiteProps) => {
  return (
    <div className="flex flex-row justify-start gap-4">
      {github && (
        <Link href={github} target="_blank" rel="noreferrer">
          <Image
            src="/icons/github.svg"
            alt="github_logo"
            width={20}
            height={20}
          />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target="_blank" rel="noreferrer">
          <Image
            src="/icons/linkedin.svg"
            alt="linkedin_logo"
            width={20}
            height={20}
          />
        </Link>
      )}
      {instagram && (
        <Link href={instagram} target="_blank" rel="noreferrer">
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            width={20}
            height={20}
          />
        </Link>
      )}
    </div>
  );
};

export default Websites;
