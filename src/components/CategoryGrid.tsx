import { Apple, Beef, Milk, Cookie, Coffee, Sparkles, Baby, Droplet } from 'lucide-react';

const categories = [
  { id: 1, name: 'Fruits & Veg', icon: Apple, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
  { id: 2, name: 'Meat & Fish', icon: Beef, color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' },
  { id: 3, name: 'Dairy & Eggs', icon: Milk, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { id: 4, name: 'Snacks', icon: Cookie, color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' },
  { id: 5, name: 'Beverages', icon: Coffee, color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' },
  { id: 6, name: 'Household', icon: Sparkles, color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400' },
  { id: 7, name: 'Baby Care', icon: Baby, color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' },
  { id: 8, name: 'Personal Care', icon: Droplet, color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400' },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Shop by Category</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-brand-orange/30 dark:hover:border-brand-orange/50 transition-all group"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
              <cat.icon size={28} />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
