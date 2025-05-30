import Image from 'next/image';

interface BookCardProps {
    imageUrl: string;
    linkUrl: string;
    quote: string;
    title: string; // Added title for alt text and context
    isActualQuote?: boolean; // New optional prop
}

export default function BookCard({ imageUrl, linkUrl, quote, title, isActualQuote = true }: BookCardProps) { // Default to true
    return (
        <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col items-center space-y-4 transition-all duration-300 ease-out hover:shadow-xl">
            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48 h-72 md:w-56 md:h-80 relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            >
                <Image
                    src={imageUrl}
                    alt={`Cover of ${title}`}
                    layout="fill"
                    objectFit="cover"
                />
            </a>
            <blockquote className="text-center">
                <p className={`text-gray-300 text-sm md:text-base ${isActualQuote ? 'italic' : ''}`}>
                    {isActualQuote && <>&ldquo;</>}
                    {quote}
                    {isActualQuote && <>&rdquo;</>}
                </p>
            </blockquote>
        </div>
    );
} 