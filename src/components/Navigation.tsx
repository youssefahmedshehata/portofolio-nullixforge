import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, data?: any) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string, data?: any) => {
    onNavigate(page, data);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[64px] md:h-[72px] px-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-void-black/80 z-50">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleNavigate('home')}>
          <span className="text-2xl font-bold tracking-tighter lowercase">nullix<span className="text-ember">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-mono tracking-widest uppercase">
            {['home', 'work', 'approach'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`transition-all duration-300 ${currentPage === page
                    ? 'text-ember'
                    : 'text-text-muted opacity-40 hover:opacity-100 hover:text-text-main'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="px-5 py-2 rounded-full border border-ember/40 text-[11px] uppercase tracking-widest font-bold bg-void-black hover:bg-ember hover:text-void-black transition-all"
            onClick={() => handleNavigate('home', { scrollToId: 'contact-form-section' })}
          >
            Start with us
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-text-main hover:text-ember transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-void-black/95 backdrop-blur-xl border-b border-white/5 z-40 p-6 flex flex-col gap-6" style={{ animation: 'fade-in 0.2s ease-out' }}>
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest uppercase items-center">
            {['home', 'work', 'approach'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavigate(page)}
                className={`py-2 transition-all duration-300 w-full text-center ${currentPage === page
                    ? 'text-ember'
                    : 'text-text-muted hover:text-text-main'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="w-full px-5 py-3 rounded-xl border border-ember/40 text-[11px] uppercase tracking-widest font-bold bg-ember text-void-black hover:bg-ember-deep transition-all"
            onClick={() => handleNavigate('home', { scrollToId: 'contact-form-section' })}
          >
            Start with us
          </button>
        </div>
      )}
    </>
  );
}
