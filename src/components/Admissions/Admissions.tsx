const steps = [
  { num: "01", title: "Submit Application", desc: "Fill out the online form or visit our campus in Mandian Abbottabad to complete your application." },
  { num: "02", title: "Academic Assessment", desc: "Appear for a brief assessment to help us design your personalized training & discipline plan." },
  { num: "03", title: "Enroll & Begin", desc: "Complete enrollment, receive your schedule, and begin your journey to becoming a Commissioned Officer." },
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-32 bg-cream relative" aria-label="Admissions process">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-[2rem] border-[1.5px] border-gold/10 p-8 md:p-12 shadow-card flex flex-col gap-4">
            <span className="section-label">Apply Now</span>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold text-primary leading-tight">
              Start Your Journey Today
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-2">
              Complete the form below and our admissions team will contact you within 24 hours to guide you through the next steps.
            </p>
            
            <form className="flex flex-col gap-5 mt-2" id="admissions-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="adm-name" className="text-[0.75rem] font-bold tracking-widest uppercase text-primary">Full Name</label>
                  <input 
                    id="adm-name" 
                    type="text" 
                    placeholder="Muhammad Ali" 
                    className="w-full px-4 py-3.5 font-sans text-[0.9rem] text-primary bg-cream border border-gold/20 rounded outline-none transition-all focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/5" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="adm-phone" className="text-[0.75rem] font-bold tracking-widest uppercase text-primary">Phone Number</label>
                  <input 
                    id="adm-phone" 
                    type="tel" 
                    placeholder="0341 0542425" 
                    className="w-full px-4 py-3.5 font-sans text-[0.9rem] text-primary bg-cream border border-gold/20 rounded outline-none transition-all focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/5" 
                    required 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="adm-email" className="text-[0.75rem] font-bold tracking-widest uppercase text-primary">Email Address (Optional)</label>
                <input 
                  id="adm-email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-4 py-3.5 font-sans text-[0.9rem] text-primary bg-cream border border-gold/20 rounded outline-none transition-all focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/5" 
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="adm-program" className="text-[0.75rem] font-bold tracking-widest uppercase text-primary">Program of Interest</label>
                <div className="relative">
                  <select 
                    id="adm-program" 
                    className="w-full px-4 py-3.5 font-sans text-[0.9rem] text-primary bg-cream border border-gold/20 rounded outline-none transition-all appearance-none focus:border-gold focus:bg-white"
                    required
                  >
                    <option value="">Select a program...</option>
                    <option value="initial-tests">Initial Tests (Army / Navy / PAF)</option>
                    <option value="issb">ISSB Preparation Command</option>
                    <option value="physical">Physical Training</option>
                    <option value="academic">Academic Excellence</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="adm-message" className="text-[0.75rem] font-bold tracking-widest uppercase text-primary">Special Queries</label>
                <textarea 
                  id="adm-message" 
                  rows={3} 
                  placeholder="Any specific questions about ISSB or other tests..." 
                  className="w-full px-4 py-3.5 font-sans text-[0.9rem] text-primary bg-cream border border-gold/20 rounded outline-none transition-all resize-none focus:border-gold focus:bg-white shadow-inner" 
                />
              </div>
              
              <button type="submit" className="btn-primary w-full justify-center py-4 mt-2" id="adm-submit">
                Submit Application
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col gap-4 pt-2">
            <span className="section-label">Admission Process</span>
            <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-primary mb-2">Three Simple Steps</h3>
            
            <div className="flex flex-col gap-7 mt-2">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-bright text-primary font-black flex items-center justify-center text-[0.75rem] tracking-widest shadow-gold">
                    {s.num}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-[0.95rem] font-bold text-primary leading-tight">{s.title}</h4>
                    <p className="text-[0.85rem] text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-8 border-t border-gold/10 flex flex-col gap-2.5">
              <p className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-slate-400">Direct Helpline</p>
              <a href="tel:+923410542425" className="font-serif text-2xl font-bold text-primary hover:text-gold transition-colors">
                0341-0542425
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Admissions open for next session
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
