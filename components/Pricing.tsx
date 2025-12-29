
import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "Month",
      features: [
        "Access to Gym Floor",
        "Free Fitness Orientation",
        "Shower & Locker Rooms",
        "Mobile App Access"
      ],
      isPopular: false
    },
    {
      name: "Pro",
      price: "89",
      period: "Month",
      features: [
        "Everything in Starter",
        "Unlimited Group Classes",
        "Guest Passes (2/mo)",
        "Sauna & Recovery Lounge",
        "Progress Tracking Consult"
      ],
      isPopular: true
    },
    {
      name: "Elite",
      price: "199",
      period: "Month",
      features: [
        "Everything in Pro",
        "4 Personal Training Sessions",
        "Nutrition Coaching",
        "Private Locker",
        "Laundry Service"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-4">Membership Plans</h2>
        <h3 className="text-5xl font-extrabold mb-16">CHOOSE YOUR PATH</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border ${plan.isPopular ? 'border-accent bg-accent/5' : 'border-zinc-800 bg-zinc-900/40'} flex flex-col items-center transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h4 className="text-2xl font-bold mb-6">{plan.name}</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">$</span>
                <span className="text-7xl font-extrabold mx-1">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left w-full">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center text-gray-300">
                    <Check className="text-accent h-5 w-5 mr-3 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.isPopular ? 'bg-accent text-white hover:bg-blue-600' : 'bg-white text-black hover:bg-accent hover:text-white'}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
