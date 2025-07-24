import React from 'react';
import { Check, Star, Zap, TrendingUp, Shield } from 'lucide-react';

export default function MVPPackages() {
  const packages = [
    {
      name: "Starter Tune-Up",
      price: "$99",
      period: "one-time",
      description: "Perfect for HVAC businesses just getting started with automation",
      features: [
        "Google Business optimization",
        "Lead form + Calendly booking",
        "Branded pricing sheet",
        "Basic setup & training"
      ],
      icon: Shield,
      popular: false,
      cta: "Get Started Now"
    },
    {
      name: "Lead Boost Kit",
      price: "$299",
      period: "one-time",
      description: "Complete lead generation and follow-up automation system",
      features: [
        "Email/SMS follow-ups",
        "Basic call tracking setup",
        "30-day local content calendar",
        "Lead scoring system",
        "Customer review automation",
        "Priority support"
      ],
      icon: Zap,
      popular: true,
      cta: "Boost My Leads"
    },
    {
      name: "Monthly Growth Engine",
      price: "$199",
      period: "/month",
      description: "Ongoing automation and optimization for serious growth",
      features: [
        "Ongoing review requests",
        "Seasonal reminders",
        "Monthly KPI dashboard",
        "Advanced workflow automation",
        "Competitor analysis",
        "Monthly strategy calls"
      ],
      icon: TrendingUp,
      popular: false,
      cta: "Start Growing"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4" />
            <span>Budget-Friendly Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our HVAC Growth Kits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect automation package for your HVAC business. All systems installed in 7 days or less.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-blue-500 ring-4 ring-blue-500/20' 
                  : 'border-gray-700 hover:border-blue-500'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    <pkg.icon className={`h-8 w-8 ${pkg.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-4xl mx-auto border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Package Is Right for You?
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Book a free 15-minute consultation and we'll recommend the perfect automation solution for your HVAC business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Compare All Features
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">7-Day Setup</h4>
            <p className="text-gray-300 text-sm">All systems installed and running within one week</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-blue-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">30-Day ROI</h4>
            <p className="text-gray-300 text-sm">See measurable results within the first month</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <h4 className="font-semibold text-white mb-2">Ongoing Support</h4>
            <p className="text-gray-300 text-sm">Dedicated support team to ensure your success</p>
          </div>
        </div>
      </div>
    </section>
  );
}