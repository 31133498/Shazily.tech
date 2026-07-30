import { motion } from 'framer-motion';
import { person } from '../../data/portfolio';

const stats = [
  { value: '175K+', label: 'Active Users' },
  { value: '7x',    label: 'Hackathon Wins' },
  { value: '1K+',   label: 'Teens Reached' },
  { value: '3',     label: 'Live Products' },
];

export default function Timeline() {
  return (
    <section id="about" className="w-full px-5 lg:px-20 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left — Profile visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 flex flex-col items-center gap-6"
        >
          {/* Circle image — no corner badges; badges moved to row below for mobile safety */}
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px]">
            <div className="absolute inset-0 rounded-full border-[3px] border-black opacity-10 scale-110" />
            <div className="absolute inset-4 rounded-full border-2 border-black/20" />
            <img
              src={person.profileImage}
              alt={person.name}
              className="w-full h-full object-cover object-top rounded-full border-4 border-black grayscale"
            />
          </div>

          {/* Stats grid — 2×2 below the circle, works on all screen sizes */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[300px] sm:max-w-[340px]">
            {stats.map((s) => (
              <div key={s.label} className="bg-black text-white px-4 py-3 rounded-[4px] flex flex-col items-center">
                <p className="font-sora font-extrabold text-xl sm:text-2xl leading-none">{s.value}</p>
                <p className="font-sora font-normal text-xs text-zinc-300 mt-1 text-center">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 max-w-[610px] w-full"
        >
          <div className="flex gap-4 items-start py-3 text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[48px] lg:leading-[56px] tracking-[-0.64px] lg:tracking-[-0.96px]">
            <span className="font-sora font-normal text-black">About</span>
            <span className="font-sora font-extrabold text-black">Me</span>
          </div>

          <div className="flex flex-col gap-5 text-zinc-500 text-sm sm:text-base font-sora font-normal leading-7 tracking-[0.16px]">
            {person.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
