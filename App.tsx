
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      
      {/* Testimonial Section Inline */}
      <section className="py-24 bg-accent text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <h2 className="text-lg font-bold uppercase tracking-[0.3em] mb-4">Member Success</h2>
                  <h3 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight italic">"IT CHANGED MY ENTIRE OUTLOOK ON DISCIPLINE."</h3>
                  <div className="flex items-center gap-4">
                     <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
                        alt="Success" 
                        className="w-16 h-16 rounded-full border-2 border-white object-cover"
                     />
                     <div>
                        <p className="font-bold uppercase tracking-widest">Jessica Thompson</p>
                        <p className="text-blue-100 text-sm">Member since 2022 | -35 lbs Down</p>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                      alt="Before After" 
                      className="rounded-3xl shadow-2xl max-w-full h-auto transform transition-transform group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Case Study</div>
                  </div>
               </div>
            </div>
         </div>
         {/* Decorative Background Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/10 whitespace-nowrap select-none pointer-events-none uppercase">
           TRANSFORM
         </div>
      </section>

      <Pricing />
      <Trainers />
      <Contact />
      <Footer />
      
      {/* AI Assistant Tool */}
      <ChatAssistant />
    </div>
  );
};

export default App;
