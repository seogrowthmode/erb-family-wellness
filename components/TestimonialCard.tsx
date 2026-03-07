interface TestimonialCardProps {
  quote: string;
  author: string;
  tags?: { label: string; variant: "teal" | "olive" }[];
  variant?: "default" | "cream";
}

export default function TestimonialCard({ quote, author, tags, variant = "default" }: TestimonialCardProps) {
  return (
    <div className={`testi-card${variant === "cream" ? " testi-card--cream" : ""}`}>
      <div className="testi-card__stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
      <p className="testi-card__quote">&ldquo;{quote}&rdquo;</p>
      <p className="testi-card__author">&mdash; {author}</p>
      {tags && tags.length > 0 && (
        <div className="tags" style={{ marginTop: 14 }}>
          {tags.map((tag, i) => (
            <span key={i} className={`tag tag--${tag.variant}`}>
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
