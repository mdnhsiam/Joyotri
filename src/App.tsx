import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import AnnouncementBar from './components/AnnouncementBar';

function App() {
  // Theme state with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('joyotri_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Cart count state with localStorage persistence
  const [cartCount, setCartCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('joyotri_cart');
      if (saved) return parseInt(saved, 10);
    }
    return 0;
  });

  // Persist theme
  useEffect(() => {
    localStorage.setItem('joyotri_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const addToCart = () => setCartCount(prev => prev + 1);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('joyotri_cart', cartCount.toString());
  }, [cartCount]);

  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Routes>
        <Route 
          path="/" 
          element={<MainLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} cartCount={cartCount} />}
        >
          <Route index element={<HomePage addToCart={addToCart} />} />
          <Route path="category/:id" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
          <Route path="search" element={<SearchResultsPage addToCart={addToCart} />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
