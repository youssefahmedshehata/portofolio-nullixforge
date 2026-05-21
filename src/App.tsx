/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ApproachPage } from './pages/ApproachPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

function useHashLocation() {
  const [loc, setLoc] = useState(window.location.hash || '#/');
  useEffect(() => {
    const handler = () => setLoc(window.location.hash || '#/');
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return loc;
}

export default function App() {
  const hash = useHashLocation();
  
  let Page = HomePage;
  if (hash === '#/work') Page = WorkPage;
  else if (hash === '#/approach') Page = ApproachPage;
  else if (hash === '#/services') Page = ServicesPage;
  else if (hash === '#/contact') Page = ContactPage;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col">
      <SiteHeader currentPath={hash} />
      <main className="flex-grow">
        <Page />
      </main>
      <SiteFooter />
    </div>
  );
}
