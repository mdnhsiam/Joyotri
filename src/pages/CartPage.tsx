import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function CartPage() {
  // Using dummy cart data based on our mock products
  const cartItems = [
    { product: products[0], quantity: 2 },
    { product: products[3], quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="py-20 px-4 text-center max-w-lg mx-auto">
        <div className="w-48 h-48 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-6xl">🛒</span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Looks like you haven't added anything to your cart yet. Discover fresh groceries and daily essentials!
        </p>
        <Link to="/" className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors inline-block shadow-lg shadow-brand-orange/30">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="p-6 hidden sm:grid grid-cols-12 gap-4 border-b border-gray-100 dark:border-gray-700 text-sm font-bold text-gray-500 dark:text-gray-400">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Subtotal</div>
            </div>
            
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 sm:col-span-6 flex gap-4 items-center">
                    <Link to={`/product/${item.product.id}`} className="w-20 h-20 shrink-0 bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                    </Link>
                    <div>
                      <Link to={`/product/${item.product.id}`} className="font-bold text-gray-900 dark:text-white hover:text-brand-orange transition-colors">
                        {item.product.name}
                      </Link>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.product.weight}</div>
                      <div className="text-brand-orange font-bold mt-1 sm:hidden">৳{item.product.price}</div>
                    </div>
                  </div>
                  
                  <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-center items-center">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-900 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
                      <button className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:text-brand-orange transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold dark:text-white text-sm">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:text-brand-orange transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button className="sm:hidden text-red-500 hover:text-red-600 p-2 bg-red-50 dark:bg-red-500/10 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-end items-center">
                    <span className="font-bold text-lg text-gray-900 dark:text-white hidden sm:block">
                      ৳{item.product.price * item.quantity}
                    </span>
                    <button className="hidden sm:block ml-4 text-red-500 hover:text-red-600 p-2 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/" className="text-brand-orange font-bold hover:underline flex items-center gap-2">
              &larr; Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-gray-900 dark:text-white">৳{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-medium text-gray-900 dark:text-white">৳{deliveryFee}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Total</span>
              <span className="text-3xl font-black text-brand-orange">৳{total}</span>
            </div>

            <div className="mb-6 relative">
              <input type="text" placeholder="Promo code" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-4 pr-24 focus:ring-brand-orange focus:border-brand-orange dark:text-white" />
              <button className="absolute right-2 top-2 bottom-2 bg-gray-900 dark:bg-gray-700 text-white px-4 rounded-lg text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                Apply
              </button>
            </div>

            <Link to="/checkout" className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 text-lg group">
              Proceed to Checkout
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
