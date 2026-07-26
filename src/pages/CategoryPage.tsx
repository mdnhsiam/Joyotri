import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  addToCart: () => void;
}

export default function CategoryPage({ addToCart }: CategoryPageProps) {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.slug === id);

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Category not found</h2>
        <p className="text-gray-500 mt-2">The category you are looking for does not exist.</p>
      </div>
    );
  }

  // Generate some dummy products for the category
  const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `${category.name} Item ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 600) + 100 : undefined,
    weight: ['1 kg', '500g', '1 L', '1 Dozen'][Math.floor(Math.random() * 4)],
    image: category.image
  }));

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className={`rounded-3xl ${category.color} p-8 mb-8 flex items-center gap-6 overflow-hidden relative`}>
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-white dark:border-gray-800 z-10">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        </div>
        <div className="z-10">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            {category.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-200 mt-1">
            Explore our fresh selection of {category.name.toLowerCase()}
          </p>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/20 blur-2xl"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={`৳${product.price}`}
            originalPrice={product.originalPrice ? `৳${product.originalPrice}` : undefined}
            weight={product.weight}
            image={product.image}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
