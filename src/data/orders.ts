export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Packed' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
  total: number;
  items: OrderItem[];
  deliveryAddress: string;
  paymentMethod: string;
}

export const orders: Order[] = [
  {
    id: 'ORD-2026-8901',
    date: '2026-07-26T10:30:00Z',
    status: 'Processing',
    total: 890,
    deliveryAddress: 'Flat 4B, House 12, Road 5, Dhanmondi, Dhaka',
    paymentMethod: 'Cash on Delivery',
    items: [
      {
        productId: 'p3',
        name: 'Premium Beef (Bone-in)',
        quantity: 1,
        price: 750,
        image: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      {
        productId: 'p4',
        name: 'Farm Fresh Eggs',
        quantity: 1,
        price: 140,
        image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    ]
  },
  {
    id: 'ORD-2026-7742',
    date: '2026-07-20T14:15:00Z',
    status: 'Delivered',
    total: 370,
    deliveryAddress: 'Flat 4B, House 12, Road 5, Dhanmondi, Dhaka',
    paymentMethod: 'bKash',
    items: [
      {
        productId: 'p1',
        name: 'Fresh Red Apple',
        quantity: 1,
        price: 250,
        image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=100'
      },
      {
        productId: 'p2',
        name: 'Organic Bananas',
        quantity: 1,
        price: 120,
        image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=100'
      }
    ]
  }
];
