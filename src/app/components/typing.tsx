
"use client";






import { Html } from 'next/document';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AnimatedText: React.FC = () => {
  // Reference for the DOM element that will contain the animated text
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Initialize Typed.js on mount
    const typed = new Typed(el.current!, {
      strings: ['<div class=" type-text text-red-500 md:text-5xl sm:text-4xl ml-3 md:mt-8 sm:mt-3 ">Hello, My name Is Anas Maududi </div> <div class=" type-text text-orange-400  sm:text-sm md:text-3xl md:ml-5 md:mt-10 sm:ml-2 sm:mt-5">A full Stack Developer sooner</div> <h3 class=" md:text-3xl sm:text-sm text-teal-300"> I am an <span class="font-bold">emerging  futuristic talent </span>, diving into the era of technology since two years, Also studying O-levels with A grade accomplishments <span class="md:text-4xl sm:text-xl   text-red-500">Think Again !! as I could Make your company <span class="font-bold"> Giganticaly technology Controller ...!</span> </h3>'],
      typeSpeed: 30,
      backSpeed: 30,
      contentType:'html',
      onBegin: () => {
        if (el.current) {
          el.current.style.transition = 'border-color 1s ease-in-out, transform 1s ease-in-out';
          el.current.style.borderColor = 'red'; // Initial border color when typing starts
          el.current.style.transform = 'rotate(0deg)'; // Start with no rotation
        }
      },
    });

    // Clean up the animation on unmount
    return () => {
      typed.stop;
    };
  },[]);

  return (
    <div className=" sm:text-2xl md:text-5xl font-bold text-white">
      {/* Reference element where Typed.js will inject the typing text */}
      <span ref={el}  className='typing-border animate-border-rotate'/>
    </div>
  );
};

export default AnimatedText;
