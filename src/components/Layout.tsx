import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  BarChart3, 
  ShoppingCart, 
  Car, 
  MapPin, 
  Wrench, 
  Users, 
  Settings,
  Bell,
  Search,
  Package,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'All Orders', href: '/orders', icon: Package },
    { name: 'Grocery', href: '/grocery', icon: ShoppingCart },
    { name: 'Trip Booking', href: '/trips', icon: MapPin },
    { name: 'Car Rental', href: '/rentals', icon: Car },
    { name: 'Handyman', href: '/handyman', icon: Wrench },
    { name: 'Electronics', href: '/electronics', icon: Laptop },
    { name: 'Customers', href: '/customers', icon: Users },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <motion.div 
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              className="relative flex-1 flex flex-col max-w-xs w-full bg-white"
            >
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <SidebarContent navigation={navigation} isActivePath={isActivePath} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <SidebarContent navigation={navigation} isActivePath={isActivePath} />
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-1 flex">
                <div className="w-full flex md:ml-0">
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <Search className="h-5 w-5" />
                    </div>
                    <input
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
                      placeholder="Search orders, customers..."
                    />
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/32x32.png"
                      alt="Admin"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden lg:block">Admin User</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface SidebarContentProps {
  navigation: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  isActivePath: (path: string) => boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ navigation, isActivePath }) => {
  return (
    <>
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-600">
        <h1 className="text-xl font-bold text-white">ServiceHub Admin</h1>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-white space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActivePath(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? 'bg-indigo-100 text-indigo-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon
                  className={`mr-3 flex-shrink-0 h-6 w-6 ${
                    active ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Layout;
