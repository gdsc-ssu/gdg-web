import Link from "next/link";

interface GenerationProps {
  title: string;
  active: boolean;
}

export default function Generation({ title, active }: GenerationProps) {
  const displayTitle = title.endsWith("기") ? title : `${title}기`;

  return (
    <Link
      href={`/member?generation=${encodeURIComponent(title)}`}
      className="w-6 flex flex-col items-center justify-center gap-1 cursor-pointer"
    >
      <p
        className={`text-style-navList text-center ${
          active ? "text-primary-green" : "text-neutral-light-grey"
        }`}
      >
        {displayTitle}
      </p>
      <div
        className={`w-full h-1 ${
          active ? "bg-primary-green" : "bg-neutral-light-grey"
        }`}
      />
    </Link>
  );
}