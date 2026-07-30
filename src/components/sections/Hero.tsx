import { motion } from 'framer-motion';
import { person } from '../../data/portfolio';

const socialIcons = [
  {
    label: 'GitHub',
    href: 'https://github.com/31133498',
    filled: true,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sanni-shazily-bba942266/',
    filled: false,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ShazdTechbro',
    filled: false,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: `mailto:${person.email}`,
    filled: false,
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

function SocialRow() {
  return (
    <div className="flex gap-3 items-center flex-wrap">
      {socialIcons.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] flex items-center justify-center transition-opacity hover:opacity-70 flex-shrink-0 ${
            s.filled ? 'bg-black text-white' : 'border-2 border-black text-black'
          }`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-white overflow-hidden">

      {/* ═══ DESKTOP (lg+): text left, image right, no box ═══ */}
      <div className="hidden lg:flex flex-row items-end justify-between min-h-[88vh] pl-20 gap-0 max-w-[1400px] mx-auto">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 max-w-[580px] pb-6 flex-1"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 items-start text-[48px] leading-[56px] tracking-[-0.96px]">
              <span className="font-sora font-normal text-black">Hello I'm</span>
              <span className="font-sora font-extrabold text-black">{person.name.split(' ')[1]}.</span>
            </div>
            <div className="flex flex-wrap gap-4 items-start text-[48px] leading-[56px] tracking-[-0.96px] font-extrabold">
              <span className="font-sora text-black">I Build</span>
              <span className="font-sora text-stroke">Software.</span>
            </div>
            <div className="flex flex-wrap gap-4 items-start text-[48px] leading-[56px] tracking-[-0.96px] font-extrabold">
              <span className="font-sora text-black">Ship Products.</span>
            </div>
            <div className="flex flex-wrap gap-4 items-start text-[48px] leading-[56px] tracking-[-0.96px]">
              <span className="font-sora font-normal text-black">Based In</span>
              <span className="font-sora font-extrabold text-black">Lagos.</span>
            </div>
          </div>

          <p className="font-sora font-normal text-zinc-500 text-base leading-6 tracking-[0.32px]">
            {person.bio}
          </p>

          <SocialRow />
        </motion.div>

        {/* Right — image floats freely, no decorative box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex-shrink-0 self-end"
        >
          {/* Hackathon badge */}
          <div className="absolute top-10 -left-6 z-10 bg-black text-white font-sora font-bold text-sm px-4 py-2 rounded-[4px] whitespace-nowrap shadow-lg">
            7x Hackathon Winner
          </div>

          <img
            src={person.profileImage}
            alt={person.name}
            className="h-[86vh] max-h-[820px] w-auto object-cover object-top select-none grayscale"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* ═══ MOBILE (< lg): image first, "Hello I'm Shazily." overlays at bottom, rest continues below ═══ */}
      <div className="lg:hidden">

        {/* Image block with text overlay */}
        <div className="relative w-full h-[95vw] sm:h-[78vw]">
          <motion.img
            src={person.profileImage}
            alt={person.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-top select-none grayscale"
            draggable={false}
          />

          {/* White gradient rising from bottom — gives text a readable base */}
          <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />

          {/* "Hello I'm Shazily." overlaid at the base of the image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-4 left-5 right-5 flex flex-wrap gap-2 items-end"
          >
            <span className="font-sora font-normal text-black text-[30px] sm:text-[38px] leading-[38px] sm:leading-[46px] tracking-[-0.60px]">
              Hello I'm
            </span>
            <span className="font-sora font-extrabold text-black text-[30px] sm:text-[38px] leading-[38px] sm:leading-[46px] tracking-[-0.60px]">
              {person.name.split(' ')[1]}.
            </span>
          </motion.div>
        </div>

        {/* Remaining headline + bio + socials — continues directly below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-5 pt-3 pb-10 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2 items-start text-[30px] sm:text-[38px] leading-[38px] sm:leading-[46px] tracking-[-0.60px] font-extrabold">
              <span className="font-sora text-black">I Build</span>
              <span className="font-sora text-stroke">Software.</span>
            </div>
            <div className="flex flex-wrap gap-2 items-start text-[30px] sm:text-[38px] leading-[38px] sm:leading-[46px] tracking-[-0.60px] font-extrabold">
              <span className="font-sora text-black">Ship Products.</span>
            </div>
            <div className="flex flex-wrap gap-2 items-start text-[30px] sm:text-[38px] leading-[38px] sm:leading-[46px] tracking-[-0.60px]">
              <span className="font-sora font-normal text-black">Based In</span>
              <span className="font-sora font-extrabold text-black">Lagos.</span>
            </div>
          </div>

          <p className="font-sora font-normal text-zinc-500 text-sm sm:text-base leading-6 tracking-[0.16px]">
            {person.bio}
          </p>

          <SocialRow />
        </motion.div>
      </div>

    </section>
  );
}
