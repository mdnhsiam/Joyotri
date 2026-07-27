import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

interface CategoryProductRowProps {
  title: string;
  slug: string;
  products: {
    id: number;
    name: string;
    weight: string;
    price: number;
    originalPrice?: number;
    image: string;
  }[];
  addToCart: () => void;
}

export default function CategoryProductRow({ title, slug, products, addToCart }: CategoryProductRowProps) {
  if (products.length === 0) return null;
  
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <Link 
            to={`/category/${slug}`}
            className="text-sm font-semibold text-brand-orange hover:text-orange-600 transition-colors flex items-center gap-1"
          >
            View All →
          </Link>
        </div>
        
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 gap-4 snap-x scrollbar-hide">
          {products.map(product => (
            <div key={product.id} className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] snap-start flex-none">
              <ProductCard 
                {...product} 
                id={String(product.id)} 
                price={`৳${product.price}`} 
                originalPrice={product.originalPrice ? `৳${product.originalPrice}` : undefined} 
                onAddToCart={addToCart} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
