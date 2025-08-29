import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, Laptop, TrendingUp, ShoppingCart, Users } from 'lucide-react';

const Electronics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const stats = [
    { name: 'Total Products', value: '482', icon: Laptop, color: 'bg-cyan-500' },
    { name: 'Orders Today', value: '56', icon: ShoppingCart, color: 'bg-green-500' },
    { name: 'Revenue Today', value: '₹1,25,000', icon: TrendingUp, color: 'bg-purple-500' },
    { name: 'Active Customers', value: '189', icon: Users, color: 'bg-orange-500' }
  ];

  const products = [
    {
      id: 'ELEC001',
      name: 'QuantumBook Pro 15"',
      category: 'Laptops',
      brand: 'Quantum',
      price: 145000,
      stock: 25,
      status: 'In Stock',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/60x60/94a3b8/ffffff?text=Laptop'
    },
    {
      id: 'ELEC002',
      name: 'Galaxy S25 Ultra',
      category: 'Smartphones',
      brand: 'Stellar',
      price: 98000,
      stock: 8,
      status: 'Low Stock',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/60x60/64748b/ffffff?text=Phone'
    },
    {
      id: 'ELEC003',
      name: 'SoundWave Buds Pro',
      category: 'Audio',
      brand: 'Echo',
      price: 12500,
      stock: 0,
      status: 'Out of Stock',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/60x60/475569/ffffff?text=Buds'
    },
    {
      id: 'ELEC004',
      name: 'Vision 4K Smart TV 55"',
      category: 'Televisions',
      brand: 'Aura',
      price: 65000,
      stock: 32,
      status: 'In Stock',
      image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/60x60/334155/ffffff?text=TV'
    }
  ];

  const recentOrders = [
    {
      id: '#ELEC-2025-001',
      customer: 'Ravi Kumar',
      items: 'QuantumBook Pro 15"',
      amount: '₹1,45,000',
      status: 'Processing',
      time: '1 hour ago'
    },
    {
      id: '#ELEC-2025-002',
      customer: 'Priya Sharma',
      items: 'Galaxy S25 Ultra + 2 more',
      amount: '₹1,15,000',
      status: 'Delivered',
      time: '4 hours ago'
    },
    {
      id: '#ELEC-2025-003',
      customer: 'Amit Singh',
      items: 'Vision 4K Smart TV 55"',
      amount: '₹65,000',
      status: 'Shipped',
      time: '8 hours ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Electronics Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your electronics inventory, orders, and brands
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`${stat.color} p-3 rounded-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { id: 'inventory', name: 'Inventory Management' },
              { id: 'orders', name: 'Electronics Orders' },
              { id: 'brands', name: 'Brands' },
              { id: 'offers', name: 'Offers & Deals' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Search products..."
                    />
                  </div>
                </div>
                <select className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Brands</option>
                  <option>Quantum</option>
                  <option>Stellar</option>
                  <option>Echo</option>
                  <option>Aura</option>
                </select>
              </div>

              {/* Products Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Brand & Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img className="h-10 w-10 rounded-md object-cover" src={product.image} alt={product.name} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.brand}</div>
                          <div className="text-sm text-gray-500">{product.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {product.stock} units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Electronics Orders</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Items
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {order.items}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'brands' && (
            <div className="text-center py-12">
              <Laptop className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Brand Management</h3>
              <p className="mt-1 text-sm text-gray-500">Manage product brands and partnerships</p>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Brand
                </button>
              </div>
            </div>
          )}

          {activeTab === 'offers' && (
            <div className="text-center py-12">
              <TrendingUp className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Offers & Deals</h3>
              <p className="mt-1 text-sm text-gray-500">Manage promotional offers and special deals</p>
              <div className="mt-6">
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Offer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
