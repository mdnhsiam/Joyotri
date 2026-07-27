import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronRight, SlidersHorizontal, Grid, List as ListIcon } from 'lucide-react';

interface CategoryPageProps {
  addToCart: () => void;
}

export default function CategoryPage({ addToCart }: CategoryPageProps) {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.slug === id);
  const products = getProductsByCategory(id || '');

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [inStockOnly, setInStockOnly] = useState(false);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Category not found</h2>
        <p className="text-gray-500 mt-2">The category you are looking for does not exist.</p>
        <Link to="/" className="mt-4 inline-block text-brand-orange hover:underline">Return to Home</Link>
      </div>
    );
  }

  // Filter and Sort Logic
  let filteredProducts = inStockOnly ? products.filter(p => p.inStock) : products;
  
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/" className="hover:text-brand-orange">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-900 dark:text-gray-200 font-medium">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className={`rounded-3xl ${category.color} p-6 sm:p-8 mb-8 flex items-center gap-6 overflow-hidden relative`}>
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-white dark:border-gray-800 z-10 bg-white">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        </div>
        <div className="z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            {category.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 mt-1 hidden sm:block">
            Explore our fresh selection of {category.name.toLowerCase()}
          </p>
        </div>
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/20 blur-2xl"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
              <SlidersHorizontal size={18} className="text-brand-orange" />
              <h3 className="font-bold text-gray-900 dark:text-white">Filters</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Availability</h4>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-brand-orange focus:ring-brand-orange bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">In Stock Only</span>
              </label>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Price Range</h4>
              <input type="range" min="0" max="1000" className="w-full accent-brand-orange" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>৳0</span>
                <span>৳1000+</span>
              </div>
            </div>
            
            <button className="w-full py-2 bg-brand-orange/10 text-brand-orange font-semibold rounded-xl hover:bg-brand-orange hover:text-white transition-colors text-sm">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Top Bar Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium px-2">
              Showing <span className="text-gray-900 dark:text-white font-bold">{filteredProducts.length}</span> results
            </span>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm rounded-lg focus:ring-brand-orange focus:border-brand-orange block p-2 dark:text-white cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-orange' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <Grid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-orange' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <ListIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid / List */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
              : "flex flex-col gap-4"
            }>
              {filteredProducts.map((product) => (
                <div key={product.id} className={viewMode === 'list' ? "flex items-center gap-6 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700" : ""}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={`৳${product.price}`}
                    originalPrice={product.originalPrice ? `৳${product.originalPrice}` : undefined}
                    weight={product.weight}
                    image={product.image}
                    onAddToCart={addToCart}
                    isHorizontal={viewMode === 'list'}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No products found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => setInStockOnly(false)}
                className="mt-6 px-6 py-2 bg-brand-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
