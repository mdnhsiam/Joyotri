import { Apple, Play } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-brand-orange rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="flex-1 p-8 md:p-16 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get the Joyotri App
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md mx-auto md:mx-0">
                Download our app for the fastest ordering experience, exclusive deals, and real-time order tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl transition-colors">
                  <Apple size={28} />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl transition-colors">
                  <Play size={24} className="fill-white" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center items-end pt-8 md:pt-16 hidden sm:flex">
              {/* Mockup visualization using CSS and a generic image */}
              <div className="w-64 h-[400px] bg-white rounded-t-3xl border-8 border-gray-900 shadow-2xl relative overflow-hidden transform translate-y-8">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl w-32 mx-auto z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400" 
                  alt="App interface" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-white font-bold text-xl">Order placed!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
