import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DailyNecessities() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daily Necessities Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200/50 dark:border-green-800/30 p-8 flex flex-col justify-between min-h-[280px]">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <ShoppingBag size={24} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Shop your daily necessities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-sm mb-6">
                Shop from our popular categories. Explore special offers and receive grocery on your doorstep within 30 minutes.
              </p>
              <Link 
                to="/category/fruits-veg" 
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md shadow-green-600/20"
              >
                Browse Categories <ArrowRight size={16} />
              </Link>
            </div>
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-green-200/40 dark:bg-green-800/20 rounded-full -mr-16 -mb-16 blur-2xl" />
          </div>

          {/* Why Choose Joyotri Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200/50 dark:border-orange-800/30 p-8 min-h-[280px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Joyotri?
              </h3>
              <div className="space-y-4">
                {[
                  { emoji: '🚀', text: 'Express 30-minute delivery' },
                  { emoji: '🥬', text: '100% fresh & quality guaranteed' },
                  { emoji: '💰', text: 'Best prices in Dhaka' },
                  { emoji: '🔒', text: 'Secure payment — bKash, Nagad, Card' },
                  { emoji: '🎁', text: 'Daily deals & cashback rewards' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-orange-200/40 dark:bg-orange-800/20 rounded-full -mr-16 -mb-16 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
