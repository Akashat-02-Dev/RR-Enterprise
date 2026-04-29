import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-eco-500 text-brand-100 py-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-eco-200" />
            <span className="font-poppins font-bold text-xl text-eco-200">RR Enterprise</span>
          </div>
          <p className="font-nunito text-eco-100 text-sm max-w-xs">
            Leading the global transition to sustainable business with premium jute and bamboo manufacturing.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 font-nunito text-eco-100">
          <h4 className="font-poppins font-semibold text-white mb-2">Quick Links</h4>
          <a href="#about" className="hover:text-brand-500 transition-colors">About Us</a>
          <a href="#products" className="hover:text-brand-500 transition-colors">Products</a>
          <a href="#contact" className="hover:text-brand-500 transition-colors">Partner With Us</a>
        </div>

        <div className="flex flex-col gap-3 font-nunito text-brand-100/80">
          <h4 className="font-poppins font-semibold text-white mb-2">Contact Details</h4>
          <p className="text-eco-100">Email: export@rrenterprise.com</p>
          <p className="text-eco-100">Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="border-t border-brand-700/50 mt-12 pt-8 text-center font-nunito text-sm text-eco-100">
        © {new Date().getFullYear()} RR Enterprise. All rights reserved.
      </div>
    </footer>
  );
}