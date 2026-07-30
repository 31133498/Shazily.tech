import { useState, useEffect } from 'react';
import { person } from '../../data/portfolio';

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Press Citations', href: '#press' },
  { label: 'Contact Me', href: '#contact' },
];

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setOpen(false);
    };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="w-full px-5 lg:px-20 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-[4px] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-sora font-extrabold text-lg leading-none">S</span>
            </div>
            <span className="font-sora font-bold text-xl text-black tracking-[-0.4px]">
              ShazdTechBro
            </span>
          </a>

          {/* Desktop nav — only rendered when not mobile */}
          {!isMobile && (
            <nav className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sora font-semibold text-sm text-black tracking-[-0.4px] hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right side: Resume on desktop, hamburger on mobile — never both */}
          <div className="flex items-center">
            {isMobile ? (
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((o) => !o)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              >
                <span className={`block w-6 h-[2px] bg-black rounded-full transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-6 h-[2px] bg-black rounded-full transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-6 h-[2px] bg-black rounded-full transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            ) : (
              <a
                href={person.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white font-sora font-semibold text-sm px-4 py-2 rounded-[4px] hover:bg-zinc-800 transition-colors"
              >
                Resume <DownloadIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Mobile drawer — only when isMobile AND open */}
      {isMobile && open && (
        <div className="border-t border-black/10 bg-white">
          <nav className="flex flex-col px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sora font-semibold text-base text-black py-4 border-b border-zinc-100 last:border-none tracking-[-0.4px] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href={person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-black text-white font-sora font-semibold text-sm px-4 py-3 rounded-[4px] hover:bg-zinc-800 transition-colors"
            >
              Download Resume <DownloadIcon />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
