import { ChevronDown } from 'lucide-react';

interface SidebarProps {
  sortOption: string;
  setSortOption: (val: string) => void;
  selectedMaterials: string[];
  setSelectedMaterials: (val: string[]) => void;
  availableMaterials: string[]; 
}

export default function ShopSidebar({
  sortOption, setSortOption, selectedMaterials, setSelectedMaterials, availableMaterials
}: SidebarProps) {
  
  const materials = [...availableMaterials].sort((a, b) => a.localeCompare(b));

  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full md:sticky md:top-32">
      
      {/* Sorting Dropdown */}
      <div className="relative">
        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full bg-white/40 backdrop-blur-xl border border-white/60 px-6 py-4 rounded-[1.5rem] font-nunito font-semibold text-lg text-eco-500 focus:ring-4 focus:ring-eco-300/20 focus:border-eco-300 transition-all duration-300 outline-none appearance-none shadow-apple cursor-pointer"
        >
          <option value="alphabetical">Alphabetical (A-Z)</option>
          <option value="best_seller">Best Seller</option>
          <option value="newest">Newest Arrival</option>
          <option value="price_high">Price: High to Low</option>
          <option value="price_low">Price: Low to High</option>
        </select>
        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-eco-500 w-5 h-5 pointer-events-none" />
      </div>

      {/* Materials Filter */}
      {materials.length > 0 && (
        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-apple border border-white/60 flex flex-col gap-6">
          <h3 className="font-poppins font-bold text-xl text-eco-500">Materials</h3>
          <div className="flex flex-col gap-4">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    checked={selectedMaterials.includes(material)} 
                    onChange={() => toggleMaterial(material)}
                    className="appearance-none w-6 h-6 border-2 border-eco-500/30 rounded-lg checked:bg-eco-300 checked:border-eco-300 transition-all duration-200 cursor-pointer peer" 
                  />
                  <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-nunito font-medium text-eco-500/80 transition duration-200 group-hover:text-eco-500">
                  {material}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}