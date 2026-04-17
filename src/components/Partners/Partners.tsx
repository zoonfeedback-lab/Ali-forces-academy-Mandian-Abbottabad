const partners = ["PMA Kakul", "FBISE", "PAF Academy", "Navy Board", "BISE Abbottabad"];

export default function Partners() {
  return (
    <section id="about" className="py-14 bg-white border-y border-gold/10 overflow-hidden" aria-label="Academic and strategic partners">
      <div className="container-custom">
        <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-slate-400 text-center mb-7 opacity-75">
          Academic &amp; Strategic Partners
        </p>
        
        <div className="relative overflow-hidden group">
          {/* Gradient masking for flow effect */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-0 animate-marquee w-max">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span 
                key={i} 
                className="font-serif text-[clamp(0.9rem,2vw,1.2rem)] font-bold text-slate-400 whitespace-nowrap px-12 border-r border-gold/10 transition-colors hover:text-gold"
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
