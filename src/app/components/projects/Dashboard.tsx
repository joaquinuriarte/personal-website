export default function Dashboard() {
    return (
        <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row items-center md:items-stretch">
            {/* Media Section - Top on mobile, Right on desktop */}
            <div className="w-full md:w-[65%] h-auto md:h-full pt-4 md:pt-2 px-2 md:px-4 pb-2 md:pb-4 order-1 md:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-md md:max-w-full h-auto aspect-video flex items-center justify-center">
                    <img
                        src="/images/dashboard.png"
                        alt="Dashboard"
                        className="w-auto h-auto object-contain rounded-2xl md:rounded-3xl max-w-[90%] md:max-w-[95%]"
                    />
                </div>
            </div>
            {/* Content Section - Bottom on mobile, Left on desktop */}
            <div className="w-full md:w-[30%] h-full p-3 md:p-6 order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
                <div className="w-full text-center md:text-left">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white">Web Analytics Infrastructure for Startup</h3>
                    <p className="text-xs md:text-base text-gray-300 mb-3 md:mb-6">Set up full-stack web analytics infrastructure for a startup, enabling product usage tracking and metrics reporting.</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-6 justify-center md:justify-start">
                        {["GTM", "GA4", "BigQuery", "Airflow", "SQL", "Looker Studio"].map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 md:px-3 md:py-1 bg-white/10 rounded-full text-xs md:text-sm text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-6">
                        I implemented end-to-end data infrastructure to track user interactions on a friend&apos;s startup webapp. Using Google Tag Manager, I captured key events and funneled them into GA4 and BigQuery. I built all necessary SQL scripts and scheduled pipelines to process daily usage data, then connected the outputs to custom dashboards with visuals tailored to the team&apos;s KPIs.
                    </p>
                </div>
            </div>
        </div>
    );
} 