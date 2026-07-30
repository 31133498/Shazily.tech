import { person } from '../../data/portfolio';

const navSections = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Press Citations', href: '#press' },
  { label: 'Contact Me', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-zinc-800">

      {/* Main footer body */}
      <div className="w-full px-5 lg:px-20 py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <a href="#hero" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 bg-white rounded-[4px] flex items-center justify-center flex-shrink-0">
                <span className="text-black font-sora font-extrabold text-lg leading-none">S</span>
              </div>
              <span className="font-sora font-bold text-xl text-white tracking-[-0.4px]">
                ShazdTechBro
              </span>
            </a>
            <p className="font-sora font-normal text-sm text-zinc-400 leading-6 max-w-[260px]">
              AI Engineer, Software Developer & Data Scientist based in Lagos, Nigeria.
              7x National Hackathon Winner. 200-Level Data Science student at UNILAG.
            </p>
            <p className="font-sora font-semibold text-sm text-zinc-500 italic">
              "If only I knew better, I would do better."
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <p className="font-sora font-extrabold text-xs text-zinc-600 uppercase tracking-widest">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navSections.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sora font-semibold text-sm text-zinc-300 hover:text-white transition-colors duration-150 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact + Socials */}
          <div className="flex flex-col gap-4">
            <p className="font-sora font-extrabold text-xs text-zinc-600 uppercase tracking-widest">
              Get In Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${person.email}`}
                className="font-sora font-semibold text-sm text-zinc-300 hover:text-white transition-colors duration-150 w-fit"
              >
                {person.email}
              </a>
              {person.socials.filter((s) => s.handle).map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sora font-semibold text-sm text-zinc-300 hover:text-white transition-colors duration-150 w-fit group"
                >
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-150 text-xs uppercase tracking-widest">
                    {social.label}
                  </span>
                  <span>{social.handle}</span>
                </a>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href={person.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 border border-zinc-700 hover:border-white text-zinc-300 hover:text-white font-sora font-semibold text-sm px-4 py-2 rounded-[4px] transition-colors duration-150 w-fit"
            >
              Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-zinc-800 px-5 lg:px-20 py-5">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sora font-normal text-sm text-zinc-600">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p className="font-sora font-normal text-sm text-zinc-600">
            Designed &amp; built by{' '}
            <span className="text-zinc-400 font-semibold">Shazily</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
