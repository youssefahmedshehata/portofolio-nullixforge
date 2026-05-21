export function SiteFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
          </svg>
          <span className="font-semibold tracking-tight text-white text-lg ml-2">Nullix</span>
        </div>
        
        <div className="flex flex-wrap gap-8 text-[14px] font-medium text-[#a1a1a1]">
          <a href="#/work" className="hover:text-white transition-colors">Showcase</a>
          <a href="#/approach" className="hover:text-white transition-colors">Docs</a>
          <a href="#/services" className="hover:text-white transition-colors">Templates</a>
          <a href="#/contact" className="hover:text-white transition-colors border-l border-white/10 pl-8">Status</a>
        </div>
        
        <div className="text-[14px] text-[#888]">
          © {new Date().getFullYear()} Nullix Inc.
        </div>
      </div>
    </footer>
  );
}
