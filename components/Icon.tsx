import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const icons: { [key: string]: React.ReactNode } = {
    logo: (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2zm0 6h2v2h-2z" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM11 9.5a1 1 0 011-1h0a1 1 0 011 1V12a1 1 0 01-1 1h0a1 1 0 01-1-1v-2.5zM12 15.5a1 1 0 100-2 1 1 0 000 2z" transform="translate(0.005, 0.005) scale(0.999)" />
        <path d="M10.06 7.58c.2-.21.45-.38.72-.5.27-.12.56-.19.86-.22.3-.03.6.02.88.11.28.09.54.23.77.41.22.18.42.41.57.66.15.25.25.53.29.82.04.29.02.58-.06.87-.08.28-.21.55-.38.8-.17.24-.38.46-.62.64-.24.18-.5.33-.78.44s-.58.18-.88.19c-.3 0-.6-.05-.88-.14s-.54-.24-.77-.41c-.22-.17-.42-.39-.58-.64s-.26-.53-.3-.82c-.04-.29-.02-.58.06-.86s.21-.55.38-.8c.18-.25.38-.47.62-.65zm.48 2.06c.07.1.15.19.25.26.1.07.2.13.31.17s.23.06.35.06.24-.02.35-.06.2-.1.3-.17.18-.16.25-.26.12-.22.15-.34.03-.24.03-.36c0-.12-.01-.24-.04-.35s-.08-.22-.15-.32-.14-.18-.24-.25-.2-.12-.32-.15c-.12-.03-.24-.04-.36-.04s-.24.01-.36.04-.22.08-.32.15-.18.15-.25.25-.13.2-.16.32c-.03.11-.05.23-.05.35 0 .12.01.24.04.36z" />
      </svg>
    ),
    sparkles: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="M12 3L9.27 9.27L3 12l6.27 2.73L12 21l2.73-6.27L21 12l-6.27-2.73z"/></svg>
    ),
    download: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
    ),
    trash: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    ),
    chevronDown: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><polyline points="6 9 12 15 18 9"></polyline></svg>
    ),
    image: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    ),
    character: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    ),
    background: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="m3 16 4-4 6 6 8-8"></path><path d="M3 6l4 4 6-6 8 8"></path></svg>
    ),
    item: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    ),
    vehicle: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}><path d="M14 16.5 17.5 13H22v-2h-4.5l-3.5-3.5L12 6.5 8 2.5 4.5 6H2v2h2.5l3.5 3.5L10 13.5 6 17.5 2.5 21H7l4.5-4.5 2-2L18.5 21H22l-3.5-4.5Z"></path></svg>
    ),
  };
  return (
    <div className={className}>
      {icons[name] || <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>}
    </div>
  );
};
