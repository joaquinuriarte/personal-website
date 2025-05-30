interface TimelineItemProps {
    title: string;
    date: string;
    isOldestEvent: boolean; // True for the chronologically first event (will be at the visual bottom)
}

export default function TimelineItem({ title, date, isOldestEvent }: TimelineItemProps) {
    return (
        <div className="flex items-start">
            {/* Gutter: Dot and Line */}
            <div className="flex flex-col items-center self-stretch w-10 mr-4 shrink-0">
                <div className="w-4 h-4 bg-gray-600 rounded-full z-10 shrink-0 mt-1"></div>
                {!isOldestEvent && (
                    <div className="w-0.5 flex-grow bg-gray-500"></div>
                )}
            </div>
            {/* Content */}
            <div className="flex-1 pb-8 pt-0">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{date}</p>
            </div>
        </div>
    );
} 