import React, { useState } from 'react';
import { Search, Filter, Phone, Mail, MoreHorizontal, MapPin, ShoppingCart } from 'lucide-react';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Customers', count: 1429 },
    { id: 'active', name: 'Active', count: 892 },
    { id: 'inactive', name: 'Inactive', count: 537 },
    { id: 'premium', name: 'Premium', count: 145 },
    { id: 'new', name: 'New (30 days)', count: 89 }
  ];

  const customers = [
    {
      id: 'CUST-001',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 98765 43210',
      location: 'Koramangala, Bengaluru',
      joinDate: '2023-08-15',
      totalOrders: 45,
      totalSpent: 28500,
      lastOrder: '2024-01-14',
      status: 'Active',
      services: ['Grocery', 'Trip Booking'],
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40.png'
    },
    {
      id: 'CUST-002',
      name: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phone: '+91 87654 32109',
      location: 'Whitefield, Bengaluru',
      joinDate: '2023-11-22',
      totalOrders: 23,
      totalSpent: 15200,
      lastOrder: '2024-01-15',
      status: 'Premium',
      services: ['Grocery', 'Car Rental', 'Handyman'],
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40.png'
    },
    {
      id: 'CUST-003',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+91 76543 21098',
      location: 'Indiranagar, Bengaluru',
      joinDate: '2024-01-01',
      totalOrders: 3,
      totalSpent: 2800,
      lastOrder: '2024-01-12',
      status: 'New',
      services: ['Handyman'],
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40.png'
    },
    {
      id: 'CUST-004',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      phone: '+91 65432 10987',
      location: 'Brigade Road, Bengaluru',
      joinDate: '2023-06-10',
      totalOrders: 67,
      totalSpent: 42300,
      lastOrder: '2024-01-10',
      status: 'Premium',
      services: ['Grocery', 'Trip Booking', 'Car Rental'],
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40.png'
    },
    {
      id: 'CUST-005',
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+91 54321 09876',
      location: 'HSR Layout, Bengaluru',
      joinDate: '2023-03-18',
      totalOrders: 12,
      totalSpent: 8600,
      lastOrder: '2023-12-20',
      status: 'Inactive',
      services: ['Grocery'],
      avatar: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/40x40.png'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Premium': return 'bg-purple-100 text-purple-800';
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Grocery': return <ShoppingCart className="h-3 w-3" />;
      case 'Trip Booking': return <MapPin className="h-3 w-3" />;
      case 'Car Rental': return <div className="h-3 w-3 bg-indigo-500 rounded-sm"></div>;
      case 'Handyman': return <div className="h-3 w-3 bg-amber-500 rounded-sm"></div>;
      default: return <div className="h-3 w-3 bg-gray-500 rounded-sm"></div>;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Customer Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            View and manage all your customers across services
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-500 p-3 rounded-md">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Customers</dt>
                  <dd className="text-2xl font-semibold text-gray-900">1,429</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-500 p-3 rounded-md">
                  <div className="h-6 w-6 text-white font-bold flex items-center justify-center text-sm">A</div>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Customers</dt>
                  <dd className="text-2xl font-semibold text-gray-900">892</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-purple-500 p-3 rounded-md">
                  <div className="h-6 w-6 text-white font-bold flex items-center justify-center text-sm">P</div>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Premium Customers</dt>
                  <dd className="text-2xl font-semibold text-gray-900">145</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-orange-500 p-3 rounded-md">
                  <div className="h-6 w-6 text-white font-bold flex items-center justify-center text-sm">₹</div>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg. Customer Value</dt>
                  <dd className="text-2xl font-semibold text-gray-900">₹19,950</dd>
                </dl>
              </div>
            </div>
          </div>
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
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Button */}
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
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

      {/* Customers Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order History
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Services Used
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
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full object-cover" src={customer.avatar} alt={customer.name} />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {customer.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">{customer.totalOrders} orders</div>
                      <div className="text-gray-500">{formatCurrency(customer.totalSpent)} total</div>
                      <div className="text-gray-500">Last: {formatDate(customer.lastOrder)}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {customer.services.map((service, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {getServiceIcon(service)}
                          <span className="ml-1">{service}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
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
                <span className="font-medium">1,429</span> results
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

export default Customers;
