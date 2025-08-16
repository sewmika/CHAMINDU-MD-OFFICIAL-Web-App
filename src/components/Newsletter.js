import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <div className="py-10 bg-purple-100 text-center">
      <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2 border rounded w-full md:w-auto" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
      </form>
    </div>
  );
}
