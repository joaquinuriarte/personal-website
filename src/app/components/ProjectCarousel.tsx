'use client';

import { useState, useRef, TouchEvent, MouseEvent, WheelEvent } from 'react';
import Telescope from './projects/Telescope';
import WhatsAppHelperBot from './projects/WhatsAppHelperBot';
import AccentureWorkExperience from './projects/AccentureWorkExperience';
import Dashboard from './projects/Dashboard';

const projects = [
    Telescope,
    WhatsAppHelperBot,
    AccentureWorkExperience,
    Dashboard,
];

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleDragStart = (e: TouchEvent | MouseEvent) => {
        const target = e.target as HTMLElement;
        // If the target is a link or inside a link, do nothing and let the browser handle it.
        if (target.closest('a')) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleDragMove = (e: TouchEvent | MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = clientX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleDragEnd = (e: TouchEvent | MouseEvent) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();

            if (carouselRef.current) {
                const cardWidth = carouselRef.current.offsetWidth;
                const scrollPosition = carouselRef.current.scrollLeft;
                const newIndex = Math.round(scrollPosition / cardWidth);

                // Ensure we don't go out of bounds
                const boundedIndex = Math.max(0, Math.min(projects.length - 1, newIndex));
                setCurrentIndex(boundedIndex);

                carouselRef.current.scrollTo({
                    left: boundedIndex * cardWidth,
                    behavior: 'smooth'
                });
            }
        }
        setIsDragging(false);
    };

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (carouselRef.current) {
            const delta = e.deltaX;
            const cardWidth = carouselRef.current.offsetWidth;

            // Calculate the new index based on the current scroll position
            const currentScroll = carouselRef.current.scrollLeft;
            const currentPosition = currentScroll / cardWidth;

            // Determine direction and calculate new index
            const direction = delta > 0 ? 1 : -1;
            const newIndex = Math.round(currentPosition + direction);

            // Ensure we don't go out of bounds
            const boundedIndex = Math.max(0, Math.min(projects.length - 1, newIndex));

            // Only change if we've scrolled enough and the index is different
            if (Math.abs(delta) > 50 && boundedIndex !== currentIndex) {
                setCurrentIndex(boundedIndex);
                carouselRef.current.scrollTo({
                    left: boundedIndex * cardWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div
            className="w-full h-full relative flex flex-col overflow-hidden"
        >
            <div
                ref={carouselRef}
                className="w-full h-[96%] overflow-hidden"
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onWheel={handleWheel}
            >
                <div className="flex h-full">
                    {projects.map((ProjectComponent, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 p-2 overflow-hidden"
                            style={{ minWidth: '100%' }}
                        >
                            <div className="w-full h-full overflow-hidden">
                                <ProjectComponent />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 h-[4%]">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            if (carouselRef.current) {
                                carouselRef.current.scrollTo({
                                    left: index * carouselRef.current.offsetWidth,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                    />
                ))}
            </div>
        </div>
    );
} 