import React, { useState } from 'react';
import { Plus, Wrench, Phone, Clock, DollarSign, User } from 'lucide-react';

const Handyman: React.FC = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const stats = [
    { name: 'Service Requests', value: '34', icon: Wrench, color: 'bg-blue-500' },
    { name: 'Pending Calls', value: '8', icon: Phone, color: 'bg-orange-500' },
    { name: 'Revenue Today', value: '₹5,980', icon: DollarSign, color: 'bg-purple-500' },
    { name: 'Active Technicians', value: '12', icon: User, color: 'bg-green-500' }
  ];

  const serviceRequests = [
    {
      id: '#HM-2024-001',
      customer: 'Mike Johnson',
      service: 'Plumbing',
      description: 'Kitchen sink repair - water leakage',
      location: '456 Brigade Road, Bengaluru',
      priority: 'urgent',
      estimatedCost: '₹1,500-3,000',
      callScheduled: '2024-01-15 16:00',
      status: 'Call Pending',
      phone: '+91 76543 21098',
      images: 2
    },
    {
      id: '#HM-2024-002',
      customer: 'Sarah Wilson',
      service: 'Electrical',
      description: 'Fan installation in bedroom',
      location: '789 Koramangala, Bengaluru',
      priority: 'normal',
      estimatedCost: '₹800-1,500',
      callScheduled: '2024-01-15 14:30',
      status: 'Quote Provided',
      phone: '+91 98765 43210',
      images: 1
    },
    {
      id: '#HM-2024-003',
      customer: 'David Brown',
      service: 'Carpentry',
      description: 'Cabinet door repair and alignment',
      location: '123 Whitefield, Bengaluru',
      priority: 'normal',
      estimatedCost: '₹1,200-2,500',
      callScheduled: '2024-01-15 18:00',
      status: 'Scheduled',
      phone: '+91 87654 32109',
      images: 3
    }
  ];

  const serviceCategories = [
    {
      name: 'Plumbing',
      basePrice: '₹500-2,000',
      requests: 12,
      technicians: 4,
      description: 'Pipes, faucets, drainage, water heaters'
    },
    {
      name: 'Electrical',
      basePrice: '₹300-1,500',
      requests: 8,
      technicians: 3,
      description: 'Wiring, switches, fans, appliance installation'
    },
    {
      name: 'Carpentry',
      basePrice: '₹800-3,000',
      requests: 6,
      technicians: 2,
      description: 'Furniture repair, door/window fixing'
    },
    {
      name: 'Painting',
      basePrice: '₹1,000-5,000',
      requests: 4,
      technicians: 2,
      description: 'Wall painting, touch-ups, exterior painting'
    },
    {
      name: 'AC Service',
      basePrice: '₹400-1,200',
      requests: 3,
      technicians: 1,
      description: 'AC cleaning, gas filling, installation'
    },
    {
      name: 'Appliance Repair',
      basePrice: '₹600-2,500',
      requests: 1,
      technicians: 1,
      description: 'Washing machine, refrigerator, microwave'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Call Pending': return 'bg-orange-100 text-orange-800';
      case 'Quote Provided': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Handyman Services
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage service requests, technician calls, and quotes
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
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
              { id: 'requests', name: 'Service Requests' },
              { id: 'categories', name: 'Service Categories' },
              { id: 'technicians', name: 'Technician Management' },
              { id: 'pricing', name: 'Pricing Guide' }
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
          {activeTab === 'requests' && (
            <div className="space-y-6">
              {serviceRequests.map((request) => (
                <div key={request.id} className={`bg-white border rounded-lg p-6 hover:shadow-md transition-shadow ${getPriorityColor(request.priority)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-orange-100 p-2 rounded-md">
                          <Wrench className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{request.id}</h3>
                          <p className="text-sm text-gray-500">{request.customer} • {request.service}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Service Description</p>
                          <p className="text-sm text-gray-900 mt-1">{request.description}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Location</p>
                          <p className="text-sm text-gray-900 mt-1">{request.location}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Estimated Cost</p>
                          <p className="text-lg font-semibold text-gray-900">{request.estimatedCost}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Call Scheduled</p>
                          <p className="text-sm text-gray-900">{new Date(request.callScheduled).toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Customer Phone</p>
                          <p className="text-sm text-gray-900">{request.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                          <span className="text-sm text-gray-500">
                            {request.images} image{request.images !== 1 ? 's' : ''} attached
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                            <Phone className="h-4 w-4 mr-1" />
                            Call Customer
                          </button>
                          <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                      <div className="bg-blue-100 p-2 rounded-md">
                        <Wrench className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-500">Base Price Range</span>
                        <span className="text-sm font-semibold text-gray-900">{category.basePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-500">Active Requests</span>
                        <span className="text-sm font-semibold text-gray-900">{category.requests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-500">Available Technicians</span>
                        <span className="text-sm font-semibold text-gray-900">{category.technicians}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200">
                        Manage Category
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technicians' && (
            <div className="text-center py-12">
              <User className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Technician Management</h3>
              <p className="mt-1 text-sm text-gray-500">Manage your team of service technicians</p>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="text-center py-12">
              <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Pricing Guide</h3>
              <p className="mt-1 text-sm text-gray-500">Set pricing guidelines and estimates for services</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Handyman;
