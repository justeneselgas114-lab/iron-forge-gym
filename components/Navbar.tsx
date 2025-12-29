
import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Trainers', href: '#trainers', id: 'trainers' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <Dumbbell className={`text-accent h-8 w-8 transition-transform duration-500 group-hover:rotate-45`} />
            <span className="heading-font text-2xl font-bold tracking-tighter">IRON <span className="text-accent">FORGE</span></span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative text-sm font-semibold uppercase tracking-widest transition-all duration-300 py-2 ${
                  activeSection === link.id ? 'text-accent' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {/* Active Indicator Underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ease-out ${
                  activeSection === link.id ? 'w-full' : 'w-0'
                }`} />
              </a>
            ))}
            <button className="bg-accent hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Join Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/98 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
           {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold uppercase tracking-[0.2em] transition-colors ${
                  activeSection === link.id ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase text-xl tracking-widest shadow-2xl">
              Join Now
            </button>
            <button onClick={() => setIsOpen(false)} className="mt-8 text-gray-500 flex items-center gap-2 uppercase tracking-widest text-sm">
              <X size={16} /> Close
            </button>
      </div>
    </nav>
  );
};

export default Navbar;
