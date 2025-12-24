import { motion } from 'motion/react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const foundingMembers = [
    'Dr. Srinivas P',
    'Antony Lulu',
    'Adil Sageer',
    'Joel Mathew',
    'Mahendran',
    'Anjana S',
    'Chelsa Mariam',
    'Alan Sebastian',
    'Arun T',
    'Megha Jasmin',
    'Akhil T Sunny'
  ];

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
              <Users className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">About Us</span>
            </div>
            <h1 className="text-[#1C2C45] mb-4">ASME Student Section</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Building a community of innovative mechanical engineers since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Our Student Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#01A5A7]/20 bg-white/60 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ASME Student Section Certificate"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#01A5A7]/10 to-[#E83CF9]/10" />
              </div>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#01A5A7]/50 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#01A5A7]/50 rounded-br-2xl" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#1C2C45] mb-6">About Our Student Section</h2>
              <div className="space-y-4 text-[#1C2C45]/70">
                <p>
                  The ASME Student Section at Govt. Model Engineering College was established in 
                  <span className="text-[#01A5A7]"> March 1998</span>, marking the beginning of a legacy 
                  of technical excellence and innovation.
                </p>
                <p>
                  Our section serves as a vibrant platform for mechanical engineering students to explore 
                  cutting-edge technologies, develop professional skills, and network with industry leaders. 
                  We organize workshops, technical competitions, industry visits, and seminars that bridge 
                  the gap between academic learning and real-world engineering challenges.
                </p>
                <p>
                  With over 500 active members, we foster a collaborative environment where students engage 
                  in hands-on projects, participate in national-level competitions, and contribute to the 
                  advancement of mechanical engineering through research and innovation.
                </p>
                <p>
                  As part of the global ASME network, our section provides members with access to world-class 
                  resources, publications, and opportunities to connect with the international engineering community.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Members Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1C2C45] mb-4">Founding Members</h2>
            <p className="text-[#1C2C45]/70">
              Honoring the visionaries who established our student section
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foundingMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-[#01A5A7]/10 hover:border-[#01A5A7]/30 transition-all group"
                >
                  <div className="w-2 h-2 bg-[#01A5A7] rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-[#1C2C45]">{member}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1C2C45] mb-4">Our Goals</h2>
            <p className="text-[#1C2C45]/70 max-w-2xl mx-auto">
              Driving excellence in mechanical engineering education and professional development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Goal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#01A5A7] to-[#01A5A7]/80 rounded-3xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white">Primary Goal</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Foster technical excellence and innovation among mechanical engineering students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Provide hands-on learning experiences through workshops and projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Build strong industry-academia connections for career development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Promote research and development in cutting-edge engineering fields</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Create a collaborative platform for knowledge sharing and networking</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Future Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-8 h-full hover:border-[#01A5A7]/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#01A5A7]/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#01A5A7]" />
                  </div>
                  <h3 className="text-[#1C2C45]">Future Roadmap</h3>
                </div>
                <ul className="space-y-3 text-[#1C2C45]/70">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Expand innovation lab with advanced manufacturing equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Launch international collaboration programs with global ASME chapters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Develop specialized training programs in emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Increase industry partnerships for internship and placement opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Host national-level technical symposiums and competitions</span>
                  </li>
                </ul>
                <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
