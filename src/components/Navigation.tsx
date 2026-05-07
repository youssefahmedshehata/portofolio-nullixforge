interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 w-full h-[64px] md:h-[72px] px-6 md:px-12 flex items-center justify-between border-b border-white/5 bg-void-black/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
        <span className="text-2xl font-bold tracking-tighter lowercase">nullix<span className="text-ember">.</span></span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <div className="flex gap-8 text-[11px] font-mono tracking-widest uppercase">
          {['home', 'work', 'approach'].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`transition-all duration-300 ${
                currentPage === page 
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
          onClick={() => onNavigate('home')}
        >
          Start from zero
        </button>
      </div>
    </nav>
  );
}
