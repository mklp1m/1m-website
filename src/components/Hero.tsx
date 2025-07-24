import React from 'react';
import { Calendar, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Zap className="h-4 w-4" />
              <span>HVAC Business Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Automate Your HVAC Business{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                From Calls to Cashflow
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Stop losing money on manual processes. Our automation systems handle scheduling, 
              customer communication, invoicing, and more — so you can focus on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-3 transform hover:scale-105 shadow-2xl">
                <Calendar className="h-5 w-5" />
                <span>Book a Free Automation Audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all">
                See Automation Features
              </button>
            </div>
            
            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Setup in 7 Days</div>
                  <div className="text-sm text-gray-400">Quick implementation</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">ROI in 30 Days</div>
                  <div className="text-sm text-gray-400">Guaranteed results</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">24/7 Automation</div>
                  <div className="text-sm text-gray-400">Always working</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-3 text-white">Free Automation Audit</h3>
                  <p className="text-gray-300 text-lg">Discover automation opportunities in 15 minutes</p>
                </div>
                <form className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Business Name" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-700/50 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                    Get My Free Audit
                  </button>
                </form>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}