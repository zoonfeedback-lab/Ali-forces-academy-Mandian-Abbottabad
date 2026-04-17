const stats = [
  {
    value: "100%",
    label: "Recommendation",
    detail: "Based on 5 reviews, our proven methodology ensures the highest success rates for candidates.",
    icon: "★",
    color: "gold",
  },
  {
    value: "Expert",
    label: "Trainee Command",
    detail: "Led by retired military officers with decades of experience in recruitment and selection processes.",
    icon: "⚔",
    color: "white",
  },
  {
    value: "Proven",
    label: "Success Record",
    detail: "Our alumni serving in prestigious ranks across the Army, Navy, and Air Force of Pakistan.",
    icon: "✦",
    color: "gold",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-cream relative overflow-hidden" aria-label="Academy statistics">
      {/* Decorative border line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-gold/10 border-[1.5px] border-gold/10 rounded-2xl overflow-hidden shadow-card">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-12 flex flex-col items-start gap-2 transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5"
            >
              {/* Top border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="text-2xl text-gold mb-2 opacity-80" aria-hidden="true">{s.icon}</div>
              
              <div className={`font-serif text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-none ${s.color === 'gold' ? 'text-gold' : 'text-primary'}`}>
                {s.value}
              </div>
              
              <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
                {s.label}
              </div>
              
              <p className="text-sm leading-relaxed text-slate-500 max-w-[280px]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
