import { useState } from 'react';
import ProductCard from './ProductCard';

interface PopularProductsProps {
  addToCart: () => void;
}

const products = [
  { id: 1, name: 'Aarong Fresh Milk', weight: '1 Liter', price: 90, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400', category: 'Best Sellers' },
  { id: 2, name: 'Radhuni Pure Mustard Oil', weight: '1 Liter', price: 320, image: 'https://images.unsplash.com/photo-1620025983803-db2da2054ff4?auto=format&fit=crop&q=80&w=400', category: 'Best Sellers' },
  { id: 3, name: 'Fresh Potatoes', weight: '1 kg', price: 45, originalPrice: 50, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400', category: 'Recommended' },
  { id: 4, name: 'Maggi 2-Minute Noodles', weight: '8 pcs', price: 150, image: 'https://images.unsplash.com/photo-1612929633738-8fe01f7c8166?auto=format&fit=crop&q=80&w=400', category: 'Best Sellers' },
  { id: 5, name: 'Local Bananas', weight: '1 Dozen', price: 80, originalPrice: 100, image: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&q=80&w=400', category: 'Recommended' },
  { id: 6, name: 'Bombay Sweets Potato Crackers', weight: '25 gm', price: 15, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400', category: 'New Arrivals' },
  { id: 7, name: 'Rupchanda Soyabean Oil', weight: '5 Liter', price: 840, image: 'https://images.unsplash.com/photo-1620025983803-db2da2054ff4?auto=format&fit=crop&q=80&w=400', category: 'Best Sellers' },
  { id: 8, name: 'Savlon Antiseptic Liquid', weight: '1 Liter', price: 310, image: 'https://images.unsplash.com/photo-1584824486516-0555a07fc511?auto=format&fit=crop&q=80&w=400', category: 'New Arrivals' },
];

const tabs = ['Best Sellers', 'New Arrivals', 'Recommended'];

export default function PopularProducts({ addToCart }: PopularProductsProps) {
  const [activeTab, setActiveTab] = useState('Best Sellers');
  
  const filteredProducts = activeTab === 'Best Sellers' 
    ? products 
    : products.filter(p => p.category === activeTab || p.category === 'Best Sellers'); // Fallback to show some items

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Popular Products</h2>
        
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-2 w-full md:w-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-brand-orange text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.slice(0, 10).map(product => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
