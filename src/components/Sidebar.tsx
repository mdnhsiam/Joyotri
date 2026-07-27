import { NavLink } from 'react-router-dom';
import { categories } from '../data/categories';
import { X, Gift, Tag, Heart, Star, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Full-screen backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen?.(false)}
      />

      {/* Sidebar drawer */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-white dark:bg-brand-dark z-50 overflow-y-auto no-scrollbar shadow-2xl transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Rewards Header */}
        <div className="bg-gradient-to-r from-brand-orange to-orange-500 px-5 py-4 flex items-center justify-between">
          <div className="text-white">
            <div className="text-xs font-medium opacity-80">Joyotri Gold</div>
            <div className="text-lg font-bold">0 Points</div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors">
            Get Discounts
          </button>
          <button 
            onClick={() => setIsOpen?.(false)} 
            className="text-white/80 hover:text-white transition-colors ml-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Links */}
        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 space-y-1">
          {[
            { icon: Tag, label: 'Coupons', color: 'text-yellow-500' },
            { icon: Gift, label: 'Offers', color: 'text-green-500' },
            { icon: Heart, label: 'Favourites', color: 'text-red-500' },
            { icon: Star, label: 'Popular', color: 'text-brand-orange' },
          ].map((item) => (
            <button 
              key={item.label}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <item.icon size={18} className={item.color} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Category Header */}
        <div className="px-6 pt-4 pb-2">
          <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            All Categories
          </h3>
        </div>
        
        {/* Category Links */}
        <nav className="px-4 pb-6 space-y-0.5 flex-1">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.slug}`}
              onClick={() => setIsOpen?.(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-brand-orange/10 text-brand-orange font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </div>
              <ChevronRight size={14} className="text-gray-400" />
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
