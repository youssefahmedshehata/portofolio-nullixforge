import { useState, useEffect } from 'react';
import { GenesisDawnField } from './components/GenesisDawnField';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Approach } from './pages/Approach';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [routeData, setRouteData] = useState<any>(null);

  // Simple scroll to top on page change unless routeData tells us otherwise
  useEffect(() => {
    if (!routeData?.scrollToId) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage, routeData]);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    setRouteData(data || null);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home initialService={routeData?.service} shouldScrollToForm={routeData?.scrollToId === 'contact-form-section'} />;
      case 'work': return <Work onNavigate={handleNavigate} />;
      case 'approach': return <Approach />; // You can add onNavigate here if needed later
      default: return <Home />;
    }
  };

  return (
    <>
      <GenesisDawnField currentPage={currentPage} />
      <div className="min-h-screen text-text-main flex flex-col font-sans selection:bg-ember-deep selection:text-text-main relative w-full overflow-x-hidden">

        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow flex flex-col relative z-10 w-full animate-in fade-in duration-700">
        {renderPage()}
      </main>
      
      <Footer />
      </div>
    </>
  );
}
