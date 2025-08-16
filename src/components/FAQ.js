import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "Is this WhatsApp Bot free?", a: "Yes, fully free to use." },
    { q: "Can I use it on mobile?", a: "Yes, it’s responsive and mobile-friendly." },
    { q: "Do I need to install anything?", a: "No installation is required, just open in your browser." },
  ];

  return (
    <div className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto text-left">
        {faqs.map((item, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-bold">{item.q}</p>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
