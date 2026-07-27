import { MapPin, Search, ShoppingCart, User, Sun, Moon, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
  toggleSidebar?: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme, cartCount, toggleSidebar }: NavbarProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [lang, setLang] = useState<'en' | 'bn'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('joyotri_lang') as 'en' | 'bn') || 'en';
    }
    return 'en';
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'bn' : 'en';
    setLang(newLang);
    localStorage.setItem('joyotri_lang', newLang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3 lg:gap-6">
        
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-300 hover:text-brand-orange transition-colors p-1">
            <Menu size={24} />
          </button>
          <Link to="/" className="text-2xl md:text-3xl font-black text-brand-orange tracking-tighter hover:scale-105 transition-transform">
            JOYOTRI
          </Link>
        </div>

        {/* Location Selector */}
        <button className="hidden lg:flex items-center gap-1.5 bg-brand-orange/10 dark:bg-brand-orange/20 hover:bg-brand-orange/20 px-3 py-1.5 rounded-full text-xs font-bold text-brand-orange transition-all border border-brand-orange/20 shrink-0">
          <MapPin size={16} />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[9px] uppercase tracking-wider opacity-80">Deliver to</span>
            <span className="text-xs">Dhaka ▼</span>
          </div>
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative hidden md:block">
          <div className="relative flex items-center w-full h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus-within:border-brand-orange focus-within:shadow-md focus-within:shadow-brand-orange/10 transition-all overflow-hidden">
            <div className="pl-3 text-gray-400">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? "Search for fresh groceries, meat, dairy..." : "তাজা মাছ, মাংস, দুধ খুঁজুন..."} 
              className="w-full h-full bg-transparent border-none py-2 px-3 text-sm focus:outline-none dark:text-white placeholder-gray-400"
            />
            <button type="submit" className="h-full px-6 bg-brand-orange hover:bg-orange-600 text-white font-bold text-sm transition-colors">
              {lang === 'en' ? 'Search' : 'খুঁজুন'}
            </button>
          </div>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Language Toggle */}
          <button 
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1 text-xs font-bold rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden h-8 transition-all"
          >
            <span className={`px-2 py-1 transition-colors ${lang === 'en' ? 'bg-brand-orange text-white' : 'text-gray-500 dark:text-gray-400'}`}>EN</span>
            <span className={`px-2 py-1 transition-colors ${lang === 'bn' ? 'bg-brand-orange text-white' : 'text-gray-500 dark:text-gray-400'}`}>বাং</span>
          </button>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-brand-orange transition-all" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Cart — Highlighted */}
          <Link to="/cart" className="flex items-center gap-1.5 bg-brand-orange hover:bg-orange-600 text-white px-3 py-1.5 rounded-full font-bold text-sm transition-all shadow-md shadow-brand-orange/20 relative">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">{cartCount} {lang === 'en' ? 'Items' : 'পণ্য'}</span>
            {cartCount > 0 && (
              <span className="sm:hidden absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Account */}
          <Link to="/account" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hidden sm:flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-brand-orange transition-all" aria-label="Account">
            <User size={18} />
          </Link>
        </div>
      </div>
      
      {/* Mobile Search */}
      <form onSubmit={handleSearch} className="px-4 pb-3 md:hidden">
        <div className="relative flex items-center w-full h-10 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus-within:border-brand-orange transition-all overflow-hidden">
          <div className="pl-3 text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'en' ? "Search groceries..." : "পণ্য খুঁজুন..."}
            className="w-full h-full bg-transparent border-none py-2 px-3 text-sm focus:outline-none dark:text-white placeholder-gray-400"
          />
        </div>
      </form>
    </header>
  );
}
