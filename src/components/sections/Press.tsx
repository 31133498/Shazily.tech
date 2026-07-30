import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { press } from '../../data/portfolio';

export default function Press() {
  return (
    <section id="press" className="w-full px-5 lg:px-20 py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-10">

        <div className="flex gap-4 items-center justify-center py-5 text-[48px] leading-[56px] tracking-[-0.96px]">
          <span className="font-sora font-normal text-black">In the</span>
          <span className="font-sora font-extrabold text-black">Press</span>
        </div>

        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {press.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col border border-black rounded-[4px] bg-white hover:bg-black transition-colors duration-200 overflow-hidden w-full sm:min-w-[340px] sm:flex-1 sm:max-w-[440px] cursor-pointer"
            >
              {/* Preview screenshot */}
              <div className="w-full h-[200px] bg-zinc-100 flex-shrink-0 overflow-hidden border-b border-black group-hover:border-zinc-700 transition-colors duration-200">
                <img
                  src={item.previewUrl}
                  alt={`${item.publication} preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 p-6">

                {/* Publication name + icon */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sora font-bold text-sm text-zinc-500 group-hover:text-zinc-400 uppercase tracking-widest transition-colors duration-200">
                    {item.publication}
                  </span>
                  <ExternalLink
                    size={15}
                    className="text-black group-hover:text-white transition-colors duration-200 flex-shrink-0"
                  />
                </div>

                {/* Headline */}
                <p className="font-sora font-semibold text-[18px] leading-[1.35] tracking-[-0.02em] text-black group-hover:text-white transition-colors duration-200">
                  {item.headline}
                </p>

                {/* Excerpt */}
                <p className="font-sora font-normal text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200 leading-6 flex-1">
                  {item.excerpt}
                </p>

                {/* Date */}
                <p className="font-sora font-normal text-xs text-zinc-400 group-hover:text-zinc-500 transition-colors duration-200 mt-auto">
                  {item.date}
                </p>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
