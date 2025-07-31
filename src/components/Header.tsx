import React, { useState } from 'react';
import { Search, Calendar, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#3B0A45] shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* Stylized E Logo with Star */}
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-br from-[#8B3E6F] to-[#F2E9E4] bg-clip-text text-transparent select-none">
                  E
                </div>
                {/* Star accent */}
                <div className="absolute -top-1 -right-1 text-[#F2E9E4] text-xs">
                  ✦
                </div>
              </div>
              <span className="ml-2 text-[#F2E9E4] text-xl font-semibold tracking-wide hidden sm:block">
                ventú
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#F2E9E4] opacity-60" />
              </div>
              <input
                type="text"
                placeholder="Etkinlik ara..."
                className="block w-full pl-10 pr-4 py-2.5 border border-transparent rounded-xl bg-[#5E0B56] text-[#F2E9E4] placeholder-[#F2E9E4] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#AA4069] focus:border-transparent transition-all duration-300 hover:bg-[#6B1A63] text-sm"
              />
            </div>

            {/* Date Picker */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-[#F2E9E4] opacity-60" />
              </div>
              <input
                type="date"
                className="pl-10 pr-4 py-2.5 border border-transparent rounded-xl bg-[#5E0B56] text-[#F2E9E4] focus:outline-none focus:ring-2 focus:ring-[#AA4069] focus:border-transparent transition-all duration-300 hover:bg-[#6B1A63] w-44 text-sm"
              />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="px-5 py-2.5 text-[#F2E9E4] text-sm font-medium hover:text-white transition-colors duration-200 rounded-lg hover:bg-[#5E0B56]">
              Login
            </button>
            <button className="px-6 py-2.5 bg-[#AA4069] text-white text-sm font-medium rounded-xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#F2E9E4] hover:text-white hover:bg-[#5E0B56] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#AA4069] transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#5E0B56] animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-4 pb-4 space-y-4">
              {/* Mobile Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#F2E9E4] opacity-60" />
                </div>
                <input
                  type="text"
                  placeholder="Etkinlik ara..."
                  className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-xl bg-[#5E0B56] text-[#F2E9E4] placeholder-[#F2E9E4] placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#AA4069] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Mobile Date Picker */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-[#F2E9E4] opacity-60" />
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-xl bg-[#5E0B56] text-[#F2E9E4] focus:outline-none focus:ring-2 focus:ring-[#AA4069] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-2">
                <button className="w-full text-center px-4 py-3 text-[#F2E9E4] text-sm font-medium hover:text-white hover:bg-[#5E0B56] rounded-xl transition-colors duration-200">
                  Login
                </button>
                <button className="w-full px-4 py-3 bg-[#AA4069] text-white text-sm font-medium rounded-xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;