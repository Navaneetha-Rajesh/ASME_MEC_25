import { motion } from 'motion/react';
import { ChevronRight, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
  const [email, setEmail] = useState('');

  const announcements = [
    { text: 'ASME Membership Drive 2025 - Register Now!', date: 'Jan 2025' },
    { text: 'Upcoming Workshop: Advanced CAD Techniques - Feb 10, 2025', date: 'Feb 2025' },
    { text: 'New Issue of MechInsight Magazine Released', date: 'Dec 2024' },
    { text: 'Congratulations to Team ASME for National Competition Win!', date: 'Nov 2024' }
  ];

  const recentHighlights = [
    {
      title: 'National Design Competition Winner',
      description: 'Our team secured first place at the ASME National Student Design Competition with innovative sustainable energy solution.',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'December 2024'
    },
    {
      title: 'Best Student Section Award',
      description: 'Recognized as the Best ASME Student Section in South India for outstanding activities and member engagement.',
      image: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'November 2024'
    },
    {
      title: 'Industry Collaboration Success',
      description: 'Established partnerships with leading manufacturing firms for live projects and internship opportunities.',
      image: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyc3xlbnwxfHx8fDE3NjYzOTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'October 2024'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="ASME Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2C45]/95 via-[#1C2C45]/80 to-[#1C2C45]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01A5A7]/20 border border-[#01A5A7]/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#01A5A7] rounded-full animate-pulse" />
              <span className="text-[#01A5A7]">ASME Student Section</span>
            </div>

            <h1 className="text-white mb-6">
              Nurturing Norms for <br />
              <span className="text-[#01A5A7]">Technical Values</span>
            </h1>

            <p className="text-white/80 text-xl mb-8 max-w-2xl">
              Empowering the next generation of mechanical engineers through innovation, 
              collaboration, and excellence at Govt. Model Engineering College.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(131, 207, 144, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Join ASME
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      {/* Announcements Section */}
      <section className="relative py-16 px-6 bg-white/30 backdrop-blur-sm border-y border-[#01A5A7]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#01A5A7]/10 border border-[#01A5A7]/20">
              <div className="w-2 h-2 bg-[#01A5A7] rounded-full animate-pulse" />
              <span className="text-[#01A5A7]">Latest Updates</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-4 bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-2xl hover:border-[#01A5A7]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[#1C2C45] flex-1">{announcement.text}</p>
                  <span className="text-[#01A5A7] text-sm whitespace-nowrap">{announcement.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[#01A5A7]/10 border border-[#01A5A7]/20">
              <Trophy className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">Recent Highlights</span>
            </div>
            <h2 className="text-[#1C2C45]">Our Latest Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 hover:border-[#01A5A7]/30 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{highlight.date}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#1C2C45] mb-3">{highlight.title}</h3>
                  <p className="text-[#1C2C45]/70 mb-4">{highlight.description}</p>
                  <button className="text-[#01A5A7] hover:text-[#01A5A7]/80 transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
