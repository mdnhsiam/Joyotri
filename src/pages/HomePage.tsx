import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FlashDeals from '../components/FlashDeals';
import PopularProducts from '../components/PopularProducts';
import TrustSection from '../components/TrustSection';
import AppDownload from '../components/AppDownload';

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
      <TrustSection />
      <AppDownload />
    </>
  );
}
