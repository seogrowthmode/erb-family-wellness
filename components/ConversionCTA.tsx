import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

interface ConversionCTAProps {
  headlineLight?: string;
  headlineHeavy?: string;
  showButtons?: boolean;
  compact?: boolean;
}

export default function ConversionCTA({
  headlineLight = "Your $67 first visit",
  headlineHeavy = "begins here.",
  showButtons = true,
  compact = false,
}: ConversionCTAProps) {
  return (
    <section className="conversion-cta" style={compact ? { padding: "100px 0" } : undefined}>
      <div className="container-erb">
        <RevealOnScroll>
          <h2 style={{ lineHeight: 1.1, marginBottom: 16 }}>
            <span
              style={{
                display: "block",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "var(--color-text-light)",
              }}
            >
              {headlineLight}
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(40px, 5.5vw, 64px)",
                fontWeight: 900,
                color: "var(--color-teal)",
              }}
            >
              {headlineHeavy}
            </span>
          </h2>
          {showButtons && (
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
              <Link href="/schedule?location=coppell" className="btn btn--teal">
                Book at Coppell &rarr;
              </Link>
              <Link href="/schedule?location=southlake" className="btn btn--outline">
                Book at Southlake &rarr;
              </Link>
            </div>
          )}
          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 20, flexWrap: "wrap" }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(241,236,232,.7)" }}>
              Coppell: <a href="tel:9723936262" style={{ color: "var(--color-text-light)" }}>(972) 393-6262</a>
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(241,236,232,.7)" }}>
              Southlake: <a href="tel:8178950075" style={{ color: "var(--color-text-light)" }}>(817) 895-0075</a>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
