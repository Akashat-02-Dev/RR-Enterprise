"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, resolveImageUrl, FALLBACK_IMAGE } from '@/data/shopData';

export default function ShopProductCard({ product }: { product: Product }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Resolves the exact Firebase URL from the DB
  const [imgSrc, setImgSrc] = useState(resolveImageUrl(product));

  useEffect(() => {
    setImgSrc(resolveImageUrl(product));
  }, [product]);

  const materialsDisplay = product.materials && product.materials.length > 0 
    ? product.materials.join(', ') 
    : product.material || product.category || 'Eco-Friendly Material';

  return (
    <Link href={`/shop/${product.id}`} className="block h-full group">
      <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-apple hover:shadow-apple-hover flex flex-col gap-4 relative transition-all duration-500 hover:-translate-y-2 border border-white/60 h-full">
        
        <div className={`relative w-full aspect-square overflow-hidden rounded-[2rem] bg-eco-200/20 ${!isLoaded ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 bg-eco-500/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
          
          <Image 
            src={imgSrc} 
            alt={product.name || 'Product'} 
            fill
            // CRITICAL: This ensures the Firebase URL is used exactly as-is, preventing 404 token errors
            unoptimized={true} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 ${
              isLoaded ? 'blur-0 opacity-100' : 'blur-xl opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            // Fallback UI if a specific Firebase image gets deleted
            onError={() => {
              setImgSrc(FALLBACK_IMAGE);
              setIsLoaded(true);
            }}
          />
          
          {product.badge && product.badge.trim() !== '' && (
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-eco-500 px-4 py-1.5 rounded-full font-poppins font-bold text-xs tracking-wide shadow-sm z-20 uppercase border border-white/50">
              {product.badge}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow gap-2 px-4 pb-4">
          <h3 className="font-poppins font-bold text-2xl text-eco-500 leading-tight">
            {product.name}
          </h3>
          <p className="font-nunito text-eco-500/70 text-sm flex-grow line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-eco-500/10">
            <div className="flex flex-col overflow-hidden pr-4">
               <span className="text-[10px] font-poppins font-bold text-eco-400/70 uppercase tracking-widest mb-0.5">
                 Material
               </span>
               <span className="font-nunito font-semibold text-sm text-eco-500 truncate">
                 {materialsDisplay}
               </span>
            </div>
            <div className="bg-eco-500 text-eco-100 px-6 py-2.5 rounded-full font-poppins font-medium text-sm transition-colors shadow-sm shrink-0 flex items-center justify-center">
              View
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}