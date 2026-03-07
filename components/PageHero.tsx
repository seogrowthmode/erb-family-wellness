import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: Breadcrumb[];
  titleLight: string;
  titleHeavy: string;
  titleHeavyTeal?: boolean;
  subtitle?: string;
  short?: boolean;
}

export default function PageHero({
  breadcrumbs,
  titleLight,
  titleHeavy,
  titleHeavyTeal = true,
  subtitle,
  short = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero${short ? " page-hero--short" : ""}`}>
      <div className="page-hero__content">
        <p className="page-hero__breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && " / "}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
            </span>
          ))}
        </p>
        <h1 style={{ lineHeight: 1.1, marginBottom: 20 }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 300,
              color: "var(--color-text-light)",
            }}
          >
            {titleLight}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(42px, 5.5vw, 64px)",
              fontWeight: 900,
              color: titleHeavyTeal ? "var(--color-teal)" : "var(--color-text-light)",
            }}
          >
            {titleHeavy}
          </span>
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: 17,
              color: "rgba(241,236,232,.65)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
