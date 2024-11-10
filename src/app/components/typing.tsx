
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
      strings: ['<div class=" type-text text-red-500 text-5xl ml-3 mt-8">Hello, My name Is Anas Maududi </div> <div class=" type-text text-orange-400 text-3xl ml-5 mt-10">A full Stack Developer sooner</div> <h3 class=" text-3xl text-teal-300"> I am an <span class="font-bold">emerging  futuristic talent </span>, diving into the era of technology since two years, Also studying O-levels with A grade accomplishments <span class="text-4xl   text-red-500">Think Again !! as I could Make your company <span class="font-bold"> Giganticaly technology Controller ...!</span> </h3>'],
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
    <div className="text-5xl font-bold text-white">
      {/* Reference element where Typed.js will inject the typing text */}
      <span ref={el}  className='typing-border animate-border-rotate'/>
    </div>
  );
};

export default AnimatedText;
