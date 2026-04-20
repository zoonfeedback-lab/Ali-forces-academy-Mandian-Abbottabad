const programs = [
  {
    id: "initial-tests",
    tag: "Core Program",
    title: "Initial Tests Preparation",
    subtitle: "Army • Navy • PAF",
    desc: "Comprehensive preparation for Intelligence and Academic tests for Army, Navy, and PAF selection boards, now including PMA 158 Long Course training.",
    features: ["PMA 158 Long Course Prep", "Written, Verbal & IQ Tests", "Academic & Math Coaching", "Mock Examinations"],
    featured: true,
    icon: "📋",
  },
  {
    id: "issb-preparation",
    tag: "Command Track",
    title: "ISSB Preparation Command",
    subtitle: "Psychological · GTO · Board",
    desc: "Rigorous, multi-phase ISSB preparation modeled on the actual Inter Services Selection Board methodology.",
    features: ["Psychological Screening Analysis", "GTO Task Simulations", "Mock Interview Board Sessions"],
    featured: false,
    icon: "🎯",
  },
  {
    id: "physical-training",
    tag: "Fitness",
    title: "Physical Training",
    subtitle: "Endurance & Discipline",
    desc: "Structured daily physical fitness routines increasing stamina, coordination, and meeting armed forces minimum standards.",
    features: ["Daily PT Drills", "Obstacle Courses", "Medical Standards Prep"],
    featured: false,
    icon: "⚡",
  },
  {
    id: "academic-excellence",
    tag: "Academics",
    title: "Academic Excellence",
    subtitle: "Cadet College · PMAS",
    desc: "Tailored academic reinforcement for Cadet College entry and PMAS Arid Agriculture University applications.",
    features: ["Cadet College Entry Prep", "PMAS University Entry", "Science & Maths Coaching"],
    featured: false,
    icon: "🎓",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 bg-cream relative" aria-label="Academy programs">
      <div className="container-custom">
        {/* Decorative Background Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10vw] font-black text-primary opacity-[0.03] tracking-[0.3em] pointer-events-none whitespace-nowrap hidden lg:block">
          PROGRAMS
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="flex flex-col gap-3">
            <span className="section-label">Academic Excellence</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-extrabold text-primary leading-tight">
              Our Specialized Programs
            </h2>
          </div>
          <a href="#admissions" className="group flex items-center gap-2 text-[0.8rem] font-bold tracking-widest uppercase text-primary whitespace-nowrap transition-all border-b border-gold pb-0.5 hover:text-gold">
            View All Programs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-auto">
          {programs.map((p, i) => (
            <div
              key={p.id}
              id={`program-${p.id}`}
              className={`
                relative bg-white border border-gold/20 rounded-2xl p-9 flex flex-col gap-2.5 transition-all duration-300 overflow-hidden hover:shadow-gold-lg hover:-translate-y-1
                group after:absolute after:inset-0 after:bg-gradient-to-br after:from-gold/5 after:to-transparent after:opacity-0 after:transition-opacity hover:after:opacity-100
                ${i === 0 ? 'lg:col-span-5 lg:row-span-2' : ''}
                ${i === 1 ? 'lg:col-span-7 lg:row-span-1' : ''}
                ${i === 2 ? 'lg:col-span-4 lg:row-span-1' : ''}
                ${i === 3 ? 'lg:col-span-3 lg:row-span-1' : ''}
                ${p.featured ? 'bg-primary border-transparent' : ''}
              `}
            >
              {p.featured && (
                <span className="inline-block text-[0.65rem] font-bold tracking-[0.15em] uppercase text-primary bg-gold px-3 py-1 rounded-full mb-2 self-start">
                  Featured Program
                </span>
              )}
              
              <div className="text-[1.75rem] mb-1">{p.icon}</div>
              
              <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase ${p.featured ? 'text-gold' : 'text-gold'}`}>
                {p.tag}
              </span>
              
              <h3 className={`font-serif text-xl font-bold leading-snug ${p.featured ? 'text-white' : 'text-primary'}`}>
                {p.title}
              </h3>
              
              <p className={`text-[0.75rem] font-medium tracking-wide ${p.featured ? 'text-white/50' : 'text-slate-500'}`}>
                {p.subtitle}
              </p>
              
              <p className={`text-sm leading-relaxed ${p.featured ? 'text-white/70' : 'text-slate-500'} mb-2`}>
                {p.desc}
              </p>
              
              <ul className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-gold/10">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-[0.8rem] ${p.featured ? 'text-white/80' : 'text-slate-500'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <a href="#admissions" className="group/btn inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-widest uppercase text-gold mt-5 transition-all w-fit border-b border-transparent hover:border-gold">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover/btn:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
