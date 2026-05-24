import MemberList from "./MemberList";
import { Member } from "@/types/member";

interface MemberSectionProps {
  members: Member[];
  selectedGeneration: string;
}

const CORE_ROLE_KEYS = new Set(["lead", "core-member"]);

function sortMembersByRoleAndName(a: Member, b: Member) {
  const rolePriority = (member: Member) => (member.roleKey === "lead" ? 0 : 1);
  const priorityDiff = rolePriority(a) - rolePriority(b);

  if (priorityDiff !== 0) {
    return priorityDiff;
  }

  return a.name.localeCompare(b.name, "ko-KR");
}

export default function MemberSection({
  members,
  selectedGeneration,
}: MemberSectionProps) {
  const coreListTitle =
    Number(selectedGeneration) >= 4 ? "Team Member" : "Core Member";
  const coreMembers = members
    .filter((member) => CORE_ROLE_KEYS.has(member.roleKey))
    .toSorted(sortMembersByRoleAndName);
  const regularMembers = members
    .filter((member) => !CORE_ROLE_KEYS.has(member.roleKey))
    .toSorted(sortMembersByRoleAndName);

  return (
    <section className="w-full flex flex-col gap-12">
      <MemberList title={coreListTitle} members={coreMembers} />
      <MemberList title="Member" members={regularMembers} />
    </section>
  );
}
