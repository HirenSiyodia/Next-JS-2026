'use client';
import Link from "next/link";
import { HoverEffect } from "../ui/card-hover-effect";

import React from "react";

function UpcomingWebinars() {
  
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];


  return (
    <div className="p-12 mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div className="max-w-7xl- mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="text-center space-y-4">
            <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-purple-400">
              Featured Webinars
            </h2>

            <p className="text-3xl sm:text-5xl font-bold leading-tight text-white">
              Enhance Your
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Musical Journey
              </span>
            </p>

            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
              Learn from industry experts, discover new techniques, and take
              your music skills to the next level.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <HoverEffect
  items={featuredWebinars.map((webinar, idx) => ({
    id: idx,
    title: webinar.title,
    description: webinar.description,
    link: "/",
  }))}
/>
        </div>
        <div className="text-center mt-10">
            <Link href={'/'} className='inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 shadow-lg'>
                View All Webinars
            </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
