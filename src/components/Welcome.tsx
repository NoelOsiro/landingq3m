import React from 'react'
import Image from 'next/image'
import AnimatedSection from './animated-section'

// Picsum provides a URL that serves random images every time
const randomImageUrl = 'https://picsum.photos/800/600'

const Welcome = () => {
  return (
    <AnimatedSection>
      <div className='flex lg:h-[600px]'>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Welcome to <span className="text-indigo-600">Q3M Wanda Solutions</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Empowering businesses with innovative solutions for the challenges of tomorrow.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div
          className="hidden lg:block lg:w-1/2 relative h-full"
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
          <Image
            src={randomImageUrl}
            alt="Random Image"
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Welcome
