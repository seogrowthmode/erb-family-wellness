import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us | Erb Family Wellness Coppell TX",
  description:
    "Meet Dr. David & Dr. Kimberly Erb, 2012 Olympic chiropractors in Coppell TX. 28 years of corrective care. Call (972) 393-6262.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        titleLight="28 years of"
        titleHeavy="hope and healing."
        subtitle="From El Reno, Oklahoma to the 2012 London Olympics — the story of Erb Family Wellness."
      />

      {/* OUR STORY */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">OUR STORY</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="narrative">
              <p>
                Dr. David Erb grew up in El Reno, Oklahoma &mdash; a small town where hard work, faith, and
                family meant everything. He knew early on that he wanted to help people, but not in the way
                most doctors do. He wanted to find the cause, not mask the symptom. He graduated from Parker
                College of Chiropractic in 1999, but his journey had already begun a year earlier.
              </p>
              <p>
                In 1998, Dr. David and Dr. Kimberly Erb opened their practice in Coppell, Texas &mdash; a
                husband-and-wife team with a singular vision: corrective, root-cause chiropractic care that
                went far beyond the adjustment. They didn&rsquo;t want to chase pain. They wanted to build
                health.
              </p>
              <blockquote className="pull-quote">
                &ldquo;We didn&rsquo;t want to be the chiropractor you visit when something hurts. We wanted
                to be the doctors who help you never need a doctor.&rdquo;
                <cite>&mdash; Dr. David Erb</cite>
              </blockquote>
              <p>
                From day one, they built their practice on what would become the MaxLiving 5 Essentials
                &mdash; Core Chiropractic, Nutrition, Mindset, Oxygen &amp; Exercise, and Minimizing Toxins.
                It wasn&rsquo;t trendy at the time. Most chiropractors focused on pain relief. The Erbs
                focused on transformation.
              </p>
              <div className="img-placeholder img-placeholder--med" style={{ margin: "48px 0" }}>
                Practice founding &mdash; Coppell, TX, 1998
              </div>
              <p>
                The results spoke for themselves. Patients didn&rsquo;t just feel better &mdash; they got off
                medications, reversed diagnoses, and started living differently. Word spread. The practice
                grew. And Dr. David and Dr. Kimberly began to wonder: if this works here, could it work
                anywhere?
              </p>
              <p>
                In 2010, they answered that question. Dr. David and Dr. Kimberly opened the first
                international MaxLiving Health Center in Zimbabwe, Africa &mdash; bringing the same corrective
                care model to a community that had never experienced anything like it.
              </p>
              <blockquote className="pull-quote">
                &ldquo;If this approach to health works in Coppell, it works anywhere. We wanted to prove
                it.&rdquo;
                <cite>&mdash; Dr. David Erb</cite>
              </blockquote>
              <p>
                Then came the call that changed everything. In 2012, Dr. David and Dr. Kimberly were selected
                to serve as chiropractors at the London Olympics, providing care for USA Wrestling, USA Judo,
                USA Weightlifting, and Paralympic USA Sitting Volleyball. They worked with some of the greatest
                athletes in the world &mdash; including gold medalists Kayla Harrison and Jordan Burroughs.
              </p>
              <div className="img-placeholder img-placeholder--med" style={{ margin: "48px 0" }}>
                2012 London Olympics &mdash; USA Wrestling, Judo, Weightlifting
              </div>
              <p>
                Today, 28 years later, Erb Family Wellness has grown into something extraordinary: 2 locations
                in Coppell and Southlake, 5 providers, 13 dedicated team members, and over 306 five-star
                reviews from patients around the world. They&rsquo;ve brought in the most advanced technology
                in DFW &mdash; Hyperbaric Oxygen Therapy, SoftWave Tissue Regeneration, Digital Thermography,
                and Live Blood Microscopy &mdash; because staying still was never an option.
              </p>
              <p>
                The vision hasn&rsquo;t changed. The scale has. And the mission remains the same: help every
                patient find the cause, fix the cause, and build a life they don&rsquo;t need to escape from.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* OLYMPIC CREDENTIALS */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="split split--40-60">
              <div>
                <span className="label label--light">OLYMPIC CREDENTIALS</span>
                <h2 style={{ lineHeight: 1.1, marginBottom: 24 }}>
                  <span style={{ display: "block", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 300, color: "var(--color-text-light)" }}>
                    When the world&rsquo;s best athletes
                  </span>
                  <span style={{ display: "block", fontSize: "clamp(36px,4.5vw,52px)", fontWeight: 900, color: "var(--color-cream)" }}>
                    need a chiropractor.
                  </span>
                </h2>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { name: "Kayla Harrison", medal: "Gold Medal, Judo", desc: "First American to win Olympic gold in Judo. Two-time Olympic champion and dominant force in mixed martial arts." },
                    { name: "Jordan Burroughs", medal: "Gold Medal, Wrestling", desc: "One of the greatest freestyle wrestlers in history. Olympic, World, and NCAA champion." },
                    { name: "Dartanyon Crockett", medal: "Bronze Medal, Paralympic Judo", desc: "Paralympic bronze medalist in Judo. An inspiring story of resilience and determination.", isBronze: true },
                  ].map((athlete) => (
                    <div key={athlete.name} style={{ background: "rgba(241,236,232,.06)", borderRadius: "var(--r-md)", padding: "28px 24px" }}>
                      <h4 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-light)", marginBottom: 4 }}>{athlete.name}</h4>
                      <p style={{ fontSize: 14, fontWeight: 600, color: athlete.isBronze ? "rgba(241,236,232,.7)" : "var(--color-gold)", marginBottom: 8 }}>{athlete.medal}</p>
                      <p style={{ fontSize: 14, color: "rgba(241,236,232,.55)", lineHeight: 1.6 }}>{athlete.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="cred-tags" style={{ marginTop: 28 }}>
                  <span className="cred-tag">USA Wrestling</span>
                  <span className="cred-tag">USA Judo</span>
                  <span className="cred-tag">USA Weightlifting</span>
                  <span className="cred-tag">Paralympic USA Sitting Volleyball</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="page-section page-section--white page-section--compact">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">BY THE NUMBERS</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="stats-row">
              {[
                { number: <>4.8<span style={{ fontSize: 32 }}>{"\u2605"}</span></>, label: "Rating", gold: true },
                { number: "306+", label: "Reviews" },
                { number: "28", label: "Years" },
                { number: "2", label: "Locations" },
                { number: "2012", label: "Olympics" },
                { number: "\uD83C\uDF0E", label: "Worldwide Patients" },
              ].map((stat, i) => (
                <span key={i}>
                  {i > 0 && <div className="stats-row__divider" />}
                  <div className="stats-row__item">
                    <span className={`stats-row__number${stat.gold ? " stats-row__number--gold" : ""}`}>{stat.number}</span>
                    <span className="stats-row__label">{stat.label}</span>
                  </div>
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">YOUR CARE TEAM</span>
              <h2 className="section-headline">
                <span className="light">The doctors behind</span>
                <span className="heavy">the mission.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--50-50">
              {[
                {
                  name: "Dr. David Erb",
                  creds: "D.C., CCCN, DACNB",
                  bio: "Founder and lead clinician of Erb Family Wellness. Board-certified chiropractic neurologist with over 28 years of clinical experience. 2012 London Olympics chiropractor for USA Wrestling, Judo, and Weightlifting. Opened the first international MaxLiving Health Center in Zimbabwe, Africa. Relentless advocate for root-cause, corrective care.",
                },
                {
                  name: "Dr. Kimberly Erb",
                  creds: "D.C.",
                  bio: "Co-owner and co-founder of Erb Family Wellness. 28 years of clinical practice specializing in thermography, nutrition, pediatric, and prenatal chiropractic care. 2012 London Olympics chiropractor alongside Dr. David. Passionate about empowering women and families to take control of their health through the 5 Essentials.",
                },
              ].map((doc) => (
                <div key={doc.name} style={{ background: "var(--color-white)", borderRadius: "var(--r-md)", overflow: "hidden", boxShadow: "0 4px 20px rgba(14,24,44,.06)" }}>
                  <div className="img-placeholder img-placeholder--tall" style={{ borderRadius: 0, minHeight: 320 }}>
                    {doc.name} &mdash; Photo
                  </div>
                  <div style={{ padding: "32px 28px" }}>
                    <h3 style={{ fontSize: 24, fontWeight: 900, color: "var(--color-text-primary)", marginBottom: 4 }}>{doc.name}</h3>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-teal)", letterSpacing: 1, marginBottom: 16 }}>{doc.creds}</p>
                    <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{doc.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <p style={{ fontSize: 16, color: "var(--color-text-secondary)", marginBottom: 20 }}>
                Plus our team of 11 dedicated support staff.
              </p>
              <Link href="/team" className="btn btn--teal">
                Meet The Full Team &rarr;
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
