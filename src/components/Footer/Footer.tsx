const links = {
  Programs: ["Initial Tests", "ISSB Preparation", "Physical Training", "Academic Excellence"],
  Admissions: ["How to Apply", "Eligibility", "Fee Structure", "Scholarships"],
  About: ["Our Mission", "Faculty", "Facilities", "Success Stories"],
  Contact: ["Mandian Abbottabad", "0341-0542425", "babarzeb@yahoo.com", "Always Open"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-primary text-white" aria-label="Site footer">
      {/* Top bar with branding */}
      <div className="border-b border-gold/10 py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]">⚔</span>
            <div className="flex flex-col">
              <span className="text-[0.95rem] font-bold text-white tracking-wide">
                Pasban-E-Wattan Forces Academy
              </span>
              <span className="text-[0.65rem] font-semibold tracking-[.15em] text-gold uppercase mt-0.5">
                Pakistan&apos;s Elite Training Institute
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {[
              { n: 'f', u: 'https://facebook.com/pasban.e.wattan.school.college.forces.abbottabad', label: 'Facebook' },
              { n: 'y', u: '#', label: 'YouTube' },
              { n: 'w', u: 'https://wa.me/923410542425', label: 'WhatsApp' }
            ].map((s) => (
              <a 
                key={s.label} 
                href={s.u} 
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[0.7rem] font-bold text-white/70 transition-all duration-300 hover:bg-gold hover:text-primary hover:border-gold" 
                aria-label={s.label}
              >
                {s.n.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Link Grid */}
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
        {Object.entries(links).map(([group, items]) => (
          <div key={group} className="flex flex-col gap-5">
            <h3 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-gold">
              {group}
            </h3>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[0.875rem] text-white/50 transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom copy bar */}
      <div className="border-t border-gold/10 py-6">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-white/30">
            © {year} Pasban-E-Wattan Forces Academy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[0.75rem] text-white/40 border-b border-transparent transition-all hover:text-gold hover:border-gold">Privacy Policy</a>
            <a href="#" className="text-[0.75rem] text-white/40 border-b border-transparent transition-all hover:text-gold hover:border-gold">Terms of Service</a>
            <a href="#" className="text-[0.75rem] text-white/40 border-b border-transparent transition-all hover:text-gold hover:border-gold">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
