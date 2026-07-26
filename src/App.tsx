import { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FlashDeals from './components/FlashDeals';
import PopularProducts from './components/PopularProducts';
import TrustSection from './components/TrustSection';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const addToCart = () => setCartCount(prev => prev + 1);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} cartCount={cartCount} />
      
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <FlashDeals addToCart={addToCart} />
        <PopularProducts addToCart={addToCart} />
        <TrustSection />
        <AppDownload />
      </main>

      <Footer />
    </div>
  );
}

export default App;
