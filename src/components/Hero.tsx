import HeroBG from '../../public/hero-bg.png'
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBG.src})` }}
      />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">
        <span className="px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md text-brand-100 text-sm font-poppins font-medium border border-white/30">
          Sustainable & Customizable Bulk Export
        </span>
        <h1 className="font-alegreya text-5xl md:text-7xl font-bold text-white leading-tight">
          Nature's Strength,<br /> Crafted for the World.
        </h1>
        <p className="font-nunito text-lg md:text-xl text-eco-100 max-w-2xl opacity-90">
          Premium, eco-friendly jute and bamboo products tailored for bulk global enterprise needs.
        </p>
        <a 
  href="#products" 
  className="mt-4 px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white rounded-full font-poppins font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/10"
>
  Explore Our Catalog
</a>
      </div>
    </section>
  );
}