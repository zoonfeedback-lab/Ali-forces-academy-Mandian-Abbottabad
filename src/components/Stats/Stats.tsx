const stats = [
  {
    value: "Elite",
    label: "Institution",
    detail: "A trusted and reliable institute specialized in ISSB and Cadet College training.",
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
    <section id="stats" className="py-32 bg-[#051a11] relative overflow-hidden" aria-label="Academy statistics">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />

      {/* Decorative border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-gold/10 border-[1.5px] border-gold/10 rounded-2xl overflow-hidden shadow-card">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className={`group bg-white/5 backdrop-blur-md border border-white/5 p-12 flex flex-col items-start gap-2 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:bg-white/10 hover:border-gold/20 animate-fade-up`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Top border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              
              <div className="text-2xl text-gold mb-2 opacity-80" aria-hidden="true">{s.icon}</div>
              
              <div className={`font-serif text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold leading-none ${s.color === 'gold' ? 'gold-shimmer-text py-1' : 'text-white'}`}>
                {s.value}
              </div>
              
              <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold/80 mb-3">
                {s.label}
              </div>
              
              <p className="text-sm leading-relaxed text-white/50 max-w-[280px]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
