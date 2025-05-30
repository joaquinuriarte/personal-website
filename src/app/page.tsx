// import Image from "next/image"; // Commented out or removed
import PhotoCarousel from "./components/PhotoCarousel";
import ProjectCarousel from "./components/ProjectCarousel";
import TimelineItem from "./components/TimelineItem";
import BookCard from "./components/BookCard";
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

// Define timeline data
const timelineEvents = [
  {
    title: "BS in Industrial & System Engineering & Minor in Computer Science",
    date: "Georgia Institute of Technology - May 2023",
  },
  {
    title: "Technology Architecture Analyst",
    date: "Accenture - October 2023",
  },
  {
    title: "Coursera Machine Learning Specialization",
    date: "February 2024",
  },
  {
    title: "Data Engineering Senior Analyst",
    date: "Accenture - May 2025",
  },
];

// Define book data
const books = [
  {
    title: "Everything that turned out well in my life followed the same design process",
    imageUrl: "/images/design_process.webp",
    linkUrl: "https://www.henrikkarlsson.xyz/p/unfolding",
    quote: "Not to chase visions, but instead iterate on what works",
    isActualQuote: false,
  },
  {
    title: "Clean Architecture",
    imageUrl: "/images/clean_arch.png",
    linkUrl: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
    quote: "Defer decisions to the last possible moment",
    isActualQuote: false,
  },
  {
    title: "Hands on machine learning",
    imageUrl: "/images/hands_on_ml.png",
    linkUrl: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1491962291",
    quote: "Appreciate the beauty of VAEs",
    isActualQuote: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-16 md:py-20 pt-24">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-32">
            {/* Text Content */}
            <div className="w-full md:max-w-2xl mb-10 md:mb-0">
              <p className="text-lg text-gray-300 text-center md:text-left">
                Hi, thanks for visiting my site! My name is Joaquin Uriarte, and I am a data engineer by day and a software engineer by night. Based in San Francisco, I&apos;m passionate about building software systems and would love to continue growing in this field.
                <br /><br />
                Here are way too many photos of me (I was enjoying the carousel effect) and some of my proudest projects! Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start mt-4">
                <a
                  href="https://www.linkedin.com/in/joaquinx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/Resume/Uriarte_Joaquin_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  <span>Resume</span>
                </a>
                <a
                  href="https://x.com/joaquin_uriarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                >
                  <FaXTwitter className="w-5 h-5" />
                  <span>@joaquin_uriarte</span>
                </a>
                <a
                  href="https://github.com/joaquinuriarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:u.b.joaquin@gmail.com"
                  className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center text-white text-sm md:text-base"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Photo Carousel */}
            <div className="flex justify-center w-full md:w-auto">
              <div className="w-full max-w-[300px] sm:max-w-[350px] md:w-[400px] aspect-square">
                <PhotoCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl w-full h-[80dvh] mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectCarousel />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-10 md:py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">Skills & Experience</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-8 md:mt-0">
            {/* Left Column: Courses and Experience Timeline */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col items-center md:items-start space-y-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center w-full text-white">Courses & Experience</h3>
              <div className="flex flex-col-reverse w-full max-w-md">
                {timelineEvents.map((event, index) => (
                  <TimelineItem
                    key={index}
                    title={event.title}
                    date={event.date}
                    isOldestEvent={index === 0}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Skills */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 flex flex-col items-center md:items-start space-y-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center w-full text-white">Technical Skills</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full max-w-md">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Node.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">JavaScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">SQL</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Apache Airflow</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">BigQuery</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Langchain</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">Data Modeling</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">TensorFlow</span>
                {/* Add more skills or placeholders as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reads Section */}
      <section id="reads" className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-12 sm:mb-16 text-center text-white">Reads that taught me to...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                imageUrl={book.imageUrl}
                linkUrl={book.linkUrl}
                quote={book.quote}
                isActualQuote={book.isActualQuote}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
