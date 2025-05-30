// import Image from 'next/image'; // Commented out or removed
import { useState, useRef } from 'react';

export default function Telescope() {
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = (e: React.MouseEvent | React.TouchEvent) => {
        // Only handle video play/pause if clicking directly on the video or its overlay
        if (e.target === videoRef.current || (e.target as HTMLElement).closest('.video-overlay')) {
            e.preventDefault();
            e.stopPropagation();
            if (videoRef.current) {
                if (isPlaying) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
                setIsPlaying(!isPlaying);
            }
        }
    };

    return (
        <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row items-center md:items-stretch">
            {/* Media Section - Top on mobile, Right on desktop */}
            <div className="w-full md:w-[70%] h-auto md:h-full pt-4 md:pt-2 px-2 md:px-4 pb-2 md:pb-4 order-1 md:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-md md:max-w-full h-auto aspect-video rounded-2xl md:rounded-3xl overflow-hidden">
                    <video
                        ref={videoRef}
                        src="/videos/telescope.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onClick={togglePlay}
                        onTouchEnd={togglePlay}
                        className="w-full h-full object-contain cursor-pointer touch-none"
                    />
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer touch-none video-overlay"
                            onClick={togglePlay}
                            onTouchEnd={togglePlay}
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Content Section - Bottom on mobile, Left on desktop */}
            <div className="w-full md:w-[30%] h-full p-3 md:p-6 order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
                <div className="w-full text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Telescope</h3>
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-6">MacOS app for finding files on your computer with natural language.</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6 justify-center md:justify-start">
                        {["Swift", "Node.js", "Tailwind", "Prompt Engineering"].map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 md:px-3 md:py-1 bg-white/10 rounded-full text-xs md:text-sm text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 w-full max-w-xs mx-auto md:mx-0">
                        <a
                            href="https://telescope-site.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                        >
                            Download App!
                        </a>
                        <div className="flex gap-2 md:gap-3 w-full">
                            <a
                                href="https://github.com/joaquinuriarte/telescope-MacOSapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-block px-2 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-xs md:text-sm"
                            >
                                Client
                            </a>
                            <a
                                href="https://github.com/joaquinuriarte/llm-proxy-telescope"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-block px-2 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-xs md:text-sm"
                            >
                                Server
                            </a>
                            <a
                                href="https://github.com/joaquinuriarte/telescope-site"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-block px-2 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-xs md:text-sm"
                            >
                                Website
                            </a>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-6">
                        This project came out of the{' '}
                        <a
                            href="https://lu.ma/7wbelfn1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 underline"
                        >
                            Runcased Hackathon
                        </a>
                        , where my friend and I won first place among 15 teams and 33 participants, taking home the $1,000 prize.
                    </p>
                </div>
            </div>
        </div>
    );
} 