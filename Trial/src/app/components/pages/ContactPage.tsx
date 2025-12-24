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
      url: 'https://www.linkedin.com/in/asme-mec/',
      color: 'bg-[#0077B5]'
    },
    {
      name: 'Instagram',
      handle: '@asme_mec',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]'
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
      description: "Our institute's official website",
      url: 'https://www.mec.ac.in'
    },
    {
      title: 'Department of Mechanical Engineering',
      description: 'Mechanical Engineering Department, MEC',
      url: 'https://www.mec.ac.in/departments/me'
    },
    {
      title: 'ASME Student Membership',
      description: 'Learn more about student membership benefits',
      url: 'https://www.asme.org/membership/student-membership'
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
            <h1 className="text-[#1C2C45] mb-4 text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-[#1C2C45]/70 max-w-3xl mx-auto text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white/60 backdrop-blur-sm border border-[#01A5A7]/10 rounded-3xl p-6 hover:border-[#01A5A7]/40 transition-all shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#01A5A7]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#01A5A7]" />
                    </div>
                    <div>
                      <h4 className="text-[#1C2C45] font-bold mb-1">{contact.category}</h4>
                      <p className="text-[#1C2C45]/60 text-sm mb-3">{contact.description}</p>
                      <a href={`mailto:${contact.email}`} className="text-[#01A5A7] font-medium flex items-center gap-2 hover:underline">
                        <Mail className="w-4 h-4" /> {contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#1C2C45] font-bold mb-8">Follow Our Journey</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-full sm:w-[250px] bg-white/60 p-6 rounded-3xl border border-[#01A5A7]/10 shadow-sm flex flex-col items-center"
              >
                <div className={`w-14 h-14 ${social.color} rounded-2xl mb-4 flex items-center justify-center text-white text-xl font-bold`}>
                  {social.name[0]}
                </div>
                <h4 className="text-[#1C2C45] font-bold">{social.name}</h4>
                <p className="text-[#1C2C45]/50 text-sm">{social.handle}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Address Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1C2C45] text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-12 h-12 bg-[#01A5A7] rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Visit Our Campus</h3>
                <div className="space-y-4 text-white/70">
                  <p className="font-medium text-white">Govt. Model Engineering College</p>
                  <p>Thrikkakara, Kochi</p>
                  <p>Kerala, India - 682021</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <a href="mailto:asme@mec.ac.in" className="flex items-center gap-3 text-white/80 hover:text-[#01A5A7] transition-colors">
                  <Mail className="w-5 h-5" /> asme@mec.ac.in
                </a>
              </div>
            </motion.div>

            {/* Embedded Map Column */}
            {/* Embedded Map Column */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="lg:col-span-2 group relative min-h-[450px]"
>
  <div className="w-full h-full rounded-3xl overflow-hidden border border-[#01A5A7]/20 shadow-2xl bg-white/50 relative">
    {/* REPLACEMENT: Paste your unique link in the src below */}
    <iframe
      title="MEC Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8605577667586!2d76.3259374750316!3d10.028363690078491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5006491601%3A0xcf23e14245d4694d!2sGovt%20Model%20Engineering%20College!5e0!3m2!1sen!2sin!4v1766604644190!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 group-hover:grayscale-0 transition-all duration-700"
    ></iframe>
    
    {/* Corner Label - Keep this, it makes the design stand out! */}
    <div className="absolute top-4 left-4 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 border border-[#01A5A7]/20">
        <div className="w-2 h-2 bg-[#01A5A7] rounded-full animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C2C45]">Live Campus View</span>
      </div>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* Helpful Links Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#1C2C45] font-bold mb-8">Resource Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpfulLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-white/60 border border-[#01A5A7]/5 rounded-2xl hover:border-[#01A5A7]/30 transition-all"
              >
                <div>
                  <h4 className="text-[#1C2C45] font-bold group-hover:text-[#01A5A7] transition-colors">{link.title}</h4>
                  <p className="text-[#1C2C45]/60 text-sm">{link.description}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#01A5A7] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}