"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "../../data/music_courses.json";

function cardDemo() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black py-36 px-6">
      <div className="text-center max-w-6xl mx-auto mb-20 space-y-5">

        <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight">
          Discover Your
          <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {" "}
            Musical Potential
          </span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
          Browse our expertly crafted music courses designed to help you master
          instruments, production, vocals, and more.
        </p>

        <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm">
          Total Courses : {courseData.courses.length}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {courseData.courses.map((course) => (
          <CardContainer className="inter-var" key={course.id}>
            <CardBody
              className="
            relative group/card
            bg-white/5
            border border-white/10
            backdrop-blur-sm
            hover:border-cyan-400/40
            hover:shadow-2xl
            hover:shadow-cyan-500/10
            transition-all duration-500
            rounded-3xl
            overflow-hidden
            w-87.5
            h-auto
            p-5
          "
            >
              <CardItem translateZ="100" className="w-full">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="
                  h-60 w-full object-cover
                  transition-transform duration-500
                  group-hover/card:scale-105
                "
                  />
                </div>
              </CardItem>

              <div className="mt-6 space-y-4">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white"
                >
                  {course.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {course.description}
                </CardItem>
              </div>

              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="
                px-5 py-2 rounded-full
                border border-white/20
                text-white text-sm
                hover:bg-white/10
                transition
              "
                >
                  Explore →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="
                px-5 py-2 rounded-full
                bg-linear-to-r from-cyan-500 to-emerald-500
                text-white text-sm font-semibold
                hover:scale-105
                transition
              "
                >
                  Enroll Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default cardDemo;
