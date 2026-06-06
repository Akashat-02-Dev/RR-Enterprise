import { Search } from 'lucide-react';

interface ShopHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  availableCategories: string[]; 
}

export default function ShopHeader({ 
  searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, availableCategories 
}: ShopHeaderProps) {
  
  const categories = availableCategories.length > 0 ? availableCategories : ['All'];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto w-full">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-eco-400 w-6 h-6" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search sustainable products..."
          className="w-full bg-white/40 backdrop-blur-xl border border-white/60 px-16 py-5 rounded-[2rem] font-nunito font-medium text-lg text-eco-500 placeholder:text-eco-500/50 focus:ring-4 focus:ring-eco-300/20 focus:border-eco-300 transition-all duration-300 outline-none shadow-apple"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 rounded-full font-poppins font-semibold text-sm md:text-base transition-all duration-300 shadow-sm ${
              selectedCategory === category 
                ? 'bg-eco-500 text-eco-100 shadow-apple-hover scale-105' 
                : 'bg-white/40 backdrop-blur-md text-eco-500 border border-white/60 hover:bg-white/60 hover:-translate-y-0.5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}