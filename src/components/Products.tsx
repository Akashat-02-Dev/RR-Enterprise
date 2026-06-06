"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image"; 

type Category = {
  title: string;
  desc: string;
  img: string | StaticImageData;
};

const categories: Category[] = [
  { title: "Sustainable Bags", desc: "Heavy-duty jute and organic cotton totes.", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
  { title: "Compostable & Biodegradable", desc: "Earth-safe packaging solutions.", img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=800" },
  { title: "NaturaDine / ZeroWaste", desc: "Zero carbon footprint dining.", img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800" },
  { title: "Table / EcoServe", desc: "Elegant bamboo tableware.", img: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&q=80&w=800" },
  { title: "Recycled Plastic", desc: "Durable goods from second-life plastics.", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { title: "Earth Friendly", desc: "Chemical-free lifestyle products.", img: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&q=80&w=800" },
  { title: "Edible Cutlery", desc: "Flavor-infused, edible spoons and forks.", img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800" },
];

export default function Products() {
  const rotationRef = useRef(0);
  const isPausedRef = useRef(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (!isPausedRef.current) {
        rotationRef.current = (rotationRef.current + 0.5) % 360;
        
        // Mutate the DOM directly, bypassing React re-renders for buttery 60FPS
        cardsRef.current.forEach((card, idx) => {
          if (!card) return;
          
          const angle = rotationRef.current + (idx * 360) / categories.length;
          const radian = angle * (Math.PI / 180);
          const x = Math.cos(radian);
          const y = Math.sin(radian); 
          const depth = (y + 1) / 2; 
          const scale = 0.6 + (depth * 0.4); 
          const opacity = 0.3 + (depth * 0.7); 
          const zIndex = Math.floor(depth * 100);

          card.style.transform = `translate(calc(${x} * var(--radius-x)), calc(${y} * var(--radius-y))) scale(${scale})`;
          card.style.opacity = opacity.toString();
          card.style.zIndex = zIndex.toString();
        });
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="products" className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 md:mb-16 relative z-20">
        <h2 className="font-alegreya text-5xl md:text-6xl font-bold text-eco-500 mb-4 tracking-tight">Our Product Ranges</h2>
        <p className="font-nunito text-xl text-eco-400 max-w-2xl mx-auto">Explore our products.</p>
      </div>

      <div 
        className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center"
        style={{ "--radius-x": "clamp(160px, 35vw, 450px)", "--radius-y": "clamp(100px, 20vw, 240px)" } as React.CSSProperties}
      >
        <div className="absolute z-50 flex items-center justify-center w-32 h-32 md:w-48 md:h-48 bg-eco-500 backdrop-blur-3xl rounded-full shadow-[0_0_60px_rgba(199,172,103,0.4)] border border-eco-200/60 animate-[pulse_4s_ease-in-out_infinite] transition-transform hover:scale-105 duration-500 cursor-pointer p-6">
          <div className="relative w-full h-full">
            <Image src="/R&R Enterprise Logo.png" alt="R&R Enterprise Logo" fill sizes="(max-width: 768px) 128px, 192px" className="object-contain drop-shadow-md" />
          </div>
        </div>

        {categories.map((category, idx) => (
          <div
            key={idx}
            ref={(el) => { cardsRef.current[idx] = el; }}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            className="absolute group cursor-pointer"
            style={{ opacity: 0 }} // Initial hidden state before JS kicks in
          >
            <div className="w-[180px] sm:w-[240px] md:w-[280px] bg-white/60 backdrop-blur-2xl rounded-[2rem] p-2 md:p-3 shadow-apple border border-white/80 flex flex-col group-hover:bg-white/80 group-hover:shadow-apple-hover transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] relative bg-eco-100">
                <div className="absolute inset-0 bg-eco-500/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image src={category.img} alt={category.title} fill sizes="(max-width: 768px) 240px, 280px" className="object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              </div>
              <div className="pt-4 pb-3 px-3 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-poppins font-semibold text-lg md:text-xl text-eco-500 mb-1 leading-tight">{category.title}</h3>
                <p className="font-nunito text-eco-500/80 text-xs md:text-sm hidden sm:block">{category.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}