import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingCartProps {
  cartCount: number;
}

export default function FloatingCart({ cartCount }: FloatingCartProps) {
  return (
    <Link
      to="/cart"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1 bg-brand-orange hover:bg-orange-600 text-white px-3 py-4 rounded-2xl shadow-2xl shadow-brand-orange/30 transition-all hover:scale-105 group"
    >
      <div className="relative">
        <ShoppingBag size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-brand-orange text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center shadow-sm border border-brand-orange/20">
            {cartCount}
          </span>
        )}
      </div>
      <span className="text-[10px] font-bold leading-tight">{cartCount} Items</span>
      <span className="text-[10px] font-medium opacity-80">৳0</span>
    </Link>
  );
}
