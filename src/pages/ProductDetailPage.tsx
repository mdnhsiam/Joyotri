import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { ChevronRight, Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface ProductDetailPageProps {
  addToCart: () => void;
}

export default function ProductDetailPage({ addToCart }: ProductDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'nutri' | 'reviews'>('desc');

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h2>
        <Link to="/" className="mt-4 inline-block text-brand-orange hover:underline">Return to Home</Link>
      </div>
    );
  }

  // Get related products (just picking a few from same category for mock)
  const relatedProducts = products.filter(p => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link to="/" className="hover:text-brand-orange">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to={`/category/${product.categorySlug}`} className="hover:text-brand-orange capitalize">
          {product.categorySlug.replace('-', ' ')}
        </Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-900 dark:text-gray-200 font-medium">{product.name}</span>
      </nav>

      {/* Product Top Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        {/* Gallery */}
        <div className="w-full md:w-1/2 lg:w-2/5">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm relative group overflow-hidden">
            {product.originalPrice && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md z-10">
                SAVE ৳{product.originalPrice - product.price}
              </div>
            )}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10 p-2 bg-white/80 dark:bg-gray-900/80 rounded-full shadow-sm backdrop-blur-sm">
              <Heart size={20} />
            </button>
            <div className="aspect-square flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          
          {/* Thumbnails (Mock) */}
          <div className="flex gap-4 mt-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-20 h-20 rounded-xl border-2 cursor-pointer bg-white dark:bg-gray-800 p-2 ${i === 1 ? 'border-brand-orange' : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'}`}>
                <img src={product.image} className="w-full h-full object-contain" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col">
          <div className="mb-2 text-brand-orange font-bold text-sm tracking-wider uppercase">
            {product.brand}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-400">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-black text-brand-orange">৳{product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through mb-1">৳{product.originalPrice}</span>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-1.5 ml-2">/ {product.weight}</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-8">
            {/* Quantity Stepper */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5 border border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-200 shadow-sm hover:text-brand-orange transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-bold text-lg dark:text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-200 shadow-sm hover:text-brand-orange transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>

            <button 
              onClick={addToCart}
              className="flex-1 h-14 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 active:scale-95"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>
          </div>

          <div className="flex gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Truck size={18} className="text-green-500" />
              <span>Free delivery over ৳500</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <ShieldCheck size={18} className="text-blue-500" />
              <span>100% Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-16">
        <div className="flex gap-8 border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto no-scrollbar">
          <button 
            className={`pb-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'desc' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            onClick={() => setActiveTab('desc')}
          >
            Description
          </button>
          <button 
            className={`pb-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'nutri' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            onClick={() => setActiveTab('nutri')}
          >
            Nutrition Info
          </button>
          <button 
            className={`pb-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'reviews' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviews})
          </button>
        </div>

        <div className="text-gray-600 dark:text-gray-300 min-h-[150px]">
          {activeTab === 'desc' && (
            <p className="text-lg leading-relaxed">{product.description}</p>
          )}
          {activeTab === 'nutri' && product.nutritionInfo && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-sm text-gray-500 mb-1">Calories</div>
                <div className="font-bold text-xl dark:text-white">{product.nutritionInfo.calories}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-sm text-gray-500 mb-1">Carbs</div>
                <div className="font-bold text-xl dark:text-white">{product.nutritionInfo.carbs}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-sm text-gray-500 mb-1">Protein</div>
                <div className="font-bold text-xl dark:text-white">{product.nutritionInfo.protein}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-sm text-gray-500 mb-1">Fat</div>
                <div className="font-bold text-xl dark:text-white">{product.nutritionInfo.fat}</div>
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <p>User reviews will be displayed here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Bought Together</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedProducts.map(p => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={`৳${p.price}`}
                originalPrice={p.originalPrice ? `৳${p.originalPrice}` : undefined}
                weight={p.weight}
                image={p.image}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
