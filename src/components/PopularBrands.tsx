import { Link } from 'react-router-dom';

const brands = [
  { name: 'PRAN', color: '#1B8E3D', textColor: 'white' },
  { name: 'Nestlé', color: '#003399', textColor: 'white' },
  { name: 'Unilever', color: '#1F36C7', textColor: 'white' },
  { name: 'ACI', color: '#E31E24', textColor: 'white' },
  { name: 'Marico', color: '#00704A', textColor: 'white' },
  { name: 'Reckitt', color: '#E40073', textColor: 'white' },
  { name: 'Square', color: '#0072BC', textColor: 'white' },
  { name: 'Meghna', color: '#D4A843', textColor: 'white' },
  { name: 'Fresh', color: '#4CAF50', textColor: 'white' },
  { name: 'Radhuni', color: '#C62828', textColor: 'white' },
];

export default function PopularBrands() {
  return (
    <section className="py-10 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Popular on Joyotri
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide justify-center flex-wrap">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/search?q=${encodeURIComponent(brand.name)}`}
              className="flex-none flex items-center justify-center w-28 h-16 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all group"
            >
              <div 
                className="w-20 h-10 rounded-lg flex items-center justify-center text-xs font-black tracking-tight group-hover:scale-110 transition-transform"
                style={{ backgroundColor: brand.color, color: brand.textColor }}
              >
                {brand.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
