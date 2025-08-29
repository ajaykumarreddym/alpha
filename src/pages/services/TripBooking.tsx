import React, { useState } from 'react';
import { Plus, MapPin, Users, Clock, Car } from 'lucide-react';

const TripBooking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('routes');

  const stats = [
    { name: 'Active Routes', value: '12', icon: MapPin, color: 'bg-blue-500' },
    { name: 'Bookings Today', value: '45', icon: Users, color: 'bg-green-500' },
    { name: 'Revenue Today', value: '₹12,300', icon: Car, color: 'bg-purple-500' },
    { name: 'Scheduled Trips', value: '8', icon: Clock, color: 'bg-orange-500' }
  ];

  const routes = [
    {
      id: 'RT001',
      name: 'Bengaluru to Mysuru',
      distance: '150 km',
      duration: '3 hours',
      price: 450,
      seats: 25,
      available: 18,
      status: 'Active',
      schedule: ['06:00', '09:00', '12:00', '15:00', '18:00']
    },
    {
      id: 'RT002',
      name: 'Bengaluru to Coorg',
      distance: '220 km',
      duration: '4.5 hours',
      price: 650,
      seats: 30,
      available: 12,
      status: 'Active',
      schedule: ['07:00', '14:00']
    },
    {
      id: 'RT003',
      name: 'Bengaluru to Ooty',
      distance: '280 km',
      duration: '6 hours',
      price: 850,
      seats: 35,
      available: 0,
      status: 'Full',
      schedule: ['06:30', '13:30']
    }
  ];

  const bookings = [
    {
      id: '#TB-2024-001',
      customer: 'Sarah Smith',
      route: 'Bengaluru to Mysuru',
      passengers: 2,
      seats: 'A1, A2',
      departure: '2024-01-15 09:00',
      amount: '₹900',
      status: 'Confirmed'
    },
    {
      id: '#TB-2024-002',
      customer: 'Mike Johnson',
      route: 'Bengaluru to Coorg',
      passengers: 4,
      seats: 'B1, B2, B3, B4',
      departure: '2024-01-15 14:00',
      amount: '₹2,600',
      status: 'In Progress'
    },
    {
      id: '#TB-2024-003',
      customer: 'Emily Davis',
      route: 'Bengaluru to Ooty',
      passengers: 1,
      seats: 'C5',
      departure: '2024-01-16 06:30',
      amount: '₹850',
      status: 'Pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Full': return 'bg-red-100 text-red-800';
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Trip Booking Management
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage routes, schedules, and passenger bookings
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Route
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
              { id: 'routes', name: 'Route Management' },
              { id: 'bookings', name: 'Trip Bookings' },
              { id: 'schedule', name: 'Trip Schedule' },
              { id: 'vehicles', name: 'Vehicle Management' }
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
          {activeTab === 'routes' && (
            <div className="space-y-6">
              <div className="grid gap-6">
                {routes.map((route) => (
                  <div key={route.id} className="bg-gray-50 rounded-lg p-6 border">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-100 p-2 rounded-md">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{route.name}</h3>
                            <p className="text-sm text-gray-500">{route.distance} • {route.duration}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Price per seat</p>
                            <p className="text-lg font-semibold text-gray-900">₹{route.price}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Total Seats</p>
                            <p className="text-lg font-semibold text-gray-900">{route.seats}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Available</p>
                            <p className="text-lg font-semibold text-gray-900">{route.available}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Status</p>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(route.status)}`}>
                              {route.status}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-500 mb-2">Daily Schedule</p>
                          <div className="flex flex-wrap gap-2">
                            {route.schedule.map((time, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {time}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="ml-6 flex flex-col space-y-2">
                        <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-md hover:bg-indigo-200">
                          Edit Route
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200">
                          View Bookings
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Trip Bookings</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Booking ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Passengers
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Departure
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
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {booking.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.route}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.passengers} ({booking.seats})
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(booking.departure).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {booking.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="text-center py-12">
              <Clock className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Trip Schedule Management</h3>
              <p className="mt-1 text-sm text-gray-500">Manage daily trip schedules and timing</p>
            </div>
          )}

          {activeTab === 'vehicles' && (
            <div className="text-center py-12">
              <Car className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Vehicle Management</h3>
              <p className="mt-1 text-sm text-gray-500">Manage your fleet of vehicles for trip services</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripBooking;
