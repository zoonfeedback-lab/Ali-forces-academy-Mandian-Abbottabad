export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/academypic.jpg"
          alt="Ali Forces Academy Campus"
          className="w-full h-full object-cover object-center animate-hero-zoom opacity-90 transition-opacity"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/75 to-primary/90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          "top-[20%] left-[12%] w-1.5 h-1.5 opacity-20",
          "top-[35%] left-[85%] w-1 h-1 opacity-30 [animation-delay:1s]",
          "top-[60%] left-[70%] w-2 h-2 opacity-15 [animation-delay:2s]",
          "top-[15%] left-[55%] w-1.5 h-1.5 opacity-25 [animation-delay:0.5s]",
          "top-[75%] left-[25%] w-1 h-1 opacity-20 [animation-delay:1.5s]",
        ].map((cls, i) => (
          <span key={i} className={`absolute rounded-full bg-gold animate-float ${cls}`} />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-24 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-7 animate-fade-up [animation-delay:0.1s]">
          <span className="block w-10 h-px bg-gold/60" />
          <span className="section-label">Pakistan&apos;s Premier Forces Academy</span>
          <span className="block w-10 h-px bg-gold/60" />
        </div>

        {/* Heading */}
        <h1 className="flex flex-col items-center leading-none mb-7 animate-fade-up [animation-delay:0.25s]">
          <span className="font-serif font-black text-white text-[clamp(2.5rem,8vw,6rem)] tracking-tight drop-shadow-2xl">
            ALI FORCES
          </span>
          <span className="font-serif font-black text-[clamp(2.5rem,8vw,6rem)] tracking-tight gold-shimmer-text uppercase">
            Academy
          </span>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white rounded-full text-[0.65rem] font-bold tracking-widest uppercase shadow-lg animate-pulse z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-75" />
            PMA 158 Long Course Now Open
          </div>
          <span className="font-serif font-black text-white text-[clamp(2.5rem,8vw,5.5rem)] tracking-tight drop-shadow-2xl">
            ABBOTTABAD
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-white/75 text-[clamp(0.875rem,2vw,1.1rem)] max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up [animation-delay:0.45s]">
          Trusted and Reliable Institution for training of ISSB and Cadet Colleges. Providing elite preparation for the future leaders of Pakistan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up [animation-delay:0.6s]">
          <a href="#admissions" className="btn-primary" id="hero-apply-btn">
            Apply for Admission
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#programs" className="btn-outline" id="hero-programs-btn">
            Our Programs
          </a>
        </div>

        {/* Service Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 animate-fade-up [animation-delay:0.75s]">
          {["Armed Forces", "School", "Academic Camp", "ISSB", "Hostel Facility Available"].map((b) => (
            <span
              key={b}
              className={`text-[0.68rem] font-bold tracking-[0.18em] uppercase 
                         border px-3.5 py-1.5 rounded-full transition-colors duration-300
                         ${b === 'Hostel Facility Available' 
                           ? 'bg-gold text-primary border-gold hover:bg-gold-bright shadow-gold' 
                           : 'text-white/55 border-white/20 hover:border-gold hover:text-gold'}`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="block w-6 h-9 border-2 border-white/30 rounded-full relative">
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold rounded-full animate-scroll-dot" />
        </span>
      </a>
    </section>
  );
}
