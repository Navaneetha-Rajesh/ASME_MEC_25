import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function EventsPage() {
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const upcomingEvents = [
    {
      title: 'RoboRoute',
      date: 'Jan 11, 2026',
      time: '-',
      location: '-',
      description: 'Excel 2025 in collaboration with ASME MEC presents RoboRoute, a thrilling dive into the world of intelligent robotics where precision, control and innovation are put to the ultimate test.',
      button:'https://docs.google.com/forms/d/e/1FAIpQLSfIyTCAN7JlW4eNa8EXaUcAAt6gqZYpKBrRb8qTE9ZCqiO2yA/viewform'
    }
  ];

  const pastEvents = [
    {
      title: 'General Aptitude Test',
      year: '2025',
      type: 'Competition',
      image: '/images/Aptitude_Test3.jpeg',
      description: 'Career Development Series - General Aptitude Test conducted by ASME MEC'
    },
    {
      title: 'ASME MEC Core Handover',
      year: '2025',
      type: 'Meeting',
      image: '/images/Core_Handover.jpeg',
      description: 'Handover ceremony of ASME MEC core team for the year 2025-26'
    }
  ];

  const filteredEvents = pastEvents.filter(event => {
    if (filterYear !== 'all' && event.year !== filterYear) return false;
    if (filterType !== 'all' && event.type !== filterType) return false;
    return true;
  });

  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#01A5A7]/10 border border-[#01A5A7]/20">
              <Calendar className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">Events & Activities</span>
            </div>
            <h1 className="text-[#1C2C45] mb-4 text-4xl md:text-5xl font-bold">ASME Events</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Explore our upcoming workshops, competitions, and past activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] font-bold mb-2">Upcoming Events</h2>
            <p className="text-[#1C2C45]/70">Mark your calendars for these exciting events</p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 md:p-8 hover:border-[#01A5A7]/30 transition-all shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-[#1C2C45] font-bold mb-4">{event.title}</h3>
                    <p className="text-[#1C2C45]/70 mb-4 leading-relaxed">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm font-medium">
                      <div className="flex items-center gap-2 text-[#1C2C45]/60">
                        <Calendar className="w-4 h-4 text-[#01A5A7]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1C2C45]/60">
                        <Clock className="w-4 h-4 text-[#01A5A7]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#1C2C45]/60">
                        <MapPin className="w-4 h-4 text-[#01A5A7]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <a href={event.button} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all inline-flex items-center gap-2 whitespace-nowrap font-bold shadow-md"
                    >
                      Register Now
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#1C2C45] font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white/40 border border-[#01A5A7]/10 rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C2C45]/80 backdrop-blur-md text-white text-[10px] rounded-full uppercase tracking-widest font-bold">
                    {event.type} • {event.year}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-[#1C2C45] font-bold mb-2">{event.title}</h4>
                  <p className="text-[#1C2C45]/60 text-xs">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div> 
  );
}