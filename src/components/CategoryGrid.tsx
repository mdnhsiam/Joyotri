import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export default function CategoryGrid() {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Shop by Category</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <Link 
            to={`/category/${cat.slug}`}
            key={cat.id}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-brand-orange/30 dark:hover:border-brand-orange/50 transition-all group"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 overflow-hidden ${cat.color} group-hover:scale-110 transition-transform shadow-inner`}>
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
