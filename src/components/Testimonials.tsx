import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The automation system saved us 15 hours per week on scheduling and follow-ups. Our customer satisfaction scores went up 40% because nothing falls through the cracks anymore.",
      author: "Sarah Martinez",
      title: "Martinez Heating & Air",
      location: "Phoenix, AZ",
      rating: 5
    },
    {
      quote: "We went from manually tracking everything in spreadsheets to having a fully automated system. Our revenue increased 60% in the first quarter because we could handle more jobs efficiently.",
      author: "Mike Thompson", 
      title: "Thompson HVAC Solutions",
      location: "Dallas, TX",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What HVAC Business Owners Are Saying
          </h2>
          <p className="text-xl text-gray-300">
            Real automation success stories from HVAC professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-700 hover:shadow-md hover:border-blue-500/50 transition-all">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-gray-300 mb-4" />
              
              <blockquote className="text-white mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-blue-400 text-sm">{testimonial.title}</div>
                <div className="text-gray-400 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-4xl mx-auto border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join 150+ HVAC Businesses Running on Autopilot
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Stop wasting time on manual processes. Start your automation journey today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Your Automation System Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}