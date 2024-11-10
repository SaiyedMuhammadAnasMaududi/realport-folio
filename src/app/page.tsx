
"use client"
import Header from "./components/Header";
import Image from 'next/image';
import AnimatedText from "./components/typing";
export default function Home() {
 
  
  return (
    <div>
    <div className="flex flex-col pt-6 h-screen ">
      <Header></Header>

    <div  className="bg-cover flex-grow grid-container grid-item  justify-center items-center  gap-3"
    style={{ backgroundImage: "url('/images/background2.jpg')" }}>
      <div className=" flex flex-col w-auto h-20 mr-4 pl-11 pt-28 justify-center items-center relative bottom-9">
     <AnimatedText ></AnimatedText>
       </div>
     <div  className="    flex justify-center  items-center   ">
        
        <Image
          src="/images/anas.jpg" 
          alt="Descriptive Alt Text"
          width={300}
          height={100}
           // Use `fill` to make the image cover the entire container
          // "// Makes the image cover the container (scales and crops if necessary)
          className=" shadow-lg  radius " // Tailwind classes for rounded corners and shadow
        /></div>
    </div>
    
    </div>
    
    </div>
      )}

