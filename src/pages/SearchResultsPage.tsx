import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, Grid, List as ListIcon } from 'lucide-react';

interface SearchResultsPageProps {
  addToCart: () => void;
}

export default function SearchResultsPage({ addToCart }: SearchResultsPageProps) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  
  const products = searchProducts(query);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');

  let filteredProducts = [...products];
  if (sortBy === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Search Results
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Showing results for <span className="font-bold text-brand-orange">"{query}"</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Simplified Sidebar for Search */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
              <SlidersHorizontal size={18} className="text-brand-orange" />
              <h3 className="font-bold text-gray-900 dark:text-white">Refine</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Categories</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input type="checkbox" className="rounded text-brand-orange" defaultChecked />
                  All Categories
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {products.length > 0 ? (
            <>
              {/* Top Bar Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium px-2">
                  Found <span className="text-gray-900 dark:text-white font-bold">{filteredProducts.length}</span> items
                </span>
                
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm rounded-lg focus:ring-brand-orange focus:border-brand-orange p-2 dark:text-white cursor-pointer"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>

                  <div className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-orange' : 'text-gray-500'}`}
                    >
                      <Grid size={18} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm text-brand-orange' : 'text-gray-500'}`}
                    >
                      <ListIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Grid / List */}
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
            </>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">We couldn't find anything</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
                Try searching for something else like "Milk", "Rice", or "Eggs", or browse our categories.
              </p>
              <Link to="/" className="px-8 py-3 bg-brand-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors inline-block">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
