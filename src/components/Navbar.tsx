import { MapPin, Search, Heart, ShoppingCart, User, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
}

export default function Navbar({ isDarkMode, toggleTheme, cartCount }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 bg-brand-light dark:bg-brand-dark border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-orange tracking-tight">Joyotri</span>
        </div>

        {/* Location Selector - hidden on very small screens */}
        <button className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
          <MapPin size={18} className="text-brand-orange" />
          <span>Deliver to: Dhaka</span>
          <span className="text-xs ml-1">▼</span>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative hidden sm:block">
          <input 
            type="text" 
            placeholder="Search for milk, rice, eggs..." 
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all dark:text-gray-100"
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors" aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors hidden sm:block" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          
          <button className="text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors relative" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          
          <button className="text-gray-600 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange transition-colors" aria-label="Account">
            <User size={20} />
          </button>
        </div>
      </div>
      
      {/* Mobile Search - visible only on small screens */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for groceries..." 
            className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all dark:text-gray-100"
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
