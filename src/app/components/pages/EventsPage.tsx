import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';

export function EventsPage() {
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const upcomingEvents = [
    {
      title: 'Advanced CAD Workshop',
      date: 'February 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'CAD Lab, MEC',
      description: 'Intensive hands-on training in SolidWorks and advanced modeling techniques'
    },
    {
      title: 'Industry Expert Talk Series',
      date: 'February 20, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Seminar Hall',
      description: 'Guest lecture on Future of Automotive Engineering by industry leaders'
    },
    {
      title: 'Annual Project Expo 2025',
      date: 'March 15-16, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      description: 'Showcase of innovative student projects and technical competitions'
    }
  ];

  const recruitmentNotice = {
    title: 'ASME Student Section - Open Positions',
    positions: ['Technical Team Members', 'Event Coordinators', 'Content Writers', 'Design Team'],
    deadline: 'January 31, 2025',
    description: 'We are looking for passionate and dedicated students to join our team!'
  };

  const pastEvents = [
    {
      title: 'CAD Workshop Series',
      year: '2024',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjY0NzgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Three-day intensive workshop on CAD software'
    },
    {
      title: 'Robotics Championship',
      year: '2024',
      type: 'Competition',
      image: 'https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Annual inter-college robotics competition'
    },
    {
      title: 'Industry Visit - Manufacturing',
      year: '2024',
      type: 'Industrial Visit',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Visit to state-of-the-art automotive plant'
    },
    {
      title: 'Guest Lecture Series',
      year: '2024',
      type: 'Seminar',
      image: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Expert talks on emerging technologies'
    },
    {
      title: '3D Printing Workshop',
      year: '2023',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyc3xlbnwxfHx8fDE3NjYzOTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Additive manufacturing and rapid prototyping'
    },
    {
      title: 'Technical Symposium',
      year: '2023',
      type: 'Competition',
      image: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Multi-event technical fest'
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
            <h1 className="text-[#1C2C45] mb-4">ASME Events</h1>
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
            <h2 className="text-[#1C2C45] mb-2">Upcoming Events</h2>
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
                className="group bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 md:p-8 hover:border-[#01A5A7]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-[#1C2C45] mb-4">{event.title}</h3>
                    <p className="text-[#1C2C45]/70 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    Register Now
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Notifications */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#83cf90]/20 to-[#01A5A7]/20 border-2 border-[#83cf90]/30 rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#83cf90]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-[#1C2C45]" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#1C2C45] mb-2">{recruitmentNotice.title}</h2>
                <p className="text-[#1C2C45]/70 mb-6">{recruitmentNotice.description}</p>
                <div className="mb-6">
                  <h4 className="text-[#1C2C45] mb-3">Open Positions:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {recruitmentNotice.positions.map((position, index) => (
                      <div key={index} className="flex items-center gap-2 text-[#1C2C45]/70">
                        <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full" />
                        <span>{position}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-[#1C2C45]/60">
                    <Clock className="w-4 h-4 text-[#01A5A7]" />
                    <span>Application Deadline: {recruitmentNotice.deadline}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-[#1C2C45] text-white rounded-full hover:bg-[#1C2C45]/90 transition-all inline-flex items-center gap-2"
                  >
                    Apply Now
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-6">Past Events Gallery</h2>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#1C2C45]/70">Filter by Year:</span>
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-full text-[#1C2C45] focus:outline-none focus:border-[#01A5A7]/30 transition-all"
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1C2C45]/70">Filter by Type:</span>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-full text-[#1C2C45] focus:outline-none focus:border-[#01A5A7]/30 transition-all"
                >
                  <option value="all">All Types</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Competition">Competition</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Industrial Visit">Industrial Visit</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Masonry Grid */}
          <Masonry columnsCount={1} gutter="24px" className="md:hidden">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </Masonry>
          
          <Masonry columnsCount={3} gutter="24px" className="hidden md:block">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </Masonry>
        </div>
      </section>

      {/* ASME Events Calendar */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1C2C45] mb-4">ASME Events Calendar</h2>
            <p className="text-[#1C2C45]/70">View all upcoming section and official ASME events</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-8 min-h-[500px] flex items-center justify-center"
          >
            <div className="text-center">
              <Calendar className="w-16 h-16 text-[#01A5A7] mx-auto mb-4" />
              <p className="text-[#1C2C45]/70 mb-4">Google Calendar Integration</p>
              <motion.a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#01A5A7] text-white rounded-full hover:bg-[#01A5A7]/90 transition-all"
              >
                View Full Calendar
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="relative group overflow-hidden rounded-3xl h-80"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/90 via-[#1C2C45]/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-[#01A5A7]/20 backdrop-blur-sm border border-[#01A5A7]/30 mb-2">
          <span className="text-[#01A5A7] text-sm">{event.type}</span>
        </div>
        <h4 className="text-white mb-2">{event.title}</h4>
        <p className="text-white/70 text-sm mb-2">{event.description}</p>
        <span className="text-white/60 text-sm">{event.year}</span>
      </div>
    </motion.div>
  );
}
