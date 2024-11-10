"use client"
import Resume from '../components/resume';
import React from 'react'
import Header from '../components/Header'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
function about() {
  const resumeRef = useRef<HTMLDivElement | null>(null); // Specify the ref can be null

  // Function to generate PDF
  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return; 
  
    const element = resumeRef.current;
  
   
    const canvas = await html2canvas(element, {
      backgroundColor: null, 
      scale: 2, 
      useCORS: true, 
    });
  
    const data = canvas.toDataURL('image/png');
  
    const pdf = new jsPDF('p', 'mm', 'a4');
  
   
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();  
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width; 
    
    const contentHeight = canvas.height;
    const contentWidth = canvas.width;
  
    
    const scale = pdfWidth / contentWidth;
    
  
    const adjustedHeight = contentHeight * scale;
  
    
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, adjustedHeight);
  
  
    pdf.save('Resume.pdf');
  }
  return (
    <div className='min-h-screen bg-black'>
        <Header></Header>
        
        <section className='mt-[80px]'>
<div className="background w-full min-w-24 min-h-fit " >
  <h1 className="text-5xl font-bold text-white cursive flex justify-center items-center pt-3   underline"> ABOUT ME :</h1>
  <div ref={resumeRef} className=' flex justify-center items-center flex-grow-2'>
<Resume ></Resume>
</div>
<div className='flex justify-center items-center '>
<div className="w-48 h-24  bg-cyan-800 border-8 flex justify-center items-center   resumeradius relative  mt-5">
  <button className="bg-cyan-800 h-16 w-30 resumeradius1 text-gray-50  text-1 m-5" onClick={handleDownloadPDF}> DOWNLOAD CV</button> 
  </div>
</div>
</div>
      </section>
    </div>
  )
}

export default about
