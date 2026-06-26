'use client';

type TrackingValue = string | number | boolean | null | undefined;
type TrackingParams = Record<string, TrackingValue>;

type TrackingWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

function cleanParams(params: TrackingParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );
}

export function analyticsText(value: string | null | undefined, max = 100) {
  return (value || '').trim().replace(/\s+/g, ' ').slice(0, max);
}

export function trackConversionEvent(name: string, params: TrackingParams = {}) {
  if (typeof window === 'undefined') return;
  const payload = cleanParams(params);
  const w = window as TrackingWindow;

  if (typeof w.gtag === 'function') {
    w.gtag('event', name, payload);
  } else {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: name, ...payload });
  }

  w.clarity?.('event', name);
}
