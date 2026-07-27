import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FlashDeals from '../components/FlashDeals';
import PopularProducts from '../components/PopularProducts';
import PopularBrands from '../components/PopularBrands';
import CategoryProductRow from '../components/CategoryProductRow';
import ShopAndMore from '../components/ShopAndMore';
import DailyNecessities from '../components/DailyNecessities';
import TrustSection from '../components/TrustSection';
import { homepageCategoryProducts } from '../data/homepageProducts';

interface HomePageProps {
  addToCart: () => void;
}

export default function HomePage({ addToCart }: HomePageProps) {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FlashDeals addToCart={addToCart} />
      <PopularProducts addToCart={addToCart} />
      <PopularBrands />
      
      {/* Category-based product rows */}
      <div className="bg-white dark:bg-brand-dark">
        <CategoryProductRow 
          title="Fruits & Vegetables" 
          slug="fruits-veg" 
          products={homepageCategoryProducts['fruits-veg']} 
          addToCart={addToCart} 
        />
        <CategoryProductRow 
          title="Meat & Fish" 
          slug="meat-fish" 
          products={homepageCategoryProducts['meat-fish']} 
          addToCart={addToCart} 
        />
        <CategoryProductRow 
          title="Dairy & Eggs" 
          slug="dairy-eggs" 
          products={homepageCategoryProducts['dairy-eggs']} 
          addToCart={addToCart} 
        />
        <CategoryProductRow 
          title="Beverages" 
          slug="beverages" 
          products={homepageCategoryProducts['beverages']} 
          addToCart={addToCart} 
        />
        <CategoryProductRow 
          title="Snacks" 
          slug="snacks" 
          products={homepageCategoryProducts['snacks']} 
          addToCart={addToCart} 
        />
      </div>

      <ShopAndMore />
      <DailyNecessities />
      <TrustSection />
    </>
  );
}
