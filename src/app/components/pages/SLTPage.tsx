import { motion } from 'motion/react';
import { Mail, Linkedin, Users } from 'lucide-react';

export function SLTPage() {
  const hod = {
    name: 'Varghese P I',
    title: 'Assistant Proffesor, Department of Mechanical Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    message: `"It gives me immense pleasure to see our ASME Student Section flourishing under 
    the dedicated leadership of our students. The section has consistently demonstrated 
    excellence in promoting technical knowledge, fostering innovation, and building strong 
    industry connections. I am proud of the achievements our students have accomplished and 
    encourage all mechanical engineering students to actively participate in ASME activities. 
    Together, we are shaping the future leaders of mechanical engineering."`
  };

  const sltMembers = [
    {
      name: 'Meenakshi V J',
      designation: 'Chairperson',
      image: 'https://images.unsplash.com/photo-1747811853766-7a6612797dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdpbmVlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjM1NDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'arjun.chair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Vidhuganga N P',
      designation: 'Vice-Chairperson',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      email: 'priya.vicechair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Ishan',
      designation: 'General Secretary',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      email: 'rahul.secretary@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Jithendranath A M',
      designation: 'Joint Secretary',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      email: 'anjali.treasurer@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Anantesh S Pai',
      designation: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      email: 'karthik.tech@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Akhil Raju',
      designation: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      email: 'sneha.events@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Jothsna Mariyam George',
      designation: 'Marketing Subhead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'vivek.pr@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Athul Krishnan P',
      designation: 'Event Head',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      email: 'meera.publications@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Janaki S',
      designation: 'Event Subhead',
      image: 'https://images.unsplash.com/photo-1747811853766-7a6612797dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdpbmVlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjM1NDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'arjun.chair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sacheth P R',
      designation: 'Design Head',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      email: 'priya.vicechair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'B Brahmanarayanan',
      designation: 'Desgin Subhead',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      email: 'rahul.secretary@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Hrishikesh C R',
      designation: 'Media Head',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      email: 'anjali.treasurer@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Chandra S Nair',
      designation: 'Publicity Head',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      email: 'karthik.tech@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Navaneetha Rajesh',
      designation: 'Tech Web Head',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      email: 'sneha.events@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Meghashree Girish',
      designation: 'Content Head',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'vivek.pr@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Niya Sunil',
      designation: 'Creatives Head',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      email: 'meera.publications@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Anjana Anoop',
      designation: 'Documentation Head',
      image: 'https://images.unsplash.com/photo-1747811853766-7a6612797dc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbmdpbmVlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjM1NDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'arjun.chair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Hanna Shibu Mathew',
      designation: 'Link Rep',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      email: 'priya.vicechair@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Bharath Krishna',
      designation: 'Link Rep',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      email: 'rahul.secretary@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Fathima K K',
      designation: 'Second Year Reps',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      email: 'anjali.treasurer@asme-mec.org',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Jewel Rose Shajan',
      designation: 'Second Year Reps',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      email: 'anjali.treasurer@asme-mec.org',
      linkedin: 'https://linkedin.com'
    }
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
              <span className="text-[#01A5A7]">Leadership</span>
            </div>
            <h1 className="text-[#1C2C45] mb-4">Meet the Student Leadership Team</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Dedicated leaders driving innovation and excellence in our student community
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOD/Advisor's Message Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1C2C45] to-[#1C2C45]/80 rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
              {/* Left: Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/20">
                    <img
                      src={hod.image}
                      alt={hod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-white mb-2">{hod.name}</h3>
                    <p className="text-[#01A5A7]">{hod.title}</p>
                  </div>
                </div>
              </div>

              {/* Right: Message */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-white mb-2">Message from the Faculty Advisor</h2>
                  <div className="h-1 w-20 bg-[#01A5A7] rounded-full" />
                </div>
                <p className="text-white/80 leading-relaxed text-lg">
                  {hod.message}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Leadership Team Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1C2C45] mb-4">Student Leadership Team 2024-25</h2>
            <p className="text-[#1C2C45]/70">
              Meet the dedicated team members leading our initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sltMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl overflow-hidden hover:border-[#01A5A7]/30 transition-all">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/80 to-transparent" />
                    
                    {/* Hover overlay with contact */}
                    <motion.div 
                      className="absolute inset-0 bg-[#01A5A7]/90 backdrop-blur-sm flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h4 className="text-[#1C2C45] mb-1">{member.name}</h4>
                    <p className="text-[#01A5A7] mb-3">{member.designation}</p>
                    <div className="text-[#1C2C45]/60 text-sm">
                      <a 
                        href={`mailto:${member.email}`}
                        className="hover:text-[#01A5A7] transition-colors break-all"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
