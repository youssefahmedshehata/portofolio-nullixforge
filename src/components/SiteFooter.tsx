export function SiteFooter() {
  return (
    <footer className="py-[48px] px-6 md:px-[24px] border-t border-[#212327] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-[32px]">
        <div className="flex items-center gap-[8px]">
          <svg width="24" height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
          </svg>
          <span className="font-normal text-white text-[20px]">Nullix</span>
        </div>
        
        <div className="flex flex-wrap gap-[32px] text-[14px] leading-[20px] font-normal text-[#dadbdf]">
          <a href="#/work" className="hover:text-white transition-colors">Showcase</a>
          <a href="#/approach" className="hover:text-white transition-colors">Docs</a>
          <a href="#/services" className="hover:text-white transition-colors">Templates</a>
          <a href="#/contact" className="hover:text-white transition-colors">Status</a>
        </div>
        
        <div className="text-[14px] leading-[20px] font-normal text-[#7d8187]">
          © {new Date().getFullYear()} Nullix Inc.
        </div>
      </div>
    </footer>
  );
}
