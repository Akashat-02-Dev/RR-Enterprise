"use client";

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShopHeader from '@/components/shop/ShopHeader';
import ShopSidebar from '@/components/shop/ShopSidebar';
import ShopProductCard from '@/components/shop/ShopProductCard';
import { getProducts, Product } from '@/data/shopData';
import { getShopSettings } from '@/data/settingsData';

// --- LOGIC FUNCTIONS ---
const parsePrice = (priceStr: string | number | undefined) => {
  if (!priceStr) return 0;
  const match = priceStr.toString().match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

const getMasterCategory = (cat: string) => {
  const compostableGroup = ['Compostable Products', 'Biodegradable Products'];
  const ecoServeGroup = ['EcoServe', 'Natura Dine', 'Zero Waste', 'Table Products'];
  
  if (compostableGroup.includes(cat)) return 'Compostable Products';
  if (ecoServeGroup.includes(cat)) return 'EcoServe';
  return cat;
};

function ShopLogic() {
  const searchParams = useSearchParams();
  const rawCatFromUrl = searchParams.get('category') || 'All';
  const initialCategory = getMasterCategory(rawCatFromUrl);

  const [products, setProducts] = useState<Product[]>([]);
  const [dynamicCategories, setDynamicCategories] = useState<string[]>(['All']);
  const [dynamicMaterials, setDynamicMaterials] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState('alphabetical');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  useEffect(() => {
    const fetchShopData = async () => {
      setLoading(true);
      try {
        const [productsData, settingsData] = await Promise.all([getProducts(), getShopSettings()]);
        setProducts(productsData || []);
        
        const fetchedCategories = settingsData?.categories || [];
        const cleanCategories = Array.from(new Set(fetchedCategories.map(getMasterCategory)));
        setDynamicCategories(['All', ...cleanCategories]); 
        setDynamicMaterials(settingsData?.materials || []);
      } catch (error) {
        console.error("Error fetching shop data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShopData();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        (p.name && p.name.toLowerCase().includes(q)) || 
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'All') {
      const compostableGroup = ['Compostable Products', 'Biodegradable Products'];
      const ecoServeGroup = ['EcoServe', 'Natura Dine', 'Zero Waste', 'Table Products'];

      result = result.filter(p => {
        if (selectedCategory === 'Compostable Products') return compostableGroup.includes(p.category);
        if (selectedCategory === 'EcoServe') return ecoServeGroup.includes(p.category);
        return p.category === selectedCategory;
      });
    }

    if (selectedMaterials.length > 0) {
      result = result.filter(p => {
        const legacyMatch = p.material && selectedMaterials.includes(p.material);
        const arrayMatch = p.materials && p.materials.some(m => selectedMaterials.includes(m));
        return legacyMatch || arrayMatch;
      });
    }

    switch (sortOption) {
      case 'price_low': result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price)); break;
      case 'price_high': result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price)); break;
      case 'newest': result.sort((a, b) => (b.id || "").localeCompare(a.id || "")); break;
      case 'best_seller': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'alphabetical':
      default: result.sort((a, b) => (a.name || "").localeCompare(b.name || "")); break;
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortOption, selectedMaterials]);

  return (
    <main className="min-h-screen bg-eco-100 flex flex-col relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-eco-200/40 rounded-full blur-[120px] pointer-events-none" />

      <Navbar /> 

      <div className="flex-grow pt-40 pb-24 px-6 md:px-12 lg:px-24 flex flex-col gap-12 max-w-[1600px] mx-auto w-full relative z-10">
        
        <div className="text-center mb-4">
          <h1 className="font-alegreya text-5xl md:text-7xl font-bold text-eco-500 mb-4 tracking-tight">Eco-Store</h1>
          <p className="font-nunito text-xl text-eco-400 max-w-2xl mx-auto">Discover sustainable, customizable goods for enterprise export.</p>
        </div>

        <ShopHeader 
          searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
          availableCategories={dynamicCategories}
        />

        <div className="w-full flex flex-col lg:flex-row gap-12 mt-8">
          <div className="w-full lg:w-[320px] shrink-0">
            <ShopSidebar 
              sortOption={sortOption} setSortOption={setSortOption}
              selectedMaterials={selectedMaterials} setSelectedMaterials={setSelectedMaterials}
              availableMaterials={dynamicMaterials}
            />
          </div>

          <div className="flex-grow flex flex-col gap-8">
            {loading ? (
              <div className="py-32 flex justify-center items-center h-full">
                <div className="w-12 h-12 border-4 border-eco-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between px-2">
                  <p className="text-lg font-nunito font-bold text-eco-400">
                    Showing <span className="text-eco-500">{filteredProducts.length}</span> results
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ShopProductCard key={product.id || product.name} product={product} />
                    ))
                  ) : (
                    <div className="col-span-full py-32 text-center bg-white/30 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-apple">
                      <p className="text-eco-500 text-2xl font-poppins font-bold mb-2">No products found</p>
                      <p className="text-eco-400 font-nunito">Try adjusting your filters or searching for something else.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

// Ensure Suspense boundary wraps useSearchParams
export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-eco-100 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-eco-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ShopLogic />
    </Suspense>
  );
}