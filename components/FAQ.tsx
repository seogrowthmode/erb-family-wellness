"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <div className="faq-q" onClick={() => toggle(i)}>
            <span className="faq-q__text">{item.question}</span>
            <span className="faq-q__icon">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--color-teal)" fill="none" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </div>
          <div className="faq-a">
            <div className="faq-a__content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
