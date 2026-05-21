import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function SiteHeader({ currentPath = '#/' }: { currentPath?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItem = (path: string, label: string) => {
    const isActive = currentPath === path;
    return (
      <a 
        href={path} 
        onClick={() => setMobileMenuOpen(false)}
        className={`${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'} transition-colors`}
      >
        {label}
      </a>
    );
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="#/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 hover:opacity-80 transition-opacity relative z-50">
            <svg width="24" height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
            </svg>
            <span className="font-semibold tracking-tight text-xl text-white ml-2">Nullix</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-neutral-400">
            {navItem('#/work', 'Showcase')}
            {navItem('#/approach', 'Docs')}
            {navItem('#/services', 'Templates')}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a href="#/contact" onClick={() => setMobileMenuOpen(false)} className="hidden md:flex px-4 py-2 rounded-md border border-transparent bg-white text-black text-[14px] font-medium hover:bg-neutral-200 transition-colors relative z-50">
            Sign Up
          </a>
          <button 
            className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6 relative z-50"
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
            className="fixed inset-0 bg-black pt-24 px-6 md:hidden flex flex-col z-40"
          >
            <nav className="flex flex-col gap-8 text-2xl font-medium mt-12">
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
