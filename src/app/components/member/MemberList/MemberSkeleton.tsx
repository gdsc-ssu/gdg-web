export default function MemberSkeleton() {
    return (
        <div className="w-70 h-52 flex flex-col items-start justify-between bg-white rounded-2xl shadow-[0_1px_4px_0px_rgba(25,33,61,0.08)] px-6 py-8">
          {/* 프로필 이미지와 이름, 역할 */}
          <div className="w-full flex flex-row items-center justify-start gap-2">
            <div className="w-12 h-12 bg-neutral-off-white rounded-full animate-pulse"/>
            <div className="flex-1 flex flex-col items-start gap-2">
              <div className="w-32 h-5 bg-neutral-off-white rounded-2xl animate-pulse" />
              <div className="w-24 h-5 bg-neutral-off-white rounded-2xl animate-pulse" />
            </div>
          </div>
          {/* 코멘트 */}
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-[80%] h-4 bg-neutral-off-white rounded-2xl animate-pulse"/>
            <div className="w-[60%] h-4 bg-neutral-off-white rounded-2xl animate-pulse"/>
          </div>
          {/* 웹사이트 아이콘 */}
          <div className="w-full flex flex-row items-center justify-start gap-4">
            <div className="w-5 h-5 bg-neutral-off-white rounded-sm animate-pulse" />
            <div className="w-5 h-5 bg-neutral-off-white rounded-sm animate-pulse" />
            <div className="w-5 h-5 bg-neutral-off-white rounded-sm animate-pulse" />
          </div>
        </div>
    );
}
