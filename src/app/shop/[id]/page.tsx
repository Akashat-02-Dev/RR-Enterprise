import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ShieldCheck, Factory } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, resolveImageUrl } from '@/data/shopData';
import ProductDetailImage from '@/components/shop/ProductDetailImage'; // We will create this

export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const safeImageUrl = resolveImageUrl(product);

  const materialsDisplay = product.materials && product.materials.length > 0 
    ? product.materials.join(', ') 
    : product.material || product.category;

  return (
    <main className="min-h-screen bg-eco-100 flex flex-col relative overflow-hidden selection:bg-eco-300 selection:text-white">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-eco-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-eco-300/10 rounded-full blur-[120px] pointer-events-none" />

      <Navbar />

      <div className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full relative z-10">
        
        <Link href="/shop" className="inline-flex items-center gap-2 text-eco-400 hover:text-eco-500 font-nunito font-semibold mb-8 md:mb-12 transition-colors duration-300 w-fit">
          <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/60 shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </div>
          Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-white/40 backdrop-blur-2xl rounded-[3rem] p-4 border border-white/60 shadow-apple">
              {/* Using the new Client Component here */}
              <ProductDetailImage initialImage={safeImageUrl} alt={product.name} badge={product.badge} />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="mb-4">
              <span className="px-4 py-1.5 rounded-full bg-eco-300/10 text-eco-400 font-poppins font-semibold text-xs tracking-widest uppercase mb-4 inline-block">
                {product.category}
              </span>
              <h1 className="font-alegreya text-4xl md:text-6xl font-bold text-eco-500 leading-tight mb-4">
                {product.name}
              </h1>
            </div>

            <div className="h-px w-full bg-eco-500/10 my-6" />

            <p className="font-nunito text-lg md:text-xl text-eco-500/80 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-poppins font-bold text-eco-400/70 uppercase tracking-widest mb-1">Material</p>
                <p className="font-nunito font-semibold text-eco-500">{materialsDisplay}</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-poppins font-bold text-eco-400/70 uppercase tracking-widest mb-1">Customization</p>
                <p className="font-nunito font-semibold text-eco-500">Available</p>
              </div>
            </div>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 font-nunito text-eco-500/90 font-medium">
                <CheckCircle2 className="w-5 h-5 text-eco-300" /> 100% Biodegradable & Export Ready
              </li>
              <li className="flex items-center gap-3 font-nunito text-eco-500/90 font-medium">
                <ShieldCheck className="w-5 h-5 text-eco-300" /> Quality assured for global shipping
              </li>
              <li className="flex items-center gap-3 font-nunito text-eco-500/90 font-medium">
                <Factory className="w-5 h-5 text-eco-300" /> Massive scale manufacturing capabilities
              </li>
            </ul>

            <a href="/#contact" className="w-full md:w-auto text-center bg-eco-500 hover:bg-eco-400 text-eco-100 rounded-[2rem] px-10 py-5 font-poppins text-lg font-medium transition-all duration-300 shadow-apple hover:shadow-apple-hover transform hover:-translate-y-1">
              Request Bulk Enterprise Quote
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}