import { motion } from 'framer-motion';
import { person } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="w-full px-5 lg:px-20 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12">

        {/* Left — Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 flex-1 py-5"
        >
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full max-w-[500px] h-14 border-[1.4px] border-black rounded-[4px] px-6 font-sora font-normal text-base text-zinc-500 leading-5 tracking-[-0.32px] outline-none focus:border-zinc-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full max-w-[500px] h-14 border-[1.4px] border-black rounded-[4px] px-6 font-sora font-normal text-base text-zinc-500 leading-5 tracking-[-0.32px] outline-none focus:border-zinc-500 transition-colors"
            />
            <input
              type="url"
              placeholder="Your website (if exists)"
              className="w-full max-w-[500px] h-14 border-[1.4px] border-black rounded-[4px] px-6 font-sora font-normal text-base text-zinc-500 leading-5 tracking-[-0.32px] outline-none focus:border-zinc-500 transition-colors"
            />
            <textarea
              placeholder="How can I help?*"
              rows={5}
              className="w-full max-w-[500px] border-[1.4px] border-black rounded-[4px] px-6 py-4 font-sora font-normal text-base text-zinc-500 leading-5 tracking-[-0.32px] outline-none focus:border-zinc-500 transition-colors resize-none"
            />
          </div>

          {/* Buttons row */}
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-black text-white font-sora font-semibold text-xl h-14 px-5 rounded-[4px] hover:bg-zinc-800 transition-colors">
              Get In Touch
            </button>

            {/* Social icon buttons */}
            {[
              {
                href: 'https://github.com/31133498',
                filled: true,
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
              },
              {
                href: 'https://www.linkedin.com/in/sanni-shazily-bba942266/',
                filled: false,
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
              },
              {
                href: `mailto:${person.email}`,
                filled: false,
                icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>,
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-[4px] flex items-center justify-center hover:opacity-70 transition-opacity ${s.filled ? 'bg-black text-white' : 'border-2 border-black text-black'}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10 flex-1 justify-center py-5"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col font-extrabold gap-3 text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] tracking-[-0.96px]">
              <div className="flex flex-wrap gap-4 items-start">
                <span className="font-sora text-black">Let's</span>
                <span className="font-sora text-stroke">talk</span>
                <span className="font-sora text-black">for</span>
              </div>
              <p className="font-sora text-black">Something special</p>
            </div>
            <p className="font-sora font-normal text-base text-zinc-500 leading-6 tracking-[0.32px]">
              Open to technical collaborations, co-founder conversations, mentorship,
              and opportunities aligned with building real things for real people.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-sora font-semibold text-[28px] text-black leading-8 tracking-[-0.56px]">
            <a href={`mailto:${person.email}`} className="hover:opacity-60 transition-opacity">
              {person.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
