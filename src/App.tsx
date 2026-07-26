import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AnnouncementBar from './components/AnnouncementBar';

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
    <BrowserRouter>
      <AnnouncementBar />
      <Routes>
        <Route 
          path="/" 
          element={<MainLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme} cartCount={cartCount} />}
        >
          <Route index element={<HomePage addToCart={addToCart} />} />
          <Route path="category/:id" element={<CategoryPage addToCart={addToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
