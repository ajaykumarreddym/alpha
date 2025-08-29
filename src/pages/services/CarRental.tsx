import React, { useState } from 'react';
import { Plus, Car, Calendar, Users, DollarSign } from 'lucide-react';

const CarRental: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fleet');

  const stats = [
    { name: 'Total Vehicles', value: '24', icon: Car, color: 'bg-blue-500' },
    { name: 'Active Rentals', value: '12', icon: Users, color: 'bg-green-500' },
    { name: 'Revenue Today', value: '₹8,900', icon: DollarSign, color: 'bg-purple-500' },
    { name: 'Available Cars', value: '12', icon: Calendar, color: 'bg-orange-500' }
  ];

  const vehicles = [
    {
      id: 'CR001',
      name: 'Maruti Swift',
      type: 'Hatchback',
      fuel: 'Petrol',
      seats: 5,
      dailyRate: 1200,
      hourlyRate: 150,
      status: 'Available',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200.png',
      features: ['AC', 'GPS', 'Bluetooth', 'USB Charging']
    },
    {
      id: 'CR002',
      name: 'Honda City',
      type: 'Sedan',
      fuel: 'Petrol',
      seats: 5,
      dailyRate: 1800,
      hourlyRate: 220,
      status: 'Rented',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200.png',
      features: ['AC', 'GPS', 'Bluetooth', 'USB Charging', 'Sunroof']
    },
    {
      id: 'CR003',
      name: 'Toyota Innova',
      type: 'SUV',
      fuel: 'Diesel',
      seats: 7,
      dailyRate: 2500,
      hourlyRate: 300,
      status: 'Maintenance',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200.png',
      features: ['AC', 'GPS', 'Bluetooth', 'USB Charging', 'Captain Seats']
    }
  ];

  const rentals = [
    {
      id: '#CR-2024-001',
      customer: 'Emily Davis',
      vehicle: 'Maruti Swift',
      startDate: '2024-01-15',
      endDate: '2024-01-18',
      duration: '3 days',
      amount: '₹3,600',
      status: 'Active'
    },
    {
      id: '#CR-2024-002',
      customer: 'David Wilson',
      vehicle: 'Honda City',
      startDate: '2024-01-15',
      endDate: '2024-01-16',
      duration: '1 day',
      amount: '₹1,800',
      status: 'Completed'
    },
    {
      id: '#CR-2024-003',
      customer: 'Lisa Anderson',
      vehicle: 'Toyota Innova',
      startDate: '2024-01-16',
      endDate: '2024-01-20',
      duration: '4 days',
      amount: '₹10,000',
      status: 'Confirmed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Rented': return 'bg-blue-100 text-blue-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Confirmed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Car Rental Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your vehicle fleet and rental bookings
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
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
              { id: 'fleet', name: 'Fleet Management' },
              { id: 'rentals', name: 'Active Rentals' },
              { id: 'calendar', name: 'Availability Calendar' },
              { id: 'maintenance', name: 'Maintenance' }
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
          {activeTab === 'fleet' && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{vehicle.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(vehicle.status)}`}>
                          {vehicle.status}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-3">
                        {vehicle.type} • {vehicle.fuel} • {vehicle.seats} seats
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Daily Rate</p>
                          <p className="text-lg font-semibold text-gray-900">₹{vehicle.dailyRate}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Hourly Rate</p>
                          <p className="text-lg font-semibold text-gray-900">₹{vehicle.hourlyRate}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-500 mb-2">Features</p>
                        <div className="flex flex-wrap gap-1">
                          {vehicle.features.map((feature, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200">
                          Edit
                        </button>
                        <button className="flex-1 px-3 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rentals' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Current Rentals</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rental ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vehicle
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rentals.map((rental) => (
                      <tr key={rental.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {rental.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {rental.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {rental.vehicle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div>{rental.duration}</div>
                            <div className="text-xs text-gray-500">
                              {rental.startDate} to {rental.endDate}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {rental.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(rental.status)}`}>
                            {rental.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Availability Calendar</h3>
              <p className="mt-1 text-sm text-gray-500">View and manage vehicle availability calendar</p>
            </div>
          )}

          {activeTab === 'maintenance' && (
            <div className="text-center py-12">
              <Car className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Maintenance Schedule</h3>
              <p className="mt-1 text-sm text-gray-500">Track vehicle maintenance and service history</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarRental;
