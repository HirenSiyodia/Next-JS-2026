import React from 'react'
import courseData from "../../data/music_courses.json"
import Link from 'next/link'

function FeaturedCourses() {
    courseData.courses.filter(course => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-white mb-4'>Featured Courses</h2>
        <p className='text-gray-400 mb-8'>Explore our most popular music courses</p>
      </div>
      <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        2
      </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href="/courses" className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>View All Courses</Link> 
      </div>
    </div>
  )
}

export default FeaturedCourses
