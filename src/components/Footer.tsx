import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/90 backdrop-blur-md text-white rounded-full shadow-2xl border border-gray-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8 max-w-4xl w-full mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">1M</span>
          </div>
          <div>
            <span className="text-base font-bold text-white">1M Scale</span>
            <div className="text-xs text-blue-400 font-medium">HVAC Automation</div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-blue-400" />
            <span>(123) 456-7890</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Mail className="h-4 w-4 text-blue-400" />
            <span>hello@1mscale.com</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
