import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Our Team | Erb Family Wellness Coppell TX",
  description:
    "Meet Dr. David Erb (DC, DACNB), Dr. Kimberly Erb & 13 team members. 2012 Olympic chiropractors in Coppell TX. (972) 393-6262.",
  alternates: { canonical: "https://www.erbfamilywellness.com/team" },
};

const timelineNodes = [
  { year: "1998", title: "Practice Founded", desc: "Dr. David & Dr. Kimberly open in Coppell, TX.", img: "Founding day photo" },
  { year: "2002", title: "MaxLiving", desc: "Become MaxLiving Health Center.", img: "MaxLiving certification" },
  { year: "2005", title: "Growing Family", desc: "Practice grows, community roots deepen.", img: "Community event" },
  { year: "2008", title: "Advanced Training", desc: "Dr. Kimberly earns Board Certification in Chiropractic Neurology (DACNB).", img: "Board certification" },
  { year: "2010", title: "Zimbabwe", desc: "First international MaxLiving clinic in Africa.", img: "Zimbabwe clinic" },
  { year: "2012", title: "London Olympics", desc: "USA Wrestling, Judo, Weightlifting, Paralympic Sitting Volleyball. Gold medalists.", img: "London Olympics 2012", caption: "Team USA" },
  { year: "2018", title: "Technology", desc: "HBOT, SoftWave, AlfaSight Thermography, Blood Microscopy.", img: "Advanced technology suite" },
  { year: "Today", title: "28 Years & Growing", desc: "5 providers, 2 locations, 306+ reviews, worldwide patients.", img: "Team photo 2024" },
];

const teamMembers = [
  { name: "Dr. David Erb", role: "Founder \u00B7 D.C., DACNB" },
  { name: "Dr. Kimberly Erb", role: "Co-Founder \u00B7 D.C." },
  { name: "Adrian", role: "Patient Care Coordinator" },
  { name: "Dr. Sarah Mitchell", role: "Associate Chiropractor" },
  { name: "Dr. Jason Reed", role: "Associate Chiropractor" },
  { name: "Dr. Amanda Torres", role: "Functional Nutrition" },
  { name: "Rachel", role: "Office Manager" },
  { name: "Lisa", role: "Chiropractic Assistant" },
  { name: "Mark", role: "Therapy Technician" },
  { name: "Jessica", role: "Front Desk" },
  { name: "Daniel", role: "Therapy Technician" },
  { name: "Megan", role: "Billing Coordinator" },
  { name: "Chris", role: "Chiropractic Assistant" },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
        titleLight="Olympic chiropractors."
        titleHeavy="Family healers."
        subtitle="5 providers. 13 team members. 28 years of hope and healing."
      />

      {/* TIMELINE */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">Our Journey</span>
              <h2 className="section-headline">
                <span className="light">A 28-year journey</span>
                <span className="heavy">of hope and healing.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="timeline">
              <div className="timeline__line" />
              {timelineNodes.map((node) => (
                <div key={node.year} className="timeline__node">
                  <div className="timeline__img">
                    <span className="timeline__img-grad" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(42,125,108,.12) 0%, rgba(14,24,44,.06) 100%)", fontSize: 11, color: "var(--color-teal)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, textAlign: "center", padding: 8 }}>{node.year}</span>
                  </div>
                  <div className="timeline__dot" />
                  <div className="timeline__year">{node.year}</div>
                  <div className="timeline__node-title">{node.title}</div>
                  <div className="timeline__node-desc">{node.desc}</div>
                  {node.caption && <div className="timeline__node-caption">{node.caption}</div>}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* DR. DAVID ERB */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="doc-feature">
              <div className="doc-feature__photo">
                <div style={{ width: "100%", minHeight: 320, background: "linear-gradient(135deg, rgba(42,125,108,.12) 0%, rgba(14,24,44,.06) 100%)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase" }}>Dr. David Erb</span>
                </div>
              </div>
              <div className="doc-feature__name">Dr. David Erb</div>
              <div className="doc-feature__creds">D.C., CCCN</div>
              <div className="cred-tags">
                <span className="cred-tag">DC</span>
                <span className="cred-tag">CCCN</span>
                <span className="cred-tag">Parker College 1999</span>
                <span className="cred-tag">2012 London Olympics</span>
                <span className="cred-tag">Zimbabwe 2010</span>
                <span className="cred-tag">MaxLiving Network</span>
              </div>
              <div className="doc-feature__bio">
                <p>From El Reno, Oklahoma. Graduated Parker College of Chiropractic in 1999. Founded Erb Family Wellness in Coppell, TX in 1998. Proud member of the MaxLiving Network.</p>
                <p>2012 London Olympics: served as chiropractor for USA Wrestling, USA Judo, USA Weightlifting, and Paralympic USA Sitting Volleyball. Treated gold medalists Kayla Harrison and Jordan Burroughs.</p>
                <p>2010: Co-founded the first international MaxLiving Health Center in Zimbabwe, Africa.</p>
                <p>International speaker on corrective chiropractic care and the 5 Essentials.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="pull-quote">
              &ldquo;I believe the body was designed to heal. Our job is to remove interference and give it what it needs.&rdquo;
              <cite>Dr. David Erb, D.C., CCCN</cite>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="doc-feature__bio">
              <p>Married to Dr. Kimberly. Three children. Lives in the DFW Metroplex.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* DR. KIMBERLY ERB */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="doc-feature">
              <div className="doc-feature__photo">
                <div style={{ width: "100%", minHeight: 320, background: "linear-gradient(135deg, rgba(42,125,108,.12) 0%, rgba(14,24,44,.06) 100%)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-md)" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, textTransform: "uppercase" }}>Dr. Kimberly Erb</span>
                </div>
              </div>
              <div className="doc-feature__name">Dr. Kimberly Erb</div>
              <div className="doc-feature__creds">D.C., DACNB</div>
              <div className="cred-tags">
                <span className="cred-tag">DC</span>
                <span className="cred-tag">DACNB</span>
                <span className="cred-tag">Board-Certified Chiropractic Neurologist</span>
                <span className="cred-tag">28 Years</span>
                <span className="cred-tag">2012 London Olympics</span>
                <span className="cred-tag">Zimbabwe 2010</span>
                <span className="cred-tag">Thermography</span>
                <span className="cred-tag">Pediatric &amp; Prenatal</span>
              </div>
              <div className="doc-feature__bio">
                <p>Co-Owner and co-founder. Board-Certified Chiropractic Neurologist (DACNB). 28 years alongside Dr. David.</p>
                <p>2012 London Olympics &mdash; served alongside Dr. David for Team USA.</p>
                <p>Co-founded the Zimbabwe MaxLiving Health Center in 2010.</p>
                <p>Specializes in Thermography (AlfaSight 120-point system), Metabolix testing, Functional Nutrition, Toxin Removal, Pediatric and Prenatal chiropractic care.</p>
                <p>&ldquo;The diagnostic mind behind the practice.&rdquo; Known for finding what others miss through advanced imaging and metabolic analysis.</p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="pull-quote">
              The diagnostic mind behind the practice. Known for finding what others miss through advanced imaging and metabolic analysis.
              <cite>Dr. Kimberly Erb, D.C.</cite>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="doc-feature__bio">
              <p>Mother of three. Passionate about family wellness from preconception through every stage of life.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label label--light">Our Team</span>
              <h2 className="section-headline section-headline--light">
                <span className="light">13 people</span>
                <span className="heavy">dedicated to your healing.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.name} className="team-member">
                  <div className="team-member__photo"><span>Photo</span></div>
                  <div className="team-member__name">{member.name}</div>
                  <div className="team-member__role">{member.role}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PATIENT STORIES */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">What Patients Say</span>
              <h2 className="section-headline">
                <span className="light">Real stories</span>
                <span className="heavy">from real families.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="cards-grid cards-grid--3">
              <TestimonialCard
                quote="Adrian at Erb is an angel. She is so caring, kind, and patient with my son. We couldn't ask for a better team."
                author="Pediatric parent"
              />
              <TestimonialCard
                quote="Dr. Erb's a great chiropractor. It's been over 20 years! The consistency and care we've received is unmatched."
                author="Long-term patient"
              />
              <TestimonialCard
                quote="The staff is incredible and has really helped my family with our health goals. Everyone genuinely cares."
                author="Family patient"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
