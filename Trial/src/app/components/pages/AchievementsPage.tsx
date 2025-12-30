import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function AchievementsPage() {
  const achievements = [
    {
      year: '2025',
      title: 'Most Significant Membership Growth Award',
      description: 'Recognized for securing the Most Significant Membership Growth Award under the ASME India Student Section Recognition Program.',
      category: 'Award',
      image: '/images/Membership.jpeg'
    }
  ];

  const categoryIcons: { [key: string]: any } = {
    'Competition': Trophy,
    'Recognition': Award,
    'Award': Medal
  };

  const categoryColors: { [key: string]: string } = {
    'Competition': 'text-[#83cf90]',
    'Recognition': 'text-[#01A5A7]',
    'Award': 'text-[#E83CF9]'
  };

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
              <Trophy className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">Achievements</span>
            </div>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Celebrating excellence, innovation, and the remarkable accomplishments of our student section
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#01A5A7] via-[#01A5A7]/50 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = categoryIcons[achievement.category] || Star;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                      isLeft ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    {/* Year marker */}
                    <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 ${
                      index === 0 ? 'top-0' : ''
                    }`}>
                      <div className="w-16 h-16 bg-white border-4 border-[#01A5A7] rounded-full flex items-center justify-center shadow-lg">
                        <Icon className={`w-8 h-8 ${categoryColors[achievement.category]}`} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`${isLeft ? 'md:pr-12' : 'md:pl-12 md:col-start-2'} md:mt-4 ml-12 md:ml-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl overflow-hidden hover:border-[#01A5A7]/30 transition-all"
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/80 to-transparent" />
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#01A5A7]/20 backdrop-blur-sm border border-[#01A5A7]/30">
                            <span className="text-white text-sm">{achievement.category}</span>
                          </div>
                          <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-white">{achievement.year}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-[#1C2C45] mb-3">{achievement.title}</h3>
                          <p className="text-[#1C2C45]/70">{achievement.description}</p>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl pointer-events-none" />
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : ''}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
