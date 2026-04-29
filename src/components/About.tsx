import { Globe, LeafyGreen, Factory } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-brand-900 mb-4">Redefining Sustainability</h2>
        <p className="font-nunito text-brand-700 max-w-2xl mx-auto">We bridge the gap between traditional craftsmanship and global enterprise demands through our premium organic materials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Bento Box 1 */}
        <div className="md:col-span-2 bg-white/60 backdrop-blur-lg border border-white/50 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
          <div className="absolute top-6 right-6 bg-brand-100 p-3 rounded-2xl text-brand-500">
            <LeafyGreen className="w-6 h-6" />
          </div>
          <h3 className="font-poppins font-semibold text-2xl text-brand-900 mb-2">100% Eco-Friendly</h3>
          <p className="font-nunito text-brand-700">All our jute and bamboo products are biodegradable and sourced responsibly to minimize carbon footprints.</p>
        </div>

        {/* Bento Box 2 */}
        <div className="bg-eco-200 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden shadow-lg shadow-brand-500/20 text-eco-400">
           <div className="absolute top-6 right-6 bg-white/20 p-3 rounded-2xl">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-poppins font-semibold text-xl text-eco-400 mb-2">Global Export</h3>
          <p className="font-nunito text-eco-400 text-sm">Seamless international logistics.</p>
        </div>

        {/* Bento Box 3 */}
        <div className="md:col-span-3 bg-eco-400 backdrop-blur-lg border border-white/50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-all">
          <div className="bg-brand-100 p-4 rounded-3xl text-eco-100">
            <Factory className="w-10 h-10" />
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-2xl text-eco-100 mb-2">Bulk Customization Facility</h3>
            <p className="font-nunito text-eco-100">From custom company branding on jute tote bags to specifically dimensioned bamboo packaging, our manufacturing units handle massive scale seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}