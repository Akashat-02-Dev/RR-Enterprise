"use client";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Contact() {
  // 1. Add a mounted state
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // 2. Set mounted to true only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "inquiries"), { ...formData, createdAt: new Date() });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
<section 
      id="contact" 
      className="relative w-full py-32 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Contact-bg.png')" }}
    >
      {/* Optional: Adds a very subtle dark tint over the background image 
          so your white frosted glass form stands out better. */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Wrapper to keep the form centered and constrained */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-10 md:p-16 shadow-apple">
          <div className="text-center mb-12">
            <h2 className="font-alegreya text-5xl font-bold text-eco-500 mb-4 tracking-tight">Initiate a Deal</h2>
            <p className="font-nunito text-xl text-eco-500/90 font-medium">Let's discuss bulk exports and customization.</p>
          </div>

          {!isMounted ? (
            <div className="flex justify-center items-center h-[350px]">
               <div className="w-10 h-10 border-4 border-eco-200 border-t-eco-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" required
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-300 focus:ring-4 focus:ring-eco-300/20 font-nunito text-eco-500 placeholder:text-eco-500/60 transition-all duration-300 shadow-sm" />
                <input type="email" placeholder="Business Email" required
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-300 focus:ring-4 focus:ring-eco-300/20 font-nunito text-eco-500 placeholder:text-eco-500/60 transition-all duration-300 shadow-sm" />
              </div>
              <textarea placeholder="Tell us about your requirements..." required rows={5}
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl px-6 py-5 focus:outline-none focus:border-eco-300 focus:ring-4 focus:ring-eco-300/20 font-nunito text-eco-500 placeholder:text-eco-500/60 transition-all duration-300 shadow-sm resize-none" />
              
              <button type="submit" disabled={status === "loading"}
                className="w-full bg-eco-500 hover:bg-eco-400 text-eco-100 rounded-2xl py-5 font-poppins text-lg font-medium transition-all duration-300 shadow-apple disabled:opacity-50">
                {status === "loading" ? "Processing..." : "Send Inquiry"}
              </button>
              
              {status === "success" && <p className="text-eco-500 text-center font-poppins font-medium mt-6 bg-white/50 py-2 rounded-xl">Request submitted successfully.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}