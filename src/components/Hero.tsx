import HeroBG from '../../public/hero-bg.png'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBG.src})` }}
      />
      <div className="absolute inset-0 bg-eco-500/50 backdrop-blur-[4px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-16">
        <span className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-eco-100 text-sm font-montserrat font-medium border border-white/20">
          Sustainable & Customizable Bulk Export
        </span>
        
        {/* Utilizing Gelasio for the luxury heading font */}
        <h1 className="font-gelasio text-5xl md:text-7xl font-bold text-white leading-tight">
          Nature's Strength,<br /> <span className="text-eco-200">Crafted for the World.</span>
        </h1>
        
        {/* Utilizing Roboto for clean sub-body text */}
        <p className="font-roboto text-lg md:text-xl text-white/90 max-w-2xl font-light">
          Premium, eco-friendly jute and bamboo products tailored for bulk global enterprise needs.
        </p>
        
<a 
          href="#products" 
          className="mt-6 px-10 py-4 bg-gradient-to-r from-eco-300 to-eco-200 text-eco-500 rounded-full font-montserrat font-bold transition-all duration-500 transform hover:scale-105 shadow-[0_4px_30px_rgba(199,172,103,0.35)] border border-eco-200/50 hover:from-eco-200 hover:to-eco-300"
        >
          Explore Our Catalog
        </a>
      </div>
    </section>
  );
}