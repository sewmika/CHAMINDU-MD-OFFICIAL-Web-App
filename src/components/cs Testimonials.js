import React from 'react';

export default function Testimonials() {
  const data = [
    { name: "User1", text: "Amazing WhatsApp Bot experience!" },
    { name: "User2", text: "Very smooth and easy to use." },
    { name: "User3", text: "CHAMINDU MD OFFICIAL is awesome!" },
  ];

  return (
    <div className="py-20 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <p className="mb-2">"{item.text}"</p>
            <span className="font-bold">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
