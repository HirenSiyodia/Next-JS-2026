import React from "react";
import { Spotlight } from "../ui/Spotlight";
import Link from "next/link";
import { Button } from "../ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-190 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Music is a universal language that connects people through emotions,
          rhythm, and melody. It has the power to relax the mind, inspire
          creativity, and bring happiness in every moment of life. From
          classical tunes to modern beats, music reflects culture, feelings, and
          personal expression. Whether listening during travel, studying, or
          celebrations, music creates memories and adds energy to everyday
          experiences.
        </p>
        <div className="mt-8">
          <Link href={"/course"}>
            <Button
              borderRadius="1.75rem"
              className="bg-[#1f1f1f] text-white border-none hover:bg-[#2a2a2a] transition-all duration-300"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
