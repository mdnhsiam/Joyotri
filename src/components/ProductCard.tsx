import { useState } from 'react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id?: string;
  name: string;
  price: string;
  originalPrice?: string;
  weight: string;
  image: string;
  onAddToCart: () => void;
  isHorizontal?: boolean;
}

export default function ProductCard({ id = 'p1', name, price, originalPrice, weight, image, onAddToCart, isHorizontal = false }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(1);
    onAddToCart();
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(q => q + 1);
    onAddToCart();
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuantity(q => Math.max(0, q - 1));
  };

  if (isHorizontal) {
    return (
      <Link to={`/product/${id}`} className="flex w-full group">
        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700 relative">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          {originalPrice && (
            <div className="absolute top-1 left-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
              SALE
            </div>
          )}
        </div>
        <div className="flex-1 ml-4 flex flex-col justify-center">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{weight}</span>
          <h3 className="font-bold text-gray-900 dark:text-white leading-tight line-clamp-1 group-hover:text-brand-orange transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-extrabold text-brand-orange">{price}</span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
            )}
          </div>
        </div>
        <div className="ml-4 flex items-center">
          {quantity === 0 ? (
            <button 
              onClick={handleAdd}
              className="p-2 sm:px-4 sm:py-2 bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white rounded-lg font-bold transition-colors flex items-center justify-center gap-1"
            >
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">Add</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1" onClick={(e) => e.preventDefault()}>
              <button 
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-600 rounded-md text-gray-600 dark:text-white shadow-sm hover:text-brand-orange transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-4 text-center font-bold dark:text-white">{quantity}</span>
              <button 
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-600 rounded-md text-gray-600 dark:text-white shadow-sm hover:text-brand-orange transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/product/${id}`} className="bg-white dark:bg-gray-800 rounded-2xl p-3 border border-gray-100 dark:border-gray-700 hover:border-brand-orange/30 dark:hover:border-brand-orange/50 hover:shadow-lg transition-all group flex flex-col h-full relative overflow-hidden">
      {/* Discount Badge */}
      {originalPrice && (
        <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
          SAVE
        </div>
      )}
      
      {/* Image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-gray-50 dark:bg-gray-900 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">View Details</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{weight}</span>
        <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
          {name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-extrabold text-brand-orange">{price}</span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
            )}
          </div>

          {/* Add to Cart Area */}
          {quantity === 0 ? (
            <button 
              onClick={handleAdd}
              className="w-full py-2 bg-gray-100 hover:bg-brand-orange dark:bg-gray-700 text-gray-700 hover:text-white dark:text-white rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between bg-brand-orange text-white rounded-xl p-1 shadow-sm" onClick={(e) => e.preventDefault()}>
              <button 
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="font-bold">{quantity}</span>
              <button 
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
