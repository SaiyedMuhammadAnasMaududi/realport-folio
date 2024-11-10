import React from 'react';
import Header from '../components/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import styles from '../YourComponent.module.css';

function Contact() {
  return (
    <div>
      <Header />
      <section className="bg-black mt-[85px] flex flex-col justify-evenly h-min-screen">
        
       
        <div className="mt-7 mx-10 p-14 text-cursive text-4xl text-orange-300 border-[20px] rounded-[30px] border-amber-400">
          Greetings!!! Viewer <br />
          It would be a great pleasure if my CV seems to be an attractive one to you. 
          So, if you want to Hire me <br />
          Click the button below
        </div>
       
        <div className="flex justify-center items-center mt-5">
          <button className="w-48 h-24 bg-orange-500 resumeradius1 text-cursive">
            <a href="mailto:tafs4920@gmail.com"> HIRE</a>
          </button>
        </div>
        
        <div className="text-white text-center mt-5 text-xl">
          To further contact, you could follow the links below.
        </div>

        
        <div className="flex justify-evenly mt-10">
          
     
          <a href="https://github.com/SaiyedMuhammadAnasMaududi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={200} color="#333" />
            <div className={`${styles.hoverDiv} text-white text-cursive w-44 ml-5 bg-black p-4 border-[5px] border-orange-600 rounded-[30%]`}>
              <h3>Click  to be navigated to the GitHub account</h3>
            </div>
          </a>

         
          <a href="https://www.instagram.com/saiyedmuhammadanas/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={200} color="#E4405F" />
            <div className={`${styles.hoverDiv} text-white text-cursive w-44 ml-5 bg-black p-4 border-[5px] border-orange-600 rounded-[30%]`}>
              <h3>Click to be navigated to the Instagram account</h3>
            </div>
          </a>

          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={200} color="#0A66C2" />
            <div className={`${styles.hoverDiv} text-white text-cursive w-44 ml-5 bg-black p-4 border-[5px] border-orange-600 rounded-[30%]`}>
              <h3>Click to be navigated to the LinkedIn account</h3>
            </div>
          </a>

          
          <a href="https://web.facebook.com/profile.php?id=61556980776728" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={200} color="#1877F2" />
            <div className={`${styles.hoverDiv} text-white text-cursive w-44 ml-5 bg-black p-4 border-[5px] border-orange-600 rounded-[30%]`}>
              <h3>Click to be navigated to the Facebook account</h3>
            </div>
          </a>

        </div>
      </section>
    </div>
  );
}

export default Contact;
