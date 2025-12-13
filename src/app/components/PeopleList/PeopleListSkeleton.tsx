export default function PeopleListSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_0.5fr_2fr] border-2 border-gray-200 rounded-lg animate-pulse"
                >
                    <div className="row-span-3 w-[160px] h-[160px] m-auto bg-gray-200 rounded-lg" />
                    <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
                        <div className="h-6 w-32 bg-gray-200 rounded" />
                    </div>
                    <div className="h-4 w-24 bg-gray-200 rounded mr-2 mb-4" />
                    <div className="row-span-2 bg-gray-200 rounded-md p-2 mr-2 mb-2" />
                </div>
            ))}
        </div>
    );
}
