import React from 'react';

export default function Features() {
  return (
    <div className="py-20 bg-purple-100 text-center" id="features">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">WhatsApp Bot</h3>
          <p>Interact with an AI-powered WhatsApp Bot seamlessly.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
          <p>Available for Web, Android, and iOS devices.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
          <p>Optimized for mobile, tablet, and desktop screens.</p>
        </div>
      </div>
    </div>
  );
}
