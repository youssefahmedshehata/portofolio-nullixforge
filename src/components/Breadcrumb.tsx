import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentPath: string;
}

export function Breadcrumb({ currentPath }: BreadcrumbProps) {
  if (currentPath === '#/' || currentPath === '' || currentPath === '#') {
    return null; // Don't show on home page
  }

  const paths = currentPath.replace('#', '').split('/').filter(Boolean);
  
  // Custom labels for specific path fragments
  const getLabel = (fragment: string) => {
    switch (fragment.toLowerCase()) {
      case 'work': return 'Work';
      case 'approach': return 'Approach';
      case 'services': return 'Services';
      case 'contact': return 'Contact';
      case 'arabic-voice-of-customer-analyzer': return 'Arabic VOC Analyzer';
      case 'poc-demo': return 'Interactive Demo';
      case 'operational-risk-triage-engine': return 'Operational Risk Triage Engine';
      case 'dashboard': return 'Live Dashboard';
      default: return fragment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  const breadcrumbs = paths.map((path, index) => {
    const route = '#/' + paths.slice(0, index + 1).join('/');
    const isLast = index === paths.length - 1;
    return {
      label: getLabel(path),
      route,
      isLast
    };
  });

  const isDashboard = currentPath.includes('/dashboard') || currentPath.includes('/poc-demo');
  const maxWidthClass = isDashboard ? 'max-w-[1440px]' : 'max-w-[1200px]';
  const paddingClass = isDashboard ? 'px-6 md:px-12' : 'px-4 md:px-6';

  return (
    <div className={`absolute top-[80px] inset-x-0 z-40 ${paddingClass}`}>
      <div className={`${maxWidthClass} mx-auto`}>
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#/" className="inline-flex items-center text-[12px] font-mono uppercase tracking-wider text-[#7d8187] hover:text-white transition-colors">
                <Home className="w-[14px] h-[14px] mr-1.5" />
                Home
              </a>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx}>
                <div className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 text-[#4a4d55] mx-1" />
                  {crumb.isLast ? (
                    <span className="text-[12px] font-mono uppercase tracking-wider text-[#dadbdf] ml-1 md:ml-1.5">
                      {crumb.label}
                    </span>
                  ) : (
                    <a href={crumb.route} className="text-[12px] font-mono uppercase tracking-wider text-[#7d8187] hover:text-white ml-1 md:ml-1.5 transition-colors">
                      {crumb.label}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
