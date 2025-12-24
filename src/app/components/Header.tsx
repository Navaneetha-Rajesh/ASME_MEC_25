import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Settings } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'slt', label: 'Meet the SLT' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'events', label: 'Events' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div className="relative">
          {/* Glassmorphic background */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl" />
          
          {/* Content */}
          <div className="relative px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#01A5A7] to-[#1C2C45] rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[#1C2C45]">ASME Student Section</div>
                <div className="text-[#1C2C45]/60 text-xs">Govt. Model Engineering College</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative group transition-colors ${
                    activePage === item.id 
                      ? 'text-[#01A5A7]' 
                      : 'text-[#1C2C45]/70 hover:text-[#01A5A7]'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#01A5A7] transition-all duration-300 ${
                      activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#1C2C45] hover:text-[#01A5A7] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-40 lg:hidden"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-2 transition-colors ${
                      activePage === item.id 
                        ? 'text-[#01A5A7]' 
                        : 'text-[#1C2C45]/70 hover:text-[#01A5A7]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
