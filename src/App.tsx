import { useState, useEffect, useRef } from 'react';
import { Starfield } from './components/Starfield';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Approach } from './pages/Approach';
import { useSuperAnimationScope } from './superanimation';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [routeData, setRouteData] = useState<any>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  useSuperAnimationScope(mainRef, [currentPage]);

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
    switch (currentPage) {
      case 'home':
        return (
          <Home
            initialService={routeData?.service}
            shouldScrollToForm={routeData?.scrollToId === 'contact-form-section'}
          />
        );
      case 'work':
        return <Work onNavigate={handleNavigate} />;
      case 'approach':
        return <Approach />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen text-text-main flex flex-col font-sans selection:bg-ember-deep selection:text-text-main relative">
      <Starfield />

      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main
        ref={mainRef}
        className="flex-grow flex flex-col relative z-10 w-full animate-in fade-in duration-700"
        data-sa-page-shell
      >
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}