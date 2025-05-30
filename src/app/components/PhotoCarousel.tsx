'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
    src: string;
    alt: string;
    orientation: 'portrait' | 'landscape';
}

const photos: Photo[] = [
    { src: '/images/me.JPG', alt: 'Joaquin Uriarte', orientation: 'landscape' },
    { src: '/images/me2.JPG', alt: 'Joaquin Uriarte', orientation: 'landscape' },
    { src: '/images/me3.JPEG', alt: 'Joaquin Uriarte', orientation: 'portrait' },
    { src: '/images/me4.JPG', alt: 'Joaquin Uriarte', orientation: 'landscape' },
    { src: '/images/me5.JPG', alt: 'Joaquin Uriarte', orientation: 'portrait' },
    { src: '/images/me6.JPG', alt: 'Joaquin Uriarte', orientation: 'portrait' },
];

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const currentPhoto = photos[currentIndex];

    return (
        <div
            className="relative w-full h-full group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={nextPhoto}
        >
            {/* Background photos with rotation */}
            {photos.map((photo, index) => (
                index !== currentIndex && (
                    <div
                        key={photo.src}
                        className={`absolute inset-0 transition-all duration-500 ${index < currentIndex ? 'rotate-12' : '-rotate-12'
                            } ${isHovered ? 'opacity-0' : 'opacity-30'}`}
                        style={{
                            transform: `rotate(${index < currentIndex ? '12deg' : '-12deg'}) scale(0.9)`,
                        }}
                    >
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className={`object-cover ${photo.orientation === 'landscape' ? 'object-center' : 'object-cover'
                                    }`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                )
            ))}

            {/* Current photo */}
            <div className={`relative w-full h-full transition-all duration-500 ${isHovered ? 'rotate-0' : 'rotate-3'
                }`}>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${currentPhoto.orientation === 'landscape' ? 'object-center' : 'object-cover'
                            }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Click indicator */}
            <div className={`absolute bottom-2 right-2 text-white/60 text-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                Click for next
            </div>
        </div>
    );
} 