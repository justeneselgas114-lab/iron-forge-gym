
import React from 'react';
import { Shield, Zap, Target, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Elite Coaching",
      desc: "Our trainers are certified professionals who design programs tailored to your specific physiological needs.",
      icon: <Users className="h-10 w-10 text-accent" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Premium Equipment",
      desc: "Train on industry-leading gear from Hammer Strength, Rogue, and Life Fitness for maximum efficiency.",
      icon: <Zap className="h-10 w-10 text-accent" />,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Science-Backed",
      desc: "Every workout and plan is rooted in sports science to ensure safety and consistent progress.",
      icon: <Target className="h-10 w-10 text-accent" />,
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Safe Environment",
      desc: "24/7 security, high-standard hygiene protocols, and a respectful community culture.",
      icon: <Shield className="h-10 w-10 text-accent" />,
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2158?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative h-[320px] overflow-hidden rounded-2xl border border-zinc-800 hover:border-accent transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              </div>

              {/* Card Content */}
              <div className="relative h-full p-8 flex flex-col justify-end z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left w-fit">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
