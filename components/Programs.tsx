
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      id: '01',
      title: 'Power Lifting',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
      desc: 'Master the big three: Squat, Bench, and Deadlift with expert spotters.'
    },
    {
      id: '02',
      title: 'HIIT & Cardio',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?q=80&w=2070&auto=format&fit=crop',
      desc: 'Explosive movements designed to incinerate fat and boost endurance.'
    },
    {
      id: '03',
      title: 'Bodybuilding',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070&auto=format&fit=crop',
      desc: 'Sculpt your physique with isolation movements and hypertrophy focus.'
    },
    {
      id: '04',
      title: 'Mobility & Yoga',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
      desc: 'Enhance your range of motion and accelerate recovery sessions.'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
             <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-4">Our Programs</h2>
             <h3 className="text-5xl md:text-6xl font-extrabold">TRAINING THAT <br /> GETS RESULTS</h3>
          </div>
          <button className="text-accent font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-white hover:border-white transition-colors">
            View All Classes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <div key={p.id} className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer">
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex justify-between items-end">
                   <div>
                      <span className="text-accent text-5xl font-bold opacity-50 mb-4 block">{p.id}</span>
                      <h4 className="text-3xl font-bold mb-2">{p.title}</h4>
                      <p className="text-gray-300 max-w-xs transition-all opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                        {p.desc}
                      </p>
                   </div>
                   <div className="bg-accent p-4 rounded-full group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="text-white h-6 w-6" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
