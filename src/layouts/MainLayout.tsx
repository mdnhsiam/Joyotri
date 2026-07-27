import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
}

export default function MainLayout({ isDarkMode, toggleTheme, cartCount }: MainLayoutProps) {
  // Default to open on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        cartCount={cartCount} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div className="flex flex-1 container mx-auto relative overflow-hidden lg:overflow-visible">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <main className="flex-1 w-full bg-white/50 dark:bg-gray-900/50 min-h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
