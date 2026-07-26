import { Zap, ShieldCheck, RefreshCcw, CreditCard } from 'lucide-react';

const trustFeatures = [
  { id: 1, title: 'Fast Delivery', desc: 'Get your groceries delivered in minutes', icon: Zap, color: 'text-brand-orange bg-brand-orange/10' },
  { id: 2, title: 'Fresh Guarantee', desc: 'Handpicked fresh produce every time', icon: ShieldCheck, color: 'text-green-500 bg-green-100 dark:bg-green-900/30' },
  { id: 3, title: 'Easy Returns', desc: 'Not satisfied? Return it at the door', icon: RefreshCcw, color: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30' },
  { id: 4, title: 'Secure Payment', desc: 'Multiple safe payment options available', icon: CreditCard, color: 'text-purple-500 bg-purple-100 dark:bg-purple-900/30' },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-white dark:bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map(feature => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
