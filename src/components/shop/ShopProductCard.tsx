"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ShopProductCard({ product }: { product: any }) {
  // State to track if the image has finished downloading
  const [isLoaded, setIsLoaded] = useState(false);

  const rawImageUrl = Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl;
  const fallbackImage = "https://images.unsplash.com/photo-1611077544831-29002241eec7?auto=format&fit=crop&q=80&w=800";
  const safeImageUrl = rawImageUrl && rawImageUrl.trim() !== '' ? rawImageUrl : fallbackImage;

  const materialsDisplay = product.materials && product.materials.length > 0 
    ? product.materials.join(', ') 
    : product.material || product.category || 'Eco-Friendly Material';

  return (
    <div className="bg-white/40 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-apple hover:shadow-apple-hover flex flex-col gap-4 relative group transition-all duration-500 hover:-translate-y-2 border border-white/60 h-full">
      
      {/* Image Container with pulsing skeleton background */}
      <div className={`relative w-full aspect-square overflow-hidden rounded-[2rem] bg-eco-200/20 ${!isLoaded ? 'animate-pulse' : ''}`}>
        <div className="absolute inset-0 bg-eco-500/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
        
        <Image 
          src={safeImageUrl} 
          alt={product.name || 'Product'} 
          fill
          // CRITICAL: Prevents the Next.js local server from timing out and crashing
          unoptimized={true} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Applies a heavy blur until the image fully loads, then snaps to clear
          className={`object-cover object-center transition-all duration-700 ease-out group-hover:scale-110 ${
            isLoaded ? 'blur-0 opacity-100' : 'blur-xl opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {product.badge && product.badge.trim() !== '' && (
          <div className="absolute top-4 right-4 bg-eco-100/90 backdrop-blur-md text-eco-500 px-4 py-1.5 rounded-full font-poppins font-bold text-xs tracking-wide shadow-sm z-20 uppercase border border-white/50">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
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
             <span className="font-nunito font-semibold text-sm text-eco-500 truncate" title={materialsDisplay}>
               {materialsDisplay}
             </span>
          </div>
          
          <button className="bg-eco-500 text-eco-100 px-6 py-2.5 rounded-full font-poppins font-medium text-sm hover:bg-eco-400 transition-colors shadow-sm shrink-0">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}