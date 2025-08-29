import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, MoreHorizontal, Phone, Mail } from 'lucide-react';

const Orders: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', name: 'All Orders', count: 324 },
    { id: 'pending', name: 'Pending', count: 23 },
    { id: 'processing', name: 'Processing', count: 45 },
    { id: 'confirmed', name: 'Confirmed', count: 67 },
    { id: 'in-progress', name: 'In Progress', count: 89 },
    { id: 'completed', name: 'Completed', count: 78 },
    { id: 'cancelled', name: 'Cancelled', count: 22 }
  ];

  const orders = [
    {
      id: '#ORD-2024-001',
      customer: 'John Doe',
      service: 'Grocery',
      items: 'Rice, Dal, Vegetables +5 more',
      amount: '₹1,250',
      status: 'Delivered',
      priority: 'normal',
      orderTime: '2024-01-15 14:30',
      deliveryTime: '2024-01-15 16:45',
      phone: '+91 98765 43210',
      address: '123 MG Road, Bengaluru'
    },
    {
      id: '#ORD-2024-002',
      customer: 'Sarah Smith',
      service: 'Trip Booking',
      items: 'Bengaluru to Mysuru - 2 passengers',
      amount: '₹850',
      status: 'In Progress',
      priority: 'high',
      orderTime: '2024-01-15 13:15',
      deliveryTime: '2024-01-15 18:00',
      phone: '+91 87654 32109',
      address: 'Pick: Koramangala, Drop: Mysuru Palace'
    },
    {
      id: '#ORD-2024-003',
      customer: 'Mike Johnson',
      service: 'Handyman',
      items: 'Plumbing repair - Kitchen sink',
      amount: '₹2,100',
      status: 'Scheduled',
      priority: 'urgent',
      orderTime: '2024-01-15 12:00',
      deliveryTime: '2024-01-16 10:00',
      phone: '+91 76543 21098',
      address: '456 Brigade Road, Bengaluru'
    },
    {
      id: '#ORD-2024-004',
      customer: 'Emily Davis',
      service: 'Car Rental',
      items: 'Maruti Swift - 3 days',
      amount: '₹3,500',
      status: 'Active',
      priority: 'normal',
      orderTime: '2024-01-15 11:30',
      deliveryTime: '2024-01-18 11:30',
      phone: '+91 65432 10987',
      address: '789 Whitefield, Bengaluru'
    },
    {
      id: '#ORD-2024-005',
      customer: 'David Wilson',
      service: 'Grocery',
      items: 'Milk, Bread, Fruits +3 more',
      amount: '₹680',
      status: 'Processing',
      priority: 'normal',
      orderTime: '2024-01-15 10:45',
      deliveryTime: '2024-01-15 19:00',
      phone: '+91 54321 09876',
      address: '321 Indiranagar, Bengaluru'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-purple-100 text-purple-800';
      case 'Processing': return 'bg-orange-100 text-orange-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'border-l-4 border-red-500';
      case 'high': return 'border-l-4 border-orange-500';
      case 'normal': return 'border-l-4 border-green-500';
      default: return 'border-l-4 border-gray-300';
    }
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case 'Grocery': return 'bg-emerald-100 text-emerald-800';
      case 'Trip Booking': return 'bg-blue-100 text-blue-800';
      case 'Car Rental': return 'bg-indigo-100 text-indigo-800';
      case 'Handyman': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Order Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and track all orders across your services
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search orders, customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Button */}
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Status Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedFilter === filter.id
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {filter.name}
              <span className="ml-2 bg-white bg-opacity-50 rounded-full px-2 py-0.5 text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service & Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className={`hover:bg-gray-50 ${getPriorityColor(order.priority)}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">
                        Ordered: {new Date(order.orderTime).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        Due: {new Date(order.deliveryTime).toLocaleString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Phone className="h-3 w-3 mr-1" />
                        {order.phone}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {order.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getServiceColor(order.service)}`}>
                        {order.service}
                      </span>
                      <div className="text-sm text-gray-900 mt-1">{order.items}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">324</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
