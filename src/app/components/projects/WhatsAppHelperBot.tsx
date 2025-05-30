export default function WhatsAppHelperBot() {
    return (
        <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="flex flex-col md:flex-row h-full">
                {/* Media Section - Top on mobile, Right on desktop */}
                <div className="w-full md:w-[65%] h-auto md:h-full pt-4 md:pt-2 px-2 md:px-4 pb-2 md:pb-4 order-1 md:order-2 flex items-center justify-center">
                    <div className="relative w-full max-w-md md:max-w-full h-auto aspect-video flex items-center justify-center">
                        <img
                            src="/images/lucho_cd_diagram.png"
                            alt="WhatsApp Helper Bot Diagram"
                            className="w-auto h-auto object-contain rounded-2xl md:rounded-3xl max-w-[80%] md:max-w-[90%]"
                        />
                    </div>
                </div>
                {/* Content Section - Bottom on mobile, Left on desktop */}
                <div className="w-full md:w-[30%] h-full p-3 md:p-6 order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
                    <div className="w-full text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">WhatsApp Helper Bot</h3>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-6">A WhatsApp bot to assist me with tasks in my groups.</p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6 justify-center md:justify-start">
                            {["Node.js", "Langchain", "whatsapp-web.js"].map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 md:px-3 md:py-1 bg-white/10 rounded-full text-xs md:text-sm text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-2 md:gap-4 w-full max-w-xs mx-auto md:mx-0">
                            <span
                                className="w-full inline-block px-3 py-1.5 md:px-4 md:py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                            >
                                Coming Soon
                            </span>
                            <div className="flex gap-2 md:gap-3 w-full">
                                <a
                                    href="https://github.com/joaquinuriarte/wa-helper-bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-block px-2 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-xs md:text-sm"
                                >
                                    Code Repo
                                </a>
                            </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-6">
                            I&apos;m currently developing this bot to assist with various tasks within my WhatsApp groups, with upcoming support for shared calendar interactions.
                            To use it, I simply send a message tagging the bot (currently named @Lucho).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 