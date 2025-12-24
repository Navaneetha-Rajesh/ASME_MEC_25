import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ExternalLink, MessageCircle, Users, Briefcase } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      category: 'General Inquiries',
      email: 'info@asme-mec.org',
      icon: MessageCircle,
      description: 'For general questions about ASME MEC Student Section'
    },
    {
      category: 'Membership Queries',
      email: 'membership@asme-mec.org',
      icon: Users,
      description: 'Questions about joining ASME or membership benefits'
    },
    {
      category: 'Event Registrations',
      email: 'events@asme-mec.org',
      icon: Briefcase,
      description: 'Register for workshops, seminars, and competitions'
    },
    {
      category: 'Collaborations & Sponsorships',
      email: 'partnerships@asme-mec.org',
      icon: ExternalLink,
      description: 'Industry partnerships and sponsorship opportunities'
    }
  ];

  const socialMedia = [
    {
      name: 'LinkedIn',
      handle: '@asme-mec',
      url: 'https://linkedin.com',
      color: 'bg-[#0077B5]'
    },
    {
      name: 'Instagram',
      handle: '@asme_mec',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]'
    },
    {
      name: 'Facebook',
      handle: '/asmemec',
      url: 'https://facebook.com',
      color: 'bg-[#1877F2]'
    },
    {
      name: 'Twitter',
      handle: '@asme_mec',
      url: 'https://twitter.com',
      color: 'bg-[#1DA1F2]'
    },
    {
      name: 'YouTube',
      handle: 'ASME MEC',
      url: 'https://youtube.com',
      color: 'bg-[#FF0000]'
    }
  ];

  const helpfulLinks = [
    {
      title: 'ASME International',
      description: 'Official ASME website with global resources',
      url: 'https://www.asme.org'
    },
    {
      title: 'Govt. Model Engineering College',
      description: 'Our institute\'s official website',
      url: 'https://www.mec.ac.in'
    },
    {
      title: 'Department of Mechanical Engineering',
      description: 'Mechanical Engineering Department, MEC',
      url: 'https://www.mec.ac.in/mechanical'
    },
    {
      title: 'ASME Student Sections Worldwide',
      description: 'Connect with ASME chapters globally',
      url: 'https://www.asme.org/students'
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
              <MessageCircle className="w-4 h-4 text-[#01A5A7]" />
              <span className="text-[#01A5A7]">Get in Touch</span>
            </div>
            <h1 className="text-[#1C2C45] mb-4">Contact Us</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-2">Contact Information</h2>
            <p className="text-[#1C2C45]/70">Reach out to us through the appropriate channel</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 hover:border-[#01A5A7]/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#01A5A7]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#01A5A7]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#01A5A7]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#1C2C45] mb-2">{contact.category}</h4>
                        <p className="text-[#1C2C45]/60 text-sm mb-3">{contact.description}</p>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="inline-flex items-center gap-2 text-[#01A5A7] hover:text-[#01A5A7]/80 transition-colors group-hover:gap-3"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{contact.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-[#1C2C45] mb-2">Follow Us on Social Media</h2>
            <p className="text-[#1C2C45]/70">Stay connected and get the latest updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 hover:border-[#01A5A7]/30 transition-all text-center">
                  <div className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                    {social.name[0]}
                  </div>
                  <h4 className="text-[#1C2C45] mb-1">{social.name}</h4>
                  <p className="text-[#1C2C45]/60 text-sm">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Location */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-2">Visit Us</h2>
            <p className="text-[#1C2C45]/70">Find us at Govt. Model Engineering College</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#1C2C45] to-[#1C2C45]/80 rounded-3xl p-8 h-full">
                <MapPin className="w-12 h-12 text-[#01A5A7] mb-6" />
                <h3 className="text-white mb-4">Our Location</h3>
                <div className="space-y-3 text-white/80">
                  <p>ASME Student Section</p>
                  <p>Department of Mechanical Engineering</p>
                  <p>Govt. Model Engineering College</p>
                  <p>Thrikkakara, Kochi</p>
                  <p>Kerala, India - 682021</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/80 mb-3">
                    <Phone className="w-5 h-5 text-[#01A5A7]" />
                    <a href="tel:+910484123456" className="hover:text-white transition-colors">
                      +91 (0484) 123 456
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="w-5 h-5 text-[#01A5A7]" />
                    <a href="mailto:info@asme-mec.org" className="hover:text-white transition-colors">
                      info@asme-mec.org
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl overflow-hidden h-full min-h-[400px]">
                <div className="relative w-full h-full flex items-center justify-center p-12">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#01A5A7] mx-auto mb-4" />
                    <p className="text-[#1C2C45]/70 mb-4">Interactive Map</p>
                    <p className="text-[#1C2C45]/60 text-sm mb-6">Govt. Model Engineering College, Kochi</p>
                    <motion.a
                      href="https://maps.google.com/?q=Govt+Model+Engineering+College+Kochi"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#01A5A7] text-white rounded-full hover:bg-[#01A5A7]/90 transition-all"
                    >
                      Open in Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  {/* Decorative grid */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(1, 165, 167, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(1, 165, 167, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[#1C2C45] mb-2">Helpful Links</h2>
            <p className="text-[#1C2C45]/70">Quick access to related websites and resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpfulLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 hover:border-[#01A5A7]/30 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-[#1C2C45] mb-2 group-hover:text-[#01A5A7] transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-[#1C2C45]/70 text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#01A5A7] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
