import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

export function AchievementsPage() {
  const achievements = [
    {
      year: '2024',
      title: 'National Design Competition - First Place',
      description: 'Team ASME MEC secured first place at the ASME National Student Design Competition with an innovative sustainable energy solution competing against 50+ teams nationwide.',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2024',
      title: 'Best Student Section Award - South India',
      description: 'Recognized as the Best ASME Student Section in South India for outstanding member engagement, technical activities, and community outreach programs.',
      category: 'Recognition',
      image: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2024',
      title: 'Excellence in Community Outreach',
      description: 'Awarded for exceptional community engagement through STEM workshops for underprivileged students and sustainability awareness campaigns.',
      category: 'Award',
      image: 'https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2023',
      title: 'Robotics Championship Winners',
      description: 'First place at the Inter-College Robotics Championship with an autonomous navigation system demonstrating advanced sensor integration.',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyc3xlbnwxfHx8fDE3NjYzOTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2023',
      title: 'Outstanding Technical Publication',
      description: 'MechInsight Magazine recognized as the Best Student Publication for high-quality technical content and innovative design.',
      category: 'Recognition',
      image: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjY0NzgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2023',
      title: 'Innovation Challenge - Runner Up',
      description: 'Second place at the National Innovation Challenge with a novel energy-efficient cooling system design for industrial applications.',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2022',
      title: 'Student Leadership Excellence Award',
      description: 'Recognition for outstanding student leadership and organizational management in conducting large-scale technical events.',
      category: 'Award',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2022',
      title: 'Best Technical Workshop Series',
      description: 'Awarded for organizing comprehensive workshop series covering CAD, FEA, and manufacturing technologies with industry collaboration.',
      category: 'Recognition',
      image: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyc3xlbnwxfHx8fDE3NjYzOTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
            <h1 className="text-[#1C2C45] mb-4">Our Achievements & Awards</h1>
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

      {/* Stats Section */}
      <section className="px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1C2C45] to-[#1C2C45]/80 rounded-3xl p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <Trophy className="w-12 h-12 text-[#83cf90] mx-auto mb-4" />
                <div className="text-4xl text-white mb-2">15+</div>
                <div className="text-white/70">National Awards</div>
              </div>
              <div>
                <Award className="w-12 h-12 text-[#01A5A7] mx-auto mb-4" />
                <div className="text-4xl text-white mb-2">25+</div>
                <div className="text-white/70">Recognitions</div>
              </div>
              <div>
                <Medal className="w-12 h-12 text-[#E83CF9] mx-auto mb-4" />
                <div className="text-4xl text-white mb-2">10+</div>
                <div className="text-white/70">Competition Wins</div>
              </div>
              <div>
                <Star className="w-12 h-12 text-[#83cf90] mx-auto mb-4" />
                <div className="text-4xl text-white mb-2">500+</div>
                <div className="text-white/70">Participants</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
