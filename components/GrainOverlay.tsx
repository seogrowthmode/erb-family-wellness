export default function GrainOverlay() {
  return (
    <div className="grain" aria-hidden="true">
      <svg>
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}
