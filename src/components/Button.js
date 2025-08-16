import React from 'react';

export default function Button({ text, link, color="blue" }) {
  const bgClass = color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700";
  return (
    <a href={link} className={`${bgClass} text-white px-6 py-2 rounded`}>
      {text}
    </a>
  );
}
