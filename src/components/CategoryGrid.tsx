const categories = [
  { id: 1, name: 'Fruits & Veg', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-green-100 dark:bg-green-900/30' },
  { id: 2, name: 'Meat & Fish', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-red-100 dark:bg-red-900/30' },
  { id: 3, name: 'Dairy & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-blue-100 dark:bg-blue-900/30' },
  { id: 4, name: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd08c?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
  { id: 5, name: 'Beverages', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-purple-100 dark:bg-purple-900/30' },
  { id: 6, name: 'Household', image: 'https://images.unsplash.com/photo-1584820927498-cafe4c1482ce?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-teal-100 dark:bg-teal-900/30' },
  { id: 7, name: 'Baby Care', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-pink-100 dark:bg-pink-900/30' },
  { id: 8, name: 'Personal Care', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=200&h=200&q=80', color: 'bg-cyan-100 dark:bg-cyan-900/30' },
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
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden ${cat.color} group-hover:scale-110 transition-transform shadow-inner`}>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
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
