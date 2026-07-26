import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
}

export default function MainLayout({ isDarkMode, toggleTheme, cartCount }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} cartCount={cartCount} />
      
      <div className="flex flex-1 container mx-auto">
        <Sidebar />
        
        <main className="flex-1 w-full overflow-hidden bg-white/50 dark:bg-gray-900/50">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
