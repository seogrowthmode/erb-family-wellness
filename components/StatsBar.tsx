interface StatsBarProps {
  items: string[];
}

export default function StatsBar({ items }: StatsBarProps) {
  return (
    <div className="stats-bar">
      <div className="container-erb">
        <div className="stats-bar__row">
          {items.map((item, i) => (
            <span key={i}>
              {i > 0 && <span className="stats-bar__divider" />}
              <span className="stats-bar__item">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
