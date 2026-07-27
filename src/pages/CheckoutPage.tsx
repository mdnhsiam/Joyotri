import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CreditCard, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const cartItems = [
    { product: products[0], quantity: 2 },
    { product: products[3], quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="py-20 px-4 text-center max-w-lg mx-auto">
        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Order Confirmed!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Thank you for shopping with Joyotri. Your order <span className="font-bold text-gray-900 dark:text-white">#ORD-2026-9912</span> has been placed successfully.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 mb-8 text-left">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">Estimated Delivery</h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <div className="font-bold text-lg text-brand-orange">Today, 4:00 PM - 6:00 PM</div>
              <div className="text-sm text-gray-500">To: Flat 4B, House 12, Road 5, Dhanmondi</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link to="/account" className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Track Order
          </Link>
          <Link to="/" className="flex-1 py-3 bg-brand-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/30">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        <Link to="/cart" className="hover:text-brand-orange">Cart</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-900 dark:text-gray-200 font-medium">Checkout</span>
      </div>

      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Checkout Steps */}
        <div className="flex-1 space-y-6">
          
          {/* Step 1: Address */}
          <div className={`bg-white dark:bg-gray-800 rounded-3xl border ${step === 1 ? 'border-brand-orange shadow-md' : 'border-gray-100 dark:border-gray-700'} p-6 sm:p-8 transition-all`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-brand-orange text-white' : 'bg-green-100 text-green-600'}`}>
                {step > 1 ? <Check size={20} /> : '1'}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex-1">Delivery Address</h2>
              {step > 1 && (
                <button onClick={() => setStep(1)} className="text-brand-orange text-sm font-bold hover:underline">Edit</button>
              )}
            </div>

            {step === 1 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <label className="border-2 border-brand-orange bg-brand-orange/5 rounded-xl p-4 cursor-pointer relative">
                    <input type="radio" name="address" className="absolute top-4 right-4 text-brand-orange focus:ring-brand-orange" defaultChecked />
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 dark:text-white">
                      <MapPin size={18} className="text-brand-orange" />
                      Home
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Flat 4B, House 12, Road 5, Dhanmondi, Dhaka 1205</p>
                  </label>
                  <label className="border-2 border-gray-200 dark:border-gray-700 hover:border-brand-orange/50 rounded-xl p-4 cursor-pointer relative transition-colors">
                    <input type="radio" name="address" className="absolute top-4 right-4 text-brand-orange focus:ring-brand-orange" />
                    <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 dark:text-white">
                      <MapPin size={18} className="text-gray-400" />
                      Office
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Level 8, Navana Tower, Gulshan 1, Dhaka 1212</p>
                  </label>
                </div>
                <button className="text-brand-orange font-bold text-sm mb-6 hover:underline">+ Add New Address</button>
                <div className="flex justify-end">
                  <button onClick={() => setStep(2)} className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                    Continue to Delivery Time
                  </button>
                </div>
              </div>
            ) : (
              <div className="pl-14 text-gray-600 dark:text-gray-400">
                <p>Flat 4B, House 12, Road 5, Dhanmondi, Dhaka 1205</p>
              </div>
            )}
          </div>

          {/* Step 2: Time Slot */}
          <div className={`bg-white dark:bg-gray-800 rounded-3xl border ${step === 2 ? 'border-brand-orange shadow-md' : 'border-gray-100 dark:border-gray-700'} p-6 sm:p-8 transition-all opacity-${step >= 2 ? '100' : '50'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-brand-orange text-white' : step > 2 ? 'bg-green-100 text-green-600' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                {step > 2 ? <Check size={20} /> : '2'}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex-1">Delivery Time</h2>
              {step > 2 && (
                <button onClick={() => setStep(2)} className="text-brand-orange text-sm font-bold hover:underline">Edit</button>
              )}
            </div>

            {step === 2 ? (
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Today</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <label className="border-2 border-brand-orange bg-brand-orange/5 text-brand-orange rounded-xl p-3 text-center cursor-pointer font-bold">
                    <input type="radio" name="time" className="hidden" defaultChecked />
                    4:00 PM - 6:00 PM
                  </label>
                  <label className="border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-orange/50 rounded-xl p-3 text-center cursor-pointer font-medium transition-colors">
                    <input type="radio" name="time" className="hidden" />
                    6:00 PM - 8:00 PM
                  </label>
                </div>
                
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 mt-6">Tomorrow</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <label className="border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-orange/50 rounded-xl p-3 text-center cursor-pointer font-medium transition-colors">
                    <input type="radio" name="time" className="hidden" />
                    8:00 AM - 10:00 AM
                  </label>
                  <label className="border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-brand-orange/50 rounded-xl p-3 text-center cursor-pointer font-medium transition-colors">
                    <input type="radio" name="time" className="hidden" />
                    10:00 AM - 12:00 PM
                  </label>
                </div>

                <div className="flex justify-end mt-8">
                  <button onClick={() => setStep(3)} className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </div>
            ) : step > 2 ? (
              <div className="pl-14 text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <Clock size={16} /> Today, 4:00 PM - 6:00 PM
              </div>
            ) : null}
          </div>

          {/* Step 3: Payment */}
          <div className={`bg-white dark:bg-gray-800 rounded-3xl border ${step === 3 ? 'border-brand-orange shadow-md' : 'border-gray-100 dark:border-gray-700'} p-6 sm:p-8 transition-all opacity-${step >= 3 ? '100' : '50'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step === 3 ? 'bg-brand-orange text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400'}`}>
                3
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Payment Method</h2>
            </div>

            {step === 3 && (
              <div className="space-y-4">
                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-200 dark:border-gray-700 hover:border-brand-orange/50'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="text-brand-orange focus:ring-brand-orange w-5 h-5" />
                  <div className="ml-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Cash on Delivery</div>
                      <div className="text-sm text-gray-500">Pay when you receive the order</div>
                    </div>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === 'bkash' ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-200 dark:border-gray-700 hover:border-brand-orange/50'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="text-brand-orange focus:ring-brand-orange w-5 h-5" />
                  <div className="ml-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center font-black text-pink-600">
                      bK
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">bKash</div>
                  </div>
                </label>

                <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-200 dark:border-gray-700 hover:border-brand-orange/50'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="text-brand-orange focus:ring-brand-orange w-5 h-5" />
                  <div className="ml-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <CreditCard size={20} />
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">Credit / Debit Card</div>
                  </div>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary (Sticky) */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-bold text-gray-500">{item.quantity}x</div>
                    <div className="text-sm text-gray-900 dark:text-white line-clamp-1">{item.product.name}</div>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">৳{item.product.price * item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-gray-600 dark:text-gray-300 mb-6 pb-6 border-b border-t pt-6 border-gray-100 dark:border-gray-700 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
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

            <button 
              onClick={handlePlaceOrder}
              disabled={step < 3}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg transition-all ${step === 3 ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-brand-orange/30' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}`}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
