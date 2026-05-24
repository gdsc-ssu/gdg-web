import Websites from "../Websites";
import ProfileImage from "./ProfileImage";
import { Member } from "@/types/member";

export default function MemberCard({
  pictureUrl,
  name,
  websites,
  comment,
  role,
}: Member) {
  return (
    <div className="w-70 h-52 flex flex-col items-start justify-between bg-white rounded-2xl shadow-[0_1px_4px_0px_rgba(25,33,61,0.08)] px-6 py-8 cursor-default">
      <div className="w-full flex flex-row items-center justify-center gap-2">
        <div className="relative w-12 h-12">
          <ProfileImage
            src={pictureUrl}
            alt={`${name}'s profile picture`}
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-2">
          <p className="text-style-navList">{name}</p>
          <p className="text-style-body12 text-neutral-grey">{role}</p>
        </div>
      </div>

      <div className="text-style-body12 text-neutral-grey line-clamp-2 text-ellipsis overflow-hidden h-[2.8em]">
        {comment}
      </div>

      <Websites
        github={websites.github}
        linkedin={websites.linkedin}
        instagram={websites.instagram}
      />
    </div>
  );
}