'use client'

import courseData from "../../data/music_courses.json"
import Link from 'next/link'
import { BackgroundBeams } from "../ui/background-beams";

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

function FeaturedCourses() {

  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  )

  return (

    <div className='py-16 bg-gray-900 min-h-screen'>
      <div className='text-center mb-14'>

        <div className="text-center space-y-4">
  <h2 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-cyan-400">
    Featured Courses
  </h2>

  <p className="text-3xl sm:text-5xl font-bold leading-tight text-white">
    Explore Our
    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {" "}Most Popular Music Courses
    </span>
  </p>

  <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
    Master instruments, vocals, production, and music theory with expertly crafted lessons.
  </p>
</div>

      </div>

      <div className='max-w-7xl mx-auto px-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {featuredCourses.map((course: Course) => (

            <div
              key={course.id}
              className='relative overflow-hidden rounded-2xl bg-gray-800 min-h-95 flex items-center justify-center p-6 shadow-xl border border-gray-700'
            >

              <BackgroundBeams />

              <div className='absolute inset-0 bg-[radial-gradient(#c084fc_20%,transparent_70%)] opacity-20' />

              <div className='relative z-10 flex flex-col items-center justify-center text-center text-white'>

                <h3 className='text-2xl font-bold mb-4'>
                  {course.title}
                </h3>

                <p className='text-gray-300 mb-8 leading-relaxed'>
                  {course.description}
                </p>

                <Link
                  href={`/course`}
                  className='inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 font-semibold shadow-lg'
                >
                  Learn More
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className='mt-16 text-center'>

        <Link
          href="/course"
          className='inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 shadow-lg'
        >
          View All Courses
        </Link>

      </div>

    </div>

  )
}

export default FeaturedCourses