import { motion } from 'motion/react';
import { Mail, Linkedin, Users } from 'lucide-react';

export function SLTPage() {
  const hod = {
    name: 'Varghese M P',
    title: 'Assistant Proffesor, Department of Mechanical Engineering',
    image: '/images/Team/Varghese.jpeg',
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
      image: '/images/Team/Meenakshi.jpg'
    },
    {
      name: 'Vidhuganga N P',
      designation: 'Vice-Chairperson',
      image: '/images/Team/Vidhuganga.png'
    },
    {
      name: 'Ishan',
      designation: 'General Secretary',
      image: '/images/Team/Ishan.jpeg'
    },
    {
      name: 'Jithendranath A M',
      designation: 'Joint Secretary',
      image: '/images/Team/Jithendranath.webp'
    },
    {
      name: 'Anantesh S Pai',
      designation: 'Treasurer',
      image: '/images/Team/Anantesh.jpeg'
    },
    {
      name: 'Akhil Raju',
      designation: 'Marketing Head',
      image: '/images/Team/Akhil.jpg'
    },
    {
      name: 'Jothsna Mariyam George',
      designation: 'Marketing Subhead',
      image: '/images/Team/Jothsna.jpg'
    },
    {
      name: 'Athul Krishnan P',
      designation: 'Event Head',
      image: '/images/Team/Athul.jpg'
    },
    {
      name: 'Janaki S',
      designation: 'Event Subhead',
      image: '/images/Team/Janaki.jpg'
    },
    {
      name: 'Sacheth P R',
      designation: 'Design Head',
      image: '/images/Team/Sacheth.jpg'
    },
    {
      name: 'B Brahmanarayanan',
      designation: 'Design Subhead',
      image: '/images/Team/Brahmanarayanan.jpg',
    },
    {
      name: 'Hrishikesh C R',
      designation: 'Media Head',
      image: '/images/Team/Hrishikesh.jpg'
    },
    {
      name: 'Chandra S Nair',
      designation: 'Publicity Head',
      image: '/images/Team/Chandra.jpeg'
    },
    {
      name: 'Navaneetha Rajesh',
      designation: 'Tech Web Head',
      image: '/images/Team/Navaneetha.jpg'
    },
    {
      name: 'Meghashree Girish',
      designation: 'Content Head',
      image: '/images/Team/Meghashree.jpg'
    },
    {
      name: 'Niya Sunil',
      designation: 'Creatives Head',
      image: '/images/Team/Niya.jpeg'
    },
    {
      name: 'Anjana Anoop',
      designation: 'Documentation Head',
      image: '/images/Team/Anjana.jpg'
    },
    {
      name: 'Hanna Shibu Mathew',
      designation: 'Link Rep',
      image: '/images/Team/Hannah.jpg'
    },
    {
      name: 'Bharath Krishna',
      designation: 'Link Rep',
      image: '/images/Team/Bharath.jpg'
    },
    {
      name: 'Fathima K K',
      designation: 'Second Year Reps',
      image: '/images/Team/Fathima.jpg'
    },
    {
      name: 'Jewel Rose Shajan',
      designation: 'Second Year Reps',
      image: '/images/Team/Jewel.jpeg'
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
      <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl overflow-hidden hover:border-[#01A5A7]/30 transition-all shadow-sm h-full">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/80 to-transparent" />
        </div>

        {/* Info Container */}
        <div className="p-6 text-center">
          <h4 className="text-[#1C2C45] font-bold text-lg mb-1">{member.name}</h4>
          <p className="text-[#01A5A7] text-sm font-medium">{member.designation}</p>
        </div>
      </div>

      {/* Glow effect (outside the card to avoid overflow clipping) */}
      <div className="absolute inset-0 bg-[#E83CF9]/5 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur-xl rounded-3xl pointer-events-none" />
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
}
