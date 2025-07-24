import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">1M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">1M Scale</span>
                <div className="text-xs text-blue-400 font-medium">HVAC Automation</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Scaling HVAC Businesses to $1M+ Revenue
            </p>
            <p className="text-gray-400 text-sm">
              We help HVAC businesses scale to $1M+ revenue through intelligent automation systems and proven growth strategies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Automation Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#audit" className="text-gray-400 hover:text-blue-400 transition-colors">Free Audit</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">hello@1mscale.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Scaling HVAC Businesses Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 1M Scale. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
