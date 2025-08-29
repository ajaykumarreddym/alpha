import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, CreditCard, Truck, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General', icon: SettingsIcon },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'delivery', name: 'Delivery', icon: Truck },
    { id: 'integrations', name: 'Integrations', icon: Globe }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Settings
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Configure your platform settings and preferences
          </p>
        </div>
      </div>

      {/* Settings Layout */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Sidebar */}
          <div className="md:w-64 border-r border-gray-200">
            <nav className="space-y-1 p-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === tab.id
                        ? 'bg-indigo-100 text-indigo-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      activeTab === tab.id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">General Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">Basic platform configuration</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="ServiceHub Multi-Services"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Business Address</label>
                    <textarea
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="123 Business District, Bengaluru, Karnataka 560001"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="admin@servicehub.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      defaultValue="+91 80 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Asia/Kolkata (UTC+05:30)</option>
                      <option>Asia/Mumbai (UTC+05:30)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
                  <p className="mt-1 text-sm text-gray-500">Choose how you want to be notified</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">New Orders</h4>
                      <p className="text-sm text-gray-500">Get notified when new orders come in</p>
                    </div>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">SMS</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Order Updates</h4>
                      <p className="text-sm text-gray-500">Status changes for existing orders</p>
                    </div>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">SMS</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Customer Messages</h4>
                      <p className="text-sm text-gray-500">Direct messages from customers</p>
                    </div>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">SMS</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">System Alerts</h4>
                      <p className="text-sm text-gray-500">Technical issues and maintenance</p>
                    </div>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">SMS</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Payment Configuration</h3>
                  <p className="mt-1 text-sm text-gray-500">Configure payment gateways and methods</p>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Stripe</h4>
                        <p className="text-sm text-gray-500">International payments and cards</p>
                      </div>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Enabled</span>
                      </label>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Razorpay</h4>
                        <p className="text-sm text-gray-500">Indian payment gateway with UPI, cards, wallets</p>
                      </div>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Enabled</span>
                      </label>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">PayPal</h4>
                        <p className="text-sm text-gray-500">Global payment platform</p>
                      </div>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-gray-700">Enabled</span>
                      </label>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Cash on Delivery</h4>
                        <p className="text-sm text-gray-500">Accept cash payments on delivery</p>
                      </div>
                      <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">Enabled</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Payment Settings
                  </button>
                </div>
              </div>
            )}

            {/* Other tabs */}
            {activeTab !== 'general' && activeTab !== 'notifications' && activeTab !== 'payments' && (
              <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 text-gray-400">
                  {tabs.find(tab => tab.id === activeTab)?.icon && 
                    React.createElement(tabs.find(tab => tab.id === activeTab)!.icon, { className: "h-12 w-12" })
                  }
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.name} Settings
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Configuration options for {tabs.find(tab => tab.id === activeTab)?.name.toLowerCase()} will be available here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
