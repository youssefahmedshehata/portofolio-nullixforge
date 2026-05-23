import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function SiteHeader({ currentPath = '#/' }: { currentPath?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItem = (path: string, label: string) => {
    const isActive = currentPath === path;
    return (
      <a 
        href={path} 
        onClick={() => setMobileMenuOpen(false)}
        className={`${isActive ? 'text-white' : 'text-[#dadbdf] hover:text-white'} transition-colors`}
      >
        {label}
      </a>
    );
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: isHidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 inset-x-0 z-50 px-[24px] py-[16px] bg-[#0a0a0a]"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex items-center gap-[48px]">
          <a href="#/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-[8px] hover:opacity-80 transition-opacity relative z-50">
            <svg width="24" height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
            </svg>
            <span className="font-normal text-[20px] text-white">Nullix</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-[24px] text-[14px] leading-[20px] font-normal text-[#dadbdf]">
            {navItem('#/work', 'Showcase')}
            {navItem('#/approach', 'Docs')}
            {navItem('#/services', 'Templates')}
          </nav>
        </div>

        <div className="flex items-center gap-[16px]">
          <a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="hidden md:flex items-center justify-center px-[24px] py-[8px] rounded-full bg-white border border-white text-[#0a0a0a] text-[14px] leading-[20px] font-normal transition-colors hover:bg-[#fafaf7] relative z-50">
            Sign Up
          </a>
          <button 
            className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6 relative z-50 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`w-full h-px bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-full h-px bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-full h-px bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#0a0a0a] pt-[96px] px-[24px] md:hidden flex flex-col z-40"
          >
            <nav className="flex flex-col gap-[32px] text-[24px] leading-[32px] font-normal tracking-[-0.6px] mt-[48px]">
              {navItem('#/work', 'Showcase')}
              {navItem('#/approach', 'Docs')}
              {navItem('#/services', 'Templates')}
              {navItem('#/contact', 'Sign Up')}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
