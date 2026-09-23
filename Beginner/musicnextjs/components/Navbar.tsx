"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActive(null);
  };

  return (
    <div
      className={cn(
        "fixed top-5 md:top-10 inset-x-0 z-50 px-4 md:px-0",
        className
      )}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex justify-center">
        <div className="w-full max-w-2xl">
          <Menu setActive={setActive}>
            <Link href="/" onClick={() => setActive(null)}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              />
            </Link>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Our Courses"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/course">
                  All Courses
                </HoveredLink>

                <HoveredLink href="/#">
                  Basic Music Theory
                </HoveredLink>

                <HoveredLink href="/#">
                  Advanced Composition
                </HoveredLink>

                <HoveredLink href="/#">
                  SongWriting
                </HoveredLink>

                <HoveredLink href="/#">
                  Music Production
                </HoveredLink>
              </div>
            </MenuItem>

            <Link href="/contact" onClick={() => setActive(null)}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact Us"
              />
            </Link>
          </Menu>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col items-center">
        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-white shadow-xl"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />

            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />

            <span
              className={cn(
                "block h-0.5 w-6 bg-white transition-all duration-300",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mt-3 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-2xl bg-[#222222] text-white shadow-xl">
            <div className="flex flex-col px-6 py-5">

              {/* Home */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="py-3 text-sm hover:text-gray-400 transition-colors"
              >
                Home
              </Link>

              {/* Courses */}
              <button
                type="button"
                onClick={() =>
                  setActive(
                    active === "Our Courses" ? null : "Our Courses"
                  )
                }
                className="flex w-full items-center justify-between py-3 text-left text-sm"
              >
                <span>Our Courses</span>

                <span
                  className={cn(
                    "transition-transform duration-300",
                    active === "Our Courses" && "rotate-180"
                  )}
                >
                  ↓
                </span>
              </button>

              {/* Courses Dropdown */}
              {active === "Our Courses" && (
                <div className="flex flex-col space-y-4 border-l border-white/20 pl-4 pb-3">
                  <HoveredLink
                    href="/course"
                    onClick={closeMobileMenu}
                  >
                    All Courses
                  </HoveredLink>

                  <HoveredLink
                    href="/#"
                    onClick={closeMobileMenu}
                  >
                    Basic Music Theory
                  </HoveredLink>

                  <HoveredLink
                    href="/#"
                    onClick={closeMobileMenu}
                  >
                    Advanced Composition
                  </HoveredLink>

                  <HoveredLink
                    href="/#"
                    onClick={closeMobileMenu}
                  >
                    SongWriting
                  </HoveredLink>

                  <HoveredLink
                    href="/#"
                    onClick={closeMobileMenu}
                  >
                    Music Production
                  </HoveredLink>
                </div>
              )}

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="py-3 text-sm hover:text-gray-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;