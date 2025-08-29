import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const revenueData = [
    { name: 'Jan', grocery: 45000, trips: 28000, rentals: 15000, handyman: 12000 },
    { name: 'Feb', grocery: 52000, trips: 32000, rentals: 18000, handyman: 15000 },
    { name: 'Mar', grocery: 48000, trips: 35000, rentals: 22000, handyman: 18000 },
    { name: 'Apr', grocery: 61000, trips: 42000, rentals: 25000, handyman: 22000 },
    { name: 'May', grocery: 55000, trips: 38000, rentals: 20000, handyman: 25000 },
    { name: 'Jun', grocery: 67000, trips: 45000, rentals: 28000, handyman: 28000 }
  ];

  const orderTrendsData = [
    { name: 'Week 1', orders: 120, customers: 85 },
    { name: 'Week 2', orders: 145, customers: 92 },
    { name: 'Week 3', orders: 132, customers: 88 },
    { name: 'Week 4', orders: 168, customers: 105 },
    { name: 'Week 5', orders: 155, customers: 98 },
    { name: 'Week 6', orders: 178, customers: 112 },
    { name: 'Week 7', orders: 192, customers: 125 }
  ];

  const serviceDistribution = [
    { name: 'Grocery', value: 45, color: '#10b981' },
    { name: 'Trip Booking', value: 25, color: '#3b82f6' },
    { name: 'Handyman', value: 20, color: '#f59e0b' },
    { name: 'Car Rental', value: 10, color: '#6366f1' }
  ];

  const topMetrics = [
    {
      name: 'Total Revenue',
      value: '₹2,45,680',
      change: '+12.5%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      name: 'Total Orders',
      value: '1,847',
      change: '+8.2%',
      changeType: 'increase',
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      name: 'Customer Growth',
      value: '342',
      change: '+15.3%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      name: 'Avg Order Value',
      value: '₹1,335',
      change: '-2.1%',
      changeType: 'decrease',
      icon: ShoppingCart,
      color: 'bg-orange-500'
    }
  ];

  const servicePerformance = [
    {
      service: 'Grocery',
      orders: 856,
      revenue: 186500,
      growth: '+14.2%',
      avgOrderValue: 1250,
      customers: 423
    },
    {
      service: 'Trip Booking',
      orders: 452,
      revenue: 125300,
      growth: '+9.8%',
      avgOrderValue: 850,
      customers: 298
    },
    {
      service: 'Handyman',
      orders: 234,
      revenue: 89200,
      growth: '+22.5%',
      avgOrderValue: 2100,
      customers: 156
    },
    {
      service: 'Car Rental',
      orders: 89,
      revenue: 45600,
      growth: '+18.7%',
      avgOrderValue: 3500,
      customers: 67
    }
  ];

  const getGrowthColor = (growth: string) => {
    return growth.startsWith('+') ? 'text-green-600' : 'text-red-600';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Analytics & Reports
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Track performance across all your services
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="block px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`${metric.color} p-3 rounded-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{metric.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.changeType === 'increase' ? (
                            <TrendingUp className="self-center flex-shrink-0 h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="self-center flex-shrink-0 h-4 w-4 text-red-500" />
                          )}
                          <span className="ml-1">{metric.change}</span>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue by Service</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Area type="monotone" dataKey="grocery" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="trips" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="rentals" stackId="1" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
              <Area type="monotone" dataKey="handyman" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {serviceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {serviceDistribution.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm text-gray-600">{entry.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Trends */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Order & Customer Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={orderTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={3} />
            <Line type="monotone" dataKey="customers" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Service Performance Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Service Performance Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Order Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {servicePerformance.map((service) => (
                <tr key={service.service} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{service.service}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.orders.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(service.revenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getGrowthColor(service.growth)}`}>
                      {service.growth}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{service.avgOrderValue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.customers}
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

export default Analytics;
