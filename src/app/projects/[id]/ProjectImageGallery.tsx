"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectImageGallery({ images, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for carousel & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, isLightboxOpen]);

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Display with Exact Aspect Ratio Preservation */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden bg-[#070718] border border-white/10 shadow-2xl group cursor-zoom-in p-3 sm:p-4 flex items-center justify-center transition-colors hover:border-[#ecca98]/40"
      >
        {/* Ambient matching background glow */}
        <div className="absolute inset-0 overflow-hidden opacity-25 filter blur-2xl scale-110 pointer-events-none">
          <Image
            src={images[currentIndex]}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Foreground Authentic Uncropped Screenshot (Zero zoom / Zero distortion) */}
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`${title} Preview ${currentIndex + 1}`}
            fill
            className="object-contain transition-all duration-300"
            sizes="(max-width: 1024px) 100vw, 700px"
            priority
          />
        </div>

        {/* Carousel Prev/Next Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-white/10 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 border border-white/10 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all opacity-80 group-hover:opacity-100 z-10 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Top Right: Zoom / Expand Hint */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 border border-white/10 text-xs text-gray-300 font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
          <Maximize2 className="w-3.5 h-3.5 text-[#ecca98]" />
          <span>Click to view full</span>
        </div>

        {/* Bottom Right: Counter Badge */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/75 border border-white/10 text-xs text-[#ecca98] font-semibold backdrop-blur-sm z-10 shadow-md">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails Row (Preserves authentic aspect ratio, scrollable for multiple screenshots) */}
      {images.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-[#ecca98]/30 max-w-full">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 w-16 sm:w-20 h-16 sm:h-20 rounded-xl overflow-hidden border-2 bg-[#0c0c24] p-1 transition-all cursor-pointer ${
                currentIndex === idx
                  ? "border-[#ecca98] scale-105 shadow-md shadow-[#ecca98]/25"
                  : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-contain p-0.5"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close fullscreen"
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Prev / Next Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all z-50 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all z-50 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </>
          )}

          {/* Full unconstrained image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} Full Preview ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Bottom title & counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 border border-white/15 text-xs sm:text-sm text-gray-200 font-medium">
            <span className="text-[#ecca98] font-bold">{title}</span> — Screenshot {currentIndex + 1} of {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
