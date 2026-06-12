import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { SLTPage } from './components/pages/SLTPage';
import { EventsPage } from './components/pages/EventsPage';
import { AchievementsPage } from './components/pages/AchievementsPage';
import { PublicationsPage } from './components/pages/PublicationsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'slt':
        return <SLTPage />;
      case 'events':
        return <EventsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F2ED] overflow-x-hidden">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(28, 44, 69, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28, 44, 69, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <main className="relative">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}