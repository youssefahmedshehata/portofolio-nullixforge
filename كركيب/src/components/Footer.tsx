export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-void-black/80 backdrop-blur-sm z-50 py-6 px-6 md:px-12 text-[10px] font-mono tracking-widest text-[#6F6A63] uppercase">
      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
          <span className="text-text-main">nullix.</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-right items-center">
          <span className="text-ember/60">© 2026 NULLIXFORGE.COM</span>
        </div>

      </div>
    </footer>
  );
}
