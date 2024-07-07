export const CardListItemSkeleton = () => {
    return (
        <div className="w-[264px] h-[336px] flex flex-col bg-secondary rounded-lg shadow-md shadow-[#00000008] animate-pulse">
            <div className="">
                <div className="w-full h-[160px] rounded-t-lg bg-gray-500"></div>
            </div>
            <div className="p-4 flex flex-col gap-1 flex-1 justify-evenly">
                <div className="h-6 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded"></div>
            </div>
        </div>
    );
};
