import { motion } from 'motion/react';
import { BookOpen, Download, ExternalLink, FileText } from 'lucide-react';

export function PublicationsPage() {
  const publications = [
    {
      title: 'MechInsight Magazine',
      issue: 'Vol. 12, Issue 4',
      date: 'December 2024',
      description: 'Feature: Sustainable Manufacturing Technologies and Industry 4.0 Innovations',
      cover: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjY0NzgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'MechInsight Magazine',
      issue: 'Vol. 12, Issue 3',
      date: 'September 2024',
      description: 'Special Edition: Robotics and Automation in Modern Manufacturing',
      cover: 'https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'MechInsight Magazine',
      issue: 'Vol. 12, Issue 2',
      date: 'June 2024',
      description: 'Focus: Renewable Energy Systems and Green Engineering Solutions',
      cover: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2NjQ3ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'MechInsight Magazine',
      issue: 'Vol. 12, Issue 1',
      date: 'March 2024',
      description: 'Inaugural Issue: Future of Mechanical Engineering Education',
      cover: 'https://images.unsplash.com/photo-1596495868845-63031cb496da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY2NDc4MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Annual Activity Report',
      issue: 'Year 2023-24',
      date: 'December 2023',
      description: 'Comprehensive report of all section activities, achievements, and financial summary',
      cover: 'https://images.unsplash.com/photo-1715322506425-2fc19fe0fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBnZWFyc3xlbnwxfHx8fDE3NjYzOTg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'MechInsight Magazine',
      issue: 'Vol. 11, Issue 4',
      date: 'November 2023',
      description: 'Special: Advanced Materials and Additive Manufacturing',
      cover: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NjY0NzgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const membershipResources = [
    {
      title: 'ASME Student Membership Benefits',
      description: 'Learn about exclusive benefits including networking, publications, and career resources',
      url: 'https://www.asme.org/membership/students'
    },
    {
      title: 'Digital Library Access',
      description: 'Access thousands of technical papers, journals, and proceedings',
      url: 'https://www.asme.org/publications-submissions/digital-collection'
    },
    {
      title: 'Professional Development Center',
      description: 'Free courses, webinars, and certification preparation resources',
      url: 'https://www.asme.org/professional-development'
    },
    {
      title: 'Career Resources & Job Board',
      description: 'Exclusive job postings, resume reviews, and career guidance',
      url: 'https://www.asme.org/career-education'
    },
    {
      title: 'ASME Standards & Codes',
      description: 'Access to industry-standard codes and specifications',
      url: 'https://www.asme.org/codes-standards'
    },
    {
      title: 'Global Events & Conferences',
      description: 'Discounted registration for ASME conferences worldwide',
      url: 'https://www.asme.org/events'
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
              <BookOpen className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">Publications & Resources</span>
            </div>
            <h1 className="text-[#1C2C45] mb-4">Publications & Resources</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Access our technical publications, magazines, and valuable ASME membership resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-2">Newsletter & Magazines</h2>
            <p className="text-[#1C2C45]/70">Download past issues of our technical publications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl overflow-hidden hover:border-[#01A5A7]/30 transition-all">
                  {/* Cover Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={publication.cover}
                      alt={publication.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45] via-[#1C2C45]/50 to-transparent" />
                    
                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-[#01A5A7]/90 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Download className="w-8 h-8 text-white" />
                      </motion.button>
                    </motion.div>

                    {/* Issue badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#01A5A7]/20 backdrop-blur-sm border border-[#01A5A7]/30">
                      <span className="text-white text-sm">{publication.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-[#1C2C45] mb-1">{publication.title}</h4>
                    <p className="text-[#01A5A7] text-sm mb-3">{publication.issue}</p>
                    <p className="text-[#1C2C45]/70 text-sm mb-4">{publication.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all inline-flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </motion.button>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#E83CF9]/0 group-hover:bg-[#E83CF9]/5 transition-all duration-300 -z-10 blur-xl rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASME Membership Resources */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-2">ASME Membership Resources</h2>
            <p className="text-[#1C2C45]/70">Explore exclusive resources available to ASME members</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {membershipResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 hover:border-[#01A5A7]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#01A5A7]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#01A5A7]/20 transition-colors">
                      <FileText className="w-6 h-6 text-[#01A5A7]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#1C2C45] mb-2 group-hover:text-[#01A5A7] transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-[#1C2C45]/70 text-sm mb-3">{resource.description}</p>
                      <div className="inline-flex items-center gap-2 text-[#01A5A7] text-sm group-hover:gap-3 transition-all">
                        <span>Visit Resource</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#1C2C45] to-[#1C2C45]/80 rounded-3xl p-12">
              <h2 className="text-white mb-4">Not an ASME Member Yet?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join ASME today and get access to thousands of technical resources, networking 
                opportunities, and professional development programs.
              </p>
              <motion.a
                href="https://www.asme.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#83cf90] text-[#1C2C45] rounded-full hover:bg-[#83cf90]/90 transition-all"
              >
                Join ASME Today
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
