import { StaticImageData } from "next/image";

// 1. Define the TypeScript interface
type Category = {
  title: string;
  desc: string;
  img: string | StaticImageData;
};

// 2. Updated categories with relevant descriptions and placeholder images
const categories: Category[] = [
  { 
    title: "Sustainable Bags", 
    desc: "Heavy-duty jute and organic cotton totes for everyday utility.", 
    img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Compostable & Biodegradable", 
    desc: "Packaging and products designed to return to the earth safely.", 
    img: "https://images.unsplash.com/photo-1611077544831-29002241eec7?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "NaturaDine / ZeroWaste", 
    desc: "Premium dining solutions leaving absolutely zero carbon footprint.", 
    img: "https://images.unsplash.com/photo-1585241936939-f81c953a98ea?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Table / EcoServe", 
    desc: "Elegant, reusable bamboo and wood tableware for hospitality.", 
    img: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Recycled Plastic", 
    desc: "Giving single-use plastics a second life through durable goods.", 
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Earth Friendly", 
    desc: "Holistic, chemical-free lifestyle products sourced directly from nature.", 
    img: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Edible Cutlery", 
    desc: "Innovative, flavor-infused spoons and forks you can eat after use.", 
    img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=800" 
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-alegreya text-5xl md:text-6xl font-bold text-eco-500 mb-4 tracking-tight">Our Eco-Categories</h2>
          <p className="font-nunito text-xl text-eco-400 max-w-2xl mx-auto">Explore our extensive range of sustainable solutions engineered for global bulk export.</p>
        </div>
        
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-3 shadow-apple hover:shadow-apple-hover transition-all duration-500 border border-white/60 flex flex-col"
            >
              {/* Image Container with Apple-style deep rounded corners */}
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] relative bg-eco-100">
                <div className="absolute inset-0 bg-eco-500/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={typeof category.img === "string" ? category.img : category.img.src} 
                  alt={category.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>
              
              {/* Text Content */}
              <div className="pt-8 pb-6 px-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-poppins font-semibold text-2xl text-eco-500 mb-3 leading-tight">{category.title}</h3>
                  <p className="font-nunito text-eco-500/80 text-md">{category.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}