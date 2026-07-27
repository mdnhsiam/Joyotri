import { NavLink } from 'react-router-dom';
import { categories } from '../data/categories';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Full-screen backdrop — always used, all screen sizes */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen?.(false)}
      />

      {/* Sidebar drawer — fixed overlay, never pushes content */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-white dark:bg-brand-dark border-r border-gray-200 dark:border-gray-800 z-50 overflow-y-auto no-scrollbar shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
            All Categories
          </h3>
          <button 
            onClick={() => setIsOpen?.(false)} 
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Category Links */}
        <nav className="py-4 px-4 space-y-1">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.slug}`}
              onClick={() => setIsOpen?.(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-brand-orange/10 text-brand-orange font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium">{cat.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

