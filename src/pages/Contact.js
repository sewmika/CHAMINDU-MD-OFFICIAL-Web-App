import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your message has been received.`);
    setName(""); setEmail(""); setMessage("");
  };

  return (
    <div className="py-20 bg-green-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <textarea placeholder="Your Message" className="p-2 border rounded" value={message} onChange={(e)=>setMessage(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}
