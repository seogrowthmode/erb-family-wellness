import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import SchemaOrg from "@/components/SchemaOrg";

const homeFAQs = [
  { question: "What's included in the $67 new patient visit?", answer: "Your $67 new patient visit includes a comprehensive consultation, examination, any necessary X-rays, and your first adjustment. Dr. Erb will identify the root cause of your health concerns — not just treat symptoms." },
  { question: "What is Hyperbaric Oxygen Therapy (HBOT)?", answer: "HBOT delivers ~100% oxygen in a pressurized chamber, promoting up to 800% stem cell growth. It's used for neurological recovery, stroke rehabilitation, injury healing, and cellular regeneration. Erb Family Wellness is one of the only practices in DFW offering this technology." },
  { question: "What is SoftWave Therapy?", answer: "SoftWave uses targeted shockwaves to activate your body's own healing response. It's non-invasive, requires no drugs, and has no downtime. Effective for chronic pain, sports injuries, and tissue regeneration." },
  { question: "What is whole body thermography?", answer: "Our AlfaSight system measures 120 points across the body to create a comprehensive thermal map. It detects inflammation, dysfunction, and metabolic imbalances — including non-radiation breast health screening. Completely painless and non-invasive." },
  { question: "Do you treat children and pregnant women?", answer: "Absolutely. Dr. Kimberly specializes in pediatric and prenatal chiropractic care. We see patients from newborns to grandparents. Many families bring their children from infancy — our gentle techniques are safe for all ages." },
  { question: "Do you accept insurance? CareCredit?", answer: "We work with most insurance plans and are proud to accept CareCredit for flexible payment options. Contact our office at (972) 393-6262 to verify your specific coverage before your visit." },
  { question: "What makes Erb different from other DFW chiropractors?", answer: "28 years of experience. Board-certified chiropractic neurologist. 2012 London Olympics credentials. Technology stack no one else in DFW offers — HBOT, SoftWave, AlfaSight Thermography, Blood Microscopy. Patients fly in from around the world. No other practice in the Metroplex combines this level of expertise with this level of technology." },
  { question: "Do patients really travel from around the world?", answer: "Yes. Dr. Erb's expertise in advanced spinal correction and his unique technology stack attract patients from across the US and internationally. His Olympic credentials and Board Certification in Chiropractic Neurology make him a sought-after specialist for complex cases." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* HERO */}
      <section className="hero">
        <div className="hero__video-bg">
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #0E182C 0%, #162240 40%, #0E182C 100%)",
            }}
          />
        </div>
        <div className="hero__content">
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--color-teal)",
              marginBottom: 28,
            }}
          >
            Chiropractor in Coppell &amp; Southlake, TX
          </div>
          <h1 style={{ marginBottom: 28, lineHeight: 1.05 }}>
            <span style={{ display: "block", fontSize: "clamp(36px, 4.5vw, 48px)", fontWeight: 300, color: "var(--color-text-light)" }}>
              Chiropractor in Coppell TX
            </span>
            <span style={{ display: "block", fontSize: "clamp(52px, 7vw, 80px)", fontWeight: 900, color: "var(--color-text-light)" }}>
              Hope
            </span>
            <span style={{ display: "block", fontSize: "clamp(52px, 7vw, 80px)", fontWeight: 900, color: "var(--color-teal)" }}>
              and Healing.
            </span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 400, color: "rgba(241,236,232,.8)", maxWidth: 700, margin: "0 auto 36px", lineHeight: 1.7 }}>
            28 years. 2012 London Olympics. Patients from around the world. Dr. David Erb and Dr. Kimberly Erb lead the most advanced chiropractic wellness center in the DFW Metroplex.
          </p>
          <Link href="/schedule" className="btn btn--teal">
            Begin Your Healing Journey &rarr;
          </Link>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, marginTop: 40, fontSize: 13, fontWeight: 500, color: "rgba(241,236,232,.7)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "var(--color-gold)" }}>{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.8
            </span>
            <span>306+ Reviews</span>
            <span>28 Years</span>
            <span>2012 Olympics</span>
            <span>CareCredit Accepted</span>
          </div>
        </div>
      </section>

      {/* CREDENTIAL BANNER */}
      <section className="cred-banner">
        <div className="container-erb">
          <div className="cred-banner__inner">
            <div className="cred-banner__row">
              <div className="cred-item">
                <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--color-gold)" fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                  </svg>
                </div>
                <div className="cred-item__title">2012 London Olympics</div>
              </div>
              <div className="cred-item">
                <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div className="cred-item__title">28 Years Est. 1998</div>
              </div>
              <div className="cred-item">
                <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                  </svg>
                </div>
                <div className="cred-item__title">Patients Fly In Worldwide</div>
              </div>
              <div className="cred-item">
                <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div className="cred-item__title">Board-Certified Neurologist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section style={{ padding: "100px 0 120px", background: "var(--color-cream)" }} id="form-section">
        <div className="container-erb">
          <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 80, alignItems: "start" }} className="split--responsive">
            <RevealOnScroll>
              <div style={{ paddingTop: 20 }}>
                <span className="label">Why Erb Family Wellness</span>
                <div style={{ marginBottom: 32, lineHeight: 1.15 }}>
                  <span style={{ display: "block", fontSize: 36, fontWeight: 300, color: "var(--color-text-primary)" }}>This isn&apos;t</span>
                  <span style={{ display: "block", fontSize: 48, fontWeight: 700, color: "var(--color-text-primary)" }}>a normal chiropractor.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                  {[
                    "Most advanced technology in DFW — HBOT, SoftWave, Thermography, Blood Microscopy",
                    "2012 London Olympics — treated gold medalists Kayla Harrison & Jordan Burroughs",
                    "28 years of corrective care — not symptom management",
                    "Two locations serving Coppell, Southlake, and the entire DFW Metroplex",
                  ].map((text, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 24, height: 24, minWidth: 24, background: "var(--color-teal)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--color-cream)" fill="none" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{text}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>306+ Google reviews &middot; 4.8 stars &middot; CareCredit accepted</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div style={{ marginTop: -60, position: "relative", zIndex: 11 }}>
                <FormCard />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* EMPATHY */}
      <section style={{ padding: "100px 0 120px", background: "#fff", textAlign: "center" }}>
        <div className="container-erb">
          <span className="label">We Understand</span>
          <RevealOnScroll>
            <h2 style={{ marginBottom: 20, lineHeight: 1.1 }}>
              <span style={{ display: "block", fontSize: "clamp(32px, 3.5vw, 40px)", fontWeight: 300 }}>Chiropractic Care</span>
              <span style={{ display: "block", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 700 }}>in Coppell TX</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p style={{ fontSize: 16, color: "var(--color-text-secondary)", maxWidth: 650, margin: "0 auto 56px", lineHeight: 1.7 }}>
              Other chiropractors. PT. Medications. Maybe surgery. And you&apos;re still searching. Or your child isn&apos;t thriving. Or the numbness keeps spreading. We hear this every day — and we have answers the others don&apos;t.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }} className="empathy-grid">
              {[
                "Chronic pain that won't resolve",
                "Conditions other doctors couldn't diagnose",
                "Seeking alternatives to surgery or medication",
              ].map((text, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--color-cream)",
                    borderRadius: "var(--radius-md)",
                    padding: "36px 28px",
                    textAlign: "left",
                    borderLeft: "4px solid var(--color-olive)",
                    transition: "transform .3s ease",
                  }}
                >
                  <p style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.5 }}>{text}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <Link href="/services" className="btn btn--teal">
            See How We&apos;re Different &rarr;
          </Link>
        </div>
      </section>

      {/* TECHNOLOGY SHOWCASE */}
      <section className="tech" id="technology">
        <div className="container-erb" style={{ position: "relative", zIndex: 1 }}>
          <RevealOnScroll>
            <div style={{ marginBottom: 56 }}>
              <span className="label label--light">Technology No One Else Has</span>
              <h2 style={{ marginBottom: 16, lineHeight: 1.1 }}>
                <span style={{ display: "block", fontSize: "clamp(32px, 3.5vw, 40px)", fontWeight: 300, color: "var(--color-text-light)" }}>SoftWave &amp; HBOT</span>
                <span style={{ display: "block", fontSize: "clamp(44px, 5vw, 60px)", fontWeight: 900, color: "var(--color-text-light)" }}>Therapy in Coppell TX</span>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(241,236,232,.65)", maxWidth: 500, lineHeight: 1.7 }}>This is why patients travel from around the world.</p>
            </div>
          </RevealOnScroll>
        </div>
        <div className="tech__scroll">
          <div style={{ minWidth: 80, flexShrink: 0 }} aria-hidden="true" />
          {[
            { name: "HBOT", title: "Hyperbaric Oxygen Therapy", desc: "~100% oxygen under pressure. 800% stem cell growth. Neurological recovery, stroke rehab, injury healing, and cellular regeneration.", badge: "Flagship", img: "Patient inside clear HBOT chamber" },
            { name: "SoftWave", title: "Tissue Regeneration", desc: "Targeted shockwaves activate your body's own healing response. Non-invasive. No drugs. No downtime.", img: "SoftWave device applied to patient's shoulder" },
            { name: "Thermography", title: "AlfaSight System", desc: "120 measurement points. Non-radiation breast health screening. Metabolic function analysis. Full-body thermal mapping.", img: "AlfaSight thermal readout" },
            { name: "Blood Microscopy", title: "Cellular Analysis", desc: "A single drop of blood reveals cellular health, imbalances, and hidden dysfunction invisible to standard labs.", img: "Microscope with blood sample" },
            { name: "Decompression", title: "Non-Surgical Disc Relief", desc: "Herniated discs, sciatica, stenosis. Motorized traction gently creates space for healing without surgery.", img: "Spinal decompression table with patient" },
            { name: "Infrared Sauna", title: "Deep Detox", desc: "Detoxification, muscle relaxation, pain relief. Far infrared penetrates deep tissue for cellular cleansing.", img: "Far infrared sauna interior" },
          ].map((card, i) => (
            <div key={i} className="tech-card">
              <div className="tech-card__img">
                <span style={{ fontSize: 13, color: "rgba(241,236,232,.4)", fontWeight: 500, textAlign: "center", padding: 20 }}>{card.img}</span>
                {card.badge && <span className="tech-card__badge">{card.badge}</span>}
              </div>
              <div className="tech-card__body">
                <div className="tech-card__name">{card.name}</div>
                <h3 className="tech-card__title">{card.title}</h3>
                <p className="tech-card__desc">{card.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ minWidth: 80, flexShrink: 0 }} aria-hidden="true" />
        </div>
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginTop: 56, position: "relative", zIndex: 1 }}>
            <Link href="/services" className="btn btn--teal">
              Explore All Technology &amp; Services &rarr;
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* SERVICES BAR */}
      <section style={{ padding: "80px 0", background: "var(--color-cream)" }}>
        <div className="container-erb" style={{ textAlign: "center" }}>
          <span className="label">Complete Care</span>
          <RevealOnScroll>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "36px 48px", marginBottom: 28 }}>
              {[
                { name: "Spinal Correction", href: "/services/spinal-correction" },
                { name: "HBOT", href: "/services/hbot" },
                { name: "SoftWave", href: "/services/softwave" },
                { name: "Thermography", href: "/services/thermography" },
                { name: "Blood Testing", href: "/services/blood-microscopy" },
                { name: "Neuropathy", href: "/services/neuropathy" },
                { name: "Pediatric", href: "/services/pediatric" },
                { name: "Prenatal", href: "/services/prenatal" },
              ].map((svc) => (
                <Link key={svc.name} href={svc.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, transition: "transform .3s ease" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(42,125,108,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="26" height="26" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)", textAlign: "center" }}>{svc.name}</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", textAlign: "center" }}>
              Plus: Nutrition &amp; Weight Loss &middot; Detox Programs &middot; Far Infrared Sauna &middot; Corrective Exercises
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATEMENT */}
      <section style={{ position: "relative", padding: "160px 0", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--color-navy)", zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(14,24,44,.72)", zIndex: 1 }} />
        </div>
        <div className="container-erb" style={{ position: "relative", zIndex: 2 }}>
          <RevealOnScroll>
            <span style={{ display: "block", marginBottom: 12, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "var(--color-text-light)" }}>
              2012 London Olympics.
            </span>
            <span style={{ display: "block", marginBottom: 12, fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "var(--color-text-light)" }}>
              First MaxLiving clinic in Africa.
            </span>
            <span style={{ display: "block", marginBottom: 12, fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "var(--color-text-light)" }}>
              Patients from around the world.
            </span>
            <span style={{ display: "block", fontSize: "clamp(48px, 6.5vw, 80px)", fontWeight: 900, color: "var(--color-teal)", marginTop: 16 }}>
              28 years of hope and healing.
            </span>
          </RevealOnScroll>
        </div>
      </section>

      {/* TEAM TIMELINE */}
      <section style={{ padding: "120px 0 140px", background: "var(--color-cream)" }} id="team">
        <div className="container-erb">
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="label">Your Care Team</span>
            <RevealOnScroll>
              <h2 style={{ marginBottom: 16, lineHeight: 1.15 }}>
                <span style={{ display: "block", fontSize: "clamp(32px, 3.5vw, 40px)", fontWeight: 300 }}>Spinal Correction</span>
                <span style={{ display: "block", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 700 }}>Specialists in Coppell TX</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div className="timeline">
              <div className="timeline__line" />
              {[
                { year: "1998", title: "Founded", desc: "Dr. David & Dr. Kimberly Erb open their practice in Coppell, TX.", img: "Young couple, early practice days energy" },
                { year: "2010", title: "Zimbabwe", desc: "Opened the first international MaxLiving Health Center in Africa.", img: "African clinic setting" },
                { year: "2012", title: "London Olympics", desc: "Served as chiropractors for USA Wrestling, Judo, Weightlifting, and Paralympic Sitting Volleyball.", img: "Olympic venue", caption: "Treated gold medalists Kayla Harrison & Jordan Burroughs" },
                { year: "2020s", title: "Technology Revolution", desc: "HBOT, SoftWave, AlfaSight Thermography, Blood Microscopy — building the most advanced practice in DFW.", img: "Modern clinic interior with tech" },
                { year: "Today", title: "28 Years & Growing", desc: "5 providers. 13 team members. 2 locations. 306+ reviews. Patients travel from around the world.", img: "Full team group photo" },
              ].map((node, i) => (
                <div key={i} className="timeline__node">
                  <div className="timeline__img">
                    <span className="timeline__img-placeholder">{node.img}</span>
                  </div>
                  <div className="timeline__dot" />
                  <div className="timeline__year">{node.year}</div>
                  <div className="timeline__node-title">{node.title}</div>
                  <p className="timeline__node-desc">{node.desc}</p>
                  {node.caption && <span className="timeline__node-caption">{node.caption}</span>}
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Doctor cards */}
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 80 }} className="doc-cards-grid">
              <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 32px rgba(14,24,44,.06)", marginTop: -40 }}>
                <div style={{ width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg, rgba(42,125,108,.12), rgba(14,24,44,.06))", margin: "-80px auto 20px", border: "5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Dr. David Photo</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>Dr. David Erb</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>D.C., CCCN, DACNB</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>Founder. Board-Certified Chiropractic Neurologist. 2012 London Olympics — USA Wrestling, Judo, Weightlifting. Treated gold medalists Kayla Harrison &amp; Jordan Burroughs. Opened the first international MaxLiving clinic in Zimbabwe.</p>
              </div>
              <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 32px rgba(14,24,44,.06)" }}>
                <div style={{ width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg, rgba(42,125,108,.12), rgba(14,24,44,.06))", margin: "-80px auto 20px", border: "5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Dr. Kimberly Photo</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>Dr. Kimberly Erb</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>D.C.</p>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.65 }}>Co-Owner. 28 years of practice. 2012 London Olympics. Specializes in Thermography, Metabolix, Nutrition, Toxin Removal, Pediatric &amp; Prenatal care. Co-founded the Zimbabwe MaxLiving Health Center.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 20 }}>Plus our team of 11 dedicated support staff.</p>
              <Link href="/team" className="btn btn--teal">Meet The Full Team &rarr;</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ padding: "60px 0", background: "var(--color-teal)" }}>
        <div className="container-erb">
          <RevealOnScroll>
            <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", textAlign: "center" }}>
              {[
                { number: "\u2605 4.8", label: "Rating" },
                { number: "306+", label: "Reviews" },
                { number: "28", label: "Years" },
                { number: "2", label: "Locations" },
                { number: "2012", label: "Olympics" },
              ].map((stat, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 48 }}>
                  {i > 0 && <span style={{ width: 1, height: 60, background: "rgba(241,236,232,.2)" }} className="stat-divider" />}
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: 52, fontWeight: 900, color: "var(--color-cream)" }}>{stat.number}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(241,236,232,.8)", letterSpacing: 1, textTransform: "uppercase" }}>{stat.label}</span>
                  </span>
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "120px 0 140px", background: "#fff" }} id="testimonials">
        <div className="container-erb">
          <div style={{ marginBottom: 56 }}>
            <span className="label">Patient Stories</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.1, marginBottom: 16 }}>
                <span style={{ display: "block", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300 }}>Neuropathy &amp; Wellness</span>
                <span style={{ display: "block", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 900, color: "var(--color-teal)" }}>Treatment in Coppell TX</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "60fr 40fr", gap: 32 }} className="testi-home-grid">
              <div style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "56px 48px", borderLeft: "5px solid var(--color-teal)", position: "relative", gridRow: "1 / 3" }}>
                <span style={{ fontSize: 120, fontWeight: 900, color: "var(--color-olive)", opacity: .15, position: "absolute", top: 12, left: 28, lineHeight: 1, fontFamily: "Georgia, serif" }}>&ldquo;</span>
                <div style={{ color: "var(--color-gold)", marginBottom: 12, fontSize: 16 }}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p style={{ fontSize: 22, fontWeight: 400, color: "var(--color-text-primary)", lineHeight: 1.65, marginBottom: 28, position: "relative", zIndex: 1 }}>
                  Dr. Erb&apos;s a great chiropractor. It&apos;s been over 20 years! When I first met him he found my issue within minutes. He&apos;s thorough, knowledgeable, and genuinely cares about his patients. Our whole family trusts him with our health.
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-text-secondary)" }}>— Long-term patient &middot; 20+ years</p>
              </div>
              <div style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "32px 28px" }}>
                <div style={{ color: "var(--color-gold)", marginBottom: 10, fontSize: 14 }}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p style={{ fontSize: 15, color: "var(--color-text-primary)", lineHeight: 1.65, marginBottom: 16 }}>Adrian at Erb is an angel. She is so caring, kind, and patient with my son. We have been taking my baby to Erb since he was 2 months old.</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>— Pediatric parent</p>
              </div>
              <div style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: "32px 28px" }}>
                <div style={{ color: "var(--color-gold)", marginBottom: 10, fontSize: 14 }}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p style={{ fontSize: 15, color: "var(--color-text-primary)", lineHeight: 1.65, marginBottom: 16 }}>The staff is incredible and has really helped my family with our health goals. Advanced technology and genuine care — you won&apos;t find this combination anywhere else in DFW.</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)" }}>— Family wellness patient</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROCESS + 5 ESSENTIALS */}
      <section style={{ padding: "120px 0 140px", background: "var(--color-cream)" }} id="process">
        <div className="container-erb">
          <div style={{ marginBottom: 48 }}>
            <span className="label">Your Healing Journey</span>
            <RevealOnScroll>
              <h2 style={{ marginBottom: 16, lineHeight: 1.15 }}>
                <span className="title-light">Pediatric &amp; Prenatal</span>
                <span className="title-heavy">Chiropractic in Coppell TX</span>
              </h2>
            </RevealOnScroll>
          </div>
          <div className="split split--50-50">
            <RevealOnScroll>
              <div className="steps">
                {[
                  { num: "01", title: "Book Your $67 Visit", desc: "Choose Coppell or Southlake. Call (972) 393-6262 or book online. Your healing journey starts here." },
                  { num: "02", title: "Advanced Diagnostics", desc: "X-rays, possibly thermography, blood microscopy. Dr. Erb finds what others miss — the root cause, not just the symptom." },
                  { num: "03", title: "Your 5 Essentials Plan", desc: "A custom plan built on all 5 pillars of true health — designed for YOUR body, YOUR goals, YOUR family." },
                ].map((step, i) => (
                  <div key={i} className="step">
                    <div className="step__num">{step.num}</div>
                    <div>
                      <h4 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 6 }}>{step.title}</h4>
                      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "48px 36px", boxShadow: "0 8px 32px rgba(14,24,44,.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-teal)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>The 5 Essentials</div>
                {["Core Chiropractic", "Nutrition", "Mindset", "Oxygen & Exercise", "Minimizing Toxins"].map((name, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 0", borderBottom: i < 4 ? "1px solid rgba(14,24,44,.06)" : "none" }}>
                    <div style={{ width: 36, height: 36, minWidth: 36, background: "rgba(42,125,108,.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "var(--color-teal)" }}>{i + 1}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)" }}>{name}</div>
                  </div>
                ))}
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 24, lineHeight: 1.6, padding: 20, background: "rgba(42,125,108,.04)", borderRadius: "var(--radius-sm)" }}>
                  Your plan may include HBOT, SoftWave, thermography, nutrition coaching, detox, or sauna — whatever YOUR body needs.
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 0 140px", background: "#fff" }} id="faq">
        <div className="container-erb">
          <div className="split split--40-60">
            <div>
              <span className="label">Common Questions</span>
              <RevealOnScroll>
                <h2 style={{ lineHeight: 1.15, marginBottom: 16 }}>
                  <span className="title-light">Spinal Decompression &amp;</span>
                  <span className="title-heavy">Thermography Coppell TX</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                  Can&apos;t find what you&apos;re looking for? Call us at{" "}
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>.
                </p>
              </RevealOnScroll>
            </div>
            <RevealOnScroll delay={200}>
              <FAQ items={homeFAQs} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="page-section--navy" style={{ padding: "120px 0 140px", position: "relative" }} id="locations">
        <div className="container-erb" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label label--light">Find Us</span>
            <RevealOnScroll>
              <h2 style={{ lineHeight: 1.15, marginBottom: 12 }}>
                <span style={{ display: "block", fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 300, color: "var(--color-text-light)" }}>Two locations.</span>
                <span style={{ display: "block", fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, color: "var(--color-text-light)" }}>One level of care.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="loc-grid">
              <div className="loc-card">
                <div className="loc-card__badge">Primary Location</div>
                <h3 className="loc-card__name">Coppell</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-teal)" fill="none" strokeWidth="1.5" style={{ minWidth: 18, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>255 S Denton Tap Rd, Suite 200<br />Coppell, TX 75019</span>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-teal)" fill="none" strokeWidth="1.5" style={{ minWidth: 18, marginTop: 2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
                </div>
                <div className="loc-card__hours">
                  <h4>Hours</h4>
                  <p>Mon: 8:00–10:30 AM, 3:30–6:00 PM<br />Tue: 12:00–3:00 PM<br />Wed: 8:00–10:30 AM, 3:30–6:00 PM<br />Thu: 2:30–5:30 PM<br />Fri: 7:30–10:30 AM<br />Sat–Sun: Closed</p>
                </div>
              </div>
              <div className="loc-card" style={{ marginTop: 24 }}>
                <div className="loc-card__badge">Second Location</div>
                <h3 className="loc-card__name">Southlake</h3>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-teal)" fill="none" strokeWidth="1.5" style={{ minWidth: 18, marginTop: 2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>1845 E Southlake Blvd, Suite 140<br />Southlake, TX 76092</span>
                </div>
                <div className="loc-card__detail">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="var(--color-teal)" fill="none" strokeWidth="1.5" style={{ minWidth: 18, marginTop: 2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <a href="tel:9723936262" style={{ color: "var(--color-teal)", fontWeight: 600 }}>(972) 393-6262</a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <p style={{ textAlign: "center", marginTop: 48, fontSize: 14, color: "rgba(241,236,232,.6)", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
              Serving Coppell, Southlake, Lewisville, Flower Mound, Grapevine, Carrollton, Irving, Valley Ranch, Las Colinas, and the DFW Metroplex.
            </p>
          </RevealOnScroll>
        </div>
      </section>

    </>
  );
}
