import React from 'react';
import { 
  CalendarCheck, 
  Network, 
  Presentation, 
  ArrowRight, 
  BarChart2, 
  Globe 
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <CalendarCheck className="w-12 h-12 text-indigo-500" />,
      title: "Smart Scheduling",
      description: "Advanced AI-powered event planning with real-time collaboration and intelligent conflict resolution."
    },
    {
      icon: <Network className="w-12 h-12 text-teal-500" />,
      title: "Networking Hub",
      description: "Connect attendees, speakers, and organizers through intelligent matchmaking and interactive platforms."
    },
    {
      icon: <Presentation className="w-12 h-12 text-emerald-500" />,
      title: "Seamless Presentations",
      description: "Integrated presentation management with live polling, Q&A, and real-time session analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 48 48" 
              className="w-10 h-10"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#6366f1', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path 
                d="M24 4L4 16v16l20 12 20-12V16L24 4zm0 8a4 4 0 110 8 4 4 0 010-8zm10 20l-10 6-10-6v-8l10 6 10-6v8z" 
                fill="url(#logoGradient)"
              />
            </svg>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              ConferencePro
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Features
            </a>
            <a 
              href="#" 
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all flex items-center space-x-2 group"
            >
              <span>SignIn</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-24 pb-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 rounded-3xl -z-10 blur-2xl"></div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Elevate Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Conference Experience
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Revolutionize event management with AI-driven tools, seamless collaboration, and intelligent networking solutions.
        </p>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="#" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-lg shadow-indigo-500/30 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Conferences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to streamline event management and enhance attendee engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100"
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="opacity-70">&copy; 2024 ConferencePro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;