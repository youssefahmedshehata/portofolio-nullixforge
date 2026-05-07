import { useState, useEffect } from 'react';
import { Starfield } from './components/Starfield';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Approach } from './pages/Approach';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'work': return <Work />;
      case 'approach': return <Approach />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen text-text-main flex flex-col font-sans selection:bg-ember-deep selection:text-text-main relative">
      <Starfield />
      
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow flex flex-col relative z-10 w-full animate-in fade-in duration-700">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}
