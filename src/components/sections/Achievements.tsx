import { motion } from 'framer-motion';
import { achievements } from '../../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="w-full px-5 lg:px-20 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-5">

        {/* Heading */}
        <div className="flex gap-3 items-center justify-center py-5 text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] tracking-[-0.96px]">
          <span className="font-sora font-normal text-black">My</span>
          <span className="font-sora font-extrabold text-black">Achievements</span>
        </div>

        {/* Cards row */}
        <div className="flex flex-wrap items-center justify-between py-10 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col gap-6 items-center justify-center p-8 sm:p-10 rounded-[20px] w-full sm:w-[370px] shadow-[0px_6px_4px_rgba(24,39,75,0.12),0px_8px_8px_rgba(24,39,75,0.08)] ${
                index === 1 ? 'bg-black' : 'bg-white'
              }`}
            >
              {/* Trophy image */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover rounded-full border-2 ${index === 1 ? 'border-white' : 'border-black'}`}
                />
              </div>

              {/* Divider */}
              <div className={`w-[120px] h-[2px] ${index === 1 ? 'bg-white' : 'bg-black'}`} />

              {/* Event */}
              <p className={`font-sora font-semibold text-xs uppercase tracking-widest text-center ${index === 1 ? 'text-zinc-300' : 'text-zinc-500'}`}>
                {item.event}
              </p>

              {/* Title */}
              <p className={`font-sora font-semibold text-xl leading-6 tracking-[-0.4px] text-center capitalize ${index === 1 ? 'text-white' : 'text-neutral'}`}>
                {item.title}
              </p>

              {/* Description */}
              <p className={`font-sora font-normal text-base leading-5 tracking-[0.32px] text-center ${index === 1 ? 'text-white' : 'text-neutral'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
