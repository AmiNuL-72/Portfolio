"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectImageGallery({ images, title }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Display */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-[#0c0c20] border border-white/10 shadow-2xl group">
        <Image
          src={images[currentIndex]}
          alt={`${title} Preview ${currentIndex + 1}`}
          fill
          className="object-cover object-top transition-all duration-300"
          sizes="(max-width: 1024px) 100vw, 600px"
        />

        {/* Carousel Prev/Next Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#ecca98] hover:text-gray-950 transition-all opacity-80 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Counter Badge */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-xs text-gray-300 font-semibold backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-[#ecca98] scale-105 shadow-md shadow-[#ecca98]/20"
                  : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

