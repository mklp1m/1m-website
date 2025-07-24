import React from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      {/* Floating Dynamic Island Header */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <div className="bg-black/90 backdrop-blur-md text-white rounded-full border border-gray-800 shadow-2xl px-6 py-3 flex items-center justify-between space-x-4">
          
          {/* Branding */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">1M</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold">1M Scale</span>
              <div className="text-xs text-blue-400 font-medium">HVAC Automation</div>
            </div>
          </div>

          {/* Center Nav (Desktop only) */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition-colors font-medium">Features</a>
            <a href="#testimonials" className="hover:text-white transition-colors font-medium">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Contact</a>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-300">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(123) 456-7890</span>
            </div>
            <button className="hidden md:inline bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all text-sm font-semibold shadow-lg">
              Free Audit
            </button>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-sm bg-black/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-800">
          <div className="flex flex-col space-y-4 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition-colors font-medium">Features</a>
            <a href="#testimonials" className="hover:text-white transition-colors font-medium">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors font-medium">Contact</a>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all font-semibold">
              Free Automation Audit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
