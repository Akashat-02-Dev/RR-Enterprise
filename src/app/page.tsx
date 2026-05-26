import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-eco-100 selection:bg-eco-300 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}