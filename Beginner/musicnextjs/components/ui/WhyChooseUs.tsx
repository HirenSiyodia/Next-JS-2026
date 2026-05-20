"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="w-full h-full object-cover"
          alt="Collaborative Editing"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          className="w-full h-full object-cover"
          alt="Kanban Board"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71"
          className="w-full h-full object-cover"
          alt="Version Control"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
          className="w-full h-full object-cover"
          alt="Analytics Dashboard"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full bg-gray-900 py-20 px-6">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-cyan-400">
          Why Choose Us
        </h2>

        <p className="text-3xl sm:text-5xl font-bold text-white leading-tight">
          Learn Smarter with
          <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {" "}
            Real-Time Collaboration
          </span>
        </p>

        <p className="text-gray-400 text-sm sm:text-lg">
          Experience seamless learning with live updates, interactive tools, and
          expert-driven content designed for modern creators.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default WhyChooseUs;
