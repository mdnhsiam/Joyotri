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
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen?.(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] bg-white dark:bg-brand-dark border-r border-gray-200 dark:border-gray-800 z-50 overflow-y-auto no-scrollbar shadow-2xl lg:shadow-none transition-all duration-300 flex-shrink-0
        ${isOpen ? 'w-64 translate-x-0 opacity-100' : 'w-0 -translate-x-full opacity-0 pointer-events-none'}
      `}>
        <div className="py-6 px-4 w-64">
          <div className="flex items-center justify-between mb-4 px-3">
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              All Categories
            </h3>
            {/* Close button for mobile */}
            <button onClick={() => setIsOpen?.(false)} className="lg:hidden text-gray-400 hover:text-brand-orange">
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-1">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.slug}`}
                onClick={() => setIsOpen?.(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? 'bg-brand-orange/10 text-brand-orange font-bold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm">{cat.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
