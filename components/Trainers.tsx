
import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Alex 'Iron' Mercer",
      role: "Head Strength Coach",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop",
      specialty: "Powerlifting & Nutrition"
    },
    {
      name: "Sarah Chen",
      role: "Yoga & Recovery Specialist",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=1974&auto=format&fit=crop",
      specialty: "Flexibility & Mindfulness"
    },
    {
      name: "Marcus Thorne",
      role: "Performance Director",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      specialty: "Athletic Conditioning"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-4">Elite Staff</h2>
          <h3 className="text-5xl font-extrabold mb-4">GUIDED BY MASTERS</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our trainers are more than just fitness instructors. They are mentors, athletes, and certified scientists of performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((t, i) => (
            <div key={i} className="group relative">
               <div className="relative h-[500px] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-4">
                     <div className="flex gap-4">
                        <div className="bg-white p-3 rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer">
                           <Instagram className="h-6 w-6" />
                        </div>
                        <div className="bg-white p-3 rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer">
                           <Twitter className="h-6 w-6" />
                        </div>
                     </div>
                     <button className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">View Profile</button>
                  </div>
               </div>
               <h4 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{t.name}</h4>
               <p className="text-accent font-bold uppercase text-sm tracking-widest mb-2">{t.role}</p>
               <p className="text-gray-400 text-sm italic">{t.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
