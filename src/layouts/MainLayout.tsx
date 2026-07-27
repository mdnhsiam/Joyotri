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
  // Sidebar starts closed; it's an overlay drawer, not a layout column
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

      {/* Sidebar is a fixed overlay — completely independent of content flow */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main content always takes full width */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
