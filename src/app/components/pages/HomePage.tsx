import { motion } from 'motion/react';
import { ChevronRight, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
  const [email, setEmail] = useState('');

  const announcements = [
    {text: 'Horizon: Career Guidance Session on Marine Engineering', date: 'Mar 4, 2026'},
    { text: 'CONSERA: Inter-college Debate and Decision-Making Competition', date: 'Feb 5, 2026' },
    { text: 'Placement Playbook (ONLINE): Career Development Webinar', date: 'Jan 14, 2026' },
    { text: 'RoboRoute: Navigate, Race, Conquer', date: 'Jan 11, 2026' }
  ];

  const recentHighlights = [
    {
      title: 'Horizon',
      description: 'ASME MEC conducted Horizon-a Career Guidance Session on Marine Engineering, delivered by Mr.Jathesh Chandra, General Manager at Cochin Shipyard Ltd. on 4th March 2026.',
      image: '/images/Horizon.jpeg',
      date: 'March 2026'
    },
    {
      title: 'CONSERA',
      description: 'ASME MEC successfully conducted CONSERA, an inter-college debate and decision-making competition, on 5th February 2026.',
      image: '/images/Consera.jpeg',
      date: 'February 2026'
    },
    {
      title: 'Placement Playbook (ONLINE)',
      description: 'As part of Career Development Series, the webinar was conducted online on 14th January 2026 in collaboration with Entri App.',
      image: '/images/Placement_playbook.jpeg',
      date: 'January 2026'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Core.jpeg"
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
            <a 
  href="https://www.asme.org/join" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block" // Ensures the link wrapper fits the button size
>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(131, 207, 144, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              Join ASME
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            </a>
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
