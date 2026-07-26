export default function Hero() {
  return (
    <section className="bg-orange-50 dark:bg-gray-800/50 py-12 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Groceries delivered in <span className="text-brand-orange">minutes.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              Fresh produce, daily essentials, and more — delivered straight to your door. Fast, friendly, and trustworthy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-brand-orange/30">
                Start Shopping
              </button>
              <button className="bg-white dark:bg-gray-900 text-brand-orange border border-brand-orange/20 hover:border-brand-orange px-8 py-3 rounded-full font-medium transition-colors">
                View Offers
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {/* Using a placeholder food image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 md:aspect-video transform hover:-translate-y-2 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                alt="Fresh groceries" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-block bg-brand-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded mb-2">
                  Same Day Delivery
                </div>
                <div className="font-semibold text-lg drop-shadow-md">Guaranteed Freshness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
