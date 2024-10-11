"use client";
import React, { useState } from 'react';
import AnimatedSection from './animated-section';
import OptimizedImage from './optimized-image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials array (you can replace this with real data)
  const testimonials = [
    {
      name: "Robert",
      title: "CTO, Robert Consultency",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum.",
      img: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Jeny Doe",
      title: "CEO, Jeny Consultency",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum.",
      img: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Ema Watson",
      title: "Marketing Manager at Stech",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum.",
      img: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ];

  const testimonialsLength = testimonials.length;

  // Handle moving the slider left or right
  const goLeft = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsLength - 1 : currentIndex - 1);
  };

  const goRight = () => {
    setCurrentIndex(currentIndex === testimonialsLength - 1 ? 0 : currentIndex + 1);
  };

  return (
    <AnimatedSection delay={0.2}>
      <div className="container mx-auto px-6 pt-28">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
              What our clients are saying
            </h1>

            <div className="mx-auto mt-6 flex">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>
          </div>

          <div className="mt-8 flex justify-between md:mt-0">
            <button
              title="left arrow"
              onClick={goLeft}
              className="mx-3 rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              title="right arrow"
              onClick={goRight}
              className="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <section className="relative mt-8 overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 p-8">
                <div className={`rounded-lg border p-8 dark:border-gray-700 ${index === currentIndex ? 'bg-blue-500 dark:bg-blue-600 text-white' : 'bg-white text-gray-800'}`}>
                  <p className="leading-loose">{testimonial.text}</p>
                  <div className="-mx-2 mt-8 flex items-center">
                    <OptimizedImage
                      src={testimonial.img}
                      alt=""
                      className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4"
                      width={56}
                      height={56}
                    />
                    <div className="mx-2">
                      <h1 className="font-semibold">{testimonial.name}</h1>
                      <span className="text-sm">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
