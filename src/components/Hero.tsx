import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-orange-50 dark:bg-brand-dark overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-brand-orange/20 dark:bg-brand-orange/10 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] rounded-full bg-brand-yellow/20 dark:bg-brand-yellow/10 blur-[80px]"></div>
      
      <div className="w-full px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 w-full space-y-8 text-center lg:text-left pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange font-semibold text-sm mx-auto lg:mx-0"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              #1 Grocery Delivery in Dhaka
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Skip the queue. <br/>
              Get groceries in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
                minutes.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Farm-fresh produce, pantry essentials, and daily needs delivered directly to your door before you even realize you're out.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_8px_30px_rgb(232,100,28,0.3)] hover:shadow-[0_8px_30px_rgb(232,100,28,0.5)] hover:-translate-y-1">
                <ShoppingBag size={20} />
                Start Shopping
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange px-8 py-4 rounded-full font-bold text-lg transition-colors border border-gray-200 dark:border-gray-700 shadow-sm">
                View Offers <ArrowRight size={20} />
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start border-t border-gray-200 dark:border-gray-800/50 mt-8"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 object-cover" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                  +2k
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1 text-brand-yellow mb-0.5 justify-center sm:justify-start">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                Trusted by 50,000+ families
              </div>
            </motion.div>
          </div>
          
          {/* Right Content - Visuals */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative h-[400px] sm:h-[500px] mt-8 lg:mt-0">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000" 
                alt="Fresh colorful vegetables" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Floating Element 1 - Delivery Time */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="absolute -bottom-6 -left-2 sm:-left-12 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Delivery Time</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">15-30 Mins</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Quality */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
              className="absolute -top-6 -right-2 sm:-right-10 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <ShieldCheck size={20} />
              </div>
              <div className="pr-2">
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight">100% Fresh</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Quality Assured</p>
              </div>
            </motion.div>
            
            {/* Floating Element 3 - Mini Product */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
              className="absolute top-1/2 -right-4 sm:-right-16 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl z-20 border border-gray-100 dark:border-gray-700 w-32 hidden sm:block"
            >
              <div className="h-24 rounded-xl overflow-hidden mb-2">
                <img src="https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&q=80&w=200" alt="Bananas" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-bold text-gray-900 dark:text-white px-1 truncate">Organic Bananas</p>
              <div className="flex justify-between items-center px-1 mt-1 pb-1">
                <p className="text-xs font-bold text-brand-orange">৳80</p>
                <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px]">1L</div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
