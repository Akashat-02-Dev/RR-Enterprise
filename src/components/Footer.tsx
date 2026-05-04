import { Leaf, ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-eco-500 pt-24 pb-10 mt-20 rounded-t-[4rem] overflow-hidden shadow-2xl">
      
      {/* Ambient background glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-eco-400/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand & Description (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 md:pr-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-eco-400 rounded-[1.25rem] flex items-center justify-center shadow-inner border border-eco-300/30">
                <Leaf className="w-8 h-8 text-eco-100" />
              </div>
              <span className="font-poppins font-bold text-3xl md:text-4xl tracking-tight text-white">RR Enterprise</span>
            </div>
            <p className="font-nunito text-eco-100/80 text-lg max-w-md leading-relaxed">
              Leading the global transition to sustainable business with premium jute and bamboo manufacturing for enterprise export.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-poppins font-semibold text-xl text-white mb-2">Navigation</h4>
            <a href="#about" className="group flex items-center gap-2 text-eco-100/80 hover:text-white transition-colors w-fit font-nunito text-lg">
              About Us 
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a href="#products" className="group flex items-center gap-2 text-eco-100/80 hover:text-white transition-colors w-fit font-nunito text-lg">
              Product Line 
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a href="#contact" className="group flex items-center gap-2 text-eco-100/80 hover:text-white transition-colors w-fit font-nunito text-lg">
              Partner With Us 
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-poppins font-semibold text-xl text-white mb-1">Get in Touch</h4>
            
            <a href="mailto:export@rrenterprise.com" className="flex items-center gap-4 text-eco-100/80 hover:text-white transition-colors group cursor-pointer font-nunito text-lg">
              <div className="w-12 h-12 rounded-full bg-eco-400/50 flex items-center justify-center group-hover:bg-eco-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="truncate">export@rrenterprise.com</span>
            </a>
            
            <a href="tel:+919876543210" className="flex items-center gap-4 text-eco-100/80 hover:text-white transition-colors group cursor-pointer font-nunito text-lg">
              <div className="w-12 h-12 rounded-full bg-eco-400/50 flex items-center justify-center group-hover:bg-eco-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span>+91 98765 43210</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-eco-400/50 gap-4 mt-8">
          <p className="font-nunito text-eco-100/60 text-sm">
            © {new Date().getFullYear()} RR Enterprise. All rights reserved.
          </p>
          <div className="font-nunito text-eco-100/60 text-sm flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}