import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, Package, Car, Wrench, ShoppingCart, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      name: 'Total Orders Today',
      value: '247',
      change: '+12%',
      changeType: 'increase',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      name: 'Active Customers',
      value: '1,429',
      change: '+5.4%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      name: 'Revenue Today',
      value: '₹45,680',
      change: '+8.2%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      name: 'Pending Orders',
      value: '23',
      change: '-3.1%',
      changeType: 'decrease',
      icon: TrendingDown,
      color: 'bg-orange-500'
    }
  ];

  const serviceStats = [
    { name: 'Grocery', orders: 89, revenue: 18500, icon: ShoppingCart, color: 'bg-emerald-500' },
    { name: 'Trip Booking', orders: 45, revenue: 12300, icon: MapPin, color: 'bg-blue-500' },
    { name: 'Car Rental', orders: 12, revenue: 8900, icon: Car, color: 'bg-indigo-500' },
    { name: 'Handyman', orders: 34, revenue: 5980, icon: Wrench, color: 'bg-amber-500' }
  ];

  const orderData = [
    { name: 'Mon', grocery: 65, trips: 28, rentals: 8, handyman: 18 },
    { name: 'Tue', grocery: 59, trips: 32, rentals: 12, handyman: 22 },
    { name: 'Wed', grocery: 80, trips: 25, rentals: 6, handyman: 15 },
    { name: 'Thu', grocery: 81, trips: 35, rentals: 15, handyman: 28 },
    { name: 'Fri', grocery: 78, trips: 40, rentals: 18, handyman: 32 },
    { name: 'Sat', grocery: 95, trips: 52, rentals: 22, handyman: 45 },
    { name: 'Sun', grocery: 89, trips: 45, rentals: 12, handyman: 34 }
  ];

  const pieData = [
    { name: 'Grocery', value: 45, color: '#10b981' },
    { name: 'Trip Booking', value: 25, color: '#3b82f6' },
    { name: 'Handyman', value: 20, color: '#f59e0b' },
    { name: 'Car Rental', value: 10, color: '#6366f1' }
  ];

  const recentOrders = [
    { id: '#ORD-2024-001', customer: 'John Doe', service: 'Grocery', status: 'Delivered', amount: '₹1,250', time: '2 hours ago' },
    { id: '#ORD-2024-002', customer: 'Sarah Smith', service: 'Trip Booking', status: 'In Progress', amount: '₹850', time: '3 hours ago' },
    { id: '#ORD-2024-003', customer: 'Mike Johnson', service: 'Handyman', status: 'Scheduled', amount: '₹2,100', time: '4 hours ago' },
    { id: '#ORD-2024-004', customer: 'Emily Davis', service: 'Car Rental', status: 'Active', amount: '₹3,500', time: '5 hours ago' },
    { id: '#ORD-2024-005', customer: 'David Wilson', service: 'Grocery', status: 'Processing', amount: '₹680', time: '6 hours ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-purple-100 text-purple-800';
      case 'Processing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your services today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
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
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.changeType === 'increase' ? (
                            <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                          )}
                          <span className="ml-1">{stat.change}</span>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Performance Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceStats.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`${service.color} p-3 rounded-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500">{service.name}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{service.orders} orders</dd>
                      <dd className="text-sm text-gray-600">₹{service.revenue.toLocaleString()}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Chart */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Orders by Service</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="grocery" stackId="a" fill="#10b981" />
              <Bar dataKey="trips" stackId="a" fill="#3b82f6" />
              <Bar dataKey="rentals" stackId="a" fill="#6366f1" />
              <Bar dataKey="handyman" stackId="a" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {pieData.map((entry) => (
              <div key={entry.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                <span className="text-sm text-gray-600">{entry.name}: {entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
        </div>
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
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.amount}
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
    </div>
  );
};

export default Dashboard;
