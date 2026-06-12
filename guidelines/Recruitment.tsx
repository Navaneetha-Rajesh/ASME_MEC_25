import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
// @ts-ignore: no type definitions for react-responsive-masonry
import Masonry from 'react-responsive-masonry';

 const recruitmentNotice = {
    title: 'ASME Student Section - Open Positions',
    positions: ['Technical Team Members', 'Event Coordinators', 'Content Writers', 'Design Team'],
    deadline: 'January 31, 2025',
    description: 'We are looking for passionate and dedicated students to join our team!'
  };

{/* Recruitment Notifications- EventsPage */}
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