"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me perfectly.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production.",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

function TestimonialCards() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-20">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[30px_30px]",
        "bg-[linear-gradient(to_right,#525252_1px,transparent_1px),linear-gradient(to_bottom,#525252_1px,transparent_1px)]",
        )}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937_10%,#000000_70%)] opacity-90" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center">
        <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-sm">
          Student Testimonials
        </span>

        <h2 className="max-w-4xl text-center text-4xl font-bold tracking-tight text-white md:text-6xl">
          Hear Our Harmony:
          <span className="block bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
            Voices of Success
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-400">
          Discover how students transformed their musical journey with our
          expert-led courses and immersive learning experience.
        </p>

        <div className="mt-16 w-full">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
