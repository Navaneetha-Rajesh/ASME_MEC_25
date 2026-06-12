import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
// @ts-ignore: no type definitions for react-responsive-masonry
import Masonry from 'react-responsive-masonry';
      
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