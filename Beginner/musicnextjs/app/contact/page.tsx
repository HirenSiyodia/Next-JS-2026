'use client';
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();

  console.log({
    name,
    email,
  });
  setName('');
  setEmail('');
  alert('Thank you for contacting us! We will get back to you soon.');
};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
<BackgroundBeams className="pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-300 mt-4">
            Have questions or want to learn more? Get in touch with us!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="relative z-10 max-w-2xl mx-auto mt-12 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            placeholder="Your Email"
          ></input>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
