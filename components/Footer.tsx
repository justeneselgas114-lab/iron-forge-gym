
import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Dumbbell className="text-accent h-8 w-8" />
              <span className="heading-font text-2xl font-bold tracking-tighter">IRON <span className="text-accent">FORGE</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Building stronger bodies and unstoppable minds since 2015. Join the elite community that demands more from themselves every single day.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-accent transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-accent transition-colors">Memberships</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-accent transition-colors">Personal Trainers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Support</h4>
             <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">App Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Guest Policy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Newsletter</h4>
             <p className="text-gray-400 mb-6">Subscribe for weekly training tips and early access to events.</p>
             <div className="flex gap-2">
                <input type="email" placeholder="Email" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 outline-none focus:border-accent" />
                <button className="bg-accent text-white px-4 py-2 rounded-lg font-bold">Join</button>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 text-center text-gray-500 text-sm">
           &copy; {new Date().getFullYear()} IRON FORGE Premium Fitness. Built for Performance.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
