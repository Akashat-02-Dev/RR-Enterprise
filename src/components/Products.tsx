"use client";
import { useState, useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import { Leaf } from "lucide-react";

// 1. Define the TypeScript interface
type Category = {
  title: string;
  desc: string;
  img: string | StaticImageData;
};

// 2. Categories Data
const categories: Category[] = [
  { title: "Sustainable Bags", desc: "Heavy-duty jute and organic cotton totes.", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
  { title: "Compostable & Biodegradable", desc: "Earth-safe packaging solutions.", img: "https://images.unsplash.com/photo-1611077544831-29002241eec7?auto=format&fit=crop&q=80&w=800" },
  { title: "NaturaDine / ZeroWaste", desc: "Zero carbon footprint dining.", img: "https://images.unsplash.com/photo-1585241936939-f81c953a98ea?auto=format&fit=crop&q=80&w=800" },
  { title: "Table / EcoServe", desc: "Elegant bamboo tableware.", img: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&q=80&w=800" },
  { title: "Recycled Plastic", desc: "Durable goods from second-life plastics.", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { title: "Earth Friendly", desc: "Chemical-free lifestyle products.", img: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&q=80&w=800" },
  { title: "Edible Cutlery", desc: "Flavor-infused, edible spoons and forks.", img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800" },
];

export default function Products() {
  const [rotation, setRotation] = useState(0);
  const isPausedRef = useRef(false);

  // 60FPS Animation Loop for the Orbit
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      if (!isPausedRef.current) {
        // Change 0.08 to make it spin faster or slower
        setRotation((prev) => (prev + 0.5) % 360);
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="products" className="py-24 md:py-32 relative z-10 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 md:mb-16 relative z-20">
        <h2 className="font-alegreya text-5xl md:text-6xl font-bold text-eco-500 mb-4 tracking-tight">Ecosystem Setup</h2>
        <p className="font-nunito text-xl text-eco-400 max-w-2xl mx-auto">
          Explore our expansive portfolio in a continuous 3D orbital view.
        </p>
      </div>

      {/* 3D Orbital Canvas */}
      <div 
        className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center"
        // CSS Variables to control the responsive elliptical radius (X is wider than Y)
        style={{ 
          "--radius-x": "clamp(160px, 35vw, 450px)", 
          "--radius-y": "clamp(100px, 20vw, 240px)" 
        } as React.CSSProperties}
      >
        
        {/* Central Hub Logo (The Fixed Point) */}
        <div className="absolute z-50 flex flex-col items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-white/50 backdrop-blur-3xl rounded-full shadow-[0_0_60px_rgba(61,163,93,0.3)] border border-white/80 animate-pulse transition-transform hover:scale-105 duration-500 cursor-pointer">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-eco-300 to-eco-500 rounded-full flex items-center justify-center shadow-inner mb-2">
            <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <span className="font-poppins font-bold text-sm md:text-md text-eco-500 tracking-wider">RR ENT.</span>
        </div>

        {/* Orbiting Cards */}
        {categories.map((category, idx) => {
          // 1. Calculate the angle for this specific card
          const angle = rotation + (idx * 360) / categories.length;
          const radian = angle * (Math.PI / 180);
          
          // 2. Determine X and Y coordinates (-1 to 1)
          const x = Math.cos(radian);
          const y = Math.sin(radian); 
          
          // 3. Create the 3D Illusion based on the Y-axis (depth)
          // When y = 1 (bottom/front), depth = 1 (Largest size, fully opaque, highest z-index)
          // When y = -1 (top/back), depth = 0 (Smallest size, semi-transparent, lowest z-index)
          const depth = (y + 1) / 2; 
          const scale = 0.6 + (depth * 0.4); 
          const opacity = 0.3 + (depth * 0.7); 
          const zIndex = Math.floor(depth * 100);

          return (
            <div
              key={idx}
              onMouseEnter={() => (isPausedRef.current = true)}
              onMouseLeave={() => (isPausedRef.current = false)}
              className="absolute group cursor-pointer"
              // Apply the calculated math to the styles in real-time
              style={{
                transform: `translate(calc(${x} * var(--radius-x)), calc(${y} * var(--radius-y))) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                // We do NOT use 'transition-transform' here because JS is updating it every frame
              }}
            >
              {/* Inner Card Wrapper (Handles hover interactions without fighting the JS orbit) */}
              <div className="w-[180px] sm:w-[240px] md:w-[280px] bg-white/60 backdrop-blur-2xl rounded-[2rem] p-2 md:p-3 shadow-apple border border-white/80 flex flex-col group-hover:bg-white/80 group-hover:shadow-apple-hover transition-all duration-300 transform group-hover:-translate-y-2">
                
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] relative bg-eco-100">
                  <div className="absolute inset-0 bg-eco-500/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={typeof category.img === "string" ? category.img : category.img.src} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" 
                  />
                </div>
                
                {/* Text Panel */}
                <div className="pt-4 pb-3 px-3 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-poppins font-semibold text-lg md:text-xl text-eco-500 mb-1 leading-tight">{category.title}</h3>
                  {/* Hide descriptions on mobile to keep the orbit clean */}
                  <p className="font-nunito text-eco-500/80 text-xs md:text-sm hidden sm:block">{category.desc}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}