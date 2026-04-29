import { StaticImageData } from "next/image";
import BambooPackaging from "../../public/bamboo-packaging.png";
import JuteSack from "../../public/jute-sack.png";

// 1. Define a TypeScript interface for your products array
type Product = {
  title: string;
  desc: string;
  img: string | StaticImageData;
};

const products: Product[] = [
  { title: "Jute Tote Bags", desc: "Custom printed heavy-duty totes.", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
  { title: "Bamboo Packaging", desc: "Rigid, eco-friendly cosmetic & food containers.", img: BambooPackaging },
  { title: "Jute Sacks & Gunny", desc: "Industrial grade sacks for agriculture.", img: JuteSack },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Note: If you want the Apple-style colors, remember to change text-brand-900 to text-eco-500 */}
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-900 mb-12 text-center">Featured Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-100">
              <div className="aspect-[4/3] overflow-hidden">
                {/* 2. Dynamically extract the .src property if the image is an imported StaticImageData object */}
                <img 
                  src={typeof product.img === "string" ? product.img : product.img.src} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-brand-900 mb-2">{product.title}</h3>
                <p className="font-nunito text-brand-700">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}