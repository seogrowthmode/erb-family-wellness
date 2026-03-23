import Link from "next/link";

interface ServiceCardProps {
  name: string;
  title: string;
  description: string;
  href: string;
  imagePlaceholder?: string;
  badge?: string;
}

export default function ServiceCard({ name, title, description, href, imagePlaceholder, badge }: ServiceCardProps) {
  return (
    <Link href={href} className="svc-card" style={{ display: "block" }}>
      {badge && <span className="svc-card__badge">{badge}</span>}
      <div className="svc-card__img">
        <span>{imagePlaceholder || `${title} photo`}</span>
      </div>
      <div className="svc-card__body">
        <p className="svc-card__name">{name}</p>
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>
        <span className="svc-card__link">{title} &rarr;</span>
      </div>
    </Link>
  );
}
