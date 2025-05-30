'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Only trigger when section is in the middle 50% of the viewport
            }
        );

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
            <nav className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                <div className="flex space-x-8">
                    <a
                        href="#about"
                        className={`transition-colors ${activeSection === 'about' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
                    >
                        Me
                    </a>
                    <a
                        href="#projects"
                        className={`transition-colors ${activeSection === 'projects' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className={`transition-colors ${activeSection === 'skills' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
                    >
                        Skills
                    </a>
                    <a
                        href="#reads"
                        className={`transition-colors ${activeSection === 'reads' ? 'text-white font-bold' : 'text-gray-300 hover:text-white'}`}
                    >
                        Reads
                    </a>
                </div>
            </nav>
        </header>
    );
} 