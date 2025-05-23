import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='lg:w-full w-screen font-bold fixed top-0 left-0 bg-slate-900 flex flex-shrink flex-row justify-evenly  h-24 items-center '>
    <h1 className= 'text-white   decoration-wavy hover:underline'><Link href="/"> HOME</Link> </h1>
    <h1 className='text-white   decoration-wavy hover:underline'> <Link href="/about"> ABOUT</Link> </h1>
    <h1 className='text-white   decoration-wavy hover:underline'><Link href="/contact"> CONTACT</Link></h1>
    <h1 className='text-white   decoration-wavy hover:underline'><Link href="/projects"> PROJECTS</Link></h1>
    </div>
  )
}

export default Header
