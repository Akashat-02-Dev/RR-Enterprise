"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FALLBACK_IMAGE } from '@/data/shopData';

interface ProductDetailImageProps {
  initialImage: string;
  alt: string;
  badge?: string;
}

export default function ProductDetailImage({ initialImage, alt, badge }: ProductDetailImageProps) {
  const [imgSrc, setImgSrc] = useState(initialImage);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-eco-200/20">
      <Image 
        src={imgSrc}
        alt={alt}
        fill
        priority
        unoptimized={true} // Bypasses Next.js proxy
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 hover:scale-105"
        onError={() => setImgSrc(FALLBACK_IMAGE)} // Catches 404s
      />
      {badge && (
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl text-eco-500 px-5 py-2 rounded-full font-poppins font-bold text-sm tracking-wide shadow-sm border border-white/50 uppercase">
          {badge}
        </div>
      )}
    </div>
  );
}