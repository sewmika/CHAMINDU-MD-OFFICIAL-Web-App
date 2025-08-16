import React from 'react';

export default function Download() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-green-100 text-center" id="download">
      <h2 className="text-3xl font-bold mb-4">Download the App</h2>
      <p className="mb-6">Get CHAMINDU MD OFFICIAL for your device.</p>
      <div className="space-x-4">
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Android</a>
        <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">iOS</a>
      </div>
    </div>
  );
}
