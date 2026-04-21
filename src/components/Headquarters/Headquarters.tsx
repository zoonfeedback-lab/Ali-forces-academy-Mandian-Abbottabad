export default function Headquarters() {
  return (
    <section id="branches" className="py-32 bg-primary relative overflow-hidden" aria-label="Headquarters section">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-5 animate-fade-up">
            <span className="section-label">Strategic Presence</span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-white leading-tight">
              Abbottabad <br />
              <span className="gold-shimmer-text">Headquarters</span>
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-white/60 max-w-lg">

              Nestled in the historical military hub of Pakistan, our main campus provides the ideal environment for rigorous training and discipline. Ali Forces Academy serves as a cornerstone for future leaders in Abbottabad.
            </p>

            <div className="flex flex-col gap-5 mt-2 pt-6 border-t border-gold/20">
              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-1">📍</span>
                <div className="flex flex-col gap-1">
                  <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold">Main Campus</div>
                  <div className="text-[0.875rem] text-white/75 leading-relaxed">
                    Javaid Shahid Rd, near Makki Masjid <br />
                    Abbottabad, KPK — 22810
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-1">📞</span>
                <div className="flex flex-col gap-1">
                  <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold">Admission Helpline</div>
                  <div className="text-[0.875rem] text-white/75 leading-relaxed font-serif">
                    0343-8338958 <br />
                    <span className="text-[0.72rem] font-sans opacity-70">aliforcesacademy10@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-1">🕒</span>
                <div className="flex flex-col gap-1">
                  <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-gold">Opening Hours</div>
                  <div className="text-[0.875rem] text-white/75 leading-relaxed">
                    Always open
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Mandian+Abbottabad+Makki+Masjid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gold text-primary font-bold text-[0.8rem] tracking-widest uppercase px-6 py-3 rounded transition-all duration-300 mt-2 w-fit hover:bg-gold-bright hover:-translate-y-0.5 hover:shadow-gold-lg"
              id="hq-map-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Right: Visual */}
          <div className="relative group animate-fade-up [animation-delay:0.3s]">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-hero border border-gold/20">
              <img
                src="/abbottabad-mountains.png"
                alt="Abbottabad mountains"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-primary/85 backdrop-blur-md border border-gold/30 rounded-xl p-5 pr-8">
                <span className="block text-[0.9rem] font-bold text-white tracking-wide">Abbottabad, KPK</span>
                <span className="block text-[0.7rem] text-gold font-medium tracking-widest mt-0.5 uppercase">Pakistan&apos;s Mountainous Hub</span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold/40 rounded-br-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
