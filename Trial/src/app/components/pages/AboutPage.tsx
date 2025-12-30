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
                  src="/images/AboutUs.jpeg"
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
                 The ASME Student Section at Government Model Engineering College (MEC) was established on 
                 2019 with the aim of nurturing technical excellence and encouraging professional growth 
                 among mechanical engineering students. </p>

                 <p>Our student section acts as a strong link between academic learning and real-world 
                  industry practices. It provides students with opportunities to explore advanced technical 
                  knowledge, take part in national-level competitions, and build essential leadership and 
                  teamwork skills that support long-term career development. </p>

                <p>We are dedicated to promoting the art, science, and practice of engineering and allied 
                  sciences. Through workshops, seminars, technical talks, industrial interactions, and 
                  hands-on projects, ASME MEC equips its members with the skills and exposure required 
                  to succeed in mechanical engineering and related domains.</p>
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
                <div className="flex items-start gap-3 flex-col">
                <p className="space-y-3 text-white/90">To provide an interdisciplinary platform for students across multiple engineering disciplines at 
                Government Model Engineering College (MEC), enabling collaboration, innovation, and integrated learning 
                to solve complex real-world engineering problems. </p> 

                <p className="space-y-3 text-white/90"> Our key objectives include:

                </p>

                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Promoting interdisciplinary collaboration across mechanical, electrical, electronics, computer science, and allied engineering domains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Collaborating with other technical societies and academic departments within MEC to deliver impactful technical programs and events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Encouraging innovative problem-solving by integrating concepts from multiple engineering disciplines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Fostering technical excellence, creativity, and research-oriented thinking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Strengthening industry–academia interaction and real-world exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Developing leadership, teamwork, and effective communication skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span>Promoting lifelong learning and professional ethics</span>
                  </li>
                </ul>
              </div>
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


                <div className="flex items-start gap-3 flex-col">

                <p className="space-y-3 text-[#1C2C45]/70">The long-term vision of ASME MEC is to create an ecosystem that nurtures interdisciplinary innovation and prepares 
                  students to address complex engineering challenges. </p>

                <p className="space-y-3 text-[#1C2C45]/70">Planned initiatives include:</p>

                <ul className="space-y-3 text-[#1C2C45]/70">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Launching interdisciplinary student-led innovation and research projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Establishing structured mentorship programs involving alumni and industry professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Organizing national-level interdisciplinary workshops, conferences, and symposiums</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#01A5A7] rounded-full mt-2 flex-shrink-0" />
                    <span>Expanding outreach programs that apply engineering solutions to real-world and societal challenges</span>
                  </li>
                </ul>
                </div>
                <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
