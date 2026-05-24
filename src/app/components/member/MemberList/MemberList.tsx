import MemberCard from "./MemberCard";
import { Member } from "@/types/member";

interface MemberListProps {
  title: string;
  members: Member[];
}

export default function MemberList({ title, members }: MemberListProps) {
  const gridClasses =
    "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3";

  if (members.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-style-label">{title}</h2>

      <div className={gridClasses}>
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
