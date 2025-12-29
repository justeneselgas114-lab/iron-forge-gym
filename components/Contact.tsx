
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-accent text-lg font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-extrabold mb-8">READY TO START?</h3>
            <p className="text-gray-400 mb-12 max-w-lg">
              Have questions about our memberships or programs? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Power Lane, Strength District<br />Los Angeles, CA 90001</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 000-FORGE</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-lg mb-1">Hours</h4>
                  <p className="text-gray-400">Mon-Fri: 5am - 11pm<br />Sat-Sun: 7am - 9pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 focus:border-accent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 focus:border-accent outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Service Interest</label>
                <select className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 focus:border-accent outline-none appearance-none">
                  <option>General Membership</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Corporate Plan</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/40 border border-zinc-800 rounded-xl px-4 py-3 focus:border-accent outline-none" placeholder="Tell us about your fitness goals..."></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-blue-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
