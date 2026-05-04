import { Globe, LeafyGreen, Factory, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-200/20 text-eco-400 font-poppins text-sm font-semibold mb-6">
          <LeafyGreen className="w-4 h-4" />
          <span>Our Philosophy</span>
        </div>
        <h2 className="font-alegreya text-5xl md:text-6xl font-bold text-eco-500 mb-6 tracking-tight">Redefining Sustainability</h2>
        <p className="font-nunito text-xl text-eco-500/80 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between traditional craftsmanship and global enterprise demands through our premium organic materials.
        </p>
      </div>

      {/* Responsive Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto lg:auto-rows-[320px]">
        
        {/* Bento Box 1: Eco-Friendly (Large Left) */}
        <div className="lg:col-span-2 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group shadow-apple hover:shadow-apple-hover transition-all duration-500 min-h-[280px]">
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-eco-400 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <LeafyGreen className="w-8 h-8" />
          </div>
          <div className="relative z-10 w-full md:w-3/4">
            <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-eco-500 mb-4 tracking-tight">100% Eco-Friendly</h3>
            <p className="font-nunito text-lg text-eco-500/80 leading-relaxed">
              All our jute and bamboo products are completely biodegradable and sourced responsibly to minimize global carbon footprints.
            </p>
          </div>
        </div>

        {/* Bento Box 2: Global Export (Small Right) */}
        <div className="bg-eco-300 hover:bg-eco-400 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-end relative overflow-hidden shadow-apple hover:shadow-apple-hover text-white transition-all duration-500 group min-h-[280px]">
          <div className="absolute -right-6 -top-6 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500" />
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 transition-transform duration-500 group-hover:scale-110">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <div className="relative z-10">
            <h3 className="font-poppins font-semibold text-3xl text-white mb-3">Global Export</h3>
            <p className="font-nunito text-eco-100 text-lg opacity-90">Seamless international logistics and shipping.</p>
          </div>
        </div>

        {/* Bento Box 3: Customization (Wide Bottom) */}
        <div className="lg:col-span-3 bg-eco-500 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-apple-hover transition-all duration-500 relative overflow-hidden group">
          
          {/* Decorative background accent */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10 w-full">
            <div className="w-20 h-20 shrink-0 bg-eco-400/50 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-eco-100 border border-eco-300/30">
              <Factory className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h3 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4 tracking-tight">Bulk Customization Facility</h3>
              <p className="font-nunito text-lg text-eco-100/80 max-w-3xl leading-relaxed">
                From bespoke company branding on heavy-duty jute totes to specifically dimensioned bamboo packaging, our manufacturing units handle massive scale and unique requests seamlessly.
              </p>
            </div>
            
            {/* Action Arrow */}
            <div className="hidden lg:flex w-14 h-14 shrink-0 bg-white/10 rounded-full items-center justify-center group-hover:bg-eco-300 transition-colors duration-500 cursor-pointer border border-white/20">
              <ArrowRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}