"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCoursesOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-4 sm:top-10 inset-x-0 w-[calc(100%-2rem)] max-w-2xl mx-auto z-50",
        className
      )}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-center gap-6 rounded-full bg-[#222222] px-8 py-5 text-white shadow-xl">
        <Link
          href="/"
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          Home
        </Link>

        <div className="relative group">
          <button className="cursor-pointer transition-opacity hover:opacity-70">
            Our Courses
          </button>

          {/* Courses Dropdown */}
          <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-5 group-hover:block">
            <div className="w-56 rounded-2xl border border-white/20 bg-black p-5 shadow-xl">
              <div className="flex flex-col space-y-4 text-sm">
                <Link
                  href="/course"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  All Courses
                </Link>

                <Link
                  href="/#"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  Basic Music Theory
                </Link>

                <Link
                  href="/#"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  Advanced Composition
                </Link>

                <Link
                  href="/#"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  SongWriting
                </Link>

                <Link
                  href="/#"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  Music Production
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="cursor-pointer transition-opacity hover:opacity-70"
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden rounded-2xl bg-[#222222] text-white shadow-xl">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="font-semibold"
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 px-5 py-4">
            <div className="flex flex-col gap-4">
              {/* Courses */}
              <div>
                <button
                  type="button"
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="flex w-full items-center justify-between text-left text-sm"
                >
                  <span>Our Courses</span>

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      coursesOpen && "rotate-180"
                    )}
                  />
                </button>

                {coursesOpen && (
                  <div className="mt-4 ml-3 flex flex-col gap-3 border-l border-white/20 pl-4 text-sm">
                    <Link
                      href="/course"
                      onClick={closeMobileMenu}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      All Courses
                    </Link>

                    <Link
                      href="/#"
                      onClick={closeMobileMenu}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      Basic Music Theory
                    </Link>

                    <Link
                      href="/#"
                      onClick={closeMobileMenu}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      Advanced Composition
                    </Link>

                    <Link
                      href="/#"
                      onClick={closeMobileMenu}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      SongWriting
                    </Link>

                    <Link
                      href="/#"
                      onClick={closeMobileMenu}
                      className="text-neutral-300 transition-colors hover:text-white"
                    >
                      Music Production
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
