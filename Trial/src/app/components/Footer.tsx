import { motion } from 'motion/react';
import { MapPin, ExternalLink, Mail, Phone } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export function Footer({ setActivePage }: FooterProps) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Meet the SLT', id: 'slt' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Events', id: 'events' },
    { label: 'Contact Us', id: 'contact' }
  ];
  
  const socialMedia = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/asme-mec/' },
    { name: 'Instagram', url: 'https://www.instagram.com/asme_mec?igsh=aHluZ29yb3N6ZGJ5' }
  ];

  const handleLinkClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1C2C45] text-white overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Quick Links */}
            <div>
              <h4 className="mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`}
                      onClick={() => handleLinkClick(link.id)}
                      className="text-white/70 hover:text-[#01A5A7] transition-colors inline-flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#01A5A7] rounded-full group-hover:w-2 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h4 className="mb-6">Contact Information</h4>
              <div className="space-y-4 text-white/70 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#01A5A7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90 mb-1">General Inquiries:</p>
                    <a href="mailto:asme.mec.mdl@gmail.com" className="hover:text-[#01A5A7] transition-colors">
                      asme.mec.mdl@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#01A5A7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Govt. Model Engineering College</p>
                    <p>Thrikkakara, Kochi</p>
                    <p>Kerala, India - 682021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h4 className="mb-6">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-3 rounded-lg bg-white/10 hover:bg-[#01A5A7] transition-all text-center"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/70 text-sm mb-3">Official Partners:</p>
                <div className="space-y-2">
                  <a 
                    href="https://www.asme.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-[#01A5A7] transition-colors text-sm group"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>ASME International</span>
                  </a>
                  <a 
                    href="https://www.mec.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-[#01A5A7] transition-colors text-sm group"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>MEC Official Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#01A5A7] rotate-45" />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span>© {new Date().getFullYear()} ASME MEC Student Section.</span>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://www.asme.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#01A5A7] transition-colors"
              >
                ASME.org
              </a>
              <span>|</span>
              <a 
                href="https://www.mec.ac.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#01A5A7] transition-colors"
              >
                MEC Website
              </a>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#01A5A7]/10 blur-3xl pointer-events-none" />
      </div>
    </footer>
  );
}