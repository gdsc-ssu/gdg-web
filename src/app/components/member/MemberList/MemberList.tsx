"use client";

import MemberCard from "./MemberCard";
import MemberSkeleton from "./MemberSkeleton";
import { useMemberContext } from "../contexts/MemberContext";
import { useMembers } from "../hooks/useMembers";

export default function MemberList() {
  const { selectedGeneration } = useMemberContext();
  const { members, isLoading } = useMembers(selectedGeneration);

  const gridClasses = "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3";

  if (isLoading) {
    return (
      <div className={gridClasses}>
        {[...Array(4)].map((_, index) => (
          <MemberSkeleton key={`member-card-skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {members.map((member) => (
        <MemberCard key={member.id} {...member} />
      ))}
    </div>
  );
}
