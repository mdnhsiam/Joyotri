import { MapPin, Mail, Phone, Globe, Camera, MessageCircle, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-brand-orange tracking-tight">Joyotri</div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Your daily essentials, delivered fast. We bring the freshest groceries right to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white transition-colors">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">About Joyotri</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Delivery Information</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors text-sm">Return Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">123 Grocery Avenue, Gulshan 1, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">support@joyotri.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Joyotri. All rights reserved.
          </p>
          
          <div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Generic Payment Badges */}
            <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-[10px] font-bold text-gray-800 dark:text-white">bKash</div>
            <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-[10px] font-bold text-gray-800 dark:text-white">Visa</div>
            <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-[10px] font-bold text-gray-800 dark:text-white">MC</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
