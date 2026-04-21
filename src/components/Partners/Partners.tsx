const partners = ["PMA Kakul", "FBISE", "PAF Academy", "Navy Board", "BISE Abbottabad"];

export default function Partners() {
  return (
    <section id="about" className="py-20 bg-[#051a11] border-y border-white/5 overflow-hidden relative" aria-label="Academic and strategic partners">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      <div className="container-custom relative z-10">
        <p className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-gold/50 text-center mb-10 animate-pulse-soft">
          Academic &amp; Strategic Partners
        </p>

        
        <div className="relative overflow-hidden group">
          {/* Gradient masking for flow effect */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#051a11] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#051a11] to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-0 animate-marquee w-max">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span 
                key={i} 
                className="font-serif text-[clamp(0.9rem,2vw,1.2rem)] font-bold text-gold/30 whitespace-nowrap px-12 border-r border-white/5 transition-colors hover:text-gold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
