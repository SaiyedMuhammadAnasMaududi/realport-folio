import React from 'react';
import Header from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (
    <div className="w-full bg-black min-h-screen">
      <Header />
      <div className="bg-black mt-[94px] h-fit px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl sm:text-4xl text-white flex justify-center text-cursive text-center">
          PROJECTS :
        </h1>

        <div className="grid gap-20 sm:gap-32 lg:gap-40 py-8 sm:py-12 lg:py-16 grid-cols-1 xl:grid-cols-2">
          {/* First Project */}
          <div className="bg-violet-600 rounded-[30px] w-full flex flex-col items-center">
            <div className="flex justify-center mt-10">
              <Image
                src="/images/portfolio.png"
                alt="Porfolio Project"
                width={400}
                height={400}
                className="rounded-full border-amber-200 border-4"
              />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-cursive p-5 mx-3 mt-10 border-4 border-emerald-950 rounded-[10px] text-white">
              <li>
                Hey viewer, just want to let u know about some of the feathers in my cap
              </li>
              <br />
              <li>
                This is the thumbnail of my{' '}
                <span className="font-bold">
                  "Second Project" that is a "Responsive Portfolio"
                </span>
              </li>
              <br />
              <li>
                As far as its development is concerned; it took me a tireless effort of
                continuous 72 hours though it was a bit challenging but I coped up really
                well with all these challenges so far.
              </li>
              <br />
              <li>
                I have worked really delicately on each n every intricate to significant
                detail of this project to enthuse my viewers.
              </li>
              <br />
              <li>
                I hope that you will also be mesmerized by it!!{' '}
                <span className="font-semibold">
                  To have a sight over it Click the button below to go.
                </span>
              </li>
              <div className="flex justify-center mt-4">
                <button className="w-28 h-12 rounded-[10px] bg-amber-800 hover:bg-violet-950 text-white">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="bg-neutral-500 rounded-[30px] w-full flex flex-col items-center">
            <div className="flex justify-center mt-10">
              <Image
                src="/images/resumemaker.png"
                alt="Resume Project"
                width={400}
                height={400}
                className="rounded-full border-amber-200 border-4"
              />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl text-cursive p-5 mx-3 mt-10 border-4 border-emerald-950 rounded-[10px] text-white">
              <li>
                Once again, here to witness about some of the other feathers in my cap
              </li>
              <br />
              <li>
                This is the thumbnail of my{' '}
                <span className="font-bold">
                  "First Project" that is a "Resume Maker"
                </span>
              </li>
              <br />
              <li>
                As far as its development is concerned; it took me a tireless effort of
                continuous 72 hours though it was a bit challenging but I coped up really
                well with all these challenges so far.
              </li>
              <br />
              <li>
                I have worked really delicately on each n every intricate to significant
                details of this project to enthuse my viewers.
              </li>
              <br />
              <li>
                I hope that you will also be mesmerized by it!!{' '}
                <span className="font-semibold">
                  To have a sight over it Click the button below to go.
                </span>
              </li>
              <br />
              <div className="flex justify-center mt-4">
                <Link href="https://milestone-1-bajx5qzpg-saiyedmuhammadanasmaududis-projects.vercel.app/">
                  <button className="w-28 h-12 rounded-[10px] bg-amber-800 hover:bg-neutral-700 text-white">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
