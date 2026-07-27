import { MapPin, Search, Heart, ShoppingCart, User, Sun, Moon, Menu } from 'lucide-react';
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar} className="text-gray-700 dark:text-gray-300 hover:text-brand-orange transition-colors">
            <Menu size={28} />
          </button>
          <Link to="/" className="text-3xl md:text-4xl font-black text-brand-orange tracking-tighter drop-shadow-sm hover:scale-105 transition-transform">
            JOYOTRI
          </Link>
        </div>

        {/* Location Selector */}
        <button className="hidden lg:flex items-center gap-2 bg-brand-orange/10 dark:bg-brand-orange/20 hover:bg-brand-orange/20 dark:hover:bg-brand-orange/30 px-4 py-2 rounded-full text-sm font-bold text-brand-orange transition-all border border-brand-orange/20 cursor-pointer">
          <MapPin size={20} />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Deliver to</span>
            <span className="text-sm">Dhaka ▼</span>
          </div>
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-3xl relative hidden md:block group">
          <div className="relative flex items-center w-full h-12 rounded-full shadow-sm focus-within:shadow-lg focus-within:shadow-brand-orange/20 bg-gray-50 dark:bg-gray-900 border-2 border-brand-orange/30 focus-within:border-brand-orange transition-all overflow-hidden">
            <div className="pl-4 text-gray-400 group-focus-within:text-brand-orange transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for fresh groceries, meat, dairy..." 
              className="w-full h-full bg-transparent border-none py-2 px-3 text-base focus:outline-none dark:text-white placeholder-gray-400"
            />
            <button type="submit" className="h-full px-8 bg-brand-orange hover:bg-orange-600 text-white font-bold transition-colors">
              Search
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hidden sm:flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          
          <Link to="/cart" className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-brand-orange transition-all relative shadow-sm border border-brand-orange/20 hover:bg-brand-orange hover:text-white" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md animate-bounce border-2 border-white dark:border-brand-dark">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link to="/account" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hidden sm:flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all" aria-label="Account">
            <User size={20} />
          </Link>
        </div>
      </div>
      
      {/* Mobile Search - visible only on small screens */}
      <form onSubmit={handleSearch} className="px-4 pb-4 md:hidden">
        <div className="relative flex items-center w-full h-12 rounded-full shadow-sm focus-within:shadow-md bg-gray-50 dark:bg-gray-900 border-2 border-brand-orange/30 focus-within:border-brand-orange transition-all overflow-hidden">
          <div className="pl-4 text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search groceries..." 
            className="w-full h-full bg-transparent border-none py-2 px-3 text-base focus:outline-none dark:text-white placeholder-gray-400"
          />
        </div>
      </form>
    </header>
  );
}
