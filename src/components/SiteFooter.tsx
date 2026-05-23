export function SiteFooter() {
  return (
    <footer className="py-[48px] px-6 md:px-[24px] border-t border-[#212327] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-[32px]">
        <div className="flex items-center">
          <img src="/nullix-logo-white-transparent.png" alt="Nullix" className="h-[24px] w-auto opacity-75 hover:opacity-100 transition-opacity" />
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
