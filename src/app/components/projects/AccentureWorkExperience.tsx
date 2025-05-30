export default function AccentureWorkExperience() {
    return (
        <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="flex flex-col md:flex-row h-full">
                {/* Media Section - Top on mobile, Right on desktop */}
                <div className="w-full md:w-[65%] h-auto md:h-full pt-4 md:pt-2 px-2 md:px-4 pb-2 md:pb-4 order-1 md:order-2 flex items-center justify-center">
                    <div className="relative w-full max-w-md md:max-w-full h-auto aspect-video flex items-center justify-center">
                        <img
                            src="/images/key_higlights.png"
                            alt="Key Highlights"
                            className="w-auto h-auto object-contain rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-[95%]"
                        />
                    </div>
                </div>
                {/* Content Section - Bottom on mobile, Left on desktop */}
                <div className="w-full md:w-[35%] h-full p-3 md:p-6 order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
                    <div className="w-full text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Day Work with Accenture</h3>
                        <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-6">Engineered and optimized Google Store&apos;s marketing data infrastructure, leading end-to-end pipeline development, architectural improvements, and data quality enhancements that significantly reduced errors while enabling advanced analytics and attribution modeling.</p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6 justify-center">
                            {["Python", "Apache Airflow", "BigQuery", "SQL", "Data Modeling"].map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 md:px-3 md:py-1 bg-white/10 rounded-full text-xs md:text-sm text-white"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 