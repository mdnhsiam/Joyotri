export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  nutritionInfo?: {
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
  };
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Fresh Red Apple',
    categorySlug: 'fruits-veg',
    price: 250,
    originalPrice: 300,
    weight: '1 kg',
    image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Fresh Farms',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: 'Crisp, sweet, and juicy red apples sourced directly from local orchards. Perfect for a healthy snack or baking.',
    nutritionInfo: { calories: '52 kcal', fat: '0.2g', carbs: '14g', protein: '0.3g' }
  },
  {
    id: 'p2',
    name: 'Organic Bananas',
    categorySlug: 'fruits-veg',
    price: 120,
    weight: '1 Dozen',
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Nature Choice',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    description: 'Naturally ripened organic bananas, rich in potassium and vitamins.',
    nutritionInfo: { calories: '89 kcal', fat: '0.3g', carbs: '23g', protein: '1.1g' }
  },
  {
    id: 'p3',
    name: 'Premium Beef (Bone-in)',
    categorySlug: 'meat-fish',
    price: 750,
    originalPrice: 800,
    weight: '1 kg',
    image: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Bengal Meats',
    rating: 4.9,
    reviews: 210,
    inStock: true,
    description: 'High-quality, freshly cut beef with bone. Ideal for traditional curries and slow cooking.',
  },
  {
    id: 'p4',
    name: 'Farm Fresh Eggs',
    categorySlug: 'dairy-eggs',
    price: 140,
    weight: '1 Dozen',
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Kazi Farms',
    rating: 4.7,
    reviews: 450,
    inStock: true,
    description: 'White shell eggs from grain-fed hens. Packed with protein.',
  },
  {
    id: 'p5',
    name: 'Potato Crackers',
    categorySlug: 'snacks',
    price: 15,
    weight: '25g',
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Bombay Sweets',
    rating: 4.3,
    reviews: 56,
    inStock: false,
    description: 'Crunchy potato crackers lightly salted for the perfect tea-time snack.',
  },
  {
    id: 'p6',
    name: 'Full Cream Milk',
    categorySlug: 'dairy-eggs',
    price: 90,
    weight: '1 L',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400',
    brand: 'Aarong Dairy',
    rating: 4.9,
    reviews: 820,
    inStock: true,
    description: 'Pasteurized full cream milk, packed with essential nutrients and calcium.',
  }
];

export const getProductsByCategory = (slug: string) => {
  return products.filter(p => p.categorySlug === slug);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) || 
    p.brand.toLowerCase().includes(lowerQuery)
  );
};
