import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Timer } from 'lucide-react';

interface FlashDealsProps {
  addToCart: () => void;
}

const flashProducts = [
  { id: 1, name: 'Fresh Red Tomatoes', weight: '1 kg', price: 65, originalPrice: 90, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400', badge: '-28%' },
  { id: 2, name: 'Farm Fresh Eggs', weight: '12 pcs', price: 140, originalPrice: 165, image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=400', badge: '-15%' },
  { id: 3, name: 'Premium Miniket Rice', weight: '5 kg', price: 340, originalPrice: 380, image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=400', badge: '-10%' },
  { id: 4, name: 'Fresh Apples', weight: '1 kg', price: 220, originalPrice: 280, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&q=80&w=400', badge: '-21%' },
  { id: 5, name: 'Whole Chicken', weight: '1.2 kg', price: 210, originalPrice: 260, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400', badge: '-19%' },
];

export default function FlashDeals({ addToCart }: FlashDealsProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-orange-50/50 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flash Deals</h2>
            <div className="flex items-center gap-2 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold shadow-md shadow-brand-orange/20">
              <Timer size={16} />
              <span className="tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
          <button className="text-brand-orange font-medium hover:underline">View All Deals</button>
        </div>
        
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 snap-x scrollbar-hide">
          {flashProducts.map(product => (
            <div key={product.id} className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] snap-start flex-none">
              <ProductCard {...product} id={String(product.id)} price={`৳${product.price}`} originalPrice={product.originalPrice ? `৳${product.originalPrice}` : undefined} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
