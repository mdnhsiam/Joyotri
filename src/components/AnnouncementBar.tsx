import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-orange text-white px-4 py-2 flex items-center justify-between text-sm font-medium">
      <div className="flex-1 text-center">
        Free delivery on orders over ৳500 | Order before 6PM for same-day delivery
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-white hover:text-brand-yellow transition-colors"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
