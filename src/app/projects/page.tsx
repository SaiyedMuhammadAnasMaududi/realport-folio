import React from 'react';
import  Header from '@/app/components/Header'
import Image from 'next/image'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full  bg-black h-screen  '>
<Header></Header>
<div className="bg-black mt-[94px] h-fit  ">
<h1 className='text-4xl text-white flex justify-center text-cursive'> 
  PROJECTS :</h1>
  <div  className='grid project-grid gap-40 p-4'>
  <div className='bg-violet-600 h-[1150px] rounded-[30px]'>
    <div className='flex justify-center  mt-20'><Image
  src="/images/portfolio.png"
  alt="Porfolio Project"
  width={500}
  height={500} className='rounded-[50%] border-amber-200 border-4' />

  </div>
  <div className='text-2xl text-cursive p-5 mx-5 mt-10 border-4 border-emerald-950 rounded-[10px]'>
    <li>Hey viewer,just want to let u know about some of the feathers in my cap </li>
    <br />
    <li>This is the thumbnail of my <span className='font-bold'>"Second Project" that is a "Responsive Portfolio"</span> </li><br />
    <li>As far as its development is concerned ;it took me a tireless effort of continuous 72 hours though it was a bit challenging but I coped up really well with all these challenges so far.</li> 
    <br/> 
    <li>I have worked really delicately on each n every intricate to significant details of this project to enthuse my viewers.</li>
    <br /> 
    <li>I hope that you will also be mesmerized by it!! <span className='font-semibold'>To have a sight over it Click the button below to go.</span></li> 
    <div className='flex justify-center'><button className='w-28 h-14 rounded-[10px] bg-amber-800 hover:bg-violet-950'>Follow</button></div>
    
    </div>
   </div> {/*fist prohect done */}
  <div className='bg-neutral-500 h-[1150px] rounded-[30px]'> 
  <div className='flex justify-center  mt-20 '><Image
  src="/images/resumemaker.png"
  alt="Resume Project"
  width={500}
  height={500} 
  className='rounded-[50%]  border-amber-200 border-4' />
  </div>
  <div className='text-2xl text-cursive p-5 mx-5 mt-10 border-4 border-emerald-950 rounded-[10px]'>
    <li>Once again,here to witness about some of the other feathers in my cap </li>
    <br />
    <li>This is the thumbnail of my <span className='font-bold'>"First Project" that is a "Resume Maker"</span> </li>
    <br />
    <li> As far as its development is concerned ;it took me a tireless effort of continuous 72 hours though it was a bit challenging but i coped up really well with all these challenges so far
      </li> 
      <br/> 
      <li>I have worked really delicately on each n every intricate to significant details of this project to enthuse my viewers.
        </li>
        <br /> 
        <li>I hope that you will also be mesmerized by it!! <span className='font-semibold'>To have a sight over it Click the button below to go.</span>
        </li> <br />
    <div className='flex justify-center'><Link href="https://milestone-1-bajx5qzpg-saiyedmuhammadanasmaududis-projects.vercel.app/"><button className='w-28 h-14 rounded-[10px] bg-amber-800 hover:bg-neutral-700'  >Follow</button></Link></div>
    
    </div>
  </div>
  </div>
  

</div>
    </div>
  )
}

export default page
