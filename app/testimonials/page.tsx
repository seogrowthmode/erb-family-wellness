import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Patient Reviews | Erb Family Wellness",
  description:
    "306+ five-star reviews for Erb Family Wellness in Coppell TX. See why patients trust Dr. David Erb. Call (972) 393-6262.",
  alternates: { canonical: "https://erbfamilywellness.com/testimonials" },
};

const reviews = [
  {
    quote: "Adrian at Erb is an angel. She is so caring, kind, and patient with my son. We have been taking my baby to Erb since he was 2 months old.",
    author: "Pediatric parent",
    tags: [{ label: "Pediatric", variant: "teal" as const }],
  },
  {
    quote: "The staff is incredible and has really helped my family with our health goals.",
    author: "Family wellness patient",
    tags: [{ label: "Family Care", variant: "olive" as const }],
  },
  {
    quote: "I came in with chronic back pain that three other doctors couldn't fix. Dr. Erb found the problem in my first visit. After 6 weeks of corrective care, I'm pain-free for the first time in years.",
    author: "Back pain patient",
    tags: [{ label: "Back Pain", variant: "teal" as const }, { label: "Spinal Correction", variant: "olive" as const }],
  },
  {
    quote: "The HBOT chamber has been life-changing for my recovery. I can't believe this technology exists in Coppell.",
    author: "HBOT patient",
    tags: [{ label: "HBOT", variant: "teal" as const }],
  },
  {
    quote: "We drive 45 minutes each way because no one else offers what Erb offers. The thermography alone was worth it — found issues no other test caught.",
    author: "Thermography patient",
    tags: [{ label: "Thermography", variant: "teal" as const }, { label: "Worth the Drive", variant: "olive" as const }],
  },
  {
    quote: "Dr. Kimberly helped me through my entire pregnancy. Gentle adjustments, nutrition guidance, and genuine care. I've never felt healthier.",
    author: "Prenatal patient",
    tags: [{ label: "Prenatal", variant: "teal" as const }, { label: "Dr. Kimberly", variant: "olive" as const }],
  },
  {
    quote: "I was skeptical about chiropractic care until I met Dr. Erb. His board certification in neurology and the advanced diagnostics convinced me. Best decision I ever made.",
    author: "Neuropathy patient",
    tags: [{ label: "Neuropathy", variant: "teal" as const }],
  },
  {
    quote: "My whole family goes here — from my 3-year-old to my 70-year-old mother. They treat everyone with the same care and attention.",
    author: "Multi-generational family",
    tags: [{ label: "Family", variant: "olive" as const }],
  },
  {
    quote: "The SoftWave therapy resolved my shoulder pain in 4 sessions. No surgery, no drugs. Just results.",
    author: "SoftWave patient",
    tags: [{ label: "SoftWave", variant: "teal" as const }],
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        titleLight="306+ reviews."
        titleHeavy="28 years of trust."
        subtitle="From 20-year patients to Olympic athletes — hear what our community says about Erb Family Wellness."
      />

      {/* FEATURED REVIEW */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">FEATURED REVIEW</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="testi-card testi-card--large testi-card--featured" style={{ maxWidth: 800, margin: "0 auto" }}>
              <span className="testi-card__mark">&ldquo;</span>
              <div className="testi-card__stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
              <p className="testi-card__quote">
                &ldquo;Dr. Erb&rsquo;s a great chiropractor. It&rsquo;s been over 20 years! When I first met him he found my issue within minutes. He&rsquo;s thorough, knowledgeable, and genuinely cares about his patients. Our whole family trusts him with our health.&rdquo;
              </p>
              <p className="testi-card__author">&mdash; Long-term patient &middot; 20+ years</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="trust-strip" style={{ marginTop: 40 }}>
              <span><span className="stars">{"\u2605\u2605\u2605\u2605\u2605"}</span> 4.8 average</span>
              <span>&middot;</span>
              <span>306+ Google Reviews</span>
              <span>&middot;</span>
              <span>425+ total reviews</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">PATIENT STORIES</span>
              <h2 className="section-headline">
                <span className="light">Real patients.</span>
                <span className="heavy">Real results.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="masonry">
              {reviews.map((review, i) => (
                <TestimonialCard
                  key={i}
                  quote={review.quote}
                  author={review.author}
                  tags={review.tags}
                  variant="cream"
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* OLYMPIC CREDENTIALS */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label label--cream">OLYMPIC TRUST</span>
              <h2 className="section-headline section-headline--light">
                <span className="light">When Olympic athletes</span>
                <span className="heavy">trust your care.</span>
              </h2>
              <p className="section-sub section-sub--light" style={{ marginLeft: "auto", marginRight: "auto" }}>
                In 2012, Dr. David and Dr. Kimberly Erb served as chiropractors at the London Olympics for USA Wrestling, Judo, Weightlifting, and Paralympic Sitting Volleyball.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--3">
              {[
                { name: "Kayla Harrison", medal: "Gold Medal", sport: "Judo \u00B7 2012 London Olympics" },
                { name: "Jordan Burroughs", medal: "Gold Medal", sport: "Wrestling \u00B7 2012 London Olympics" },
                { name: "Dartanyon Crockett", medal: "Bronze Medal", sport: "Paralympic Judo \u00B7 2012 London" },
              ].map((a) => (
                <div key={a.name} style={{ background: "rgba(241,236,232,.06)", borderRadius: "var(--radius-md)", padding: 32, textAlign: "center" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-text-light)", marginBottom: 8 }}>{a.name}</h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-gold)", marginBottom: 6 }}>{a.medal}</p>
                  <p style={{ fontSize: 14, color: "rgba(241,236,232,.5)" }}>{a.sport}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p style={{ textAlign: "center", fontSize: 13, color: "rgba(241,236,232,.4)", marginTop: 40, letterSpacing: ".5px" }}>
              USA Wrestling &middot; USA Judo &middot; USA Weightlifting &middot; Paralympic USA Sitting Volleyball
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SHARE YOUR EXPERIENCE */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">SHARE YOUR STORY</span>
              <h2 className="section-headline">
                <span className="light">Had a great experience?</span>
                <span className="heavy">Tell the world.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--3">
              {[
                { title: "Google Reviews", desc: "Leave us a 5-star review on Google.", btn: "Write a Review", btnClass: "btn btn--teal btn--sm", iconColor: "var(--color-teal)", iconBg: "rgba(42,125,108,.1)" },
                { title: "Facebook", desc: "Share your experience on Facebook.", btn: "Review on Facebook", btnClass: "btn btn--outline-dark btn--sm", iconColor: "var(--color-navy)", iconBg: "rgba(14,24,44,.06)" },
                { title: "Yelp", desc: "Help others find us on Yelp.", btn: "Review on Yelp", btnClass: "btn btn--outline-dark btn--sm", iconColor: "var(--color-navy)", iconBg: "rgba(14,24,44,.06)" },
              ].map((platform) => (
                <div key={platform.title} style={{ background: "var(--color-cream)", borderRadius: "var(--radius-md)", padding: 36, textAlign: "center", boxShadow: "0 4px 20px rgba(14,24,44,.06)" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: platform.iconBg, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={platform.iconColor} strokeWidth="1.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>{platform.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 24 }}>{platform.desc}</p>
                  <Link href="#" className={platform.btnClass}>{platform.btn} &rarr;</Link>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
