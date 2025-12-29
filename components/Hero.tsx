
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
      
      {/* Background Image/Video Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
        alt="Gym Training"
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h2 className="text-accent text-xl font-bold tracking-[0.3em] mb-4 uppercase animate-fade-in-up">
            Elite Performance Gym
          </h2>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
            FORGE YOUR <br />
            <span className="text-accent">LEGACY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl animate-fade-in-up delay-200">
            Push past your limits with world-class equipment, professional training, and a community dedicated to transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <button className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center group transition-all">
              Start Free Trial
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white hover:border-accent hover:text-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center transition-all">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Watch Tour
            </button>
          </div>

          <div className="mt-12 flex gap-12 items-center animate-fade-in-up delay-400">
             <div>
                <span className="block text-4xl font-bold">150+</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">Modern Equipment</span>
             </div>
             <div>
                <span className="block text-4xl font-bold">20+</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">Expert Coaches</span>
             </div>
             <div>
                <span className="block text-4xl font-bold">500+</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">Active Members</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce">
         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
         </div>
      </div>
    </section>
  );
};

export default Hero;
