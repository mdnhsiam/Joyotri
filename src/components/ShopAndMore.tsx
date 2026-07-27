import { Award, Tag, Headphones } from 'lucide-react';

const cards = [
  {
    icon: Award,
    title: 'Shop & Earn Points',
    desc: 'The more you shop the more you earn — cash back, free shipping, exclusive offers and more. Discover the perks of Joyotri Gold membership.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-100 text-amber-600',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: Tag,
    title: 'Deal of the Day',
    desc: 'Stock up on your favorite groceries for less with our unbeatable deals! Don\'t miss out — limited stock available every day.',
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-100 text-rose-600',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600',
  },
  {
    icon: Headphones,
    title: 'Premium Care',
    desc: 'Too busy to place an order or handling order issues? No need to worry — we give you the option to take premium assistance anytime.',
    gradient: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-100 text-violet-600',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=600',
  },
];

export default function ShopAndMore() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Shop & Get More
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.title}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              {/* Text Content */}
              <div className="p-6 pb-4">
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                  <card.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
              
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
