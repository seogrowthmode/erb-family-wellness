'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { analyticsText, trackConversionEvent } from '@/lib/client-tracking';

const CLARITY_ID = 'xaxwrdfpty';
const TRACKING_VERSION = 'chiroflow_external_tracking_2026_06_26_v2';

let listenersAttached = false;

export default function Tracking() {
  useEffect(() => {
    if (listenersAttached) return;
    listenersAttached = true;

    const handlePhoneClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;
      const phone = link.href.replace(/^tel:/, '');
      trackConversionEvent('phone_click', {
        event_category: 'engagement',
        event_label: phone,
        phone_number: phone,
        link_text: analyticsText(link.textContent, 100),
      });
    };

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;
      const name =
        form.getAttribute('data-form-name') ||
        form.getAttribute('name') ||
        form.id ||
        'erb_lead_form';
      trackConversionEvent('form_submit', {
        event_category: 'engagement',
        event_label: name,
        form_name: name,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handlePhoneClick, true);
    document.addEventListener('submit', handleFormSubmit, true);

    return () => {
      document.removeEventListener('click', handlePhoneClick, true);
      document.removeEventListener('submit', handleFormSubmit, true);
      listenersAttached = false;
    };
  }, []);

  return (
    <>
      <Script id="chiroflow-tracking-marker" strategy="afterInteractive">
        {`
          window.__chiroflowWebsiteTrackerVersion = "${TRACKING_VERSION}";
          window.__chiroflowWebsiteTrackerInstalled = true;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "chiroflow_tracker_loaded",
            tracker_version: "${TRACKING_VERSION}",
            tracker_mode: "native_server_crm"
          });
        `}
      </Script>
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
    </>
  );
}
