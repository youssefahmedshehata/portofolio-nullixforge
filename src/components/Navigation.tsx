import { useEffect, useRef, useState } from 'react';
import { animateOnCompositor, prefersReducedMotion, safeCancelAnimation, supportsWAAPI } from '../superanimation';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, data?: any) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuAnimationRef = useRef<Animation | null>(null);

  const handleNavigate = (page: string, data?: any) => {
    onNavigate(page, data);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuRendered(true);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu || !isMobileMenuRendered) return undefined;

    safeCancelAnimation(mobileMenuAnimationRef.current);

    if (!supportsWAAPI() || prefersReducedMotion()) {
      if (!isMobileMenuOpen) {
        setIsMobileMenuRendered(false);
      }

      return undefined;
    }

    const handle = animateOnCompositor(
      menu,
      isMobileMenuOpen
        ? [
          { opacity: '0', transform: 'translate3d(0, -8px, 0)' },
          { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        ]
        : [
          { opacity: '1', transform: 'translate3d(0, 0, 0)' },
          { opacity: '0', transform: 'translate3d(0, -8px, 0)' },
        ],
      {
        duration: isMobileMenuOpen ? 220 : 160,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'forwards',
        willChange: 'opacity, transform',
      },
    );

    mobileMenuAnimationRef.current = handle.animation;

    if (!isMobileMenuOpen) {
      const finishHandler = () => {
        setIsMobileMenuRendered(false);
        mobileMenuAnimationRef.current = null;
      };

      handle.animation?.addEventListener('finish', finishHandler, { once: true });

      return () => {
        handle.animation?.removeEventListener('finish', finishHandler);
      };
    }

    return () => {
      handle.cancel();
    };
  }, [isMobileMenuOpen, isMobileMenuRendered]);

  return (
    <>
      <nav
        data-sa-promote
        data-sa-will-change="transform, opacity"
        className="fixed top-0 left-0 w-full h-[64px] md:h-[72px] px-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-void-black/80 backdrop-blur-md z-50"
      >
        <div
          data-sa-promote
          data-sa-will-change="transform"
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => handleNavigate('home')}
        >
          <span className="text-2xl font-bold tracking-tighter lowercase">
            nullix<span className="text-ember">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-mono tracking-widest uppercase">
            {['home', 'work', 'approach'].map((page) => (
              <button
                key={page}
                data-sa-promote
                data-sa-will-change="opacity, transform"
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
            data-sa-promote
            data-sa-will-change="opacity, transform"
            className="px-5 py-2 rounded-full border border-ember/40 text-[11px] uppercase tracking-widest font-bold bg-void-black hover:bg-ember hover:text-void-black transition-all"
            onClick={() => handleNavigate('home', { scrollToId: 'contact-form-section' })}
          >
            Start with us
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          data-sa-promote
          data-sa-will-change="opacity, transform"
          className="md:hidden flex items-center justify-center p-2 text-text-main hover:text-ember transition-colors"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile navigation"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuRendered && (
        <div
          ref={mobileMenuRef}
          data-sa-promote
          data-sa-will-change="opacity, transform"
          aria-hidden={!isMobileMenuOpen}
          className="md:hidden fixed top-[64px] left-0 w-full bg-void-black/95 backdrop-blur-xl border-b border-white/5 z-40 p-6 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest uppercase items-center">
            {['home', 'work', 'approach'].map((page) => (
              <button
                key={page}
                data-sa-promote
                data-sa-will-change="opacity, transform"
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
            data-sa-promote
            data-sa-will-change="opacity, transform"
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