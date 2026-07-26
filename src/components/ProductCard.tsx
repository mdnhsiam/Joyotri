import { Plus } from 'lucide-react';

interface ProductCardProps {
  name: string;
  weight: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  addToCart: () => void;
}

export default function ProductCard({ name, weight, price, originalPrice, image, badge, addToCart }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-brand-orange/30 dark:hover:border-brand-orange/50 transition-all group flex flex-col h-full">
      <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-2 left-2 bg-brand-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded">
            {badge}
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm md:text-base">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{weight}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div>
            <div className="font-bold text-lg text-brand-orange">৳{price}</div>
            {originalPrice && (
              <div className="text-sm text-gray-400 line-through">৳{originalPrice}</div>
            )}
          </div>
          
          <button 
            onClick={addToCart}
            className="w-10 h-10 rounded-full bg-brand-light dark:bg-gray-700 text-brand-orange hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
