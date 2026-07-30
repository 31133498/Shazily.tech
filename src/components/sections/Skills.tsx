import { skills } from '../../data/portfolio';
import { TechIcon, techIconMap } from '../ui/TechIcon';

const allSkills = skills.flatMap((cat) => cat.skills);

// Distribute into 3 columns interleaving categories
const columns: string[][] = [[], [], []];
allSkills.forEach((s, i) => columns[i % 3].push(s));

// Each column needs enough items that doubling always exceeds container height
// Pad columns with fewer items by repeating until ≥ 6 items
const padded = columns.map((col) => {
  while (col.length < 6) col = [...col, ...col];
  return col.slice(0, 6);
});

function SkillCard({ skill }: { skill: string }) {
  const hasIcon = !!techIconMap[skill];
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-[4px] border-2 border-black w-[152px] h-[136px] flex-shrink-0 cursor-default select-none transition-colors duration-200 bg-white hover:bg-black">
      <div className="w-11 h-11 flex items-center justify-center rounded-[4px] bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-200">
        {hasIcon ? (
          <TechIcon name={skill} size={22} />
        ) : (
          <span className="font-sora font-extrabold text-xs leading-none">
            {skill.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <p className="font-sora font-bold text-sm leading-4 text-center text-black group-hover:text-white transition-colors duration-200 px-2">
        {skill}
      </p>
    </div>
  );
}

function Column({ items, duration }: { items: string[]; duration: number }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{ height: 480 }}
      onMouseEnter={(e) => {
        (e.currentTarget.firstElementChild as HTMLElement).style.animationPlayState = 'paused';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.firstElementChild as HTMLElement).style.animationPlayState = 'running';
      }}
    >
      <div
        className="flex flex-col gap-2"
        style={{
          animation: `skillScrollDown ${duration}s linear infinite`,
        }}
      >
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full px-5 lg:px-20 py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-8">

        <div className="flex gap-4 items-center justify-center py-5 text-[48px] leading-[56px] tracking-[-0.96px]">
          <span className="font-sora font-normal text-black">My</span>
          <span className="font-sora font-extrabold text-black">Skills</span>
        </div>

        <div className="flex justify-center gap-2">
          <Column items={padded[0]} duration={14} />
          <Column items={padded[1]} duration={18} />
          <div className="hidden sm:block">
            <Column items={padded[2]} duration={11} />
          </div>
        </div>

      </div>
    </section>
  );
}
