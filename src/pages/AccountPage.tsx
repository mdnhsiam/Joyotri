import { useState } from 'react';
import { Package, MapPin, Heart, Settings, LogOut, ChevronRight, Eye } from 'lucide-react';
import { orders } from '../data/orders';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const renderContent = () => {
    if (activeTab === 'orders') {
      if (selectedOrder) {
        const order = orders.find(o => o.id === selectedOrder);
        if (!order) return null;

        return (
          <div>
            <button onClick={() => setSelectedOrder(null)} className="text-brand-orange font-bold text-sm mb-6 hover:underline flex items-center gap-1">
              &larr; Back to all orders
            </button>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Order {order.id}</h2>
                <p className="text-gray-500 text-sm mt-1">Placed on {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                order.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {order.status}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between relative">
                <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                {['Placed', 'Packed', 'Out for Delivery', 'Delivered'].map((step, idx) => {
                  const isCompleted = ['Delivered'].includes(order.status) || 
                                     (order.status === 'Out for Delivery' && idx < 3) ||
                                     (order.status === 'Packed' && idx < 2) ||
                                     (order.status === 'Processing' && idx === 0);
                  return (
                    <div key={step} className="flex flex-col items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isCompleted ? 'bg-brand-orange text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                        {idx + 1}
                      </div>
                      <span className={`text-xs font-medium ${isCompleted ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>{step}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Items */}
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Items in your order</h3>
            <div className="space-y-4 mb-8">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">৳{item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Delivery Details</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{order.deliveryAddress}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 block mb-1">Payment Method</span>
                  <span className="font-bold text-gray-900 dark:text-white">{order.paymentMethod}</span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between"><span>Subtotal</span><span>৳{order.total - 50}</span></div>
                  <div className="flex justify-between"><span>Delivery Fee</span><span>৳50</span></div>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                  <span>Total</span><span className="text-brand-orange">৳{order.total}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }

      return (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Orders</h2>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-lg text-gray-900 dark:text-white">{order.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>{order.status}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{new Date(order.date).toLocaleDateString()} • {order.items.length} items</div>
                  <div className="font-bold text-gray-900 dark:text-white">Total: ৳{order.total}</div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border-2 border-brand-orange text-brand-orange rounded-xl font-bold hover:bg-brand-orange hover:text-white transition-colors text-sm">
                    Reorder
                  </button>
                  <button onClick={() => setSelectedOrder(order.id)} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm flex items-center gap-2">
                    <Eye size={16} /> Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="py-20 text-center text-gray-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 capitalize">{activeTab.replace('-', ' ')}</h2>
        <p>This section is under construction.</p>
      </div>
    );
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Account Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm sticky top-24">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center font-black text-2xl">
                J
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">John Doe</h3>
                <p className="text-gray-500 text-sm">john@example.com</p>
              </div>
            </div>

            <nav className="space-y-2">
              <button onClick={() => {setActiveTab('orders'); setSelectedOrder(null);}} className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${activeTab === 'orders' ? 'bg-brand-orange/10 text-brand-orange font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                <div className="flex items-center gap-3"><Package size={18} /> My Orders</div>
                <ChevronRight size={16} className={activeTab === 'orders' ? 'opacity-100' : 'opacity-0'} />
              </button>
              <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${activeTab === 'addresses' ? 'bg-brand-orange/10 text-brand-orange font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                <div className="flex items-center gap-3"><MapPin size={18} /> Saved Addresses</div>
                <ChevronRight size={16} className={activeTab === 'addresses' ? 'opacity-100' : 'opacity-0'} />
              </button>
              <button onClick={() => setActiveTab('wishlist')} className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${activeTab === 'wishlist' ? 'bg-brand-orange/10 text-brand-orange font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                <div className="flex items-center gap-3"><Heart size={18} /> Wishlist</div>
                <ChevronRight size={16} className={activeTab === 'wishlist' ? 'opacity-100' : 'opacity-0'} />
              </button>
              <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${activeTab === 'settings' ? 'bg-brand-orange/10 text-brand-orange font-bold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                <div className="flex items-center gap-3"><Settings size={18} /> Profile Settings</div>
                <ChevronRight size={16} className={activeTab === 'settings' ? 'opacity-100' : 'opacity-0'} />
              </button>
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
              <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors font-bold">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
