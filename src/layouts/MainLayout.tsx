import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FloatingCart from '../components/FloatingCart';
import Footer from '../components/Footer';

interface MainLayoutProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  cartCount: number;
}

export default function MainLayout({ isDarkMode, toggleTheme, cartCount }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        cartCount={cartCount} 
        toggleSidebar={toggleSidebar} 
      />

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Floating cart widget — always visible */}
      <FloatingCart cartCount={cartCount} />

      <Footer />
    </div>
  );
}

